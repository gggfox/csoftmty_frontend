import { Button, Flex, Heading, Input, Link, Text, Img, Box, useToast } from '@chakra-ui/react'
import type { NextPage } from 'next'
import React, { createContext, useContext } from 'react'
import logo from '../public/img/logo.png'
import { NavBar } from '../components/NavBar'
import styles from '../styles/Home.module.css'
import { InputField } from '../components/InputField'
import { Formik, Form } from 'formik'
import axios from 'axios'
import { getDomainLocale } from 'next/dist/shared/lib/router/router'

const Login: NextPage = () => {
    const toast = useToast()
  return (
    <Flex 
      bg="white_dark" 
      h='100vh' 
      flexDirection="column"
    >
      <NavBar></NavBar>
      <Flex 
        height="100vh" 
        alignItems="center" 
        justifyContent="center"
      >
        <Flex 
          direction="column" 
          bg="gray_dark" 
          p={12} 
          rounded={6}
        >

      
          <Formik 
        initialValues={{  email: "", password:""}}
        onSubmit={async (values,{setErrors}) => {
          console.log(values)


           try {
              const {data} = await axios.post(
              `${process.env.base_url}/auth`,
              {
                sEmail: values.email,
                sPassword: values.password
              })
              console.log(data)
              localStorage.setItem('token', data.token); // write
              localStorage.setItem('myId', data.user._id)
              console.log(localStorage.getItem('token')); // read
              toast({
                title: "Felicidades",
                description: `${data.message}`,
                status: "success",
                duration: 9000,
                isClosable: true,
           
              })
            
            }catch(err){
              if(axios.isAxiosError(err)){
                const msg = err.response?.data.message 
                console.log('MSG',msg)            
                toast({
                title: "Usuario o contraseña incorrectos/inexistente",
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
           
              })}}



        }}>
          {({isSubmitting}) => (
            <Flex justifyContent="center" h="100%" bg="white_dark">
              
              <Form>
              <Flex bg="gray_dark"  alignItems="center"  w="40vw" h="100%" flexDirection="column" p={10}>
            
                  <Heading color="white" as="b" m="6px">Ingresar a tu cuenta</Heading>


                  <InputField name="email" placeholder="ejemplo@gmial.com" label="Email"/>
                  <Box m={3}/>          
                  <InputField name="password" placeholder="mas de 8 caracteres" label="Contraseña"/>

                
                <Button 
                  colorScheme="orange" 
                  bg="orange" 
                  my={10}
                  p={6} 
                  isLoading={isSubmitting}  
                  type="submit"
                  w="100%"
                >
                  Proceder
                </Button>

                <Link href="/signup">
                  <Text as="u" color="white" fontWeight="bold">Todavia no tengo cuenta</Text>
                </Link>
                </Flex>
              </Form>
              </Flex>
            
          )}
        </Formik>

        

        </Flex>
      </Flex>
      
          
    </Flex>
  )
}

export default Login