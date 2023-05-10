import type { Meta, StoryObj } from '@storybook/react';

import LineChart from 'components/LineChart/LineChart';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof LineChart> = {
    title: "Components/LineChart",
    component: LineChart,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        lineColor: { control: "color" },
        pointColor: { control: "color" },
    },
};

export default meta;
type Story = StoryObj<typeof LineChart>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Example: Story = {
    // More on args: https://storybook.js.org/docs/react/writing-stories/args
    args: {
        labelProps: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
        dataProps: [12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 2, 3],
        lineColor: 'rgba(255, 163, 23, 1)',
        pointColor: 'rgba(150, 60, 2, 1)',
    },
};