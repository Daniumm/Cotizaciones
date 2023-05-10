import type { Meta, StoryObj } from "@storybook/react";
import porsche from "resources/porsche.png"
import agency from "resources/agencia.jpeg"

import HeaderAgency from "components/HeaderAgency/HeaderAgency";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof HeaderAgency> = {
  title: "Components/HeaderAgency",
  component: HeaderAgency,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    label: { control: 'text' },
    labelSmall: { control: 'text' },
    logo : {control: 'text'},
    image : {control: 'text'},
    onClick: { control: 'action' },


  },
};

export default meta;
type Story = StoryObj<typeof HeaderAgency>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
/**
 * Main Header
 */
export const MainHeader: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: {
    label: "Titles" ,
    labelSmall: 'Subtitle' ,
    logo : porsche,
    image : agency,
    onClick : ()=> console.log("Button press")
  },
};

