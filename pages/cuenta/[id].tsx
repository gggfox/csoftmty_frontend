import { Box, Button, Flex,Icon,Link,Text } from '@chakra-ui/react'
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
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa'

const Cuenta: NextPage = () => {
  const size = useWindowSize();
  const isDesktop = (size?.width as number >= 650) ? true : false
  const router = useRouter()
  const [user, setUser] = useState<any>([])
  const [stats, setStats] = useState<any>([])
  const [publicData, setPublicData] = useState<any>([])
  let {id} = router.query;
  const [isMyPage, setIsMyPage] = useState(false);

  const logout = () => {
    window?.localStorage.setItem('token', "")
    window?.localStorage.setItem('myId', "")
    router.push("/login")
  }
  //
 
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
      setPublicData(data.enterprise.oPublicData)
      setUser(data.enterprise)

        console.log(data)
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
          <Flex flexDirection="column" alignItems="center" w="100%">
 
        <TarjetaEmpresa businessId={user._id} business={user.sPublicName} name={user.sRole} email={user.sEmail} phone={user.sPhone} address={user.oPublicData?.sPublicAddress} details={false} ml={isDesktop ? "4em": "0em"} />

          </Flex>

)}

      <Flex flexDirection="column" mr="5em" mt="1em" w="100%">
       <Flex justifyContent={isDesktop ? "flex-end":"center"}>
        {!publicData?.sPublicLinkedin ? (null) : (
          <Link href={`https://www.linkedin.com/in/${publicData.sPublicLinkedin}`}> 
          <Icon as={FaLinkedin} name="PhoneIcon" color="orange_"  w="3em" h="3em"/>
          </Link>)}
          {!publicData?.sPublicTwitter ? (null) : (
          <Link href={`https://twitter.com/${publicData.sPublicTwitter}`}>
          <Icon as={FaTwitterSquare} name="PhoneIcon" color="orange_"  w="3em" h="3em"/>
          </Link>)}
          {!publicData?.sPublicFacebook ? (null) : (
          <Link href={`https://www.facebook.com/${publicData.sPublicFacebook}`}>
          <Icon as={FaFacebookSquare} name="PhoneIcon" color="orange_"  w="3em" h="3em"/>
          </Link>)}
          {!publicData?.sPublicInstagram ? (null) : (
          <Link href={`https://www.instagram.com/${publicData.sPublicInstagram}`}>
          <Icon as={FaInstagramSquare} name="PhoneIcon" color="orange_" w="3em" h="3em" />
          </Link>)}
        </Flex>
        <Flex flexDirection="column">

      {!isMyPage ? (null) : (   
          <Flex  flexDirection={isDesktop ? "row" : "column"} justifyContent={isDesktop?"flex-end":"center"} alignItems="center" w="100%" mb="3em">
            <Flex flexDirection={isDesktop?"row":"column"} >

              <NextLink href="/formulario">
              <Button 
              bg="orange_" 
              color="white_dark"
              w={isDesktop ? "10em": "15em"} 
              h="2.4em" 
              py="4%" 
              mr="10px" 
              mb="10px"
              _hover={{"opacity":"0.5"}}
              borderRadius="2px"
              fontSize="18px"
            >Editar Datos</Button>
 
              
                </NextLink> 
                <Button 
            bg="gray_dark" 
            w={isDesktop ? "10em": "15em"} 
            py="4%" 
            h="2.4em" 
            color="white"
            fontSize="18px"
            mr="3px" 
            _hover={{"background-color":"#909090"}}
            borderRadius="2px"
            onClick={() => logout()}
            >
              <Text fontWeight="bold">Log out</Text>
            </Button>
              </Flex>
          </Flex>)}</Flex>
          </Flex>
        
      </Flex>
      {!stats ? (null) : (
      <Flex justifyContent="center" alignItems="center" alignSelf="center" flexDirection="column" marginBottom="5%" backgroundColor="gray_dark" padding="5%" borderRadius="5%" textColor="white">
          <Text><b>Promedio de ventas por empleado: </b>{stats.iAvgSalesPerEmp}</Text>
          <Text><b>Número de certificaciones: </b>{stats.iCertifications}</Text>
          <Text><b>Clientes Importantes:</b> {stats.iImportantCustumers}</Text>
          <Text><b>Ventas Anuales:</b> {stats.iNumYearlySales}</Text>
          <Text><b>Crecimiento Anunual: </b>{stats.iNumYearlySalesGrowth}</Text>
          <Text><b>Número de empleados: </b>{stats.iQtyEmployeesNL}</Text>
      </Flex>)}

      {!stats ? (null) : (
      <Flex flexDirection={size.width as number >= 650 ? "row":"column"} w="100%"alignItems="center" mx="1em" flexWrap="wrap" justifyContent="center">
        <Box my={4} w={size.width as number >= 650 ? "40%":"80%"} mx={size.width as number >= 650 ? "2em":"0"}>
          <Radar data={current} />
        </Box>

        <PieGraph 
          title="Porcentaje % de facturación de ventas realizadas fuera del país" 
          question_data={[stats.iPerInternationalSales,100 - stats.iPerInternationalSales]} 
          labels={["Fuera del pais","Dentro del país"]} 
        />

        <PieGraph 
          title="Porcentaje % de facturación del año pasado que fueron de productos y/o servicios que lanzaste durante los últimos 3 años" 
          question_data={[stats.iPerSales3Year,100 - stats.iPerSales3Year]} 
          labels={["Productos y/o servicios que lanzaste durante los ultimos 3 años","Demás"]} 
        />

        <PieGraph 
          title="Porcentaje % de personal con alguna certificación tecnológica" 
          question_data={[stats.iPerSalesGrowth,100 - stats.iPerSalesGrowth]} 
          labels={["Personal con alguna certificación tecnológica","Demás"]} 
        />

        <PieGraph 
          title="Porcentaje % de facturación de ventas realizadas el año pasado de Tecnologías 4.0" 
          question_data={[stats.iPerTec4Sales,100 - stats.iPerTec4Sales]} 
          labels={["Tecnologias 4.0","Demás"]} 
        />

        <PieGraph 
          title="Porcentaje % de crecimiento en facturación de la empresa del 2020 respecto al 2019" 
          question_data={[stats.iPerYearlyGrowth,100 - stats.iPerYearlyGrowth]} 
          labels={["Crecimiento",""]} 
        />
      </Flex>)}

      </Flex>
      )}

  


export default Cuenta