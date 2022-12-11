import type { AppProps } from 'next/app'
import { ThemeProvider } from "styled-components"
import { theme } from '../config/theme'
import '../config/app.css'

export default function App({ Component, pageProps }: AppProps) {
  return <ThemeProvider theme={theme}><Component {...pageProps} /></ThemeProvider>
}
