import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

import GlobalStyles from './theme/globalStyles'
import { ThemeProvider } from 'styled-components'
import Theme from './theme/theme'

import './assets/scss/fonts.scss'

import { BrowserRouter as Router } from 'react-router-dom'

import { SocketContext, socket } from './core/socket'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider theme={Theme}>
        <GlobalStyles />
        <SocketContext.Provider value={socket}>
          <App />
        </SocketContext.Provider>
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
