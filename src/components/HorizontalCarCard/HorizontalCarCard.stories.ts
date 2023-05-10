import type { Meta, StoryObj } from "@storybook/react";

import HorizontalCarCard from "components/HorizontalCarCard/HorizontalCarCard";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof HorizontalCarCard> = {
  title: "MotorSpot/HorizontalCarCard",
  component: HorizontalCarCard,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    bgColor: { control: "color" },
    date: { control: "text" },
    model: { control: "text" },
    location: { control: "text" },
    carImage: { control: "text" },
    companyLogo: { control: "text" },
    width: { control: "number" },
    height: { control: "number" },
  },
};

export default meta;
type Story = StoryObj<typeof HorizontalCarCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
/**
 * Main CarCard with using the theme
 */
export const Variant1: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args

  args: {
    bgColor: "white",
    date: "24/04/2023",
    model: "Porsche 718 GT4",
    location: "Porsche Querétaro",
    carImage:
      "https://files.porsche.com/filestore/image/multimedia/none/992-gt3-modelimage-sideshot/thumbwhite/fcb6d09a-51bc-11eb-80d1-005056bbdc38;sK;twebp065/porsche-thumbwhite.webp",
  },
};
