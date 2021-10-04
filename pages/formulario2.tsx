import { Button, Flex, Heading, Input, Link, Text, Stack, SimpleGrid} from '@chakra-ui/react'
import { Box, HStack,  Select, Progress, Spacer, Checkbox} from '@chakra-ui/react'
import { Table, Th, Tr, Td, Thead, Tbody} from '@chakra-ui/react'
import type { NextPage } from 'next'
import React from 'react'
import { NavBar } from '../components/NavBar'

const Formulario_02: NextPage = () => {
  return (
    <Flex bg="white_dark" h='100vh' flexDirection="column">
      <NavBar></NavBar>
      <Flex height="200vh" width = "200vh" alignItems="center" justifyContent="center">
        <Flex direction="column" bg="white_dark" p={12} rounded={6}>
        <Box paddingBlockEnd = "10px" paddingTop = "80px">
            <HStack spacing="24px">
              <Button colorScheme="gray_dark" backgroundColor="gray_dark" flex="1">Seccion Previa</Button>
              <Progress hasStripe value={40} backgroundColor="gray_dark" height="46px"  flex="3"/>
            </HStack>
          </Box>
          <Table variant="striped" colorScheme="white" >
            <Thead>
              <Tr backgroundColor = "#7B7B7B" >
                <Th color="white">Base de datos</Th>
                <Th color="white">No usamos esta herramienta</Th>
                <Th color="white">Usamos esta herramienta y nos gusta</Th>
                <Th color="white">Usamos esta herramienta y <u>NO</u> nos gusta</Th>
                <Th color="white">Nos gustaria tener esta herramienta en el futuro</Th>
             </Tr>
            </Thead>
            <Tbody >
              <Tr>
                <Td>MySQL</Td>              
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
             </Tr>
             <Tr>
                <Td>PostrgreSQL</Td>              
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
             </Tr>
             <Tr>
                <Td>MongoDB</Td>              
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
             </Tr>
             <Tr>
                <Td>Firebase</Td>              
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
             </Tr>
             <Tr>
                <Td>Oracle</Td>              
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
             </Tr>
             <Tr>
                <Td>Microsoft SQL Server</Td>              
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
             </Tr>
             <Tr>
                <Td>Redis</Td>              
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
             </Tr>
             <Tr>
                <Td>SQLite</Td>              
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
             </Tr>
             <Tr>
                <Td>Cassandra</Td>              
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
             </Tr>
             <Tr>
                <Td>Elasticsearch</Td>              
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
             </Tr>
             <Tr>
                <Td>MariaDB</Td>              
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
             </Tr>
             <Tr>
                <Td>DynameDB</Td>              
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
             </Tr>
            </Tbody>
          </Table>

          <Box paddingTop = "20px">
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

export default Formulario_02