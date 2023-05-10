import type { Meta, StoryObj } from "@storybook/react";

import Card from "components/Card/Card";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Card> = {
    title: "Components/Card",
    component: Card,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        width: { control: "text" },
        height: { control: "text" },
    },
};

export default meta;
type Story = StoryObj<typeof Card>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
/**
 * 
 */
export const MainCard: Story = {
  render: (args) => (
    <Card {...args}>
      <div>
        <p>Any component</p>
      </div>
    </Card>
  ),
  args: {
    width: "500px",
    height: "250px",
  },
};