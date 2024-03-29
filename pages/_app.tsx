import type { AppProps } from "next/app"

import { ThemeProvider } from "styled-components"

import GlobalStyle from "../globalStyles/global/style"
import { theme } from "../globalStyles/themes"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
export default MyApp
