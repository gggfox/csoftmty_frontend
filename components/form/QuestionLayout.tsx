import React, { InputHTMLAttributes } from 'react'
import { useField } from "formik";
import { FormControl, FormLabel, Input, FormErrorMessage, Flex, Heading } from "@chakra-ui/react";

type QuestionLayoutProps = InputHTMLAttributes<HTMLInputElement> & {
    question: string;
};

export const QuestionLayout: React.FC<QuestionLayoutProps> = ({children, question, size: _, ...props}) => {
    return (    
        <Flex bg="gray_light" w="100%" flexDirection="column" justifyContent="center" mb="10%">
            <Heading bg="gray" fontWeight="light" fontSize="100%" color="white_light" py={4} px={8}>
                {question}
            </Heading>
            <Flex w="100%" justifyContent="center" alignItems="center"  p={10}>
            {children}
            </Flex>
            
        </Flex>
    );
}