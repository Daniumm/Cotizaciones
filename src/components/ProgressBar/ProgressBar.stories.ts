import type { Meta, StoryObj } from "@storybook/react";

import ProgressBar from "components/ProgressBar/ProgressBar";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof ProgressBar> = {
    title: "MotorSpot/ProgressBar",
    component: ProgressBar,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        progress: { control: "number" },
    },
};

export default meta;
    type Story = StoryObj<typeof ProgressBar>;
  // More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
/**
 * Main CarCard with using the theme
 */
export const Example: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: {
    progress: 1,
  },
};