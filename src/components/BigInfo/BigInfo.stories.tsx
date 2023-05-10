import type { Meta, StoryObj } from "@storybook/react";

import BigInfo from "components/BigInfo/BigInfo";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof BigInfo> = {
  title: "MotorSpot/BigInfo",
  component: BigInfo,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    side: { control: "text" },
    imgSrc: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof BigInfo>;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

/**
 * Big Info Card right side 
 */
export const MainBingInfoOne: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  render: (args) => (
    <BigInfo {...args}>
      <div>
        <p>Any component</p>
      </div>
    </BigInfo>
  ),
  args: {
    side: 'right',
    imgSrc: "foto.jpg",
  },
};

/**
 * Big Info Card left side
 */
export const MainBingInfoOneVarient2: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  render: (args) => (
    <BigInfo {...args}>
      <div>
        <p>Any component</p>
      </div>
    </BigInfo>
    ),
  args: {
    side: 'left',
    imgSrc: "foto.jpg",
  },
  
};