import type { Meta, StoryObj } from "@storybook/react";
import Footer from "components/Footer/Footer";

const meta: Meta<typeof Footer> = {
    /* 👇 The title prop is optional.
     * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
     * to learn how to generate automatic titles
     */
    title: 'Components/Footer',
    component: Footer,
    tags: ['autodocs'],
  };
  
  export default meta;

  type Story = StoryObj<typeof Footer>;

  export const Default: Story = {

  }