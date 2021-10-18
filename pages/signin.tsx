import { Button, Flex, Heading, Input, Link, Text, Stack, SimpleGrid, FormControl, FormLabel, FormErrorMessage} from '@chakra-ui/react'
import { Box, HStack,  Select, Progress, Spacer, Checkbox} from '@chakra-ui/react'
import { Table, Th, Tr, Td, Thead, Tbody} from '@chakra-ui/react'
import type { NextPage } from 'next'
import React from 'react'
import { NavBar } from '../components/NavBar'
import {Formik, Form} from 'formik'
import styles from '../styles/Home.module.css'
import { InputField } from '../components/InputField'
import { SelectField } from '../components/SelectField'

const Signin: NextPage = () => {
  return (
    <Flex bg="white_dark" flexDirection="column" w="100vw">
      <NavBar></NavBar>
      <Box m={20}/>
      <Formik 
        initialValues={{ name: "", phone: "", email: "", sector:"", business:"", role:"", password:"", confirmation:""}}
        onSubmit={async (values,{setErrors}) => {
          console.log(values)
          const response = "awaits response from server"
          if(response) {
            //setErrors(toErrorMap(response));
        }else if (response){
            //router.push('/');
        }
        }}>
          {({isSubmitting}) => (
            <Flex justifyContent="center" h="100%" bg="white_dark">
              
              <Form>
              <Flex bg="gray_dark" justifyContent="center" alignItems="center" borderRadius="10px" w="40vw" h="100%" flexDirection="column" p={10}>
                <Box mt={8}>
                  <Heading color="white" as="b" m="6px">Registrate ahora</Heading>
                  <Text fontSize="x1" color="white" mb = "15px">Al crear tu cuenta podras navegar libremente.  {" "}
                    <Link size ="sm" color="cornflowerblue" href="#">   Beneficios </Link>
                  </Text>
                </Box>
                <Flex flexDirection="row" w="100%" m={2} justifyContent="center">
                  <InputField name="name" placeholder="nombre" label="Nombre"/>
                  <Box m={5}/>
                  <InputField name="phone" placeholder="8112345678" label="Telefono"/>
                </Flex>
                <Flex flexDirection="row" w="100%" m={2} justifyContent="center">
                  <InputField name="email" placeholder="ejemplo@gmial.com" label="Email"/>
                  <Box m={5}/>

                 <SelectField name="sector" label="Sector de industria"/>
                </Flex>
                <Flex flexDirection="row" w="100%" m={2} justifyContent="center">
                  <InputField name="business" placeholder="Ejemplo S.A de C.V" label="Empresa"/>
                  <Box m={5}/>
                  <InputField name="role" placeholder="Gerente" label="Puesto"/>
                </Flex>
                <Flex flexDirection="row" w="100%" m={2} justifyContent="center">
                  <InputField name="password" placeholder="mas de 8 caracteres" label="Contraseña"/>
                  <Box m={5}/>
                  <InputField name="confirmation" placeholder="tiene que ser igual a contraseña" label="Confirmacion"/>
                </Flex>
                
                <Button 
                  colorScheme="orange" 
                  bg="orange" 
                  m={6} 
                  isLoading={isSubmitting}  
                  type="submit"
                  w="100%"
                >
                  Proceder
                </Button>
                <Link href="/login">
                  <Text as="u" color="white" fontWeight="bold">Ya tengo una cuenta</Text>
                </Link>
                </Flex>
              </Form>
              </Flex>
            
          )}
        </Formik>



     
      
           
    </Flex>
    
    
  )
}


export default Signin