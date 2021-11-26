import React from 'react'
import { Pie } from 'react-chartjs-2';

type InputFieldProps = {
    title: string
    question_data: number[];
    labels: string[];
};

export const PieGraph: React.FC<InputFieldProps> = ({title,question_data,labels}) => {
    
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
       
<Pie data={data} options={options}/>
    );
}