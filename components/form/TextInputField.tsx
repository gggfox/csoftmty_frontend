import React, { InputHTMLAttributes } from 'react'
import { useField } from "formik";
import { FormControl, FormErrorMessage, FormLabel, Input } from "@chakra-ui/react";
import { QuestionLayout } from './QuestionLayout';

type TextInputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
    question: string;
    name: string;
};

export const TextInputField: React.FC<TextInputFieldProps> = ({question, size: _, ...props}) => {
    const [field, {error}, {setValue}] = useField(props);
    return (    
      

        <FormControl isInvalid={!!error} h="100%" w="100%">
            <FormLabel color="gray_dark" htmlFor={field.name} fontWeight="bold" w="100%">{question}</FormLabel>
            <Input  
              {...field}
              {...props}
              id={field.name}
              color="gray"
              focusBorderColor="orange_" 
              borderWidth={0} 
              bg="#C4C4C4" 
            />
            {error ? <FormErrorMessage>{error}</FormErrorMessage> : null}
        </FormControl>
      
    );
}