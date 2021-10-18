import { Flex, Image, Grid, GridItem, Box, Heading, Button, Text} from '@chakra-ui/react'
import type { NextPage } from 'next'
import React from 'react'
import { NavBar } from '../components/NavBar'
import { Footer } from '../components/Footer'
import styles from '../styles/Home.module.css'

const DatosNL: NextPage = () => {
  const size = global.window && window.innerWidth < 800
  const lg_txt = (size) ? "3em":"4em"
  return (
    <Flex bg="white_dark" h='100vh' flexDirection="column">
      <NavBar></NavBar>
      <Grid
        h="100%"
        w="100%"
        templateRows="repeat(16, 1fr)"
        templateColumns="repeat(48, 1fr)"
        gap={0}
        columnGap={0}
        bg="black_dark"
        >
          <GridItem rowSpan={16} colSpan={48} rowStart={1} colStart={1}>
            <Image 
              src="https://d1bvpoagx8hqbg.cloudfront.net/originals/experience-monterrey-mexico-sergio-2b52a87fb417bfb2ef8a81a4318ac77b.jpg" 
              alt="logo" 
              width="100%" 
              height="100vh" 
            />
          </GridItem>

          <GridItem 
            rowSpan={16} 
            colSpan={48} 
            rowStart={1} 
            colStart={1}
          >
            <Box bg="white" width="100%" height="100%" opacity = "15%"></Box>
          </GridItem>


          <GridItem rowSpan={6} colSpan={25} rowStart={6} colStart={12}>
            <Heading 
              h="100%" 
              color="orange" 
              fontWeight="bold" 
              fontFamily="lato" 
              fontSize={lg_txt} 
              align="center" 
              textShadow="2px 1px black"
            >
              Crecimiento en las industrias TIC de Nuevo León
            </Heading>      
          </GridItem>

          <GridItem 
            rowSpan={3} 
            colSpan={25} 
            rowStart={11} 
            colStart={12}
          >
            <Flex 
              flexDirection="column" 
              justifyContent="center" 
              alignItems="center"
            >
              <Button 
                backgroundColor="#ffffff00" 
                borderRadius={0} 
                borderWidth={5} 
                p={6} 
                color="white_light" 
                _hover={{color:"gray_dark", backgroundColor:"white_light", borderColor:"white_light"}}
              >
                Ver reporte
              </Button>
            </Flex>
          </GridItem>
        </Grid>

        <Grid
        h="100%"
        w="100%"
        templateRows="repeat(16, 1fr)"
        templateColumns="repeat(48, 1fr)"
        gap={0}
        columnGap={0}
        bg="white"
        >



          <GridItem rowSpan={6} colSpan={25} rowStart={6} colStart={12}>
            <Heading 
              h="100%" 
              color="black" 
              fontWeight="bold" 
              fontFamily="lato" 
              fontSize={lg_txt} 
              align="center"
            >
              Datos Nuevo León
            </Heading>      
          </GridItem>

        </Grid>
        <Footer/>
    </Flex>
  )
}

export default DatosNL