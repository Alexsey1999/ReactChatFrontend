import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  &::after, &::before, * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: Roboto, Arial, Ubuntu, sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: 0.3px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  .container {
    max-width: 1200px;
    margin: 0px auto;
    padding: 0 15px;
  }
`
export default GlobalStyles
