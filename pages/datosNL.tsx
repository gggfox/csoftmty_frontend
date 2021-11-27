import { Flex,  Grid, GridItem, Box, Heading, Button, Text} from '@chakra-ui/react'
import type { NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import { NavBar } from '../components/NavBar'
import { Footer } from '../components/Footer'
import mty from '../public/img/mty.jpg'
import Image from 'next/image'
import { useWindowSize } from '../hooks/useWindowSize'
import { Bar, Pie } from 'react-chartjs-2'
import { useRouter } from 'next/router'
import axios from 'axios'
import { BarGraph } from '../components/BarGraph'
import { PieGraph } from '../components/PieGraph'
import { useEffectX } from "use-effect-x";

const DatosNL: NextPage = () => {

  const size = useWindowSize();
  const isDesktop = (size?.width as number >= 650) ? true : false
  const router = useRouter()
  const [Q1,setQ1] = useState([0,0,0,0,0])
  const [Q2,setQ2] = useState([0,0,0,0,0])
  const [Q3,setQ3] = useState([0,0,0,0,0])
  const [Q4,setQ4] = useState([0,0,0,0,0])
  const [Q5,setQ5] = useState(0)
  const [Q6,setQ6] = useState(0)
  const [Q7,setQ7] = useState(0)
  const [Q8,setQ8] = useState(0)
  const [Q9,setQ9] = useState(0)
  const [Q10,setQ10] = useState([0,0,0,0,0,0])
  const [Q11,setQ11] = useState([0,0,0,0,0,0,0,0])
  const [Q12,setQ12] = useState([0,0,0,0,0,0,0])
  const [Q14,setQ14] = useState([0,0,0,0,0,0,0])

    useEffect(() => {
    const f = async () => {
      const token = window.localStorage.getItem('token')
       console.log("hello",token)


      if (token) {
      const {data} = await axios.get(
        `${process.env.base_url}/users/statistics`,
          {headers: { Authorization: `Bearer ${token}`}}
      )
      const q1 = data['enterpriseStats'][0]["Question1"]["Q1"]
      let id,count;
      let arr = [0,0,0,0,0]
      for (let i in q1){
          id = q1[i]["_id"]
          count = q1[i]["Count"]
          arr[id-1] = count
      }
      setQ1(arr);

      console.log("Q1",Q1)
      console.log(data)
      //console.log('id',data['enterpriseStats'][0]["Question1"]["Q1"][0]["_id"])
      //console.log('count',data['enterpriseStats'][0]["Question1"]["Q1"][0]["Count"])
      
      //Question 2
      const q2 = data['enterpriseStats'][1]["Question2"]["Q2"]
      let id2,count2;
      console.log(q2)
      let arr2 = [0,0,0,0,0]
      for (let i in q2){
          id2 = q2[i]["_id"]
          count2 = q2[i]["Count"]
          arr2[id2-1] = count2
      }
      setQ2(arr2);

      console.log("Q2",Q2)

      //Question 3
      const q3 = data['enterpriseStats'][2]["Question3"]["Q3"]
      let id3,count3;
      let arr3 = [0,0,0,0,0]
      for (let i in q3){
          id3 = q3[i]["_id"]
          count3 = q3[i]["Count"]
          arr3[id3-1] = count3
      }
      setQ3(arr3);

      console.log("Q3",Q3)

      //Question 4
      const q4 = data['enterpriseStats'][3]["Question4"]["Q4"]
      let id4,count4;
      let arr4 = [0,0,0,0,0]
      for (let i in q4){
          id4 = q4[i]["_id"]
          count4 = q4[i]["Count"]
          arr4[id4-1] = count4
      }
      setQ4(arr4);

      console.log("Q4",Q4)

      //Question 5
      let q5 = data['enterpriseStats'][4]["Question5"]["Q5"][0]["Average"]
      setQ5(q5);

      console.log("Q5",Q5)

      //Question 6 falta

      //Question 7
      let q7 = data['enterpriseStats'][6]["Question7"]["Q7"][0]["Average"]
      setQ7(q7);

      console.log("Q7",Q7)

      //Question 8
      let q8 = data['enterpriseStats'][7]["Question8"]["Q8"][0]["Average"]
      setQ8(q8);

      console.log("Q8",Q8)

      //Question 9
      let q9 = data['enterpriseStats'][8]["Question9"]["Q9"][0]["Average"]
      setQ9(q9);

      console.log("Q9",Q9)

      //Question 10
      const q10 = data['enterpriseStats'][9]["Question10"]["Q10"]
      let id10,count10;
      let arr10 = [0,0,0,0,0]
      for (let i in q10){
          id10 = q10[i]["_id"]
          count10 = q10[i]["Count"]
          arr10[id10-1] = count10
      }
      setQ10(arr10);

      console.log("Q10",Q10)

      //Question 11
      const q11 = data['enterpriseStats'][10]["Question11"]["Q11"]
      let id11,count11;
      let arr11 = [0,0,0,0,0]
      for (let i in q11){
          id11 = q11[i]["_id"]
          count11 = q11[i]["Count"]
          arr11[id11-1] = count11
      }
      setQ11(arr11);

      console.log("Q11",Q11)

      //Question 12
      Q12[0] = data['enterpriseStats'][11]["Question12BigData"]["Q12BD"][0]["Count"]
      Q12[1] = data['enterpriseStats'][12]["Question12IoT"]["Q12IoT"][0]["Count"]
      Q12[2] = data['enterpriseStats'][13]["Question12RA"]["Q12RA"][0]["Count"]
      Q12[3] = data['enterpriseStats'][14]["Question12IA"]["Q12IA"][0]["Count"]
      Q12[4] = data['enterpriseStats'][15]["Question12Sec"]["Q12Sec"][0]["Count"]
      Q12[5] = data['enterpriseStats'][16]["Question123DP"]["Q123DP"][0]["Count"]
      Q12[6] = data['enterpriseStats'][17]["Question12Rob"]["Q12Rob"][0]["Count"]

      //Question 14
      Q14[0] = data['enterpriseStats'][18]["Question14BigData"]["Q14BD"][0]["Count"]
      Q14[1] = data['enterpriseStats'][19]["Question14IoT"]["Q14IoT"][0]["Count"]
      Q14[2] = data['enterpriseStats'][20]["Question14RA"]["Q14RA"][0]["Count"]
      Q14[3] = data['enterpriseStats'][21]["Question14IA"]["Q14IA"][0]["Count"]
      Q14[4] = data['enterpriseStats'][22]["Question14Sec"]["Q14Sec"][0]["Count"]
      Q14[5] = data['enterpriseStats'][23]["Question143DP"]["Q143DP"][0]["Count"]
      Q14[6] = data['enterpriseStats'][24]["Question14Rob"]["Q14Rob"][0]["Count"]






      


      }
    }
     f()
    },[router])


  return (
    <Flex bg="white_dark" h='100vh' flexDirection="column">
      <NavBar></NavBar>
      <Grid
        h="100vh"
        w="100%"
        templateRows="repeat(16, 1fr)"
        templateColumns="repeat(48, 1fr)"
        gap={0}
        columnGap={0}
        bg="black_dark"
        >
          <GridItem rowSpan={16} colSpan={48} rowStart={1} colStart={1}>            
            <Image src={mty} alt="logo" layout="fill"/>
          </GridItem>

          <GridItem 
            rowSpan={16} 
            colSpan={48} 
            rowStart={1} 
            colStart={1}
          >
            <Box bg="white" width="100%" height="100vh" opacity = "15%"></Box>
          </GridItem>


          <GridItem rowSpan={6} colSpan={isDesktop ? 25 : 40} rowStart={6} colStart={isDesktop ? 12 : 4} zIndex={1}
>
    
            <Flex 
              flexDirection="column" 
              justifyContent="center" 
              alignItems="center"
            >
                          <Heading 
              h="100%" 
              color="orange_" 
              fontWeight="bold" 
              fontFamily="lato" 
              fontSize={isDesktop ? "5vw" : "5vh"} 
              align="center" 
              textShadow="2px 1px black"
              mb={10}
            >
              Datos de la industria TIC de Nuevo León
            </Heading>  
              <Button 
                backgroundColor="orange_" 
                borderRadius={0} 
                borderWidth={0} 
                py={8}
                px={12} 
                color="white_light" 
                _hover={{color:"gray_dark", backgroundColor:"white_light", borderColor:"white_light"}}
              >
                Ver reporte
              </Button>
            </Flex>
          </GridItem>

        </Grid>

            <Heading 
              h="100%" 
              color="black" 
              fontWeight="bold" 
              fontFamily="lato" 
              fontSize={isDesktop ? "5vw" : "5vh"} 
              align="center"
            >
              Datos Nuevo León
            </Heading>      
    <Flex justifyContent="center" width="35%" alignItems="center" alignSelf="center" marginBottom="3%">
      <BarGraph 
        title="¿Cuanto personal tienen las empresas en el estado de Nuevo Leon?" 
        question_data={Q1 as [number]} 
        labels={["0 - 50","51-100","101-200","201-500",">500"]} 
      />
    </Flex>
    <Flex justifyContent="center" width="35%" alignItems="center" alignSelf="center" marginBottom="3%">
      <BarGraph 
        title="¿Cuáles fueron sus ingresos en el 2020?" 
        question_data={Q2 as [number]} 
        labels={["< 30 mdp", "De 30-60 mdp","De 60-120 mdp","De 120-300 mdp","> 300 mdp"]} 
      />
    </Flex>
    <Flex justifyContent="center" width="35%" alignItems="center" alignSelf="center" marginBottom="3%">
      <BarGraph 
        title="¿Que porcentaje % creció en facturación tu empresa en el 2020 respecto al 2019?" 
        question_data={Q3 as [number]} 
        labels={["< 30 mdp", "De 30-60 mdp","De 60-120 mdp","De 120-300 mdp","> 300 mdp"]} 
      />
    </Flex>
    <Flex justifyContent="center" width="35%" alignItems="center" alignSelf="center" marginBottom="3%">
      <BarGraph 
        title="¿Cuál es tu expectativa de crecimiento en facturación en este año?" 
        question_data={Q4 as [number]} 
        labels={["No crecerá","Creció entre 0-5 %","Creció entre 5-10%","Creció entre 10-15%","Creció más del 15%"]} 
      />
    </Flex>
    <Flex justifyContent="center" width="35%" alignItems="center" alignSelf="center" marginBottom="3%">
      <PieGraph 
        title="¿De toda tu facturacion del año pasado que porcentaje fue de Tecnologias 4.0*?" 
        question_data={[Q5,100 - Q5]} 
        labels={["Tecnologias 4.0","Demás"]} 
      />
    </Flex>
    <Flex justifyContent="center" width="35%" alignItems="center" alignSelf="center" marginBottom="3%">
      <PieGraph 
        title="¿De tu facturación del año pasado, qué porcentaje % fue de productos y/o servicios que lanzaste durante los ultimos 3 años?" 
        question_data={[Q7,100 - Q7]} 
        labels={["Productos y/o servicios que se lanzaron durante los ultimos 3 años","Demás"]} 
      />
    </Flex>
    <Flex justifyContent="center" width="35%" alignItems="center" alignSelf="center" marginBottom="3%">
      <PieGraph 
        title="¿Qué porcentaje % de tu personal ocupado tiene alguna certificación tecnológica (Microsoft, PMP, Javam etc)?" 
        question_data={[Q8,100 - Q8]} 
        labels={["Personal con certificación tecnológica (Microsoft, PMP, Javam etc)","Demás"]} 
      />
    </Flex>
    <Flex justifyContent="center" width="35%" alignItems="center" alignSelf="center" marginBottom="3%">
      <PieGraph 
        title="¿Què porcentaje % de tu facturación proviene de tus ventas realizadas fuera del país?" 
        question_data={[Q9,100 - Q9]} 
        labels={["Ventas realizadas fuera del país","Demás"]} 
      />
    </Flex>
    <Flex justifyContent="center" width="35%" alignItems="center" alignSelf="center" marginBottom="3%">
      <BarGraph 
        title="¿Tu empresa tiene algún tipo de certificación?" 
        question_data={Q10 as [number]}
        labels={["CMMI 3","CMMI 5","MoProSoft","ISO","ISO 9001","Otra"]} 
      />
    </Flex>
    <Flex justifyContent="center" width="35%" alignItems="center" alignSelf="center" marginBottom="3%">
      <BarGraph 
        title="¿En que sector se ubican la mayoria de tus clientes?" 
        question_data={Q11 as [number]}
        labels={["Salud","Fintech","Manufactura","Retail","Agrotech","Educacion","Turismo","Otro"]} 
      />
    </Flex>
    <Flex justifyContent="center" width="35%" alignItems="center" alignSelf="center" marginBottom="3%">
      <BarGraph 
        title="De los temas que incluye la Industria 4.0, indica cuáles actualmente forman parte de tu agenda de trabajo" 
        question_data={Q12 as [number]}
        labels={[    "Big Data",
        "Internet of Things (Iot)",
        "Realidad Augmentada (AR)",
        "Inteligencia Artificial",
        "Seguridad Informatica",
        "3D Printing",
        "Robótica"]} 
      />
    </Flex>
    <Flex justifyContent="center" width="35%" alignItems="center" alignSelf="center" marginBottom="3%">
          <BarGraph 
        title="De los temas que incluye la Industria 4.0, indica cuáles consideras más relevantes conocer para implementarlos en tu empresa"
        question_data={Q14 as [number]}
        labels={[    "Big Data",
        "Internet of Things (Iot)",
        "Realidad Augmentada (AR)",
        "Inteligencia Artificial",
        "Seguridad Informatica",
        "3D Printing",
        "Robótica"]} 
      />
    </Flex>
        <Footer/>
    </Flex>
  )
}

export default DatosNL