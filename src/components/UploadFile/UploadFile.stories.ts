import type { Meta, StoryObj } from "@storybook/react";

import UploadFile from "./UploadFile";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof UploadFile> = {
    title: "Components/UploadFile",
    component: UploadFile,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  };
  
  export default meta;
  type Story = StoryObj<typeof UploadFile>;
  
  // More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
  /**
   * Upload File to upload 
   */
  export const ToUpload: Story = {
    // More on args: https://storybook.js.org/docs/react/writing-stories/args
  };

  /**
   * Upload File uploaded
   */
  export const UploadedVerified: Story = {
    // More on args: https://storybook.js.org/docs/react/writing-stories/args
    args: {
        status: 1
    },
  };

  /**
   * Upload File to verify
   */
  export const UploadedToVerify: Story = {
    // More on args: https://storybook.js.org/docs/react/writing-stories/args
    args: {
        status: 2
    },
  };

