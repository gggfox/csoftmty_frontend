import React from 'react';
import { Text, Flex, Link, Box, Button, background, Menu, MenuButton, Portal, MenuList, MenuItem } from '@chakra-ui/react';
import logo from '../public/img/logo.png'
import Image from 'next/image'
import NextLink from 'next/link';
import {useRouter } from 'next/router';

interface NavBarProps {
 
}


export const NavBar : React.FC<NavBarProps> = ({ }) => {
    const router = useRouter()
    const path = router.pathname
    return (
        <Flex bg="white_light"  justifyContent="space-between" alignItems="center" boxShadow="md" position="fixed" w="100vw" flexDirection="row" h={16}>
            
            <NextLink href="/"><Link mx={5} my={2}>
            <Image src={logo} alt="logo" width="160" height="50"/></Link>
            </NextLink>

            <Flex  h="100%" >
               
                <NextLink href="/">
                    <Link color="black_dark" fontFamily="lato"  borderColor="orange" borderBottomWidth={ path == '/' ? 5 : 0} mr={6}>
                        <Flex h="100%" alignItems="center">Inicio</Flex>
                    </Link>
                </NextLink> 
                

              <NextLink href="/datosNL" >
                <Link color="black_dark"  fontFamily="lato" borderColor="orange" borderBottomWidth={ path == '/datosNL' ? 5 : 0}  mr={5}>
                    <Flex  h="100%" alignItems="center">
                    Datos N.L.
                    </Flex>
               </Link>
              </NextLink> 


            <Menu autoSelect={false}>
            <MenuButton color="black_dark"  fontFamily="lato" borderColor="orange" borderBottomWidth={ path == '/datosNL' ? 5 : 0}  mr={5} p="6px"
            _expanded={{"bg":"black", "color":"white", "borderRadius":"6px"}}
            >Categorias</MenuButton>
            <Portal>
                <MenuList bg="black" color="white_light" borderWidth={0}>
                <MenuItem _hover={{"bg":"orange"}}>Computer Hardware</MenuItem>
                <MenuItem _hover={{"bg":"orange"}}>Hosting and email</MenuItem>
                <MenuItem _hover={{"bg":"orange"}}>IT Managment</MenuItem>
                <MenuItem _hover={{"bg":"orange"}}>Software Engineering</MenuItem>
                </MenuList>
            </Portal>
            </Menu>

              <NextLink href="/cuenta">
                <Link color="black_dark" fontFamily="lato" borderColor="orange" borderBottomWidth={ path == '/cuenta' ? 5 : 0}  mr={6} >
                    <Flex h="100%" alignItems="center" justifyContent="center">
                        <Text>
                            Mi cuenta
                        </Text>
                    </Flex>
               </Link>
              </NextLink> 
            </Flex>
        </Flex>
    );
}