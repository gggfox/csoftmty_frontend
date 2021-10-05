import { Button, Flex, Divider, SimpleGrid, Text, Radio, Stack, RadioGroup} from '@chakra-ui/react'
import { Box, HStack,  Center, Progress, Spacer, Checkbox} from '@chakra-ui/react'
import { Table, Th, Tr, Td, Thead, Tbody} from '@chakra-ui/react'
import type { NextPage } from 'next'
import React from 'react'
import { NavBar } from '../components/NavBar'

const Formulario_01: NextPage = () => {
  return (
    <Flex bg="white_dark" h='100vh' flexDirection="column">
      <NavBar></NavBar>
      <Flex height="200vh" width = "200vh" alignItems="center" justifyContent="center">
        <Flex direction="column" bg="white_dark" p={12} rounded={6}>
        <Box paddingBlockEnd = "10px" paddingTop = "80px">
            <HStack spacing="24px">
              <Button colorScheme="gray_dark" backgroundColor="gray_dark" flex="1">Seccion Previa</Button>
              <Progress hasStripe value={10} backgroundColor="gray_dark" height="46px"  flex="3"/>
            </HStack>
          </Box>
          <Divider />
          <Table variant="striped" colorScheme="white" >
            <Thead>
              <Tr backgroundColor = "#7B7B7B" >
                <Th color="white">Lenguaje de programacion</Th>
                <Th color="white">No usamos esta herramienta</Th>
                <Th color="white">Usamos esta herramienta y nos gusta</Th>
                <Th color="white">Usamos esta herramienta y <u>NO</u> nos gusta</Th>
                <Th color="white">Nos gustaria tener esta herramienta en el futuro</Th>
             </Tr>
            </Thead>
            </Table>


            <Flex color="black" justify = "space-around" paddingTop = "30px">
              <Center flex="1">
                <Text fontWeight="bold" >Python</Text>
              </Center>
              <Center flex="5">
                <Box w="100%" bg="tomato">
                  <RadioGroup defaultValue="4" color = "lightgray">
                    <HStack justify = "space-between" paddingLeft = "100px" paddingRight = "200px">
                        <Radio value="1"></Radio>
                        <Radio value="2"></Radio>
                        <Radio value="3"></Radio>
                        <Radio value="4"></Radio>
                    </HStack >
                  </RadioGroup>
                </Box>
                </Center>
            </Flex>
            <Divider paddingTop = "10px"/>
            <Flex color="black" justify = "space-around" paddingTop = "10px">
              <Center flex="1">
                <Text fontWeight="bold" >Javascript</Text>
              </Center>
              <Center flex="5">
                <Box w="100%" bg="tomato">
                  <RadioGroup defaultValue="4" color = "lightgray">
                    <HStack justify = "space-between" paddingLeft = "100px" paddingRight = "200px">
                        <Radio value="1"></Radio>
                        <Radio value="2"></Radio>
                        <Radio value="3"></Radio>
                        <Radio value="4"></Radio>
                    </HStack >
                  </RadioGroup>
                </Box>
                </Center>
            </Flex>
            <Divider paddingTop = "10px" paddingEnd = "10px"/>
            <Flex color="black" justify = "space-around" paddingTop = "10px">
              <Center flex="1">
                <Text fontWeight="bold" >C#</Text>
              </Center>
              <Center flex="5">
                <Box w="100%" bg="tomato">
                  <RadioGroup defaultValue="4" color = "lightgray">
                    <HStack justify = "space-between" paddingLeft = "100px" paddingRight = "200px">
                        <Radio value="1"></Radio>
                        <Radio value="2"></Radio>
                        <Radio value="3"></Radio>
                        <Radio value="4"></Radio>
                    </HStack >
                  </RadioGroup>
                </Box>
                </Center>
            </Flex>
            <Divider paddingTop = "10px" paddingEnd = "10px"/>

            <Flex color="black" justify = "space-around" paddingTop = "10px">
              <Center flex="1">
                <Text fontWeight="bold" >Java</Text>
              </Center>
              <Center flex="5">
                <Box w="100%" bg="tomato">
                  <RadioGroup defaultValue="4" color = "lightgray">
                    <HStack justify = "space-between" paddingLeft = "100px" paddingRight = "200px">
                        <Radio value="1"></Radio>
                        <Radio value="2"></Radio>
                        <Radio value="3"></Radio>
                        <Radio value="4"></Radio>
                    </HStack >
                  </RadioGroup>
                </Box>
                </Center>
            </Flex>

            <Flex color="black" justify = "space-around" paddingTop = "10px">
              <Center flex="1">
                <Text fontWeight="bold" >html/css</Text>
              </Center>
              <Center flex="5">
                <Box w="100%" bg="tomato">
                  <RadioGroup defaultValue="4" color = "lightgray">
                    <HStack justify = "space-between" paddingLeft = "100px" paddingRight = "200px">
                        <Radio value="1"></Radio>
                        <Radio value="2"></Radio>
                        <Radio value="3"></Radio>
                        <Radio value="4"></Radio>
                    </HStack >
                  </RadioGroup>
                </Box>
                </Center>
            </Flex>
            <Divider paddingTop = "10px" paddingEnd = "10px"/>

            <Flex color="black" justify = "space-around" paddingTop = "10px">
              <Center flex="1">
                <Text fontWeight="bold" >SQL</Text>
              </Center>
              <Center flex="5">
                <Box w="100%" bg="tomato">
                  <RadioGroup defaultValue="4" color = "lightgray">
                    <HStack justify = "space-between" paddingLeft = "100px" paddingRight = "200px">
                        <Radio value="1"></Radio>
                        <Radio value="2"></Radio>
                        <Radio value="3"></Radio>
                        <Radio value="4"></Radio>
                    </HStack >
                  </RadioGroup>
                </Box>
                </Center>
            </Flex>
            <Divider paddingTop = "10px" paddingEnd = "10px"/>

            <Flex color="black" justify = "space-around" paddingTop = "10px">
              <Center flex="1">
                <Text fontWeight="bold" >Node.js</Text>
              </Center>
              <Center flex="5">
                <Box w="100%" bg="tomato">
                  <RadioGroup defaultValue="4" color = "lightgray">
                    <HStack justify = "space-between" paddingLeft = "100px" paddingRight = "200px">
                        <Radio value="1"></Radio>
                        <Radio value="2"></Radio>
                        <Radio value="3"></Radio>
                        <Radio value="4"></Radio>
                    </HStack >
                  </RadioGroup>
                </Box>
                </Center>
            </Flex>
            <Divider paddingTop = "10px" paddingEnd = "10px"/>
            <Flex color="black" justify = "space-around" paddingTop = "10px">
              <Center flex="1">
                <Text fontWeight="bold" >Typescript</Text>
              </Center>
              <Center flex="5">
                <Box w="100%" bg="tomato">
                  <RadioGroup defaultValue="4" color = "lightgray">
                    <HStack justify = "space-between" paddingLeft = "100px" paddingRight = "200px">
                        <Radio value="1"></Radio>
                        <Radio value="2"></Radio>
                        <Radio value="3"></Radio>
                        <Radio value="4"></Radio>
                    </HStack >
                  </RadioGroup>
                </Box>
                </Center>
            </Flex>
            <Divider paddingTop = "10px" paddingEnd = "10px"/>
            <Flex color="black" justify = "space-around" paddingTop = "10px">
              <Center flex="1">
                <Text fontWeight="bold" >bash/shell</Text>
              </Center>
              <Center flex="5">
                <Box w="100%" bg="tomato">
                  <RadioGroup defaultValue="4" color = "lightgray">
                    <HStack justify = "space-between" paddingLeft = "100px" paddingRight = "200px">
                        <Radio value="1"></Radio>
                        <Radio value="2"></Radio>
                        <Radio value="3"></Radio>
                        <Radio value="4"></Radio>
                    </HStack >
                  </RadioGroup>
                </Box>
                </Center>
            </Flex>
            <Divider paddingTop = "10px" paddingEnd = "10px"/>
            <Flex color="black" justify = "space-around" paddingTop = "10px">
              <Center flex="1">
                <Text fontWeight="bold" >C++</Text>
              </Center>
              <Center flex="5">
                <Box w="100%" bg="tomato">
                  <RadioGroup defaultValue="4" color = "lightgray">
                    <HStack justify = "space-between" paddingLeft = "100px" paddingRight = "200px">
                        <Radio value="1"></Radio>
                        <Radio value="2"></Radio>
                        <Radio value="3"></Radio>
                        <Radio value="4"></Radio>
                    </HStack >
                  </RadioGroup>
                </Box>
                </Center>
            </Flex>
            <Divider paddingTop = "10px" paddingEnd = "10px"/>
            <Flex color="black" justify = "space-around" paddingTop = "10px">
              <Center flex="1">
                <Text fontWeight="bold" >PHP</Text>
              </Center>
              <Center flex="5">
                <Box w="100%" bg="tomato">
                  <RadioGroup defaultValue="4" color = "lightgray">
                    <HStack justify = "space-between" paddingLeft = "100px" paddingRight = "200px">
                        <Radio value="1"></Radio>
                        <Radio value="2"></Radio>
                        <Radio value="3"></Radio>
                        <Radio value="4"></Radio>
                    </HStack >
                  </RadioGroup>
                </Box>
                </Center>
            </Flex>
            <Divider paddingTop = "10px" paddingEnd = "10px"/>
            <Flex color="black" justify = "space-around" paddingTop = "10px">
              <Center flex="1">
                <Text fontWeight="bold" >C</Text>
              </Center>
              <Center flex="5">
                <Box w="100%" bg="tomato">
                  <RadioGroup defaultValue="4" color = "lightgray">
                    <HStack justify = "space-between" paddingLeft = "100px" paddingRight = "200px">
                        <Radio value="1"></Radio>
                        <Radio value="2"></Radio>
                        <Radio value="3"></Radio>
                        <Radio value="4"></Radio>
                    </HStack >
                  </RadioGroup>
                </Box>
                </Center>
            </Flex>
            <Divider paddingTop = "10px" paddingEnd = "10px"/>
            <Flex color="black" justify = "space-around" paddingTop = "10px">
              <Center flex="1">
                <Text fontWeight="bold" >Powershell</Text>
              </Center>
              <Center flex="5">
                <Box w="100%" bg="tomato">
                  <RadioGroup defaultValue="4" color = "lightgray">
                    <HStack justify = "space-between" paddingLeft = "100px" paddingRight = "200px">
                        <Radio value="1"></Radio>
                        <Radio value="2"></Radio>
                        <Radio value="3"></Radio>
                        <Radio value="4"></Radio>
                    </HStack >
                  </RadioGroup>
                </Box>
                </Center>
            </Flex>
            <Divider paddingTop = "10px" paddingEnd = "10px"/>
            <Flex color="black" justify = "space-around" paddingTop = "10px">
              <Center flex="1">
                <Text fontWeight="bold" >Go</Text>
              </Center>
              <Center flex="5">
                <Box w="100%" bg="tomato">
                  <RadioGroup defaultValue="4" color = "lightgray">
                    <HStack justify = "space-between" paddingLeft = "100px" paddingRight = "200px">
                        <Radio value="1"></Radio>
                        <Radio value="2"></Radio>
                        <Radio value="3"></Radio>
                        <Radio value="4"></Radio>
                    </HStack >
                  </RadioGroup>
                </Box>
                </Center>
            </Flex>
            <Divider paddingTop = "10px" paddingEnd = "10px"/>
            <Flex color="black" justify = "space-around" paddingTop = "10px">
              <Center flex="1">
                <Text fontWeight="bold" >Rust</Text>
              </Center>
              <Center flex="5">
                <Box w="100%" bg="tomato">
                  <RadioGroup defaultValue="4" color = "lightgray">
                    <HStack justify = "space-between" paddingLeft = "100px" paddingRight = "200px">
                        <Radio value="1"></Radio>
                        <Radio value="2"></Radio>
                        <Radio value="3"></Radio>
                        <Radio value="4"></Radio>
                    </HStack >
                  </RadioGroup>
                </Box>
                </Center>
            </Flex>
            <Divider paddingTop = "10px" paddingEnd = "10px"/>
            <Flex color="black" justify = "space-around" paddingTop = "10px">
              <Center flex="1">
                <Text fontWeight="bold" >Kotlin</Text>
              </Center>
              <Center flex="5">
                <Box w="100%" bg="tomato">
                  <RadioGroup defaultValue="4" color = "lightgray">
                    <HStack justify = "space-between" paddingLeft = "100px" paddingRight = "200px">
                        <Radio value="1"></Radio>
                        <Radio value="2"></Radio>
                        <Radio value="3"></Radio>
                        <Radio value="4"></Radio>
                    </HStack >
                  </RadioGroup>
                </Box>
                </Center>
            </Flex>
            <Divider paddingTop = "10px" paddingEnd = "10px"/>
            <Flex color="black" justify = "space-around" paddingTop = "10px">
              <Center flex="1">
                <Text fontWeight="bold" >Objective-C</Text>
              </Center>
              <Center flex="5">
                <Box w="100%" bg="tomato">
                  <RadioGroup defaultValue="4" color = "lightgray">
                    <HStack justify = "space-between" paddingLeft = "100px" paddingRight = "200px">
                        <Radio value="1"></Radio>
                        <Radio value="2"></Radio>
                        <Radio value="3"></Radio>
                        <Radio value="4"></Radio>
                    </HStack >
                  </RadioGroup>
                </Box>
                </Center>
            </Flex>
            <Divider paddingTop = "10px" paddingEnd = "10px"/>
            <Flex color="black" justify = "space-around" paddingTop = "10px">
              <Center flex="1">
                <Text fontWeight="bold" >Ruby</Text>
              </Center>
              <Center flex="5">
                <Box w="100%" bg="tomato">
                  <RadioGroup defaultValue="4" color = "lightgray">
                    <HStack justify = "space-between" paddingLeft = "100px" paddingRight = "200px">
                        <Radio value="1"></Radio>
                        <Radio value="2"></Radio>
                        <Radio value="3"></Radio>
                        <Radio value="4"></Radio>
                    </HStack >
                  </RadioGroup>
                </Box>
                </Center>
            </Flex>
            <Divider paddingTop = "10px" paddingEnd = "10px"/>
            <Flex color="black" justify = "space-around" paddingTop = "10px">
              <Center flex="1">
                <Text fontWeight="bold" >Dart</Text>
              </Center>
              <Center flex="5">
                <Box w="100%" bg="tomato">
                  <RadioGroup defaultValue="4" color = "lightgray">
                    <HStack justify = "space-between" paddingLeft = "100px" paddingRight = "200px">
                        <Radio value="1"></Radio>
                        <Radio value="2"></Radio>
                        <Radio value="3"></Radio>
                        <Radio value="4"></Radio>
                    </HStack >
                  </RadioGroup>
                </Box>
                </Center>
            </Flex>
            <Divider paddingTop = "10px" paddingEnd = "10px"/>
            <Flex color="black" justify = "space-around" paddingTop = "10px">
              <Center flex="1">
                <Text fontWeight="bold" >R</Text>
              </Center>
              <Center flex="5">
                <Box w="100%" bg="tomato">
                  <RadioGroup defaultValue="4" color = "lightgray">
                    <HStack justify = "space-between" paddingLeft = "100px" paddingRight = "200px">
                        <Radio value="1"></Radio>
                        <Radio value="2"></Radio>
                        <Radio value="3"></Radio>
                        <Radio value="4"></Radio>
                    </HStack >
                  </RadioGroup>
                </Box>
                </Center>
            </Flex>
            <Divider paddingTop = "10px" paddingEnd = "10px"/>
            <Flex color="black" justify = "space-around" paddingTop = "10px">
              <Center flex="1">
                <Text fontWeight="bold" >Scala</Text>
              </Center>
              <Center flex="5">
                <Box w="100%" bg="tomato">
                  <RadioGroup defaultValue="4" color = "lightgray">
                    <HStack justify = "space-between" paddingLeft = "100px" paddingRight = "200px">
                        <Radio value="1"></Radio>
                        <Radio value="2"></Radio>
                        <Radio value="3"></Radio>
                        <Radio value="4"></Radio>
                    </HStack >
                  </RadioGroup>
                </Box>
                </Center>
            </Flex>
            <Divider paddingTop = "10px" paddingEnd = "10px"/>
            <Flex color="black" justify = "space-around" paddingTop = "10px">
              <Center flex="1">
                <Text fontWeight="bold" >Swift</Text>
              </Center>
              <Center flex="5">
                <Box w="100%" bg="tomato">
                  <RadioGroup defaultValue="4" color = "lightgray">
                    <HStack justify = "space-between" paddingLeft = "100px" paddingRight = "200px">
                        <Radio value="1"></Radio>
                        <Radio value="2"></Radio>
                        <Radio value="3"></Radio>
                        <Radio value="4"></Radio>
                    </HStack >
                  </RadioGroup>
                </Box>
                </Center>
            </Flex>
            <Divider paddingTop = "10px" paddingEnd = "10px"/>
            <Flex color="black" justify = "space-around" paddingTop = "10px">
              <Center flex="1">
                <Text fontWeight="bold" >Assembly</Text>
              </Center>
              <Center flex="5">
                <Box w="100%" bg="tomato">
                  <RadioGroup defaultValue="4" color = "lightgray">
                    <HStack justify = "space-between" paddingLeft = "100px" paddingRight = "200px">
                        <Radio value="1"></Radio>
                        <Radio value="2"></Radio>
                        <Radio value="3"></Radio>
                        <Radio value="4"></Radio>
                    </HStack >
                  </RadioGroup>
                </Box>
                </Center>
            </Flex>
            <Divider paddingTop = "10px" paddingEnd = "10px"/>
            <Flex color="black" justify = "space-around" paddingTop = "10px">
              <Center flex="1">
                <Text fontWeight="bold" >Perl</Text>
              </Center>
              <Center flex="5">
                <Box w="100%" bg="tomato">
                  <RadioGroup defaultValue="4" color = "lightgray">
                    <HStack justify = "space-between" paddingLeft = "100px" paddingRight = "200px">
                        <Radio value="1"></Radio>
                        <Radio value="2"></Radio>
                        <Radio value="3"></Radio>
                        <Radio value="4"></Radio>
                    </HStack >
                  </RadioGroup>
                </Box>
                </Center>
            </Flex>
            <Divider paddingTop = "10px" paddingEnd = "10px"/>
            <Flex color="black" justify = "space-around" paddingTop = "10px">
              <Center flex="1">
                <Text fontWeight="bold" >LISP</Text>
              </Center>
              <Center flex="5">
                <Box w="100%" bg="tomato">
                  <RadioGroup defaultValue="4" color = "lightgray">
                    <HStack justify = "space-between" paddingLeft = "100px" paddingRight = "200px">
                        <Radio value="1"></Radio>
                        <Radio value="2"></Radio>
                        <Radio value="3"></Radio>
                        <Radio value="4"></Radio>
                    </HStack >
                  </RadioGroup>
                </Box>
                </Center>
            </Flex>
            <Divider paddingTop = "10px" paddingEnd = "10px"/>
            <Flex color="black" justify = "space-around" paddingTop = "10px">
              <Center flex="1">
                <Text fontWeight="bold" >COBOL</Text>
              </Center>
              <Center flex="5">
                <Box w="100%" bg="tomato">
                  <RadioGroup defaultValue="4" color = "lightgray">
                    <HStack justify = "space-between" paddingLeft = "100px" paddingRight = "200px">
                        <Radio value="1"></Radio>
                        <Radio value="2"></Radio>
                        <Radio value="3"></Radio>
                        <Radio value="4"></Radio>
                    </HStack >
                  </RadioGroup>
                </Box>
                </Center>
            </Flex>
            <Divider paddingTop = "10px" paddingEnd = "10px"/>
          <Box paddingTop = "20px">
            <Flex>
              <Button colorScheme="gray_dark" backgroundColor="gray_dark" flex="1">Seccion Previa</Button>
              <Spacer /> <Spacer />
              <Button colorScheme="gray_dark" backgroundColor="gray_dark" flex="1">Siguiente Seccion</Button>
            </Flex>
          </Box>
        </Flex>
      </Flex>       
    </Flex>
  )
}

export default Formulario_01