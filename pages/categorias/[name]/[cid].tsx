import { Flex,Heading, Divider, Box } from '@chakra-ui/react'
import type { NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import { NavBar } from '../../../components/NavBar'
import { TarjetaEmpresa } from '../../../components/TarjetaEmpresa'
import { useRouter } from 'next/router'
import axios from 'axios'

const Categoria: NextPage = () => {
  const size = global.window && window.innerWidth < 800
  const lg_txt = (size) ? "2em":"3em"
  const router = useRouter()
  let {name,cid} = router.query
  const [content,setContent] = useState([])

  const cleanTitle = (title:string) => {
    if (title === undefined){
      return ''
    }
    return title.replace(/_/g, ' ')
  } 

    useEffect(() => {
    const f = async () => {
      const token = localStorage.getItem('token')
      let {_,cid} = router.query
      console.log(cid)
      let page_content:any = []
      if (cid) {

      const {data} = await axios.get(
        `${process.env.base_url}/users?iPage=1&iPageSize=100&sCategoryId=${cid}`,
          {headers: { Authorization: `Bearer ${token}`}})

          console.log('DATA',data)
          for(let x = 0; x<data.enterprises.length;x++){
            let email = data.enterprises[x].sEmail
            let phone = data.enterprises[x].sPhone
            let name = data.enterprises[x].oPublicData.sPublicName
            let role = data.enterprises[x].sRole
            let bId  = data.enterprises[x]._id
            page_content.push(<TarjetaEmpresa businessId={bId} business={name} name={role} email={email} phone={phone} flexBasis='50%'/>)
          }
       setContent(page_content)  
       console.log(page_content) 
       console.log(content)
      }
    }
    f()
    },[router])


  return (
    <Flex bg="white_dark" h='100%' flexDirection="column" alignItems="center">
      <NavBar></NavBar>
      <Flex alignItems="center" justifyContent="center" flexDirection="column" width="80%">
        <Heading fontSize="6vh" mb={20} mt={20} justifyContent="center" color="light_grey">{cleanTitle(name as string)}</Heading>
        <Flex alignItems="center" justifyContent="space-around" width="100%" flexBasis='50%' flexFlow='wrap'>
      
          {content}
      
           
  

        </Flex>
     
   
      </Flex>

    </Flex>
  )
}

export default Categoria
