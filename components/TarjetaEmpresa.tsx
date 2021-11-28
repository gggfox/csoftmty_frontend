import React from 'react';
import { Text, Flex, Box, Button, Avatar, BoxProps, Link } from '@chakra-ui/react';

import NextLink from 'next/link';

interface TarjetaProps{
    businessId:number,
    business:string,
    name: string,
    phone?:string,
    email?:string,
    address?:string,
    details?: boolean,
    website?:string,
    props?:BoxProps
}

export const TarjetaEmpresa : React.FC<TarjetaProps & BoxProps> = ({ details = true,businessId,business,name,email,phone,website,address, ...props}) => {
    return(
        <Flex width="100%"  paddingBottom="10" paddingTop="10" {...props} >
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
                <Text fontSize="md">
                    {website}
                </Text>
                <Text fontSize="md">
                    {address}
                </Text>
                { !details 
                  ? "" 
                  : (<NextLink href="/cuenta/[id]" as={`/cuenta/${businessId}`}>
                     
                            <Text>
                                <Button colorScheme="orange" backgroundColor="orange_" my={4}>Ver Detalles</Button>
                            </Text>
                        
                </NextLink> )
                }
                
            </Box>
        </Flex>
    );
}