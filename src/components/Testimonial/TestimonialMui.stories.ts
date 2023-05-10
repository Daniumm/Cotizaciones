import type { Meta, StoryObj } from "@storybook/react";

import Testimonial from "components/Testimonial/Testimonial";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Testimonial> = {
  title: "Components/Testimonial",
  component: Testimonial,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    alt: { control: "text" },
    src: { control: "text" },
    name: { control: "text" },
    testimonialTitle: { control: "text" },
    testimonialText: { control: "text" },
    margin: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Testimonial>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Default: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: {
    alt: "user image",
    src: "https://images.pexels.com/photos/15828302/pexels-photo-15828302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Clara Valverde",
    testimonialTitle: "Testimonial Title",
    testimonialText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt luctus, nunc nisl aliquam massa, eget aliquet nisl nisl eget nisl. Sed euismod, nisl vel tincidunt luctus, nunc nisl aliquam massa, eget aliquet nisl nisl eget nisl.",
  },
};

/**
 * Testimonial with no user image
 */
export const NoImage: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: {
    alt: "user image",
    name: "John Doe",
    testimonialTitle: "Testimonial Title",
    testimonialText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt luctus, nunc nisl aliquam massa, eget aliquet nisl nisl eget nisl. Sed euismod, nisl vel tincidunt luctus, nunc nisl aliquam massa, eget aliquet nisl nisl eget nisl.",
  },
};