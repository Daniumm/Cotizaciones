import type { Meta, StoryObj } from '@storybook/react';

import DateTimeReservation from 'components/DateTimeReservation/DateTimeReservation';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof DateTimeReservation> = {
    title: "Components/DateTimeReservation",
    component: DateTimeReservation,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
    },
};

export default meta;
type Story = StoryObj<typeof DateTimeReservation>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Example: Story = {
    // More on args: https://storybook.js.org/docs/react/writing-stories/args
    args: {
        dates: ["Viernes 10 Mar", "Sábado 11 Mar", "Domingo 12 Mar", "Lunes 13 Mar", "Martes 14 Mar"],
        availableHours: ["09:00 - 10:00", "10:00 - 11:00", "11:00 - 12:00", "12:00 - 13:00"]
    },
};