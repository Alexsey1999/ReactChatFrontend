import React, { ChangeEvent, Component, FormEvent, MouseEvent } from 'react'
import Button from '../../shared/Button'
import queryString from 'query-string'
import roomStore from '../../stores/roomStore'

import {
  ChatRoomHeader,
  ChatRoomHeaderRow,
  ChatRoomH4,
  ChatRoomBlock,
  ChatRoomSidebar,
  ChatRoomName,
  ChatRoomH4Common,
  ChatRoomNameBlock,
  ChatRoomUsers,
  ChatRoomWindowChat,
  ChatRoomFooter,
  ChatRoomWrapper,
} from '../ChatRoom/styled'

import { SocketContext } from '../../core/socket'
import Message from '../Message'
import date from '../../utils/date'
import { reaction, toJS } from 'mobx'
import { observer } from 'mobx-react'
import axios from '../../axios'
import { withRouter } from 'react-router-dom'

interface IChatRoomState {
  messages: string[]
  messageText: string
  room: {}
}

const ChatRoom = observer(
  withRouter(
    class extends Component<any, IChatRoomState> {
      static contextType = SocketContext

      socket = this.context

      messageRef = React.createRef<HTMLDivElement>()

      state = {
        messages: [],
        messageText: '',
        room: {
          users: [],
          roomName: '',
        },
      }

      getMessages = async (room: string) => {
        const response = await axios({
          method: 'POST',
          data: {
            room,
          },
          url: '/messages',
        })

        if (response.data.length) {
          this.setState({
            messages: response.data,
          })
        }
      }

      getRoom = async (room: string) => {
        const response = await axios({
          method: 'POST',
          data: {
            room,
          },
          url: '/room',
        })

        if (response.data) {
          this.setState({
            room: response.data,
          })
          // roomStore.setRoom(response.data)
        }
      }

      componentDidMount() {
        if (this.messageRef.current) {
          this.messageRef.current.addEventListener(
            'DOMNodeInserted',
            (event: any) => {
              const { currentTarget: target } = event
              target!.scroll({ top: target.scrollHeight })
            }
          )
        }

        const parsed = queryString.parse(window.location.search)

        this.socket.emit('connection')

        this.socket.on('update', (payload: any) => {
          this.setState((prevState: any) => ({
            room: {
              ...prevState.room,
              users: [...prevState.room.users, payload],
            },
          }))
        })

        this.socket.on('removeUser', (payload: any) => {
          console.log(payload)

          this.setState((prevState: any) => ({
            room: {
              ...prevState.room,
              users: prevState.room.users.filter(
                (user: { username: string }) =>
                  user.username !== payload.username
              ),
            },
          }))
        })

        this.getMessages(parsed.room as string)
        this.getRoom(parsed.room as string)

        this.socket.emit('joinRoomOnReloadPage', { room: parsed.room })

        this.socket.on('message', (message: string) => {
          console.log(message)
          this.setState((prevVal) => ({
            messages: [...prevVal.messages, message],
          }))
        })
      }

      sendMessage = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const parsed = queryString.parse(window.location.search)

        const { messageText } = this.state

        if (!messageText) {
          return
        }

        this.socket.emit('chatMessage', {
          user: parsed.name,
          room: parsed.room,
          message: messageText,
        })

        try {
          axios({
            method: 'POST',
            data: {
              user: parsed.name,
              room: parsed.room,
              message: messageText,
            },
            url: '/sendmessage',
          })
        } catch (error) {
          console.log(error)
        }
      }

      setMessageText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        this.setState({
          messageText: e.target.value,
        })
      }

      leaveRoom = async () => {
        const parsed = queryString.parse(window.location.search)

        await axios({
          method: 'POST',
          data: {
            name: parsed.name,
            room: parsed.room,
          },
          url: '/removeuser',
        })

        this.socket.emit('disconnectUser', {
          name: parsed.name,
          room: parsed.room,
        })

        this.socket.disconnect()
        this.props.history.push(`/`)
      }

      render() {
        const { messages, room } = this.state

        return (
          <ChatRoomWrapper>
            <div className="chat-room-container">
              <ChatRoomBlock>
                <ChatRoomHeader>
                  <ChatRoomHeaderRow>
                    <ChatRoomH4>Онлайн чат</ChatRoomH4>
                    <Button onClick={this.leaveRoom} className="leave-room">
                      Выйти из комнаты
                    </Button>
                  </ChatRoomHeaderRow>
                </ChatRoomHeader>

                <div className="chat-room-content">
                  <ChatRoomSidebar>
                    <ChatRoomNameBlock>
                      <ChatRoomH4Common>Комната</ChatRoomH4Common>
                      <ChatRoomName>{room && room.roomName}</ChatRoomName>
                    </ChatRoomNameBlock>

                    <ChatRoomUsers className="chat-users">
                      <ChatRoomH4Common>Пользователи</ChatRoomH4Common>
                      <ul className="users-list">
                        {room &&
                          room.users.map((el: any, index: number) => (
                            <li key={el.username + index}>{el.username}</li>
                          ))}
                      </ul>
                    </ChatRoomUsers>
                  </ChatRoomSidebar>

                  <ChatRoomWindowChat ref={this.messageRef}>
                    <div className="chat-room-window-content">
                      {messages.length
                        ? messages.map((message: any, index: number) => (
                            <Message
                              key={message.message + index}
                              text={message.message}
                              user={message.user}
                              date={message.date}
                            />
                          ))
                        : null}
                    </div>
                  </ChatRoomWindowChat>
                </div>
                <ChatRoomFooter>
                  <form action="" onSubmit={this.sendMessage}>
                    <textarea
                      onChange={this.setMessageText}
                      name="message"
                    ></textarea>
                    <Button className="send-message" submit>
                      Отправить
                    </Button>
                  </form>
                </ChatRoomFooter>
              </ChatRoomBlock>
            </div>
          </ChatRoomWrapper>
        )
      }
    }
  )
)

export default ChatRoom
