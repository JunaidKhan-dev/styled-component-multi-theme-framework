import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  *,*::before, *::after{
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-size: 16px;
  }

  h1 {
    margin: 0;
    margin-bottom: 1rem;
    line-height: 1.1;
    font-size: 2.2rem;
  }

  ul[class]{
    list-style: none;
  }
`

export default GlobalStyle
