import React, { InputHTMLAttributes } from 'react'
import { useField } from "formik";
import { FormControl, FormLabel, FormErrorMessage, Select } from "@chakra-ui/react";

type SelectFieldProps = InputHTMLAttributes<HTMLSelectElement> & {
    label: string;
    name: string;
};

export const SelectField: React.FC<SelectFieldProps> = ({label, size: _, ...props}) => {
    const [field, {error}] = useField(props);
    return (    
        <FormControl isInvalid={!!error} h="100%" w="100%">
            <FormLabel color="white" htmlFor={field.name} fontWeight="bold">{label}</FormLabel>
            <Select  
              {...field} 
              {...props} 
              id={field.name} 
              borderWidth={5} 
              placeholder="Elige una..." 
               
              _hover={{"bg":"gray_light"}} 
              bg="#7B7B7B" 
              border="4px" 
              borderColor="white" 
              color="white" 
              focusBorderColor="orange" 
            >
                <option value="6187155a571e3d9fc79ba564">Desarrollo de Software | Desarrollo Web</option>
                <option value="6187155a571e3d9fc79ba565">Desarrollo de Software | Soluciones Tecnológicas</option>
                <option value="6187155a571e3d9fc79ba566">Desarrollo de Software | Fintech</option>
                <option value="6187155a571e3d9fc79ba567">Desarrollo de Software | Healthcare</option>
                <option value="6187155a571e3d9fc79ba568">Desarrollo de Software | E-commerce</option>
                <option value="6187155a571e3d9fc79ba569">Desarrollo de Software | Desarrollo a la medida</option>

                <option value="6187155a571e3d9fc79ba56a">Servicios | Facturación electrónica</option>
                <option value="6187155a571e3d9fc79ba56b">Servicios | Staffing</option>
                <option value="6187155a571e3d9fc79ba56c">Servicios | Software as a Service</option>
                <option value="6187155a571e3d9fc79ba56d">Servicios | Monitoreo de SW y HW</option>
                <option value="6187155a571e3d9fc79ba56e">Servicios | Consultoría TIC</option>
                <option value="6187155a571e3d9fc79ba56f">Servicios | Asesoría en propiedad intelectual</option>
                <option value="6187155a571e3d9fc79ba570">Servicios | Tratamiento de imagen</option>
                <option value="6187155a571e3d9fc79ba571">Servicios | Servicios de Telecomunicaciónes</option>

                <option value="6187155a571e3d9fc79ba572">Hardware | Uso de PLC</option>
                <option value="6187155a571e3d9fc79ba573">Hardware | Redes industriales</option>

                <option value="6187155a571e3d9fc79ba574">Tecnología 4.0 | Realidad aumentada</option>
                <option value="6187155a571e3d9fc79ba575">Tecnología 4.0 | 3D Printing</option>
                <option value="6187155a571e3d9fc79ba576">Tecnología 4.0 | Business Intelligence</option>
                <option value="6187155a571e3d9fc79ba577">Tecnología 4.0 | Big data y Analítica de datos</option>
                <option value="6187155a571e3d9fc79ba578">Tecnología 4.0 | Inteligencia artificial</option>
                <option value="6187155a571e3d9fc79ba579">Tecnología 4.0 | Robótica</option>
                <option value="6187155a571e3d9fc79ba57a">Tecnología 4.0 | IoT</option>
                <option value="6187155a571e3d9fc79ba57b">Tecnología 4.0 | Ciberseguridad</option>
                <option value="6187155a571e3d9fc79ba57c">Tecnología 4.0 | Blockchain</option>
                <option value="6187155a571e3d9fc79ba57d">Tecnología 4.0 | Nube</option>
     
              </Select>

            {error ? <FormErrorMessage>{error}</FormErrorMessage> : null}
        </FormControl>
    );
}