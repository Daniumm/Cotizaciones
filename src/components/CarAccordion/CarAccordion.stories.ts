import type { Meta, StoryObj } from "@storybook/react";

import CarAccordion from "components/CarAccordion/CarAccordion";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof CarAccordion> = {
  title: "components/CarAccordion",
  component: CarAccordion,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    options: { control: "array" },
  },
};

export default meta;
type Story = StoryObj<typeof CarAccordion>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
/**
 * Main Button with using the theme
 */
export const MainButton: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: {
    options: [
      {
        id: 1,
      car: "Porsche 911 GT3 RS",
      salesman: "Axel Rosales García",
      initialDate: "02/03/2023",
      paymentDate: "18/03/2023",
      price: "MXN 4,438,000.00",
      imgLogo:
        "https://tse1.mm.bing.net/th?id=OIP.tMHR6LMDGRzKQ-382IoefAHaEK&pid=Api&rs=1&c=1&qlt=95&w=195&h=109",
      imgCar:
        "https://tse1.mm.bing.net/th?id=OIP.NPKKURwD5MetFOl7ZMjqogHaE8&pid=Api&rs=1&c=1&qlt=95&w=137&h=91",
      manager: "Roberto Carlos Quiroz Gómez",
      client: "Clara Hernández Saucedo",
      agency: "Porsche Queretaro",
      },
    ],
  },
};
