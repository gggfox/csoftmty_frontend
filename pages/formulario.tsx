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
  let curr = [false,false,false,false,false,false,false]
  let imp =  [false,false,false,false,false,false,false]
  return (
    <Flex bg="white_dark" h='100%' w="100%" flexDirection="column">
      <NavBar></NavBar>
      <Box m={10}/>

      <Formik 
        initialValues={
          {name:"", instagram:"", facebook:"", twitter:"", linkedin:"", address:"", phone:"", email:"", products:"", services:"", Q01:"0", Q02:"0", Q03:"0", Q04:"0",Q05:0, Q06:0, Q07:0,
           Q08:0, Q09:0, Q10:"0", Q11:"0", Q12:[], Q13:"", Q14:[]}
        }
        onSubmit={async (values,{setErrors}) => {

          for(let i = 0; i < tecnologias4_0.length; i++){
            if(values.Q12){
              for(let j = 0; j < values.Q12.length; j++){
                if(tecnologias4_0[i] == values.Q12[j]){
                  curr[i] = true
                }
              }
            }

            }

          
          for(let i = 0; i < tecnologias4_0.length; i++){
            if(values.Q14){
              for(let j = 0; j < values.Q14.length; j++){
                if(tecnologias4_0[i] == values.Q14[j]){
                  imp[i] = true
                }
              }
            }

          }
          console.log(curr,imp)
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
              "iCurrI4ThemesBigData": curr[0],
              "iCurrI4ThemesIot": curr[1],
              "iCurrI4ThemesRA": curr[2],
              "iCurrI4ThemesIA": curr[3],
              "iCurrI4ThemesSecurity": curr[4],
              "iCurrI4Themes3DP": curr[5],
              "iCurrI4ThemesRobotica": curr[6],
              "iImportantCustumers": values.Q13,
              "iImpI4ThemesBigData": imp[0],
              "iImpI4ThemesIot": imp[1],
              "iImpI4ThemesRA": imp[2],
              "iImpI4ThemesIA": imp[3],
              "iImpI4ThemesSecurity": imp[4],
              "iImpI4Themes3DP": imp[5],
              "iImpI4ThemesRobotica": imp[6]
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
                  <TextInputField id="name" name="name" question="Nombre de Empresa"/>
                  <TextInputField id="instagram" name="instagram" question="Instagram"/>
                  <TextInputField id="facebook" name="facebook" question="Facebook"/>
                  <TextInputField id="twitter" name="twitter" question="Twitter"/>
                  <TextInputField id="linkedin" name="linkedin" question="Linkedin"/>
                  <TextInputField id="address" name="address" question="Dirección"/>
                  <TextInputField id="phone" name="phone" question="Tel."/>
                  <TextInputField id="email" name="email" question="Email"/>
                  <TextInputField id="products" name="products" question="Descripcion de Productos"/>
                  <TextInputField id="services" name="services" question="Descripcion de Servicios"/></Flex>
                </QuestionLayout>
             

                <RadioInputField
                  name="Q01"
                  question="1 - ¿Cuánto personal tiene tu empresa en Nuevo León?"
                  radio_options={["De 0 - 50","De 51 - 100","De 101 - 200","De 201 - 500","> 500"]}
                  />
                
                <RadioInputField
                  name="Q02"
                  question="2 - ¿Cuáles fueron sus ingresos en el 2021?"
                  radio_options={["< 30 mdp", "De 30-60 mdp","De 60-120 mdp","De 120-300 mdp","> 300 mdp"]}
                />

                <RadioInputField
                  name="Q03"
                  question="3 - ¿Qué porcentaje % creció en facturación tu empresa en el 2021 respecto al 2020?"
                  radio_options={["< 30 mdp", "De 30-60 mdp","De 60-120 mdp","De 120-300 mdp","> 300 mdp"]}
                />    

                <RadioInputField
                  name="Q04"
                  question="4 - ¿Cuál es tu expectativa de crecimiento en facturación en el 2022?"
                  radio_options={["No crecerá","Creció entre 0-5 %","Creció entre 5-10%","Creció entre 10-15%","Creció más del 15%"]}
                />  
        
                <IntegerInputField 
                  name="Q05"
                  question="5 - ¿De toda tu facturación del 2021 que porcentaje fue de Tecnologías 4.0*?"
                  min={0} max={100}
                />

                <IntegerInputField 
                  name="Q06"
                  question="6 - ¿Cuál fue tu facturación anual promedio por persona durante el 2021 (ventas totales/número total de empleados TIC)?"
                  min={0} max={1000000000000}
                />
                <IntegerInputField 
                  name="Q07"
                  question="7 - ¿De tu facturación del 2021, qué porcentaje % fue de productos y/o servicios que lanzaste durante los últimos 3 años?"
                  min={0} max={100}
                />

                <IntegerInputField 
                  name="Q08"
                  question="8 - ¿Qué porcentaje % de tu personal ocupado tiene alguna certificación tecnológica (Microsoft, PMP, Java etc)?"
                  min={0} max={100}
                />

                <IntegerInputField 
                  name="Q09"
                  question="9 - ¿Qué porcentaje % de tu facturación proviene de tus ventas realizadas fuera del país?"
                  min={0} max={100}
                />

                <RadioInputField
                  name="Q10"
                  question="10 - ¿Tu empresa tiene algún tipo de certificación?"
                  radio_options={["CMMI 3","CMMI 5","MoProSoft","ISO 15504","ISO 9001","Otra"]}
                />  

                <RadioInputField
                  name="Q11"
                  question="11 - ¿En qué sector se ubican la mayoría de tus clientes?"
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