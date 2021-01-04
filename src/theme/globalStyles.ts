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

    background: #83a95c;
  }

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  ::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    outline: 1px solid slategrey;
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


  h4 {
    margin: 0;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  li {
    list-style: none;
  }
`
export default GlobalStyles
