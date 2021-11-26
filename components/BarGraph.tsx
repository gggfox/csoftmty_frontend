import { Box } from '@chakra-ui/layout';
import React from 'react'
import { Bar } from 'react-chartjs-2';
import { useWindowSize } from '../hooks/useWindowSize';

type InputFieldProps = {
    title: string | string[]
    question_data: number[];
    labels: string[];
};

export const BarGraph: React.FC<InputFieldProps> = ({title,question_data,labels}) => {
    const size = useWindowSize()
    const data = {
        labels: labels,
        datasets: [
            {
            label: '# of Votes',
            data: question_data,
            backgroundColor: 'rgba(255, 159, 64, 0.2)',
            borderColor: 'rgba(255, 159, 64, 1)',
            borderWidth: 1,
            },
        ],
        };

        const options = {
        indexAxis: 'y',
        // Elements options apply to all of the options unless overridden in a dataset
        // In this case, we are setting the border of each horizontal bar to be 2px wide
        elements: {
            bar: {
            borderWidth: 2,
            },
        },
        responsive: true,
        plugins: {
            legend: {
            display: false,
            position: 'right',
            
            },
            title: {
            display: true,
            text: title,
            },
        },
        };

    return (    
      <Box my={4} w={size.width as number >= 650 ? "40%":"80%"} mx={size.width as number >= 650 ? "2em":"0"}>
<Bar data={data} options={options as any} /></Box> 
    );
}