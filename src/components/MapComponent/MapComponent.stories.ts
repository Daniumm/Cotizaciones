import type { Meta, StoryObj } from "@storybook/react";

import MapComponent from "components/MapComponent/MapComponent";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof MapComponent> = {
    title: "MotorSpot/MapComponent",
    component: MapComponent,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
      side: { control: "text" },
      

    },
  };
  
  export default meta;
  type Story = StoryObj<typeof MapComponent>;
  // More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
/**
 * Main CarCard with using the theme
 */
export const MainCarCard: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args

 
};