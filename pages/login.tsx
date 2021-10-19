import { Button, Flex, Heading, Input, Link, Text, Img, Box } from '@chakra-ui/react'
import type { NextPage } from 'next'
import React from 'react'
import logo from '../public/img/logo.png'
import { NavBar } from '../components/NavBar'
import styles from '../styles/Home.module.css'
import { InputField } from '../components/InputField'
import { Formik, Form } from 'formik'

const Login: NextPage = () => {
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