import { Box, Text, Flex,Grid,GridItem,Heading, Link} from '@chakra-ui/react'
import type { NextPage } from 'next'
import React from 'react'
import { Footer } from '../components/Footer'
import { NavBar } from '../components/NavBar'
import code from '../public/img/code-opt.jpg'
import Image from 'next/image'
import { useWindowSize } from '../hooks/useWindowSize'
import NextLink from 'next/link';

const Home: NextPage = () => {
  const size = useWindowSize()

  return (
    <Flex bg="white_dark"  flexDirection="column" w="100%">
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
            <Box h="100%" w="100%">
            <Image src={code} alt="code" layout="intrinsic" /></Box>
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
            fontSize= {size.width as number >= 650 ? "3em" : "1.5em"}
            align="center" 
            textShadow="1px 1px orange"
            mb={10}

          >
            Descubre los beneficios que obtienes al afiliarte y responder el formulario
          </Heading> 
          <NextLink href="/signup" >
              <Link 
                backgroundColor="#ffffff00" 
                borderRadius={0} 
                borderWidth={5} 
                p={6}
                fontWeight="bold" 
                color="white_light" 
                _hover={{color:"gray_dark", backgroundColor:"white_light", borderColor:"white_light"}}
              >
                Crea una cuenta
              </Link>
              </NextLink>
            </Flex>
     
          </GridItem>


        </Grid>

        <Flex flexDirection="column" p={10} zIndex={1} bg="white" w="100%">
        <Heading>Beneficios</Heading>
        <Text>
        Al crear una cuenta y responder el formulario tendrás acceso a los datos generales de la industria TIC en Nuevo León. Podrás ver que tecnologías de la industria 4.0 son las más populares y cuales son de mayor interés en el estado. Podrás obtener analytica sobre datos de ventas en el extranjero, facturaciones, ingresos, personal y más datos.
        </Text>

        </Flex>
    
    <Footer/>
    </Flex>
  )
}

export default Home
