import { Button, Flex, Heading, Link, Text, useToast} from '@chakra-ui/react'
import { Box} from '@chakra-ui/react'
import type { NextPage } from 'next'
import React from 'react'
import { NavBar } from '../components/NavBar'
import {Formik, Form} from 'formik'
import { InputField } from '../components/InputField'
import { SelectField } from '../components/SelectField'
import axios from 'axios'
import { useWindowSize } from '../hooks/useWindowSize'

const Signup: NextPage = () => {
  const toast = useToast()
  const size = useWindowSize()
  axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
  return (
    <Flex bg="white_dark" flexDirection="column" w="100vw">
      <NavBar></NavBar>
      <Box m={size?.width as number >= 650 ? 20 : 0}/>
      <Formik 
        initialValues={{ name: "", phone: "", email: "", sector:"", business:"", role:"", password:"", confirmation:""}}
        onSubmit={async (values,{setErrors}) => {
          console.log(values)
       
            try {
              if(values.password !== values.confirmation){
                throw 'La contraseña no es igual a la confirmacion'
              }
              const {data} = await axios.post(
              `${process.env.base_url}/users`,
              {
                sName: values.name,
                sEmail: values.email,
                sPassword: values.password
              })
              console.log(data)

              toast({
                title: "Felicidades",
                description: `El usuario ${values.email} ha sido registrado exitoamente`,
                status: "success",
                duration: 9000,
                isClosable: true,
           
              })
            
            }catch(err){
              if(axios.isAxiosError(err)){
                const msg = err.response?.data.message             
                toast({
                title: "La cuenta no pudo ser creada.",
                description: msg,
                status: "warning",
                duration: 9000,
                isClosable: true,
            })
              }else{
                    
                toast({
                title: "Error inesperado",
                description: `${err}`,
                status: "error",
                duration: 9000,
                isClosable: true,
           
              })

            }}
          
        }}>
          {({isSubmitting}) => (
            <Flex justifyContent="center" h="100%" bg="white_dark">
              
              <Form>
              <Flex bg="gray_dark" justifyContent="center" alignItems="center" borderRadius="10px" w={size?.width as number >= 650 ? "60vw" : "100vw"} h="100%" flexDirection="column"
               p={10} mt={size?.width as number >= 650 ? 0 : 10}>
                <Box mt={8}>
                  <Heading color="white" as="b" m="6px">Registrate ahora</Heading>
                  <Text fontSize="x1" color="white" mb = "15px">Al crear tu cuenta podras navegar libremente.  {" "}
                    {/* <Link size ="sm" color="cornflowerblue" href="#">   Beneficios </Link> */}
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

                 <SelectField name="sector" label={size?.width as number >= 650 ? "Sector de industria" : "Industria"}/>
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


export default Signup