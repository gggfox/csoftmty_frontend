import {CSSReset, ChakraProvider } from '@chakra-ui/react' 
import type { AppProps } from 'next/app'
import './styles.css'
import theme from '../theme'
import { UserContext } from '../components/UserContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
  < ChakraProvider theme={theme}>
    <Component {...pageProps}/>
    <CSSReset/>
  </ChakraProvider >
  )
}

export default MyApp
