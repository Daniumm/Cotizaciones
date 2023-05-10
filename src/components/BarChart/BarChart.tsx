import React from 'react';
import { Bar } from 'react-chartjs-2';
import { BarChartProp } from './types';
import { ShowBarChart } from './styles';
import theme from 'theme/theme';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

/**
 * BarChart component used to display statistics regarding sales
 * Example: <BarChart
 * labelProps={['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']}
 * dataProps={[12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 2, 3]} />
 */
const BarChart: React.FC<BarChartProp> = ({
    labelProps,
    dataProps,
    barColor = 'rgba(44, 166, 232, 1)',
}) => {
    const data = {
        labels: labelProps,
        datasets: [
            {
                label: 'Ingresos generados',
                data: dataProps,
                backgroundColor: barColor,
            },
        ],
    };

    const maxValue = Math.max(...data.datasets[0].data) + 5;

    const options = {
        scales: {
            y: {
                grid: {
                    display: true,
                    color: 'rgba(0, 0, 0, 0.2)',
                    lineWidth: 1,
                },
                ticks: {
                    padding: 5,
                    font: {
                        family: 'Arial',
                        size: 12,
                    },
                    color: theme.color.black,
                },
                border: {
                    display: false,
                },
                min: 0,
                max: maxValue,
            },
            x: {
                grid: {
                    display: false,
                },
                offset: true, // add a margin to the left and right of the chart
                ticks: {
                    padding: 5, // adds extra margin between the axis labels and the chart border
                    font: {
                        family: 'Arial',
                        size: 12,
                    },
                    color: theme.color.black,
                },
                border: {
                    display: false,
                },
            },
        },
    };

    return (
        <ShowBarChart>
            <Bar data={data} options={options} />
        </ShowBarChart>
    );
};

export default BarChart;
