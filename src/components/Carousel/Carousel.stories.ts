import type { Meta, StoryObj } from "@storybook/react";

import Carousel from "components/Carousel/Carousel";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Carousel> = {
  title: "Components/Carousel",
  component: Carousel,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    images: { control: "array" }
  },
};

export default meta;
type Story = StoryObj<typeof Carousel>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
/**
 * Carousel to display images.
 */
export const Default: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: {
    images: ["https://picsum.photos/id/237/200/300", "https://picsum.photos/id/236/200/300", "https://picsum.photos/id/238/200/300", "https://picsum.photos/id/237/200/300", "https://picsum.photos/id/236/200/300", "https://picsum.photos/id/238/200/300"]
  },
};