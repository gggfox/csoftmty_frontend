import React, { InputHTMLAttributes, useState } from 'react'
import { useField } from "formik";
import { FormControl, FormLabel, Input, FormErrorMessage, Box, chakra, Flex, Radio, Stack, RadioGroup } from "@chakra-ui/react";
import { QuestionLayout } from './QuestionLayout';

type RadioInputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  question: string;
  name: string;
  radio_options: string[];
};

export const RadioInputField: React.FC<RadioInputFieldProps> = ({children,radio_options, question, size: _, ...props}) => {
    const [field, {error},{setValue}] = useField(props);

    const onChange = (nextValue:string) => {
      setValue(nextValue)
    }

    return (
        <QuestionLayout question={question}>   
        <FormControl isInvalid={!!error} h="100%" w="100%">

          <RadioGroup id={field.name} onChange={onChange} colorScheme="orange">
          <Stack marginLeft={10} w="100%" my="15px">
            
          {radio_options.map((value:string, index:number) => (
            <Radio 
              key={value} 
              value={index.toString()} 
              size="lg" 
            >
              {value}
            </Radio>
          ))}
      
          </Stack>
          </RadioGroup>


            {error ? <FormErrorMessage>{error}</FormErrorMessage> : null}
        </FormControl>
        </QuestionLayout> 
    );
}