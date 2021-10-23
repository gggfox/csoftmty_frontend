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
      {/*Pregunta 4*/}
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
                4 - ¿Cuál es tu expectativa de crecimiento en facturación en este año?
              </chakra.h1>
            </Box>
          </Box>
            <Stack marginLeft={10} w="100%" my="15px">
              <Radio size="lg" name="1" colorScheme="red">
              No crecerá
              </Radio>
              <Radio size="lg" name="1" colorScheme="red">
              Creció entre 0-5 % 
              </Radio>
              <Radio size="lg" name="1" colorScheme="red">
              Creció entre 5-10%
              </Radio>
              <Radio size="lg" name="1" colorScheme="red">
              Creció entre 10-15%
              </Radio>
              <Radio size="lg" name="1" colorScheme="red">
              Creció más del 15%
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
                5 - ¿De toda tu facturacion del año pasado que porcentaje fue de Tecnologias 4.0*?
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
      {/*Pregunta 6*/}
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
                6 - ¿Cuál fue tu facturación anual promedio por persona durante el año pasado (ventas totales/numero total de empelados TIC)?
              </chakra.h1>
            </Box>
          </Box>
          <Box px={10} py={2} backgroundColor={"light_grey"} width="100">
            <NumberInput step={1} defaultValue={0} min={0} my="5%">
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </Box>
        </Flex>
      </Flex>
      {/*Pregunta 7*/}
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
                7 - ¿De tu facturación del año pasado, qué porcentaje % fue de productos y/o servicios que lanzaste durante los ultimos 3 años?
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
      {/*Pregunta 8*/}
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
                8 - ¿Qué porcentaje % de tu personal ocupado tiene alguna certificación tecnológica (Microsoft, PMP, Javam etc)?
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
      {/*Pregunta 9*/}
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
                9 - ¿Què porcentaje % de tu facturación proviene de tus ventas realizadas fuera del pais?
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
      {/*Pregunta 10*/}
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
                10 - ¿Tu empresa tiene algún tipo de certificación? 
              </chakra.h1>
            </Box>
          </Box>
            <Stack marginLeft={10} w="100%" my="15px">
              <Radio size="lg" name="1" colorScheme="red">
              CMMI 3
              </Radio>
              <Radio size="lg" name="1" colorScheme="red">
              CMMI 5
              </Radio>
              <Radio size="lg" name="1" colorScheme="red">
              MoProSoft
              </Radio>
              <Radio size="lg" name="1" colorScheme="red">
              ISO
              </Radio>
              <Radio size="lg" name="1" colorScheme="red">
              ISO 9001
              </Radio>
              <Radio size="lg" name="1" colorScheme="red">
              Otra
              </Radio>
            </Stack>
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
                11 - ¿En que sector se ubican la mayoria de tus clientes?
              </chakra.h1>
            </Box>
          </Box>
            <Stack marginLeft={10} w="100%" my="15px">
              <Radio size="lg" name="1" colorScheme="red">
              Salud
              </Radio>
              <Radio size="lg" name="1" colorScheme="red">
              Fintech
              </Radio>
              <Radio size="lg" name="1" colorScheme="red">
              Manufactura
              </Radio>
              <Radio size="lg" name="1" colorScheme="red">
              Retail
              </Radio>
              <Radio size="lg" name="1" colorScheme="red">
              Agrotech
              </Radio>
              <Radio size="lg" name="1" colorScheme="red">
              Educacion
              </Radio>
              <Radio size="lg" name="1" colorScheme="red">
              Turismo
              </Radio>
              <Radio size="lg" name="1" colorScheme="red">
              Otro
              </Radio>
            </Stack>
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
              <Checkbox  size="lg" name="1" colorScheme="red">
              Seguridad Informatica
              </Checkbox >
            </Stack>
          </Flex>
      </Flex>
      {/*Pregunta 13*/}
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
                13 - ¿Cuáles son tus clientes principales para cada uno de estos servicios?
              </chakra.h1>
            </Box>
          </Box>
          <Box px={10} py={2} backgroundColor={"light_grey"} width="100">
            <Textarea my="5%" placeholder="Mis clientes principales son..." />
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Formulario