import { Icon } from "@mui/material";
import type { Meta, StoryObj } from "@storybook/react";

import Button from "components/Button/Button";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Button> = {
  title: "MotorSpot/Button",
  component: Button,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    color: { control: "color" },
    bgColor: { control: "color" },
    hoverColor: { control: "color" },
    size: { control: "text" },
    firstIconBool: { control: "boolean"},
    firstIcon: { control: "text"},
    secondIconBool: { control: "boolean"},
    secondIcon: { control: "text"}
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
/**
 * Main Button with using the theme
 */
export const LargeVariant1: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: {
    bgColor: "#002569",
    color: "white",
    hoverColor: "black",
    size: "large",
    children: "Comprar un Auto",
    firstIconBool: false,
    firstIcon: "Delete"
  },
};

/**
 * Main Button with other bgColor
 */
export const SmallVariant1: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: {
    ...LargeVariant1.args,
    size: "small",
    children: "Eliminar",
    bgColor: "error.main",
    firstIconBool: true,
    firstIcon: "Abc"
  },
};

/**
 * Main Button with other bgColor
 */
export const SmallVariant3: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: {
    ...LargeVariant1.args,
    size: "small",
    children: "Eliminar",
    bgColor: "error.main",
    secondIconBool: true,
    secondIcon: "Abc"
  },
};