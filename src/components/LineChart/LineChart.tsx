import React from 'react';
import { LineChartProp } from './types';
import { ShowLineChart } from './styles';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import theme from 'theme/theme';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
);

/** 
 * LineChart component used to display statistics regarding sales
 * Example: <LineChart
 * labelProps={['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']}
 * dataProps={[12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 2, 3]} />
 */
const LineChart: React.FC<LineChartProp> = ({
  labelProps,
  dataProps,
  lineColor = 'rgba(255, 163, 23, 1)',
  pointColor = 'rgba(150, 60, 2, 1)',
}) => {
  const data = {
    labels: labelProps,
    datasets: [
      {
        label: 'Ventas de coches',
        data: dataProps,
        backgroundColor: pointColor,
        borderColor: lineColor,
        pointBorderColor: pointColor,
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
        max: maxValue
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
      }
    },
    elements: {
      line: {
        borderWidth: 3, // sets the width of the line
      },
      point: {
        radius: 4, // sets the size of the points
      },
    },
  }

  return (
    <ShowLineChart>
      <Line options={options} data={data} />
    </ShowLineChart>
  );
}

export default LineChart;