import { Button, Flex, Heading, Input, Link, Text, Image, Stack, SimpleGrid, Box, NumberInput, NumberInputStepper } from '@chakra-ui/react'
import { NumberInputField, NumberIncrementStepper, NumberDecrementStepper, Select } from '@chakra-ui/react'
import type { NextPage } from 'next'
import React from 'react'
import { NavBar } from '../components/NavBar'
import styles from '../styles/Home.module.css'

const Signin: NextPage = () => {
  return (
    <Flex bg="white_dark" h='100vh' flexDirection="column">
      <NavBar></NavBar>
      <Flex height="200vh" width = "200vh" alignItems="center" justifyContent="center">
        <Flex direction="column" bg="linen" p={12} rounded={6}>
          <Heading ma={15} mb={6} color="Spanish Gray" as="b" marginBottom = "1px">Registrate ahora</Heading>
          <Text fontSize="x1" color="Spanish Gray" marginBottom = "15px">Al crear tu cuenta podras navegar libremente.  {" "}
            <Link size ="sm" color="cornflowerblue" href="#">   Beneficios </Link>
          </Text>

          <Text fontWeight="bold" fontSize="lg" color="Spanish Gray">Datos de la empresa</Text>
          <Stack spacing={3} marginBottom = "20px">
              <Text fontWeight="semibold" fontSize="sm" color="Spanish Gray">Nombre de la empresa</Text>
              <Input placeholder="Nombre" _placeholder={{"color":"Spanish Gray"}} variant="outline" mb={3} type="text" bg="grey_light"
              borderColor="white" border="4px" focusBorderColor="white" _hover={{"bg":"ghostwhite"}} textColor="black"/>

              <Text fontWeight="semibold" fontSize="sm" color="Spanish Gray">RFC</Text>
              <Input placeholder="RFC" _placeholder={{"color":"Spanish Gray"}} variant="outline" mb={3} type="text" bg="grey_light"
              borderColor="white" border="4px" focusBorderColor="white" _hover={{"bg":"ghostwhite"}} textColor="black"/>

              <Text fontWeight="semibold" fontSize="sm" color="Spanish Gray">Correo de la empresa</Text>
              <Input placeholder="Correo" _placeholder={{"color":"Spanish Gray"}} variant="outline" mb={3} type="email" bg="grey_light"
              borderColor="white" border="4px" focusBorderColor="white" _hover={{"bg":"ghostwhite"}} textColor="black"/>

              <Text fontWeight="semibold" fontSize="sm" color="Spanish Gray">Numero telefonico</Text>
              <Input placeholder="Telefono #1" _placeholder={{"color":"Spanish Gray"}} variant="outline" mb={3} type="tel" bg="grey_light"
              borderColor="white" border="4px" focusBorderColor="white" _hover={{"bg":"ghostwhite"}} textColor="black"/>

              <Text fontWeight="semibold" fontSize="sm" color="Spanish Gray">Numero telefonico alternativo</Text>
              <Input placeholder="Telefono #2" _placeholder={{"color":"Spanish Gray"}} variant="outline" mb={3} type="tel" bg="grey_light"
              borderColor="white" border="4px" focusBorderColor="white" _hover={{"bg":"ghostwhite"}} textColor="black"/>

          <SimpleGrid columns={2} spacingX="40px" spacingY="20px">
            <Text fontWeight="semibold" fontSize="sm" color="Spanish Gray">Numero de empleados</Text>
            <Text fontWeight="semibold" fontSize="sm" color="Spanish Gray">Clasificacion de la empresa</Text>
            <NumberInput size="sm" maxW={16} defaultValue={1} min={1} max={1000}>
              <NumberInputField bg="grey_light"/><NumberInputStepper><NumberIncrementStepper /><NumberDecrementStepper /></NumberInputStepper>
            </NumberInput>
            <Select placeholder="Elige una..." size="sm" bg="grey_light">
              <option value="option1">Computer Hardware</option>
              <option value="option1">Hosting and email"</option>
              <option value="option1">IT Managment</option>
              <option value="option1">Software Engineering"</option>
            </Select>
          </SimpleGrid>

          </Stack>


          <Button colorScheme="orange" backgroundColor="orange" mb={6}>Proceder</Button>
        </Flex>
      </Flex>       
    </Flex>
  )
}

<Text fontSize="x1" color="Spanish Gray" marginBottom = "15px">Al crear tu cuenta podras navegar libremente{" "}
  <Link color="cornflowerblue" href="#">   Beneficios </Link>
</Text>

export default Signin