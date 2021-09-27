import {CSSReset, ChakraProvider } from '@chakra-ui/react' 
import type { AppProps } from 'next/app'
import theme from '../theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
  < ChakraProvider theme={theme}>
    <Component {...pageProps} />
    <CSSReset/>
  </ChakraProvider >
  )
}

export default MyApp
