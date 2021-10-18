import React, {useState} from 'react';
import {  Box, Flex, Heading, Input, InputGroup, InputLeftElement, Text, Textarea } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/icon'
import {  EmailIcon } from '@chakra-ui/icons';

import  {BsPersonFill, BsPencil }  from 'react-icons/bs';
import {ImBubble} from 'react-icons/im'
interface FooterProps {
 
}


export const Footer : React.FC<FooterProps> = ({ }) => {
    const [text, setText] = useState("")

    return (
        <Flex bg="black_dark" h="60vh" flexDirection="column" alignItems="center">
            
            <Heading color="gray_dark" mt={10}>CONTACTANOS</Heading>
            <Text color="gray_dark">Lunes a viernes de 9:00 a 14:00 y de 16:00 a 18:30 horas</Text>
            <Flex width="100%">
                <Flex ml="10%" my={10} flexDirection="column">
                   <Text as="b" fontSize="sm" color="gray_light">DIRECCIÓN:</Text> <br/>
                   <Text color="gray_dark" fontSize="xs">Padre Mier #1251 Cuarto piso, Zona Centro.<br/> Monterrey, NL.</Text>
                   <Text as="b" fontSize="sm" color="gray_light" mt={5}>TELÉFONO:</Text>
                   <Text color="gray_dark" fontSize="xs">8340-7840</Text> 
                </Flex>
                <Box ml={20}>

                <Flex mt={10}>
                    <InputGroup>
                        <InputLeftElement
                        pointerEvents="none"
                        
                        >
                            <Icon as={BsPersonFill} name="PhoneIcon" color="gray.300" />
                        </InputLeftElement>
                        <Input type="text" placeholder="nombre" color="white_light"/>
                    </InputGroup>


                    <InputGroup>
                        <InputLeftElement
                        pointerEvents="none"
                        >
                            <EmailIcon name="PhoneIcon" color="gray.300" />
                        </InputLeftElement>
                        <Input type="email" placeholder="email" color="white_light"/>
                    </InputGroup>
                </Flex>

                <InputGroup>
                    <InputLeftElement
                    pointerEvents="none"
                    ><
                        Icon as={BsPencil} name="PhoneIcon" color="gray.300" />
                    </InputLeftElement>
                    <Input type="text" placeholder="asunto" color="white_light"/>
                </InputGroup>
                <InputGroup>
                    <InputLeftElement
                    pointerEvents="none"
                    >
                        <Icon as={ImBubble} name="PhoneIcon" color="gray.300" />
                    </InputLeftElement>
                    <Textarea  type="text" placeholder="     mensaje" color="white_light" focus="none" value={text}
                     onChange={(e:any) => {
                        if(e.target.value.trim() === ""){
                            setText("")
                        }else{
                           setText("     "+e.target.value.trim()) 
                        }
                     }}/>
                </InputGroup>
                </Box>
            </Flex>
        </Flex>
    );
}