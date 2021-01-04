// Libs
import React, { ChangeEvent, Component, FormEvent, MouseEvent } from 'react'
import axios from '../../axios'
import roomStore from '../../stores/roomStore'
import queryString from 'query-string'

// Components
import Button from '../../shared/Button'
import Input from '../../shared/Input'

// Styles
import { EnterRoomWrapper, EnterForm, EnterRoomFormBlock } from './styled'
import { observer } from 'mobx-react'
import { toJS } from 'mobx'
import { Link, withRouter } from 'react-router-dom'
import { SocketContext } from '../../core/socket'

interface IEnterRoomState {
  name: string
  room: string
}

const EnterRoom = observer(
  withRouter(
    class extends Component<any, IEnterRoomState> {
      static contextType = SocketContext

      state = {
        name: '',
        room: '',
      }

      socket = this.context

      setName = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
          name: e.target.value,
        })
      }

      setRoom = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
          room: e.target.value,
        })
      }

      submitHandler = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const parsed = queryString.parse(window.location.search)

        const { name, room } = this.state

        if (!name || !room) {
          return
        }

        try {
          const response = await axios({
            method: 'POST',
            data: {
              name,
              room,
            },
            url: '/join',
          })
        } catch (error) {
          console.log(error)
        }

        this.socket.emit('joinRoom', {
          name,
          room,
        })

        this.props.history.push(`/chat?name=${name}&room=${room}`)
      }

      render() {
        const { name, room } = this.state

        return (
          <EnterRoomWrapper>
            <EnterRoomFormBlock>
              <EnterForm onSubmit={this.submitHandler}>
                <div className="form-group">
                  <label htmlFor="name">Ваше имя</label>
                  <Input
                    id="name"
                    onChange={this.setName}
                    value={name}
                    type="text"
                    placeholder="Имя"
                    name="name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="room">Название комнаты</label>
                  <Input
                    id="room"
                    onChange={this.setRoom}
                    value={room}
                    type="text"
                    placeholder="Комната"
                    name="room"
                  />
                </div>
                <div className="btn-wrapper">
                  <Button className="enter-room-btn">Войти в комнату</Button>
                </div>
              </EnterForm>
            </EnterRoomFormBlock>
          </EnterRoomWrapper>
        )
      }
    }
  )
)

export default EnterRoom
