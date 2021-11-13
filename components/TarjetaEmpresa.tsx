import React from 'react';
import { Text, Flex, Link, Box, Button, background, Menu, MenuButton, Portal, MenuList, MenuItem, Avatar } from '@chakra-ui/react';
import NextLink from 'next/link';
import {useRouter } from 'next/router';

interface TarjetaProps {
    details?: boolean
}

export const TarjetaEmpresa : React.FC<TarjetaProps> = ({ details = true}) => {
    return(
        <Flex width="100%" paddingLeft="10%" paddingBottom="10" paddingTop="10" paddingRight = "10">
            <Avatar size="2xl"/>
            <Box ml="3">
                <Text fontWeight="bold">
                    Nombre Empresa
                </Text>
                <Text fontSize="md">
                    Nombre Contacto
                </Text>
                <Text fontSize="md">
                    Categoria
                </Text>
                <Text fontSize="md">
                    Email
                </Text>
                <Text fontSize="md">
                    Numero
                </Text>
                <Text fontSize="md">
                    Pagina
                </Text>
                { !details 
                  ? "" 
                  : <Button colorScheme="orange" backgroundColor="orange" mt={4} mb={2}>Ver Detalles</Button>
                }
                
            </Box>
        </Flex>
    );
}