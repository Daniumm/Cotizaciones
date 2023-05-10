import type { Meta, StoryObj } from "@storybook/react";

import FAQ from "components/FAQ/FAQ";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof FAQ> = {
  title: "Example/FAQ",
  component: FAQ,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    question: { control: "text" },
    answer: { control: "text" },
    disabled: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof FAQ>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
/**
 * Main Button with using the theme
 */
export const MainAccordion: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: {
    question: "¿Quiénes somos?",
    answer: "Just some text.",
    disabled: true,
  },
};

/**
 * Main Button with other bgColor
 */
export const VariantAccordion: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: {
    ...MainAccordion.args,
    disabled: true,
  },
};