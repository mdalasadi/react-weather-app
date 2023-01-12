import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import styles from './TemperaturesChart.module.css'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
);


const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: false,
            position: 'top',
        },
        title: {
            display: false,
        },
    },
    scales: {
        y: {
            grid: {
                display: false,
            },
            border: {
                display: false,
            },
        },
        x: {
            grid: {
                display: false,
            },
            border: {
                display: false,
            },
        }
    },
    elements: {
        line: {
            tension: 0.5,
            borderColor: '#65389f',
        },
        point: {
            backgroundColor: '#65389f',
            borderWidth: 2.5,
            borderColor: '#fff',
        },
    }
};

const data = {
    labels: ['10PM', '1AM', '4AM', '7AM', '10AM', '1PM', '4PM', '7PM'],
    datasets: [
        {
            label: 'Temperature',
            data: [70, 68, 72, 74, 74, 73, 76, 71],
        },
    ],
};

function TemperaturesChart() {
    return <div className={styles['chart']}>
        <Line options={options} data={data} width={100} height={120} />
    </div>;
}

export default TemperaturesChart;