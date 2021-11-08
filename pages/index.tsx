import { Box, Button, Flex,Grid,GridItem,Heading} from '@chakra-ui/react'
import type { NextPage } from 'next'
import React from 'react'
import { Footer } from '../components/Footer'
import { NavBar } from '../components/NavBar'
import code from '../public/img/code.jpg'
import Image from 'next/image'

const Home: NextPage = () => {
  const size = global.window && window.innerWidth < 800
  const lg_txt = (size) ? "2em":"3em"

  return (
    <Flex bg="white_dark"  flexDirection="column">
      <NavBar/>

      <Grid
        h="100vh"
        w="100%"
        templateRows="repeat(16, 1fr)"
        templateColumns="repeat(48, 1fr)"
        gap={0}
        columnGap={0}
        bg="black_dark"
        >
          <GridItem rowSpan={16} colSpan={48} rowStart={1} colStart={1} zIndex={0}>
            <Image src={code} alt="logo" layout="fill"/>
          </GridItem>

          <GridItem 
            rowSpan={16} 
            colSpan={48} 
            rowStart={1} 
            colStart={1}
            zIndex={1}
            bg="orange_trans"
          >
        
          </GridItem>


          <GridItem rowSpan={8} colSpan={36} rowStart={5} colStart={6} zIndex={1}>
          <Flex 
              flexDirection="column" 
              justifyContent="center" 
              alignItems="center"
            >            <Heading 
            h="100%" 
            color="white_light" 
            fontWeight="bold" 
            fontFamily="lato" 
            fontSize={lg_txt} 
            align="center" 
            textShadow="1px 1px orange"
            mb={10}

          >
            Descubre los beneficios que obtienes al afiliarte
          </Heading> 
              <Button 
                backgroundColor="#ffffff00" 
                borderRadius={0} 
                borderWidth={5} 
                p={6} 
                color="white_light" 
                _hover={{color:"gray_dark", backgroundColor:"white_light", borderColor:"white_light"}}
              >
                ¿Qué estás esperando?
              </Button>
            </Flex>
     
          </GridItem>


        </Grid>
    
    <Footer/>
    </Flex>
  )
}

export default Home
