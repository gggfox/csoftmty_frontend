import { Box, Button, Flex,Link,Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import React from 'react'
import { NavBar } from '../../components/NavBar'
import { TarjetaEmpresa } from '../../components/TarjetaEmpresa'
import NextLink from 'next/link';

const Cuenta: NextPage = () => {
  return (
    <Flex bg="white_dark" h='100vh' flexDirection="column">
      <NavBar></NavBar>
      <Box m={10}></Box>
      <Flex justifyContent="space-around" w="100%">
        <TarjetaEmpresa details={false}/>
        <Flex  justifyContent="center" alignItems="center" w="100%" >



<NextLink href="/formulario">
              
                <Button 
            bg="gray_dark" 
            color="white" 
            px="9%" py="4%" 
            mr="10px" 
            _hover={{"background-color":"black"}} 
            borderRadius="2px"
            fontSize="18px"
          >Editar Datos</Button>
            
              </NextLink> 
              
          <Button 
            borderColor="orange" 
            borderWidth="10px" 
            px="8%" 
            py="3%" 
            bg="#00000000" 
            color="orange"
            fontSize="19px"
            _hover={{"background-color":"white"}}
            borderRadius="2px">
              <Text fontWeight="bold">Editar Cuenta</Text>
            </Button>
        </Flex>
        
      </Flex>
      
      
    </Flex>
  )
}

export default Cuenta