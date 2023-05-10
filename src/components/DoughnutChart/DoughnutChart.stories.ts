import type { Meta, StoryObj } from '@storybook/react';

import DoughnutChart from 'components/DoughnutChart/DoughnutChart';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof DoughnutChart> = {
    title: "Components/DoughnutChart",
    component: DoughnutChart,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        colorProp1: { control: "color" },
        colorProp2: { control: "color" }
    },
};

export default meta;
type Story = StoryObj<typeof DoughnutChart>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Example: Story = {
    // More on args: https://storybook.js.org/docs/react/writing-stories/args
    args: {
        labelProps: ["Pruebas no atendidas", "Pruebas atendidas"],
        dataProps: [43, 104],
        colorProp1: 'rgba(112, 48, 160, 1)',
        colorProp2: 'rgba(4, 45, 101, 255)',
    },
};