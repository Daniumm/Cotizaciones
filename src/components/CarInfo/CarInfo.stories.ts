import type { Meta, StoryObj } from "@storybook/react";

import CarInfo from "components/CarInfo/CarInfo";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof CarInfo> = {
  title: "Components/CarInfo",
  component: CarInfo,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    title: { control: "text" },
    year: { control: "text" },
    mileage: { control: "text" },
    agency: { control: "text" },
    price: { control: "text" },
    starIcon: { control: "boolean" }
  },
};

export default meta;
type Story = StoryObj<typeof CarInfo>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
/**
 * Basic example of CarInfo to desplay data of a car.
 */
export const Default: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: {
    title: "Audi A3 Sedan",
    year: "2023",
    mileage: "0",
    agency: "Agencia X Querétaro",
    price: "2,028,000",
    starIcon: true
  },
};