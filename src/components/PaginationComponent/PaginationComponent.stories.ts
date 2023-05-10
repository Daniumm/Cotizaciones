import type { Meta, StoryObj } from "@storybook/react";
import PaginationComponent from "components/PaginationComponent/PaginationComponent";

const meta: Meta<typeof PaginationComponent> = {
    /* 👇 The title prop is optional.
     * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
     * to learn how to generate automatic titles
     */
    title: 'Components/PaginationComponent',
    component: PaginationComponent,
    tags: ['autodocs'],
    argTypes: { 
      pages: {control: {type: "number"} }
    }
  };
  
  export default meta;

  type Story = StoryObj<typeof PaginationComponent>;

  export const Default: Story = {
    args: { 
      pages: 20
    }
  }