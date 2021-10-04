import { Flex,Heading, Divider } from '@chakra-ui/react'
import type { NextPage } from 'next'
import React from 'react'
import { NavBar } from '../components/NavBar'
import { TarjetaEmpresa } from '../components/TarjetaEmpresa'

const Hardware: NextPage = () => {
  const size = global.window && window.innerWidth < 800
  const lg_txt = (size) ? "2em":"3em"

  return (
    <Flex bg="white_dark" h='100%' flexDirection="column" alignItems="center">
      <NavBar></NavBar>
      <Flex alignItems="center" justifyContent="center" flexDirection="column" width="80%">
        <Heading fontSize="6vh" mb={20} mt={20} as="u" justifyContent="center" color="light_grey">Hardware</Heading>
        <Flex alignItems="center" justifyContent="center" width="100%">
            <TarjetaEmpresa></TarjetaEmpresa>
            <TarjetaEmpresa></TarjetaEmpresa>
        </Flex>
        <Divider/>
        <Flex alignItems="center" justifyContent="center" width="100%">
            <TarjetaEmpresa></TarjetaEmpresa>
            <TarjetaEmpresa></TarjetaEmpresa>
        </Flex>
        <Divider/>
        <Flex alignItems="center" justifyContent="center" width="100%">
            <TarjetaEmpresa></TarjetaEmpresa>
            <TarjetaEmpresa></TarjetaEmpresa>
        </Flex>
        <Divider/>
        <Flex alignItems="center" justifyContent="center" width="100%">
            <TarjetaEmpresa></TarjetaEmpresa>
            <TarjetaEmpresa></TarjetaEmpresa>
        </Flex>
        <Divider/>

      </Flex>

      

    
 
    </Flex>
  )
}

export default Hardware
