import { Button, Flex, Heading, Input, Link, Text, Image } from '@chakra-ui/react'
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
        <Flex direction="column" bg="linen" p={12} rounded={6}>
          <Image src="public\img\logo.png" alt="logo" width="160" height="50" />
          <Heading ma={15} mb={6} color="Spanish Gray" as="b" marginBottom = "1px">Bienvenido de vuelta!</Heading>
          <Text fontSize="x1" color="Spanish Gray" marginBottom = "15px">Ingrese a su cuenta para navegar libremente</Text>
          <Text fontWeight="semibold" color="Spanish Gray">Email</Text>
          <Input placeholder="mail@ejemplo.com" _placeholder={{"color":"Spanish Gray"}} variant="filled" mb={3} type="email" bg="grey_light" 
          borderColor="white" border="4px" focusBorderColor="white" _hover={{"bg":"ghostwhite"}} textColor="black"/>
          <Text fontWeight="semibold" color="Spanish Gray">Contraseña</Text>
          <Input placeholder="********" _placeholder={{"color":"Spanish Gray"}} variant="filled" mb={6} type="password" bg="grey_light" 
          borderColor="white" border="4px" focusBorderColor="white" _hover={{"bg":"ghostwhite"}} textColor="black"/>
          <Button colorScheme="orange" backgroundColor="orange" mb={6}>Ingresar a cuenta</Button>
          <Link color="white" align="center">Todavia no tengo cuenta</Link>
        </Flex>
      </Flex>
      
          
    </Flex>
  )
}

export default Login