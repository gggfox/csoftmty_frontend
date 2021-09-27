import { Flex } from '@chakra-ui/react'
import type { NextPage } from 'next'
import React from 'react'
import { NavBar } from '../components/NavBar'
import styles from '../styles/Home.module.css'

const Login: NextPage = () => {
  return (
    <Flex bg="white_dark" h='100vh' flexDirection="column">
      <NavBar></NavBar>
      
          
    </Flex>
  )
}

export default Login