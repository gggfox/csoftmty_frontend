import { Box, Button, Flex,Link,Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import { NavBar } from '../../components/NavBar'
import { TarjetaEmpresa } from '../../components/TarjetaEmpresa'
import NextLink from 'next/link';
import { useWindowSize } from '../../hooks/useWindowSize'
import axios from 'axios'
import { useRouter } from 'next/router'
import { Radar } from 'react-chartjs-2'

const Cuenta: NextPage = () => {
  const size = useWindowSize();
  const isDesktop = (size?.width as number >= 650) ? true : false
  const router = useRouter()
  const [user, setUser] = useState<any>([])
  const [stats, setStats] = useState<any>([])
  let {id} = router.query;
  const [isMyPage, setIsMyPage] = useState(false);
  //router.reload(window.location.pathname)
 
    useEffect(() => {
    const f = async () => {
      const token = window.localStorage.getItem('token')
      const myId = await window?.localStorage?.getItem('myId');
      let {id} = router.query
      if(myId == id){
        setIsMyPage(true);
      }else{
        setIsMyPage(false)
      }
      
      
      let page_content:any = []
      if (id) {

      const {data} = await axios.get(
        `${process.env.base_url}/users/${id}`,
          {headers: { Authorization: `Bearer ${token}`}}
      )
      
      setStats(data.enterprise.oPrivateData)
      console.log(stats)
      setUser(data.enterprise)


      }
    }
    f()
    },[router])
    let curr_data = []
    let want_data = []
    if (stats !== undefined){
      
      curr_data.push(stats.iCurrI4ThemesIA ? 1 : 0)
      curr_data.push(stats.iCurrI4ThemesIot ? 1 : 0)
      curr_data.push(stats.iCurrI4ThemesRA ? 1 : 0)
      curr_data.push(stats.iCurrI4ThemesRobotica ? 1 : 0)
      curr_data.push(stats.iCurrI4ThemesSecurity ? 1 : 0)
      curr_data.push(stats.iCurrI4Themes3DP ? 1 : 0)
      curr_data.push(stats.iCurrI4ThemesBigData ? 1 : 0)
  
      
      want_data.push(stats.iImpI4ThemesIA ? 1 : 0)
      want_data.push(stats.iImpI4ThemesIot ? 1 : 0)
      want_data.push(stats.iImpI4ThemesRA ? 1 : 0)
      want_data.push(stats.iImpI4ThemesRobotica ? 1 : 0)
      want_data.push(stats.iImpI4ThemesSecurity ? 1 : 0)
      want_data.push(stats.iImpI4Themes3DP ? 1 : 0)
      want_data.push(stats.iImpI4ThemesBigData ? 1 : 0)
  
  


    }
    const current = {
      labels: ['Inteligencia Artificial', 'IoT', 'Realidad Augmentada', 'Robotica', 'Ciberseguridad', 'Impresion 3D', "Big Data"],
      datasets: [
        {
          label: 'Implementamos',
          data: curr_data,
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1,
        },
        {
          label: 'Queremos Implementar',
          data: want_data,
          backgroundColor: 'rgba(255, 159, 64, 0.2)',
          borderColor: 'rgba(255, 159, 64, 1)',
          borderWidth: 1,
        },
      ],
    };

  return (
    <Flex bg="white_dark" h='100vh' flexDirection="column" w="100%">
      <NavBar></NavBar>
      <Box m={10}></Box>
      <Flex justifyContent={!isMyPage ? "space-around" : "flex-start"} w="100%" flexDirection={(isDesktop || !isMyPage) ? "row" : "column"} alignContent="flex-start">
        {(!user) ? (null) : (
        <TarjetaEmpresa businessId={user._id} business={user.sPublicName} name={user.sRole} email={user.sEmail} phone={user.sPhone} details={false} ml={isDesktop ? "4em": "0em"} />
          
        )}



     {!isMyPage ? (null) : (   
        <Flex  flexDirection={isDesktop ? "row" : "column"} justifyContent="center" alignItems="center" w="100%" >



            <NextLink href="/formulario">
            <Button 
            bg="gray_dark" 
            color="white" 
            w={isDesktop ? "10em": "15em"} 
            py="4%" 
            mr="10px" 
            mb="10px"
            _hover={{"opacity":"0.5"}}
            borderRadius="2px"
            fontSize="18px"
          >Editar Datos</Button>
            
              </NextLink> 
              
          <Button 
            w={isDesktop ? "10em": "15em"}             py="4%" 
            mr="10px" 
            bg="orange_" 
            color="white_dark"
            mb="10px"
            _hover={{"opacity":"0.5"}}
            borderRadius="2px"
            fontSize="18px">
              <Text fontWeight="bold">Editar Cuenta</Text>
            </Button>
            
        </Flex>)}
        
      </Flex>
      {stats == undefined? null : (
        <Flex>
      <Text><b>Promedio de ventas por empleado: </b>{stats.iAvgSalesPerEmp}</Text>
      <Text><b>Numero de certificaciones: </b>{stats.iCertifications}</Text>

      <Flex w="50%">
      <Radar data={current} />
      </Flex>



      <Text><b>Clientes Importantes:</b> {stats.iImportantCustumers}</Text>
      <Text><b>Ventas Annuales:</b> {stats.iNumYearlySales}</Text>
      <Text><b>Crecimiento Anunual: </b>{stats.iNumYearlySalesGrowth}</Text>
      <Text>{stats.iPerInternationalSales}</Text>
      <Text>{stats.iPerSales3Year}</Text>
      <Text>{stats.iPerSalesGrowth}</Text>
      <Text>{stats.iPerTec4Sales}</Text>
      <Text>{stats.iPerYearlyGrowth}</Text>
      <Text><b>Numero de empleados: </b>{stats.iQtyEmployeesNL}</Text>
      {/* <Text>{stats.iSectClient}</Text> */}
      </Flex>
      )}
    </Flex>
  )
}

export default Cuenta