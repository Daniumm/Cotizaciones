import type { Meta, StoryObj } from "@storybook/react";

import Comments from "components/Comments/Comments";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Comments> = {
  title: "Components/Comments",
  component: Comments,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    name: { control: "text" },
    date: { control: "text" },
    title: { control: "text" },
    text: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Comments>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Default: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: {
    name: "Alfredo Díaz",
    date: "Compra realizada el 10 de marzo de 2023",
    title: "Excelente Auto",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada lectus a ipsum vulputate, nec venenatis mi accumsan. In auctor ex ut sapien vestibulum, sit amet bibendum elit dapibus. Maecenas euismod turpis ac justo malesuada, vel viverra libero dignissim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque sit amet purus non magna consequat consequat eu non nisl.",
  },
};
