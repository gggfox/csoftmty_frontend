import React from 'react';
import { Text, Flex, Link, Box, Button, background, Menu, MenuButton, Portal, MenuList, MenuItem, Avatar } from '@chakra-ui/react';
import NextLink from 'next/link';
import {useRouter } from 'next/router';

interface TarjetaProps {
 
}

export const TarjetaEmpresa : React.FC<TarjetaProps> = ({ }) => {
    return(
        <Flex>
            <Avatar size="2xl" src="https://bit.ly/sage-adebayo" />
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
            </Box>
        </Flex>
    );
}