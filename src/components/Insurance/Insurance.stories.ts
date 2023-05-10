import type { Meta, StoryObj } from "@storybook/react";
import Insurance from "./Insurance";


// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Insurance> = {
  title: "Components/Insurance",
  component: Insurance,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    options: { control: "array" },
  },
};

export default meta;
type Story = StoryObj<typeof Insurance>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
/**
 * Main Button with using the theme
 */
export const MainButton: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: {
    options: [
      {
        imgSrc:
          "http://2.bp.blogspot.com/-lMxiVKInxLo/UhVcn0_Ed2I/AAAAAAAAAOQ/oQ0kZL-i88M/s1600/gnp10.jpg",
        description: "/año",
        insuranceId: 1,
        name: "Example Insurance",
        duration: "1 year",
        price: "$1000",
        agency: 1,
        crane: true,
        thirdQty: "500,000.00",
        totalLoss: "10% V. COMERCIAL",
        selfQty: "5% V. COMERCIAL",
        
      },
    ],
  },
};
