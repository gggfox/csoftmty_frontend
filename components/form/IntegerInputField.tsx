import React, { InputHTMLAttributes, useState } from 'react'
import { useField } from "formik";
import { FormControl, FormLabel, Input, FormErrorMessage, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper } from "@chakra-ui/react";
import { QuestionLayout } from './QuestionLayout';

type IntegerInputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
    question: string;
    name: string;
    min?: number;
    max?: number;
};

export const IntegerInputField: React.FC<IntegerInputFieldProps> = ({question, size: _, ...props}) => {
    const [field, {error},{setValue}] = useField(props.name);

    const onChange = (_valueAsString: string, valueAsNumber: number) => {
        setValue(valueAsNumber)
      }
    return (   
        <QuestionLayout question={question}>

            <FormControl 
            isInvalid={!!error} 
            h="100%" w="100%" 
            justifyContent="center" 
            alignItems="center"
           
            >
                
            <NumberInput 
            inputMode="decimal"
            step={1} 
            defaultValue={0}
            min={props.min} max={props.max} 
            my="5%" 
            bg="gray"
            borderColor="gray_light"
            borderRadius="6px"
            size="lg"
            color="white"
            onChange={onChange}
            >
                <NumberInputField 
                    {...field}
                    {...props}
                    id={field.name}   
                />
                <NumberInputStepper >
                    <NumberIncrementStepper/>
                    <NumberDecrementStepper/>
                </NumberInputStepper>
            </NumberInput>
    
            {error ? <FormErrorMessage>{error}</FormErrorMessage> : null}
        </FormControl>
        </QuestionLayout> 
    );
}