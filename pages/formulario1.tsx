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
        <Flex direction="column" bg="white_dark" p={12} rounded={6}>
        <Box paddingBlockEnd = "10px" paddingTop = "80px">
            <HStack spacing="24px">
              <Button colorScheme="gray_dark" backgroundColor="gray_dark" flex="1">Seccion Previa</Button>
              <Progress hasStripe value={10} backgroundColor="gray_dark" height="46px"  flex="3"/>
            </HStack>
          </Box>
          <Table variant="striped" colorScheme="white" >
            <Thead>
              <Tr backgroundColor = "#7B7B7B" >
                <Th color="white">Lenguaje de programacion</Th>
                <Th color="white">No usamos esta herramienta</Th>
                <Th color="white">Usamos esta herramienta y nos gusta</Th>
                <Th color="white">Usamos esta herramienta y <u>NO</u> nos gusta</Th>
                <Th color="white">Nos gustaria tener esta herramienta en el futuro</Th>
             </Tr>
            </Thead>
            <Tbody >
              <Tr>
                <Td>Python</Td>              
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
             </Tr>
             <Tr>
                <Td>Javascript</Td>              
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
             </Tr>
             <Tr>
                <Td>C#</Td>              
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
             </Tr>
             <Tr>
                <Td>Java</Td>              
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
             </Tr>
             <Tr>
                <Td>html/css</Td>              
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
             </Tr>
             <Tr>
                <Td>SQL</Td>              
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
             </Tr>
             <Tr>
                <Td>Node.js</Td>              
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
             </Tr>
             <Tr>
                <Td>Typescript</Td>              
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
             </Tr>
             <Tr>
                <Td>bash/shell</Td>              
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
             </Tr>
             <Tr>
                <Td>C++</Td>              
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
             </Tr>
             <Tr>
                <Td>PHP</Td>              
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
             </Tr>
             <Tr>
                <Td>C</Td>              
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
             </Tr>
             <Tr>
                <Td>Powershell</Td>              
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
             </Tr>
             <Tr>
                <Td>Go</Td>              
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
             </Tr>
             <Tr>
                <Td>Rust</Td>              
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
             </Tr>
             <Tr>
                <Td>Kotlin</Td>              
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
             </Tr>
             <Tr>
                <Td>Objective-C</Td>              
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
             </Tr>
             <Tr>
                <Td>Ruby</Td>              
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
             </Tr>
             <Tr>
                <Td>Dart</Td>              
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
             </Tr>
             <Tr>
                <Td>R</Td>              
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
             </Tr>
             <Tr>
                <Td>Scala</Td>              
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
             </Tr>
             <Tr>
                <Td>Swift</Td>              
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
             </Tr>
             <Tr>
                <Td>Assembly</Td>              
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
             </Tr>
             <Tr>
                <Td>Perl</Td>              
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
             </Tr>
             <Tr>
                <Td>LISP</Td>              
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
                <Td ><Checkbox defaultIsChecked></Checkbox></Td>
             </Tr>
             <Tr>
                <Td>COBOL</Td>              
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

export default Formulario_01