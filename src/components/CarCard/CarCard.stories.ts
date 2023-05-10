import type { Meta, StoryObj } from "@storybook/react";

import CarCard from "components/CarCard/CarCard";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof CarCard> = {
  title: "MotorSpot/CarCard",
  component: CarCard,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    bgColor: { control: "color" },
    showButton: { control: "boolean" },
    price: { control: "text" },
    model: { control: "text" },
    chars: { control: "text" },
    location: { control: "text" },
    variant: { control: "text" },
    payment: { control: "text" },
    carImage: { control: "text" },
    companyLogo: { control: "text" },
    width: { control: "number" },
    height: { control: "number" },
  },
};

export default meta;
type Story = StoryObj<typeof CarCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
/**
 * Main CarCard with using the theme
 */
export const Variant1: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args

  args: {
    bgColor: "white",
    showButton: false,
    price: "MXN 1,468,000.00",
    model: "Lamborghini",
    chars: "2023 • CDMX • 0 km ",
    variant: "variant1",
    location: "Lamborghini Querétaro",
    payment: "Esperando pago de enganche",
    carImage:
      "https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/2020-Chevrolet-Corvette-Stingray/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=960",
    width: 460,
    height: 390,
  },
};

export const Variant2: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args

  args: {
    bgColor: "white",
    showButton: false,
    model: "Lamborghini",
    price: "MXN 1,468,000.00",
    chars: "2023 • CDMX • 0 km ",
    variant: "variant2",
    location: "Lamborghini Querétaro",
    payment: "Esperando pago de enganche",
    carImage:
      "https://images.drive.com.au/driveau/image/upload/c_fill,f_auto,g_auto,h_720,q_auto:good,w_1280/cms/uploads/cxkqjyjtpckk1t7owne5",
    width: 280,
  },
};
