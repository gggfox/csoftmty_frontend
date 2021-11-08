import React from 'react';
import { Text, Flex, Box, Button, Avatar, BoxProps, Link } from '@chakra-ui/react';

import NextLink from 'next/link';

interface TarjetaProps{
    businessId:number,
    business:string,
    name: string,
    phone?:string,
    email?:string,
    details?: boolean,
    props?:BoxProps
}

export const TarjetaEmpresa : React.FC<TarjetaProps & BoxProps> = ({ details = true,businessId,business,name,email,phone, ...props}) => {
    return(
        <Flex width="100%"  paddingBottom="10" paddingTop="10" {...props} justifyContent="Center" >
            <Avatar size="2xl"/>
            <Box ml="3">
                <Text fontWeight="bold">
                    {business}
                </Text>
                <Text fontSize="md">
                    {name}
                </Text>
                <Text fontSize="md">
                    {email}
                </Text>
                <Text fontSize="md">
                    {phone}
                </Text>
                { !details 
                  ? "" 
                  : (<NextLink href="/cuenta/[id]" as={`/cuenta/${businessId}`}>
                        <Flex h="100%" alignItems="center" justifyContent="center">
                            <Text>
                                <Button colorScheme="orange" backgroundColor="orange_" mt={4} mb={2}>Ver Detalles</Button>
                            </Text>
                        </Flex>
                </NextLink> )
                }
                
            </Box>
        </Flex>
    );
}