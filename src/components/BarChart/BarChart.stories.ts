import type { Meta, StoryObj } from '@storybook/react';

import BarChart from 'components/BarChart/BarChart';

const meta: Meta<typeof BarChart> = {
    title: "Components/BarChart",
    component: BarChart,
    tags: ['autodocs'],
    argTypes: {
        barColor: { control: "color" },
    },
};

export default meta;
type Story = StoryObj<typeof BarChart>;

export const Example: Story = {
    // More on args: https://storybook.js.org/docs/react/writing-stories/args
    args: {
        labelProps: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
        dataProps: [12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 2, 3],
        barColor: 'rgba(44, 166, 232, 1)',
    },
};
