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
import { PieGraph } from '../../components/PieGraph'

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
    curr_data.push(stats.iCurrI4ThemesIA ? 1 : 0)
    curr_data.push(stats.iCurrI4ThemesIot ? 1 : 0)
    curr_data.push(stats.iCurrI4ThemesRA ? 1 : 0)
    curr_data.push(stats.iCurrI4ThemesRobotica ? 1 : 0)
    curr_data.push(stats.iCurrI4ThemesSecurity ? 1 : 0)
    curr_data.push(stats.iCurrI4Themes3DP ? 1 : 0)
    curr_data.push(stats.iCurrI4ThemesBigData ? 1 : 0)

    let want_data = []
    want_data.push(stats.iImpI4ThemesIA ? 1 : 0)
    want_data.push(stats.iImpI4ThemesIot ? 1 : 0)
    want_data.push(stats.iImpI4ThemesRA ? 1 : 0)
    want_data.push(stats.iImpI4ThemesRobotica ? 1 : 0)
    want_data.push(stats.iImpI4ThemesSecurity ? 1 : 0)
    want_data.push(stats.iImpI4Themes3DP ? 1 : 0)
    want_data.push(stats.iImpI4ThemesBigData ? 1 : 0)


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
            bg="orange_" 
            color="white_dark"
            w={isDesktop ? "10em": "15em"} 
            py="4%" 
            mr="10px" 
            mb="10px"
            _hover={{"opacity":"0.5"}}
            borderRadius="2px"
            fontSize="18px"
          >Editar Datos</Button>
            
              </NextLink> 
            
        </Flex>)}
        
      </Flex>
      <Flex justifyContent="center" alignItems="center" alignSelf="center" flexDirection="column" marginBottom="5%" backgroundColor="gray_dark" padding="5%" borderRadius="5%" textColor="white">
        <Text><b>Promedio de ventas por empleado: </b>{stats.iAvgSalesPerEmp}</Text>
        <Text><b>Numero de certificaciones: </b>{stats.iCertifications}</Text>
        <Text><b>Clientes Importantes:</b> {stats.iImportantCustumers}</Text>
        <Text><b>Ventas Annuales:</b> {stats.iNumYearlySales}</Text>
        <Text><b>Crecimiento Anunual: </b>{stats.iNumYearlySalesGrowth}</Text>
        <Text><b>Numero de empleados: </b>{stats.iQtyEmployeesNL}</Text>
      </Flex>

      <Flex w="50%" justifyContent="center" width="30%" alignItems="center" alignSelf="center">
        <Radar data={current} />
      </Flex>

      <Flex justifyContent="center" width="30%" alignItems="center" alignSelf="center" marginBottom="3%">
        <PieGraph 
          title="Porcentaje % de facturación de ventas realizadas fuera del país" 
          question_data={[stats.iPerInternationalSales,100 - stats.iPerInternationalSales]} 
          labels={["Fuera del pais","Dentro del país"]} 
        />
      </Flex>
      <Flex justifyContent="center" width="30%" alignItems="center" alignSelf="center" marginBottom="3%">
        <PieGraph 
          title="Porcentaje % de facturacion del año pasado que fueron de productos y/o servicios que lanzaste durante los ultimos 3 años" 
          question_data={[stats.iPerSales3Year,100 - stats.iPerSales3Year]} 
          labels={["Productos y/o servicios que lanzaste durante los ultimos 3 años","Demás"]} 
        />
      </Flex>
      <Flex justifyContent="center" width="30%" alignItems="center" alignSelf="center" marginBottom="3%">
        <PieGraph 
          title="Porcentaje % de personal con alguna certificación tecnológica" 
          question_data={[stats.iPerSalesGrowth,100 - stats.iPerSalesGrowth]} 
          labels={["Personal con alguna certificación tecnológica","Demás"]} 
        />
      </Flex>
      <Flex justifyContent="center" width="30%" alignItems="center" alignSelf="center" marginBottom="3%">
        <PieGraph 
          title="Porcentaje % de facturación de ventas realizadas el año pasado de Tecnologias 4.0" 
          question_data={[stats.iPerTec4Sales,100 - stats.iPerTec4Sales]} 
          labels={["Tecnologias 4.0","Demás"]} 
        />
      </Flex>
      <Flex justifyContent="center" width="30%" alignItems="center" alignSelf="center" marginBottom="3%">
        <PieGraph 
          title="Porcentaje % de crecimiento en facturación de la empresa del 2020 respecto al 2019" 
          question_data={[stats.iPerYearlyGrowth,100 - stats.iPerYearlyGrowth]} 
          labels={["Crecimiento",""]} 
        />
      </Flex>
      {/* <Text>{stats.iSectClient}</Text> */}
      
      
    </Flex>
  )
}

export default Cuenta