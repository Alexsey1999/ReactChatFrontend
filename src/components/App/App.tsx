import { toJS } from 'mobx'
import { observer } from 'mobx-react'
import queryString from 'query-string'

import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import roomStore from '../../stores/roomStore'
import ChatRoom from '../ChatRoom'

import EnterRoom from '../EnterRoom'

const App = observer(
  class extends Component {
    render() {
      return (
        <div className="app">
          <Route path="/" exact>
            <EnterRoom />
          </Route>
          <Route path="/chat">
            <ChatRoom />
          </Route>
        </div>
      )
    }
  }
)

export default App
