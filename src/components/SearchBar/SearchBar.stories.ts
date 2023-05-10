import type { Meta, StoryObj } from "@storybook/react";

import SearchBar from "components/SearchBar/SearchBar";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof SearchBar> = {
  title: "Components/SearchBar",
  component: SearchBar,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    label: { control: "text" },
    title: { control: "text" },
    btnText: { control: "text" },
    barType: { 
      control: {
        type: 'select',
        options: ['normal', 'integrated'],
      },
    }
  },
};

export default meta;
type Story = StoryObj<typeof SearchBar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
/**
 * 
 */
export const MainBar: Story = {
  args: {
    label: "Here goes the placeholder",
    searchClick: (text) => console.log("Searching for ${text}"),
    title: "Title",
    btnText: "Button",
    btnHandler: () => console.log("Button clicked"),
    barType: 'normal',
  },
};


