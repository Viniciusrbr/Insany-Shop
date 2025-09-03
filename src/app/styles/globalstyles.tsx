import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body {
    height: 100%;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    color: ${({ theme }) => theme.colors.black};
    background-color: ${({ theme }) => theme.colors.blue || '#F3F7FF'};
    scroll-behavior: smooth;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  input, button, textarea, select {
    font: inherit;
  }
  
  button {
    cursor: pointer;
  }

  #__next {
    height: 100%;
  }
`

export default GlobalStyle
