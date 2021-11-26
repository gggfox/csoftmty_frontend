import React, {useState} from 'react';
import {  Box, Flex, Heading, Input, InputGroup, InputLeftElement, Link, Text, Textarea } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/icon'
import {  EmailIcon } from '@chakra-ui/icons';

import  {BsPersonFill, BsPencil }  from 'react-icons/bs';
import {ImBubble} from 'react-icons/im'
import { useWindowSize } from '../hooks/useWindowSize';
interface FooterProps {
 
}


export const Footer : React.FC<FooterProps> = ({ }) => {
    const [text, setText] = useState("")
    const size = useWindowSize();
    const isDesktop = (size?.width as number >= 650) ? true : false

    return (
        <Flex bg="black_dark" h="70vh" flexDirection="column" alignItems="center" zIndex={2} p={5}>
            
            <Heading color="gray_dark" mt={10}>CONTACTANOS</Heading>
            <Text color="gray_dark">Lunes a viernes de 9:00 a 14:00 y de 16:00 a 18:30 horas</Text>
            
            <Flex width="100%" h="90%" flexDirection="row">

                <Flex ml="10%" my={10} flexDirection="column">
                   <Text as="b" fontSize="lg" color="gray_light">DIRECCIÓN:</Text> <br/>
                   <Text color="gray_dark" fontSize="md">Padre Mier #1251 Cuarto piso, Zona Centro.<br/> Monterrey, NL.</Text>
                   <Text as="b" fontSize="lg" color="gray_light" mt={5}>TELÉFONO:</Text>
                   <Text color="gray_dark" fontSize="md">8340-7840</Text>
                   <Link href="https://csoftmty.org/Aviso%20de%20Privacidad.html" my={5}>
                   <Text as="b" fontSize="lg" color="gray_light" mt={5}>Aviso de Privacidad</Text></Link>
                    
                </Flex>

                {!isDesktop ? (""):(
                <Flex ml={20} flexDirection="column" w="50%">

                <Flex mt={10} mb={2}>
                    <InputGroup mr={2}>
                        <InputLeftElement
                            pointerEvents="none"
                        >
                            <Icon as={BsPersonFill} name="PhoneIcon" color="white" />
                        </InputLeftElement>
                        <Input type="text" placeholder="nombre" color="white_light"/>
                    </InputGroup>


                    <InputGroup>
                        <InputLeftElement
                        pointerEvents="none"
                        >
                            <EmailIcon name="PhoneIcon" color="white" />
                        </InputLeftElement>
                        <Input type="email" placeholder="email" color="white_light"/>
                    </InputGroup>
                </Flex>

                <InputGroup mb={2}>
                    <InputLeftElement
                    pointerEvents="none"
                    ><Icon as={BsPencil} name="PencilIcon" color="white" />
                    </InputLeftElement>
                    <Input type="text" placeholder="asunto" color="white_light"/>
                </InputGroup>
                <InputGroup>
                    <InputLeftElement
                    pointerEvents="none"
                    >
                        <Icon as={ImBubble} name="MessageIcon" color="white" />
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
                </Flex>)}
            </Flex>
        </Flex>
    );
}