import React, { InputHTMLAttributes } from 'react'
import { useField } from "formik";
import { FormControl, FormLabel, Input, FormErrorMessage, Checkbox, CheckboxGroup, Stack } from "@chakra-ui/react";
import { QuestionLayout } from './QuestionLayout';

type CheckboxInputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
    question: string;
    name: string;
    checkbox_options: string[];
};

export const CheckboxInputField: React.FC<CheckboxInputFieldProps> = ({question,checkbox_options, size: _, ...props}) => {
    const [field, {error},{ setValue }] = useField(props);
    return (
        <QuestionLayout question={question}>   

        <FormControl isInvalid={!!error} h="100%" w="100%">
        <CheckboxGroup colorScheme="orange" onChange={setValue} >
        <Stack>
            {checkbox_options.map((value:string, index:number)=>(
                <Checkbox 
                  key={value}
                  value={value}
                  size="lg"
                > 
                  {value}
                </Checkbox>
            ))}
        </Stack>
        </CheckboxGroup>
            {error ? <FormErrorMessage>{error}</FormErrorMessage> : null}
        </FormControl>        
        </QuestionLayout>   

    );
}