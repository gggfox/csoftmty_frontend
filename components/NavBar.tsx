import React, { useEffect, useState } from 'react';
import { Text, Flex, Link, Box, Button, Menu, MenuButton, Portal, MenuList, MenuItem } from '@chakra-ui/react';
import logo from '../public/img/logo.png'
import Image from 'next/image'
import NextLink from 'next/link';
import {useRouter } from 'next/router';
import {useWindowSize} from '../hooks/useWindowSize'
import axios from 'axios';
import { AddIcon, ChevronDownIcon, EditIcon, ExternalLinkIcon, HamburgerIcon, RepeatIcon } from '@chakra-ui/icons';
interface NavBarProps {
 
}

const getLink = (category:string) => {
    return category.replace(/\s+/g, '_')
}




export const NavBar : React.FC<NavBarProps> = ({ }) => {
    const router = useRouter()
    const path = router.pathname
    const size = useWindowSize();
    const [categories, setCategories] = useState([[],[],[],[]])
    const [categoryIds,setCategoryIds] = useState([[],[],[],[]])
    const [active, setActive] = useState(-1)
    let user_id:any = ''
    try{
        user_id = localStorage?.getItem('myId')
    }catch{
        user_id = -1
    }
    useEffect(() => {
        
    const f = async () => {
        const {data} = await axios.get(`${process.env.base_url}/categories`)
        let arr:any = [[],[],[],[]]
        let ids:any = [[],[],[],[]]
        let curr = ''
        let pos = -1
        let cid = -1
        for(let c in data.categories){
            let name = data.categories[c].sName.split('|')
            name[0] = name[0].trim()
            name[1] = name[1].trim()
            if(name[0] != curr){
                pos++
                curr = name[0]
            }
            cid = data.categories[c]._id
            ids[pos].push(cid)
            arr[pos].push(name[1])

        }
        
        setCategories(arr);
        setCategoryIds(ids)        
    }

    f()
    },[])

                 

    return (
        <Flex bg="white_light"  justifyContent="space-between" alignItems="center" boxShadow="md" position="fixed" w="100vw" zIndex={10} flexDirection="row" h={16}>
            
            <NextLink href="/"><Link mx={5} my={2}>
            <Image src={logo} alt="logo" width="160" height="50"/></Link>
            </NextLink>
            {(size?.width as number >= 650) 
            ?( <Flex  h="100%" >
                    <NextLink href="/">
                        <Link color="black_dark" fontFamily="lato"  borderColor="orange_" borderBottomWidth={ path == '/' ? 5 : 0} mr={6}>
                            <Flex h="100%" alignItems="center">Inicio</Flex>
                        </Link>
                    </NextLink> 
                    

                <NextLink href="/datosNL" >
                    <Link color="black_dark"  fontFamily="lato" borderColor="orange_" borderBottomWidth={ path == '/datosNL' ? 5 : 0}  mr={5}>
                        <Flex  h="100%" alignItems="center">
                        Datos N.L.
                        </Flex>
                </Link>
                </NextLink> 


                <Menu autoSelect={false} closeOnSelect={false}>
                <MenuButton color="black_dark"  fontFamily="lato" borderColor="orange_" borderBottomWidth={ path.slice(0,11) == '/categorias' ? 5 : 0}  mr={5} p="6px"
                _expanded={{"bg":"black", "color":"white", "borderRadius":"6px"}}
                >Categorias</MenuButton>
                <Portal>
                    <MenuList bg="black" color="white_light" borderWidth={0} zIndex={10}>

                    
                        <MenuItem 
                          bg = {active==0 ? 'orange' : ''}
                          _hover={{"bg":"orange_"}}
                          onClick={() => {active == 0 ? setActive(-1) : setActive(0)}}
                        >
                            DESAROLLO DE SOFTWARE
                        </MenuItem>
                        {active != 0 ? null : (categories[0].map((name,index) => (
                            <NextLink href="/categorias/[name]/[cid]" as={`/categorias/${getLink(name)}/${categoryIds[0][index]}`}>
                                <MenuItem id={name} bg='#161616' _hover={{"bg":"orange_"}}>-{name}</MenuItem>
                            </NextLink>
                        )))}

                        <MenuItem 
                        bg = {active==1 ? 'orange' : ''}
                          _hover={{"bg":"orange_"}}
                          onClick={() => {active == 1 ? setActive(-1) : setActive(1)}}
                        >
                            HARDWARE
                        </MenuItem>
                        {active != 1 ? null : (categories[1].map((name,index) => (
                            <NextLink href="/categorias/[name]/[cid]" as={`/categorias/${getLink(name)}/${categoryIds[1][index]}`}>
                                <MenuItem id={name} bg='#161616'_hover={{"bg":"orange_"}}>-{name}</MenuItem>
                            </NextLink>
                        )))}

                        <MenuItem 
                        bg = {active==2 ? 'orange' : ''}
                          _hover={{"bg":"orange_"}}
                          onClick={()=> {active == 2 ? setActive(-1) : setActive(2)}}
                        >
                            SERVICIOS
                        </MenuItem>
                        {active != 2 ? null : (categories[2].map((name,index) => (
                            <NextLink href="/categorias/[name]/[cid]" as={`/categorias/${getLink(name)}/${categoryIds[2][index]}`}>
                                <MenuItem id={name} bg='#161616'_hover={{"bg":"orange_"}}>-{name}</MenuItem>
                            </NextLink>
                        )))}

                        <MenuItem 
                        bg = {active==3 ? 'orange' : ''}
                          _hover={{"bg":"orange_"}}
                          onClick={()=>{active == 3 ? setActive(-1) : setActive(3)}}
                        >
                            TECNOLOGIA 4.0
                        </MenuItem>
                        {active != 3 ? null : (categories[3].map((name,index) => (
                            <NextLink href="/categorias/[name]/[cid]" as={`/categorias/${getLink(name)}/${categoryIds[3][index]}`}>
                                <MenuItem id={name} bg='#161616'_hover={{"bg":"orange_"}}>-{name}</MenuItem>
                            </NextLink>
                        )))}
                    </MenuList>
                </Portal>
                </Menu>
                
                <NextLink href={user_id===null?"/login":"/cuenta/[id]"} as={`/cuenta/${user_id}`}>
                    <Link color="black_dark" fontFamily="lato" borderColor="orange_" borderBottomWidth={ path == '/cuenta/[id]' ? 5 : 0}  mr={6} >
                        <Flex h="100%" alignItems="center" justifyContent="center">
                            <Text>
                                Mi cuenta
                            </Text>
                        </Flex>
                </Link>
                </NextLink> 
                </Flex>)

            :(<Flex  h="100%" mt="1.5em" mr="1em">
                <Menu closeOnSelect={false}>
                <MenuButton as={Button} colorScheme="orange">
                <HamburgerIcon />
  </MenuButton>
                    <MenuList w="100vw" h="100vh">
                        <MenuItem>
                        <NextLink href="/">
                        <Link color="black_dark" fontFamily="lato"  borderColor="orange_" borderBottomWidth={ path == '/' ? 5 : 0} mr={6}>
                            <Flex h="100%" alignItems="center">Inicio</Flex>
                        </Link>
                    </NextLink> 
                 
                        </MenuItem>
                        <MenuItem>
                        <NextLink href="/datosNL" >
                    <Link color="black_dark"  fontFamily="lato" borderColor="orange_" borderBottomWidth={ path == '/datosNL' ? 5 : 0}  mr={5}>
                        <Flex  h="100%" alignItems="center">
                        Datos N.L.
                        </Flex>
                </Link>
                </NextLink> 
                        </MenuItem>
                     
                        

                    
                        <MenuItem 
                     
                          bg = {active==0 ? 'orange' : ''}
                          _hover={{"bg":"orange_"}}
                          onClick={() => {active == 0 ? setActive(-1) : setActive(0)}}
                        >
                            DESAROLLO DE SOFTWARE
                        </MenuItem>
                        {active != 0 ? null : (categories[0].map((name,index) => (
                            <NextLink href="/categorias/[name]/[cid]" as={`/categorias/${getLink(name)}/${categoryIds[0][index]}`}>
                                <MenuItem id={name}  _hover={{"bg":"orange_"}}>-{name}</MenuItem>
                            </NextLink>
                        )))}

                        <MenuItem 
                      
                        bg = {active==1 ? 'orange' : ''}
                          _hover={{"bg":"orange_"}}
                          onClick={() => {active == 1 ? setActive(-1) : setActive(1)}}
                        >
                            HARDWARE
                        </MenuItem>
                        {active != 1 ? null : (categories[1].map((name,index) => (
                            <NextLink href="/categorias/[name]/[cid]" as={`/categorias/${getLink(name)}/${categoryIds[1][index]}`}>
                                <MenuItem id={name} _hover={{"bg":"orange_"}}>-{name}</MenuItem>
                            </NextLink>
                        )))}

                        <MenuItem 
                   
                        bg = {active==2 ? 'orange' : ''}
                          _hover={{"bg":"orange_"}}
                          onClick={()=> {active == 2 ? setActive(-1) : setActive(2)}}
                        >
                            SERVICIOS
                        </MenuItem>
                        {active != 2 ? null : (categories[2].map((name,index) => (
                            <NextLink href="/categorias/[name]/[cid]" as={`/categorias/${getLink(name)}/${categoryIds[2][index]}`}>
                                <MenuItem id={name} _hover={{"bg":"orange_"}}>-{name}</MenuItem>
                            </NextLink>
                        )))}

                        <MenuItem 
                   
                        bg = {active==3 ? 'orange' : ''}
                          _hover={{"bg":"orange_"}}
                          onClick={()=>{active == 3 ? setActive(-1) : setActive(3)}}
                        >
                           TECNOLOGIA 4.0
                        </MenuItem>
                        {active != 3 ? null : (categories[3].map((name,index) => (
                            <NextLink href="/categorias/[name]/[cid]" as={`/categorias/${getLink(name)}/${categoryIds[3][index]}`}>
                                <MenuItem id={name} _hover={{"bg":"orange_"}}>-{name}</MenuItem>
                            </NextLink>
                        )))}
                
                     
                        <MenuItem>
                        <NextLink href={user_id===null?"/login":"/cuenta/[id]"} as={`/cuenta/${user_id}`}>
                    <Link color="black_dark" fontFamily="lato" borderColor="orange_" borderBottomWidth={ path == '/cuenta/[id]' ? 5 : 0}  mr={6} >
                        <Flex h="100%" alignItems="center" justifyContent="center">
                            <Text>
                                Mi cuenta
                            </Text>
                        </Flex>
                </Link>
                </NextLink> 
                        </MenuItem>
                    </MenuList>
                </Menu>
            </Flex>
                
            )}
        </Flex>
    );
}