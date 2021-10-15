import { Button, Flex, Heading, Input, Link, Text, Stack, SimpleGrid} from '@chakra-ui/react'
import { Box, HStack,  Select, Progress, Spacer, Checkbox} from '@chakra-ui/react'
import { Table, Th, Tr, Td, Thead, Tbody} from '@chakra-ui/react'
import type { NextPage } from 'next'
import React from 'react'
import { NavBar } from '../components/NavBar'
import styles from '../styles/Home.module.css'

const Signin: NextPage = () => {
  return (
    <Flex bg="white_dark" h='100vh' flexDirection="column">
      <NavBar></NavBar>
      <Flex height="200vh" width = "200vh" alignItems="center" justifyContent="center">
        <Flex direction="column" bg="white_dark"  p={12} rounded={6}>
          <Heading m={15} mb={6} color="white" as="b" marginBottom = "1px">Registrate ahora</Heading>
          <Text fontSize="x1" color="white" marginBottom = "15px">Al crear tu cuenta podras navegar libremente.  {" "}
            <Link size ="sm" color="cornflowerblue" href="#">   Beneficios </Link>
          </Text>

          <Text fontWeight="bold" fontSize="lg" color="white">Datos de la empresa</Text>
          <Stack spacing={3} marginBottom = "20px">
            <SimpleGrid columns={2} spacingX="20px" spacingY="10px">
              <Text fontWeight="semibold" fontSize="sm" color="white">Nombre</Text>
              <Text fontWeight="semibold" fontSize="sm" color="white">Telefono</Text>
              <Input placeholder="Escribe el nombre de la empresa" _placeholder={{"color":"white"}} variant="outline" mb={3} type="text" bg="#7B7B7B"
                borderColor="white" border="4px" focusBorderColor="white" _hover={{"bg":"ghostwhite"}} textColor="black"/>
              <Input placeholder="8112345678" _placeholder={{"color":"white"}} variant="outline" mb={3} type="text" bg="#7B7B7B"
                borderColor="white" border="4px" focusBorderColor="white" _hover={{"bg":"ghostwhite"}} textColor="black"/>
              <Text fontWeight="semibold" fontSize="sm" color="white">Email</Text>
              <Text fontWeight="semibold" fontSize="sm" color="white">Sector de industria</Text>
              <Input placeholder="ejemplo@gmail.com" _placeholder={{"color":"white"}} variant="outline" mb={3} type="email" bg="#7B7B7B"
                borderColor="white" border="4px" focusBorderColor="white" _hover={{"bg":"ghostwhite"}} textColor="black"/>
              <Select placeholder="Elige una..." _placeholder={{"color":"white"}} bg="#7B7B7B" border="4px" borderColor="white" textColor="black" focusBorderColor="white" >
                <option value="option1">Computer Hardware</option>
                <option value="option1">Hosting and email</option>
                <option value="option1">IT Managment</option>
                <option value="option1">Software Engineering</option>
              </Select>
            </SimpleGrid>
            <Text fontWeight="semibold" fontSize="sm" color="white">Sitio Web</Text>
            <Input placeholder="https://ejemplo.com" _placeholder={{"color":"white"}} variant="outline" mb={3} type="email" bg="#7B7B7B"
              borderColor="white" border="4px" focusBorderColor="white" _hover={{"bg":"ghostwhite"}} textColor="black"/>
            <SimpleGrid columns={2} spacingX="20px" spacingY="10px">
              <Text fontWeight="semibold" color="white">Contraseña</Text>
              <Text fontWeight="semibold" color="white">Confirmacion</Text>
              <Input placeholder="mas de 8 caracteres" _placeholder={{"color":"white"}} variant="filled" mb={6} type="password" bg="#7B7B7B" 
               borderColor="white" border="4px" focusBorderColor="white" _hover={{"bg":"ghostwhite"}} textColor="black"/>
              <Input placeholder="igual que contraseña" _placeholder={{"color":"white"}} variant="filled" mb={6} type="password" bg="#7B7B7B" 
               borderColor="white" border="4px" focusBorderColor="white" _hover={{"bg":"ghostwhite"}} textColor="black"/>
            </SimpleGrid>
          </Stack>


          <Button colorScheme="orange" backgroundColor="orange" mb={6}>Proceder</Button>

        </Flex>
      </Flex>  
      
           
    </Flex>
    
    
  )
}


export default Signin