import { Flex,  Grid, GridItem, Box, Heading, Button, Text} from '@chakra-ui/react'
import type { NextPage } from 'next'
import React from 'react'
import { NavBar } from '../components/NavBar'
import { Footer } from '../components/Footer'
import mty from '../public/img/mty.jpg'
import Image from 'next/image'
import { useWindowSize } from '../hooks/useWindowSize'

const DatosNL: NextPage = () => {

  const size = useWindowSize();
  const isDesktop = (size?.width as number >= 650) ? true : false
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
              Crecimiento en las industrias TIC de Nuevo León
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


   
        <Footer/>
    </Flex>
  )
}

export default DatosNL