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

  h1, h2, h3, p {
    margin: 0;
  }


  h1 {
    line-height: 1.1;
    font-size: 2.2rem;
  }

   h2 {
    line-height: 1.1;
    font-size: 1.8rem;
   }

  ul[class]{
    list-style: none;
  }
`

export default GlobalStyle
