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

    const user_id = 1 // luego necesitamos un hook o algo para obtener el user id y guardarlo en el cliente
    return (
        <Flex bg="white_light"  justifyContent="space-between" alignItems="center" boxShadow="md" position="fixed" w="100%" zIndex={1} flexDirection="row" h={16}>
            
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
            <MenuButton color="black_dark"  fontFamily="lato" borderColor="orange" borderBottomWidth={ path.slice(0,11) == '/categorias' ? 5 : 0}  mr={5} p="6px"
            _expanded={{"bg":"black", "color":"white", "borderRadius":"6px"}}
            >Categorias</MenuButton>
            <Portal>
                <MenuList bg="black" color="white_light" borderWidth={0}>
                <NextLink href="/categorias/desarrollodesoftware">
                    <MenuItem _hover={{"bg":"orange"}}>Desarrollo de Software</MenuItem>
                </NextLink>
                <NextLink href="/categorias/hardware">
                    <MenuItem _hover={{"bg":"orange"}}>Hardware</MenuItem>
                </NextLink>
                <NextLink href="/categorias/servicios">
                    <MenuItem _hover={{"bg":"orange"}}>Servicios</MenuItem>
                </NextLink>
                <NextLink href="/categorias/tecnologia4">
                    <MenuItem _hover={{"bg":"orange"}}>Tecnologia 4.0</MenuItem>
                </NextLink>
                </MenuList>
            </Portal>
            </Menu>

              <NextLink href="/cuenta/[id]" as={`/cuenta/${user_id}`}>
                <Link color="black_dark" fontFamily="lato" borderColor="orange" borderBottomWidth={ path == '/cuenta/[id]' ? 5 : 0}  mr={6} >
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