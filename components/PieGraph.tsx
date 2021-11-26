import { Box } from '@chakra-ui/react';
import React from 'react'
import { Pie } from 'react-chartjs-2';
import { useWindowSize } from '../hooks/useWindowSize';

type InputFieldProps = {
    title: string | string[]
    question_data: number[];
    labels: string[];
};

export const PieGraph: React.FC<InputFieldProps> = ({title,question_data,labels}) => {
    const size = useWindowSize()
    const data = {
        labels: labels,
        datasets: [
            {
            label: '# of Votes',
            data: question_data,
            backgroundColor: ['rgba(255, 159, 64, 0.2)','rgba(54, 162, 235, 0.2)'],
            borderColor: ['rgba(255, 159, 64, 1)','rgba(54, 162, 235, 0.2)'],
            borderWidth: 1,
            },
 
        ],
        };

        const options = {
        responsive: true,
        plugins: {
            title: {
            display: true,
            text: title,
            },
        },
        };

    return (    
         <Box my={4} w={size.width as number >= 650 ? "40%":"80%"} mx={size.width as number >= 650 ? "2em":"0"}>
<Pie data={data} options={options}/></Box>
    );
}