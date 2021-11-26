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
      console.log("Data",data)
    const q1 = data['enterpriseStats'][0]["Question1"]["Q1"]
    let id,count;
    let arr = [0,0,0,0,0]
    for (let i in q1){
        id = q1[i]["_id"]
        count = q1[i]["Count"]
        arr[id-1] = count
    }
    setQ1(arr);


    //console.log("Q1",Q1)
    //console.log('id',data['enterpriseStats'][0]["Question1"]["Q1"][0]["_id"])
    //console.log('count',data['enterpriseStats'][0]["Question1"]["Q1"][0]["Count"])
   
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
              Crecimiento en la industria TIC de Nuevo León
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
    <Box w="50%">
    <BarGraph 
      title="¿Cuanto personal tienen las empresas en el estado de Nuevo Leon?" 
      question_data={Q1 as [number]} 
      labels={["0 - 50","51-100","101-200","201-500",">500"]} 
    />


    </Box>
   <Box w="50%">


    <PieGraph 
      title="Porcentaje de algo" 
      question_data={[50,50]} 
      labels={["hombres","mujeres"]} 
    />
</Box>
        <Footer/>
    </Flex>
  )
}

export default DatosNL