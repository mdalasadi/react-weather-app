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

function TemperaturesChart(props) {
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
                ticks: {
                    color: 'rgba(255, 255, 255, 0.5)',
                },
            },
            x: {
                ticks: {
                    color: 'rgba(255, 255, 255, 0.5)',
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
        labels: props.data.labels,
        datasets: [
            {
                fill: true,
                label: 'Temperature',
                data: props.data.temps,
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    };

    return <div className={styles['chart']}>
        <Line options={options} data={data} width={100} height={120} />
    </div>;
}

export default TemperaturesChart;