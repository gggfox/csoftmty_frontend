import React, { InputHTMLAttributes } from 'react'
import { useField } from "formik";
import { FormControl, FormLabel, Input, FormErrorMessage } from "@chakra-ui/react";

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
    label: string;
    name: string;
};

export const InputField: React.FC<InputFieldProps> = ({label, size: _, ...props}) => {
    const [field, {error}] = useField(props);
    return (    
        <FormControl isInvalid={!!error} h="100%" w="100%">
            <FormLabel color="white" htmlFor={field.name} fontWeight="bold">{label}</FormLabel>
            <Input 
              color="white" 
              {...field} 
              {...props} 
              id={field.name} 
              focusBorderColor="orange" 
              borderWidth={5} 
              borderColor="whtie" 
              bg="#7b7b7b" 
              _hover={{"bg":"gray_light"}} 
            />
            {error ? <FormErrorMessage>{error}</FormErrorMessage> : null}
        </FormControl>
    );
}