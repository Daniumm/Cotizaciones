import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { DoughnutChartProp } from './types';
import { ShowDoughnutChart } from './styles';
import theme from 'theme/theme';
ChartJS.register(ArcElement, Tooltip, Legend);

/** 
 * DoughnutChart component used to display statistics regarding driving tests
 * Example: <DoughnutChart dataProps={[43, 104]} />
 */
const DoughnutChart: React.FC<DoughnutChartProp> = ({
    labelProps = ['Pruebas no atendidas', 'Pruebas atendidas'],
    dataProps,
    colorProp1 = 'rgba(112, 48, 160, 1)',
    colorProp2 = 'rgba(4, 45, 101, 255)',
}) => {
    const data = {
        labels: labelProps,
        datasets: [
            {
                label: 'Valor',
                data: dataProps,
                backgroundColor: [colorProp1, colorProp2],
                borderColor: [colorProp1, colorProp2],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        plugins: {
            legend: {
                display: true,
                position: 'right' as const,
                labels: {
                    usePointStyle: true,
                    padding: 25,
                    font: {
                        weight: 'bold',
                        responsive: true,
                        size: 14,
                    },
                    color: theme.color.black,
                },
            },
        },
        responsive: true,
        maintainAspectRatio: false,
        cutout: "63%",
    };

    const textCenter = {
        id: "textCenter",
        beforeDatasetsDraw(chart: any, args: any, plugins: any) {
            let text1FontSize = 35;
            let text2FontSize = 14;
            const isSmallScreen = window.innerWidth;
            if (isSmallScreen <= 500) {
                text1FontSize = 24;
                text2FontSize = 9;
            } else if (isSmallScreen <= 800) {
                text1FontSize = 26;
                text2FontSize = 11;
            } else if (isSmallScreen <= 1000) {
                text1FontSize = 30;
                text2FontSize = 12;
            }

            const { ctx, data } = chart;
            ctx.save();
            ctx.font = `bolder ${text1FontSize}px sans-serif`;
            ctx.fillStyle = theme.color.black;
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";

            // First Text
            // const text1 = `${data.datasets[0].data[0] + data.datasets[0].data[1]}`;
            const text1 = `${dataProps.reduce((partialSum, data) => partialSum + data)}`;
            ctx.fillText(text1, chart.getDatasetMeta(0).data[0].x, chart.getDatasetMeta(0).data[0].y - text1FontSize / 2);

            // Second Text
            ctx.font = `bold ${text2FontSize}px sans-serif`;
            const text2 = 'Pruebas totales\nsolicitadas';
            const lineHeight = 1.2; // line height for the second text
            const text2Lines = text2.split('\n');
            const text2Y = chart.getDatasetMeta(0).data[0].y + text1FontSize * 0.75;

            for (let i = 0; i < text2Lines.length; i++) {
                ctx.fillText(text2Lines[i], chart.getDatasetMeta(0).data[0].x, text2Y - (text2Lines.length - i - 1) * text2FontSize * lineHeight);
            }
        }
    };

    return (
        <ShowDoughnutChart>
            <Doughnut data={data} options={options} plugins={[textCenter]} />
        </ShowDoughnutChart>
    );
}

export default DoughnutChart;