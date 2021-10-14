import { Box, Flex } from '@chakra-ui/react'
import type { NextPage } from 'next'
import React from 'react'
import { NavBar } from '../../components/NavBar'
import { TarjetaEmpresa } from '../../components/TarjetaEmpresa'

const Cuenta: NextPage = () => {
  return (
    <Flex bg="white_dark" h='100vh' flexDirection="column">
      <NavBar></NavBar>
      <Box m={10}></Box>
      <TarjetaEmpresa details={false}/>
          
    </Flex>
  )
}

export default Cuenta