import { Box, Flex, Button, useToast } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import type { NextPage } from 'next'
import React from 'react'
import { CheckboxInputField } from "../components/form/CheckboxInputField";
import { IntegerInputField } from "../components/form/IntegerInputField";
import { RadioInputField } from "../components/form/RadioInputField";
import { TextAreaInputField } from "../components/form/TextAreaInputField";
import { NavBar } from '../components/NavBar'
import axios from 'axios'
import { QuestionLayout } from "../components/form/QuestionLayout";
import { InputField } from "../components/InputField";
import { TextInputField } from "../components/form/TextInputField";
import { useWindowSize } from "../hooks/useWindowSize";

const Formulario: NextPage = () => {
  const toast = useToast()
  const size = useWindowSize();
  let tecnologias4_0 = [
    "Big Data",
    "Internet of Things (Iot)",
    "Realidad Augmentada (AR)",
    "Inteligencia Artificial",
    "Seguridad Informatica",
    "3D Printing",
    "Robótica"
  ]
  return (
    <Flex bg="white_dark" h='100%' w="100%" flexDirection="column">
      <NavBar></NavBar>
      <Box m={10}/>

      <Formik 
        initialValues={
          {name:"", instagram:"", facebook:"", twitter:"", linkedin:"", address:"", phone:"", email:"", products:"", services:"", Q01:"0", Q02:"0", Q03:"0", Q04:"0",Q05:0, Q06:0, Q07:0,
           Q08:0, Q09:0, Q10:"0", Q11:"0", Q12:null, Q13:"", Q14:null}
        }
        onSubmit={async (values,{setErrors}) => {
          console.log(values)
          
          try {
            
              const token = localStorage.getItem('token') 
            const config = {
              headers: { Authorization: `Bearer ${token}`}
            }

            const {data} = await axios.put(
              `${process.env.base_url}/users/enterprise`,
            {
            "oPublicData": {
                  "sPublicName": values.name,
                  "sPublicInstagram": values.instagram,
                  "sPublicFacebook": values.facebook,
                  "sPublicTwitter": values.twitter,
                  "sPublicLinkedin": values.linkedin,
                  "sPublicAddress": values.address,
                  "sPublicPhone": values.phone,
                  "sPublicEmail": values.email,
                  "sPublicProductsDescription": values.products,
                  "sPublicServicesDescription": values.services
              },
            "oPrivateData": {
              "iQtyEmployeesNL": values.Q01,
              "iNumYearlySales": values.Q02,
              "iNumYearlySalesGrowth": values.Q03,
              "iPerYearlyGrowth": values.Q04,
              "iPerTec4Sales": values.Q05,
              "iAvgSalesPerEmp": values.Q06,
              "iPerSales3Year": values.Q07,
              "iPerSalesGrowth": values.Q08,
              "iPerInternationalSales": values.Q09,
              "iCertifications": values.Q10,
              "iSectClient": values.Q11,
              "iCurrI4ThemesBigData": true,
              "iCurrI4ThemesIot": true,
              "iCurrI4ThemesRA": true,
              "iCurrI4ThemesIA": false,
              "iCurrI4ThemesSecurity": true,
              "iCurrI4Themes3DP": true,
              "iCurrI4ThemesRobotica": false,
              "iImportantCustumers": values.Q13,
              "iImpI4ThemesBigData": true,
              "iImpI4ThemesIot": true,
              "iImpI4ThemesRA": true,
              "iImpI4ThemesIA": true,
              "iImpI4ThemesSecurity": false,
              "iImpI4Themes3DP": true,
              "iImpI4ThemesRobotica": true
        }},config)
            console.log("DATA",data)

            toast({
              title: "Felicidades",
              description: `La encuesta ha sido completada exitoamente`,
              status: "success",
              duration: 9000,
              isClosable: true,
          
            })
            
            }catch(err){
              if(axios.isAxiosError(err)){
                const msg = err.response?.data.message             
                toast({
                title: "La encuesta no se pudo enviar.",
                description: `${msg}`,
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
            <Form>

              <Flex alignItems="center" w={size?.width as number >= 650 ? "50%" : "100%"}  h="100%" flexDirection="column" p={10}>
                <QuestionLayout question={"Datos Publicos"} >
                  <Flex flexDirection="column">
                  <TextInputField name="PublicName" question="Nombre de Empresa"/>
                  <TextInputField name="Instagram" question="Instagram"/>
                  <TextInputField name="Facebook" question="Facebook"/>
                  <TextInputField name="Twitter" question="Twitter"/>
                  <TextInputField name="Linkedin" question="Linkedin"/>
                  <TextInputField name="Address" question="Dirección"/>
                  <TextInputField name="Phone" question="Tel."/>
                  <TextInputField name="Email" question="Email"/>
                  <TextInputField name="ProductsDescription" question="Descripcion de Productos"/>
                  <TextInputField name="ServicesDescription" question="Descripcion de Servicios"/></Flex>
                </QuestionLayout>
             

                <RadioInputField
                  name="Q01"
                  question="1 - ¿Cuanto personal tiene tu empresa en Nuevo Leon?"
                  radio_options={["De 0 - 50","De 51 - 100","De 101 - 200","De 201 - 500","> 500"]}
                  />
                
                <RadioInputField
                  name="Q02"
                  question="2 - ¿Cuáles fueron sus ingresos en el 2020?"
                  radio_options={["< 30 mdp", "De 30-60 mdp","De 60-120 mdp","De 120-300 mdp","> 300 mdp"]}
                />

                <RadioInputField
                  name="Q03"
                  question="3 - ¿Que porcentaje % creció en facturación tu empresa en el 2020 respecto al 2019?"
                  radio_options={["< 30 mdp", "De 30-60 mdp","De 60-120 mdp","De 120-300 mdp","> 300 mdp"]}
                />    

                <RadioInputField
                  name="Q04"
                  question="4 - ¿Cuál es tu expectativa de crecimiento en facturación en este año?"
                  radio_options={["No crecerá","Creció entre 0-5 %","Creció entre 5-10%","Creció entre 10-15%","Creció más del 15%"]}
                />  
        
                <IntegerInputField 
                  name="Q05"
                  question="5 - ¿De toda tu facturacion del año pasado que porcentaje fue de Tecnologias 4.0*?"
                  min={0} max={100}
                />

                <IntegerInputField 
                  name="Q06"
                  question="6 - ¿Cuál fue tu facturación anual promedio por persona durante el año pasado (ventas totales/numero total de empelados TIC)?"
                  min={0} max={1000000000000}
                />
                <IntegerInputField 
                  name="Q07"
                  question="7 - ¿De tu facturación del año pasado, qué porcentaje % fue de productos y/o servicios que lanzaste durante los ultimos 3 años?"
                  min={0} max={100}
                />

                <IntegerInputField 
                  name="Q08"
                  question="8 - ¿Qué porcentaje % de tu personal ocupado tiene alguna certificación tecnológica (Microsoft, PMP, Javam etc)?"
                  min={0} max={100}
                />

                <IntegerInputField 
                  name="Q09"
                  question="9 - ¿Què porcentaje % de tu facturación proviene de tus ventas realizadas fuera del país?"
                  min={0} max={100}
                />

                <RadioInputField
                  name="Q10"
                  question="10 - ¿Tu empresa tiene algún tipo de certificación?"
                  radio_options={["CMMI 3","CMMI 5","MoProSoft","ISO","ISO 9001","Otra"]}
                />  

                <RadioInputField
                  name="Q11"
                  question="11 - ¿En que sector se ubican la mayoria de tus clientes?"
                  radio_options={["Salud","Fintech","Manufactura","Retail","Agrotech","Educacion","Turismo","Otro"]}
                />  

                <CheckboxInputField
                  name="Q12"
                  question="12 - De los temas que incluye la Industria 4.0, indica cuáles actualmente forman parte de tu agenda de trabajo"
                  checkbox_options={ tecnologias4_0} 
                />

                <TextAreaInputField
                name="Q13"
                question="13 - ¿Cuáles son tus clientes principales para cada uno de estos servicios?"
                />

                <CheckboxInputField
                  name="Q14"
                  question="14 - De los temas que incluye la Industria 4.0, indica cuáles consideras más relevantes conocer para implementarlos en tu empresa"
                  checkbox_options={tecnologias4_0} 
                />

                <Button 
                  colorScheme="orange" 
                  bg="orange_" 
                  my={10}
                  p={6} 
                  isLoading={isSubmitting}  
                  type="submit"
                  w="100%"
                >
                  Proceder
                </Button>
                </Flex>
              </Form>
            
          )}
        </Formik>
    </Flex>
  );
};

export default Formulario