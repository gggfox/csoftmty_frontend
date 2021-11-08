import { Box, Button, Flex,Link,Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import { NavBar } from '../../components/NavBar'
import { TarjetaEmpresa } from '../../components/TarjetaEmpresa'
import NextLink from 'next/link';
import { useWindowSize } from '../../hooks/useWindowSize'
import axios from 'axios'
import { useRouter } from 'next/router'

const Cuenta: NextPage = () => {
  const size = useWindowSize();
  const isDesktop = (size?.width as number >= 650) ? true : false
  const router = useRouter()
  const [user, setUser] = useState<any>([])

    useEffect(() => {
    const f = async () => {
      const token = localStorage.getItem('token')
      let {id} = router.query
      console.log(id)
      let page_content:any = []
      if (id) {

      const {data} = await axios.get(
        `${process.env.base_url}/users/${id}`,
          {headers: { Authorization: `Bearer ${token}`}}
      )
        
      setUser(data.enterprise)
      console.log('USER',user)
      }
    }
    f()
    },[router])


  return (
    <Flex bg="white_dark" h='100vh' flexDirection="column">
      <NavBar></NavBar>
      <Box m={10}></Box>
      <Flex justifyContent="space-around" w="100%" flexDirection={isDesktop ? "row" : "column"}>
        {(!user) ? console.log(user) : (
        <TarjetaEmpresa businessId={user._id} business={user.sPublicName} name={user.sRole} email={user.sEmail} phone={user.sPhone} details={false} ml={isDesktop ? "4em": "0em"} />
          
        )}
        <Flex  flexDirection={isDesktop ? "row" : "column"} justifyContent="center" alignItems="center" w="100%" >



<NextLink href="/formulario">
              
                <Button 
            bg="gray_dark" 
            color="white" 
            w={isDesktop ? "10em": "15em"} 
            py="4%" 
            mr="10px" 
            mb="10px"
            _hover={{"opacity":"0.5"}}
            borderRadius="2px"
            fontSize="18px"
          >Editar Datos</Button>
            
              </NextLink> 
              
          <Button 
            w={isDesktop ? "10em": "15em"}             py="4%" 
            mr="10px" 
            bg="orange_" 
            color="white_dark"
            mb="10px"
            _hover={{"opacity":"0.5"}}
            borderRadius="2px"
            fontSize="18px">
              <Text fontWeight="bold">Editar Cuenta</Text>
            </Button>
        </Flex>
        
      </Flex>
      
      
    </Flex>
  )
}

export default Cuenta