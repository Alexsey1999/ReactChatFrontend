import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

import GlobalStyles from './theme/globalStyles'
import { ThemeProvider } from 'styled-components'
import Theme from './theme/theme'

import './assets/scss/fonts.scss'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
