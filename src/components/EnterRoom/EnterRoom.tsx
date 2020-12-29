import React, { Component } from 'react'
import Button from '../../shared/Button'
import Input from '../../shared/Input'

import { EnterRoomWrapper, EnterForm } from './styled'

class EnterRoom extends Component {
  render() {
    return (
      <EnterRoomWrapper>
        <p className="haha">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem,
          neque. Nisi expedita possimus non recusandae voluptate quasi dolorem
          eaque architecto? Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Voluptatem, neque. Nisi expedita possimus non recusandae
          voluptate quasi dolorem eaque architecto? Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Voluptatem, neque. Nisi expedita
          possimus non recusandae voluptate quasi dolorem eaque architecto?
        </p>

        <EnterForm>
          <div className="form-group">
            <label htmlFor=""></label>
            <Input />
          </div>
          <div className="form-group">
            <label htmlFor=""></label>
            <Input />
          </div>
          <Button submit>123</Button>
          <Button>123</Button>
        </EnterForm>
      </EnterRoomWrapper>
    )
  }
}

export default EnterRoom
