import React, { Component, Ref } from 'react'
import queryString from 'query-string'
import { ChatRoomMessage } from './styled'

interface IMessageProps {
  text: string
  user: string
  date: string
}

class Message extends Component<IMessageProps> {
  render() {
    const parsed = queryString.parse(window.location.search)
    const { text, user, date } = this.props

    let isSendByAuthor = false

    if (user === parsed.name) {
      isSendByAuthor = true
    }

    return (
      <ChatRoomMessage className={`${isSendByAuthor && 'mine'}`}>
        <div className="message-row">
          <div className="message-author">{user}</div>
          <div className="message-time">{date}</div>
        </div>
        <div className="message-text">{text}</div>
      </ChatRoomMessage>
    )
  }
}

export default Message
