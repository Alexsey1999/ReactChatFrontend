import React, { Component } from 'react'

import socketIoClient from 'socket.io-client'
import EnterRoom from '../EnterRoom'

class App extends Component {
  componentDidMount() {
    const io = socketIoClient('http://localhost:3001')
  }

  render() {
    return (
      <div className="app">
        <EnterRoom />
      </div>
    )
  }
}

export default App
