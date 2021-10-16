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
                <option value="option1">Computer Hardware</option>
                <option value="option2">Hosting and email</option>
                <option value="option3">IT Managment</option>
                <option value="option4">Software Engineering</option>
              </Select>

            {error ? <FormErrorMessage>{error}</FormErrorMessage> : null}
        </FormControl>
    );
}