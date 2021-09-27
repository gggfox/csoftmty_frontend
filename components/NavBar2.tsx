import React from 'react';
import { Text, Flex, Link, Box, Button, Grid, GridItem } from '@chakra-ui/react';
import logo from '../public/img/logo.png'
import Image from 'next/image'
import NextLink from 'next/link';
import {useRouter } from 'next/router';

interface NavBarProps {
 
}


export const NavBar2 : React.FC<NavBarProps> = ({ }) => {
    const router = useRouter()
    const path = router.pathname


    return (
        <Grid
        h={20}
        templateRows="repeat(12, 1fr)"
        templateColumns="repeat(32, 1fr)"
        gap={0}
        columnGap={0}
        bg="white_light"
        boxShadow="md"
        >

        <GridItem rowStart={3} colStart={1} rowSpan={8} colSpan={10} >
        <NextLink href="/">
            <Link mx={5} my={5}>
            <Image src={logo} alt="logo" width="160" height="50"/>
            </Link>
            </NextLink>
        </GridItem>

        <GridItem rowStart={5} colStart={16} rowSpan={3} colSpan={4}>
            <Text align="center" fontFamily="lato" fontSize="lg">Inicio</Text>
        </GridItem>
        <GridItem rowStart={12} colStart={17} rowSpan={1} colSpan={2} bg={path == '/' ? "orange" : ""}/>
        
        <GridItem rowStart={5} colStart={20} rowSpan={3} colSpan={4}>
            <Text align="center" fontFamily="lato" fontSize="lg">Datos N.L.</Text>
        </GridItem>
        <GridItem rowStart={12} colStart={21} rowSpan={1} colSpan={3} bg={path == '/' ? "orange" : ""}/>
        
        <GridItem rowStart={5} colStart={24} rowSpan={3} colSpan={4}>
            <Text align="center" fontFamily="lato" fontSize="lg">Mi Cuenta</Text>
        </GridItem>
        <GridItem rowStart={12} colStart={24} rowSpan={1} colSpan={4} bg={path == '/' ? "orange" : ""}/>

        <GridItem rowStart={5} colStart={28} rowSpan={3} colSpan={4}>
            <Text align="center" fontFamily="lato" fontSize="lg">Categorias</Text>
        </GridItem>
        <GridItem rowStart={12} colStart={28} rowSpan={1} colSpan={4} bg={path == '/' ? "orange" : ""}/>


        </Grid>
    );
}