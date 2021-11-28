import React, { InputHTMLAttributes } from 'react'
import { useField } from "formik";
import { FormControl, FormErrorMessage, Textarea } from "@chakra-ui/react";
import { QuestionLayout } from './QuestionLayout';

type TextAreaInputFieldProps = InputHTMLAttributes<HTMLTextAreaElement> & {
    question: string;
    name: string;
};

export const TextAreaInputField: React.FC<TextAreaInputFieldProps> = ({question, size: _, ...props}) => {
    const [field, {error}, {setValue}] = useField(props);
    return (    
        <QuestionLayout question={question}>   

        <FormControl isInvalid={!!error} h="100%" w="100%">
            <Textarea  
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
        </QuestionLayout>
    );
}