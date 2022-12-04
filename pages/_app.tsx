import type { AppProps } from 'next/app'
import { ThemeProvider } from "styled-components"
import { theme } from '../theme'
import '../theme/app.css'

export default function App({ Component, pageProps }: AppProps) {
  return <ThemeProvider theme={theme}><Component {...pageProps} /></ThemeProvider>
}
