import { Button, Flex, Heading, Input, Link, Text, Img } from '@chakra-ui/react'
import type { NextPage } from 'next'
import React from 'react'
import logo from '../public/img/logo.png'
import { NavBar } from '../components/NavBar'
import styles from '../styles/Home.module.css'

const Login: NextPage = () => {
  return (
    <Flex bg="white_dark" h='100vh' flexDirection="column">
      <NavBar></NavBar>
      <Flex height="100vh" alignItems="center" justifyContent="center">
        <Flex direction="column" bg="#7B7B7B" p={12} rounded={6}>
          <Heading m={15} mb={6} color="white" as="b" marginBottom = "1px">Ingresar a cuenta</Heading>
          <Text fontWeight="semibold" color="white">Email</Text>
          <Input placeholder="mail@ejemplo.com" _placeholder={{"color":"white"}} variant="filled" mb={3} type="email" bg="#7B7B7B" 
          borderColor="white" border="4px" focusBorderColor="white" _hover={{"bg":"light_grey"}} textColor="white"/>
          <Text fontWeight="semibold" color="white">Contraseña</Text>
          <Input placeholder="********" _placeholder={{"color":"white"}} variant="filled" mb={6} type="password" bg="#7B7B7B" 
          borderColor="white" border="4px" focusBorderColor="white" _hover={{"bg":"light_grey"}} textColor="white"/>
          <Button colorScheme="orange" backgroundColor="orange" mb={6}>Ingresar a cuenta</Button>
          <Link color="white" align="center">Todavia no tengo cuenta</Link>
        </Flex>
      </Flex>
      
          
    </Flex>
  )
}

export default Login