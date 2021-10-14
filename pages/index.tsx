import { Box, Button, Flex,Grid,GridItem,Heading,Image, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import React from 'react'
import { Footer } from '../components/Footer'
import { NavBar } from '../components/NavBar'

const Home: NextPage = () => {
  const size = global.window && window.innerWidth < 800
  const lg_txt = (size) ? "2em":"3em"

  return (
    <Flex bg="white_dark" h='100%' flexDirection="column">
      <NavBar/>

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
              src="https://images.pexels.com/photos/97077/pexels-photo-97077.jpeg" 
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
            <Box bg="orange_trans" width="100%" height="100%"></Box>
          </GridItem>


          <GridItem rowSpan={6} colSpan={36} rowStart={5} colStart={6}>
            <Heading 
              h="100%" 
              color="white_light" 
              fontWeight="bold" 
              fontFamily="lato" 
              fontSize={lg_txt} 
              align="center" 
              textShadow="1px 1px orange"
            >
              Descubre los beneficios que obtienes al afiliarte
            </Heading>      
          </GridItem>

          <GridItem 
            rowSpan={3} 
            colSpan={26} 
            rowStart={11} 
            colStart={10}
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
