import { Button, Flex, Heading, Input, Link, Text, Stack, SimpleGrid} from '@chakra-ui/react'
import { Box, HStack,  Select, Progress, Spacer, Checkbox} from '@chakra-ui/react'
import { Table, Th, Tr, Td, Thead, Tbody} from '@chakra-ui/react'
import type { NextPage } from 'next'
import React from 'react'
import { NavBar } from '../components/NavBar'

const Formulario_01: NextPage = () => {
  return (
    <Flex bg="white_dark" h='100vh' flexDirection="column">
      <NavBar></NavBar>
      <Flex height="200vh" width = "200vh" alignItems="center" justifyContent="center">
        <Flex direction="column" bg="#7B7B7B" p={12} rounded={6}>
        <Box paddingBlockEnd = "10px">
            <HStack spacing="24px">
              <Button colorScheme="gray_dark" backgroundColor="gray_dark" flex="1">Seccion Previa</Button>
              <Progress hasStripe value={10} colorScheme="orange_trans" backgroundColor="gray_dark" height="46px"  flex="3"/>
            </HStack>
          </Box>
          <Table variant="striped" colorScheme="white" >
            <Thead>
              <Tr>
                <Th>Lenguaje de programacion</Th>
                <Th>No usamos esta herramienta</Th>
                <Th>Usamos esta herramienta y nos gusta</Th>
                <Th>Usamos esta herramienta y <u>NO</u> nos gusta</Th>
                <Th>Nos gustaria tener esta herramienta en el futuro</Th>
             </Tr>
            </Thead>
            <Tbody >
              <Tr>
                <Td>EJEMPLO LENGUAJE</Td>              
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
                <Td><Checkbox ></Checkbox></Td>
                <Td><Checkbox ></Checkbox></Td>
                <Td><Checkbox ></Checkbox></Td>
             </Tr>
             <Tr>
                <Td>EJEMPLO LENGUAJE</Td>              
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
                <Td><Checkbox ></Checkbox></Td>
                <Td><Checkbox ></Checkbox></Td>
                <Td><Checkbox ></Checkbox></Td>
             </Tr>
             <Tr>
                <Td>EJEMPLO LENGUAJE</Td>              
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
                <Td><Checkbox ></Checkbox></Td>
                <Td><Checkbox ></Checkbox></Td>
                <Td><Checkbox ></Checkbox></Td>
             </Tr>
            </Tbody>
          </Table>

          <Box paddingTop = "10px">
            <Flex>
              <Button colorScheme="gray_dark" backgroundColor="gray_dark" flex="1">Seccion Previa</Button>
              <Spacer /> <Spacer />
              <Button colorScheme="gray_dark" backgroundColor="gray_dark" flex="1">Siguiente Seccion</Button>
            </Flex>
          </Box>
        </Flex>
      </Flex>       
    </Flex>
  )
}

export default Formulario_01