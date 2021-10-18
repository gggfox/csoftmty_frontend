import { chakra, Box, Image, Flex, useColorModeValue, Stack, Radio, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, Textarea, Checkbox } from "@chakra-ui/react";
import type { NextPage } from 'next'
import React from 'react'
import { Footer } from '../components/Footer'
import { NavBar } from '../components/NavBar'

const Formulario: NextPage = () => {
  return (
    <Flex bg="white_dark" h='100%' flexDirection="column">
      <NavBar></NavBar>
      {/*Pregunta 1*/}
      <Flex
        p={50}
        w="full"
        alignItems="center"
        justifyContent="left"
        marginTop={20}
        flexDirection="column"
      >
        <Flex width={"50%"} flexDirection={"column"} backgroundColor={"gray_light"}>
          <Box
            mx="auto"
            shadow="lg"
            rounded="lg"
            width={"100%"}
          >
            <Box px={4} py={2} backgroundColor={"gray"}>
              <chakra.h1
                color={"white"}
                fontSize="2xl"
              >
                1 - ¿Cuanto personal tiene tu empresa en Nuevo Leon?
              </chakra.h1>
            </Box>
          </Box>
            <Stack marginLeft={10} w="100%" my="15px">
              <Radio size="lg" name="1" colorScheme="red">
                De 0 - 50
              </Radio>
              <Radio size="lg" name="1" colorScheme="red">
                De 51-100
              </Radio>
              <Radio size="lg" name="1" colorScheme="red">
                De 101 - 200
              </Radio>
              <Radio size="lg" name="1" colorScheme="red">
                De 201 - 500
              </Radio>
              <Radio size="lg" name="1" colorScheme="red">
              {">"} 500
              </Radio>
            </Stack>
          </Flex>
      </Flex>
      {/*Pregunta 2*/}
      <Flex
        p={50}
        w="full"
        alignItems="center"
        justifyContent="left"
        marginTop={5}
        flexDirection="column"
      >
        <Flex width={"50%"} flexDirection={"column"} backgroundColor={"gray_light"}>
          <Box
            mx="auto"
            shadow="lg"
            rounded="lg"
            width={"100%"}
          >
            <Box px={4} py={2} backgroundColor={"gray"} width="100">
              <chakra.h1
                color={"white"}
                fontSize="2xl"
              >
                2 - ¿Cuáles fueron sus ingresos en el 2020?
              </chakra.h1>
            </Box>
          </Box>
            <Stack marginLeft={10} w="100%" my="15px">
              <Radio size="lg" name="1" colorScheme="red">
              {"<"} 30 mdp
              </Radio>
              <Radio size="lg" name="1" colorScheme="red">
               De 30-60 mdp 
              </Radio>
              <Radio size="lg" name="1" colorScheme="red">
               De 60-120 mdp
              </Radio>
              <Radio size="lg" name="1" colorScheme="red">
               De 120-300 mdp
              </Radio>
              <Radio size="lg" name="1" colorScheme="red">
               {">"} 300 mdp
              </Radio>
            </Stack>
          </Flex>
      </Flex>
      {/*Pregunta 3*/}
      <Flex
        p={50}
        w="full"
        alignItems="center"
        justifyContent="left"
        marginTop={5}
        flexDirection="column"
      >
        <Flex width={"50%"} flexDirection={"column"} backgroundColor={"gray_light"}>
          <Box
            mx="auto"
            shadow="lg"
            rounded="lg"
            width={"100%"}
          >
            <Box px={4} py={2} backgroundColor={"gray"} width="100">
              <chakra.h1
                color={"white"}
                fontSize="2xl"
              >
                3 - ¿Que porcentaje % creció en facturación tu empresa en el 2020 respecto al 2019?
              </chakra.h1>
            </Box>
          </Box>
            <Stack marginLeft={10} w="100%" my="15px">
              <Radio size="lg" name="1" colorScheme="red">
              {"<"} 30 mdp
              </Radio>
              <Radio size="lg" name="1" colorScheme="red">
               De 30-60 mdp 
              </Radio>
              <Radio size="lg" name="1" colorScheme="red">
               De 60-120 mdp
              </Radio>
              <Radio size="lg" name="1" colorScheme="red">
               De 120-300 mdp
              </Radio>
              <Radio size="lg" name="1" colorScheme="red">
               {">"} 300 mdp
              </Radio>
            </Stack>
          </Flex>
      </Flex>
      {/*Pregunta 5*/}
      <Flex
        p={50}
        w="full"
        alignItems="center"
        justifyContent="left"
        marginTop={5}
        flexDirection="column"
      >
        <Flex width={"50%"} flexDirection={"column"} backgroundColor={"gray_light"}>
          <Box
            mx="auto"
            shadow="lg"
            rounded="lg"
            width={"100%"}
          >
            <Box px={4} py={2} backgroundColor={"gray"} width="100">
              <chakra.h1
                color={"white"}
                fontSize="2xl"
              >
                5 - ¿De toda tu facturacion del 2019 que porcentaje fue de Tecnologias SMAC?
              </chakra.h1>
            </Box>
          </Box>
          <Box px={10} py={2} backgroundColor={"light_grey"} width="100">
            <NumberInput step={1} defaultValue={0} min={0} max={100} my="5%">
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </Box>
        </Flex>
      </Flex>
      {/*Pregunta 11*/}
      <Flex
        p={50}
        w="full"
        alignItems="center"
        justifyContent="left"
        marginTop={5}
        flexDirection="column"
      >
        <Flex width={"50%"} flexDirection={"column"} backgroundColor={"gray_light"}>
          <Box
            mx="auto"
            shadow="lg"
            rounded="lg"
            width={"100%"}
          >
            <Box px={4} py={2} backgroundColor={"gray"} width="100">
              <chakra.h1
                color={"white"}
                fontSize="2xl"
              >
                11 - ¿En tus propias palabras qué es Industria 4.0?
              </chakra.h1>
            </Box>
          </Box>
          <Box px={10} py={2} backgroundColor={"light_grey"} width="100">
            <Textarea my="5%" placeholder="En mi opinion la Industria 4.0 es..." />
          </Box>
        </Flex>
      </Flex>
      {/*Pregunta 12*/}
      <Flex
        p={50}
        w="full"
        alignItems="center"
        justifyContent="left"
        marginTop={5}
        flexDirection="column"
      >
        <Flex width={"50%"} flexDirection={"column"} backgroundColor={"gray_light"}>
          <Box
            mx="auto"
            shadow="lg"
            rounded="lg"
            width={"100%"}
          >
            <Box px={4} py={2} backgroundColor={"gray"} width="100">
              <chakra.h1
                color={"white"}
                fontSize="2xl"
              >
                12 - De los temas que incluye la Industria 4.0, indica cuáles actualmente forman parte de tu agenda de trabajo
              </chakra.h1>
            </Box>
          </Box>
            <Stack marginLeft={10} w="100%" my="15px">
              <Checkbox  size="lg" name="1" colorScheme="red">
               Big Data
              </Checkbox >
              <Checkbox  size="lg" name="1" colorScheme="red">
              Internet of Things (Iot)
              </Checkbox >
              <Checkbox  size="lg" name="1" colorScheme="red">
              Realidad Augmentada (AR)
              </Checkbox >
              <Checkbox  size="lg" name="1" colorScheme="red">
              Inteligencia Artificial
              </Checkbox >
              <Checkbox  size="lg" name="1" colorScheme="red">
              Seguridad Informatica
              </Checkbox >
              <Checkbox  size="lg" name="1" colorScheme="red">
              3D Printing
              </Checkbox >
              <Checkbox  size="lg" name="1" colorScheme="red">
              Robótica
              </Checkbox >
            </Stack>
          </Flex>
      </Flex>
    </Flex>
  );
};

export default Formulario