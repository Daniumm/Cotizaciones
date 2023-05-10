import type { Meta, StoryObj } from "@storybook/react";

import CarCardVariants from "components/CarCardVariants/CarCardVariants";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof CarCardVariants> = {
  title: "Components/CarCardVariants",
  component: CarCardVariants,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    carImg: { control: "text" },
    name: { control: "text" },
    agency: { control: "text" },
    companyLogo: { control: "text" },
    price: { control: "text" },
    color: { control: "color" },
    width: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof CarCardVariants>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
/**
 * Card with clear icon. Contains: car image, car name, and agency.
 */
export const Variant1: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: {
    carImg:"https://files.porsche.com/filestore/image/multimedia/none/992-gt3-modelimage-sideshot/thumbwhite/fcb6d09a-51bc-11eb-80d1-005056bbdc38;sK;twebp065/porsche-thumbwhite.webp",
    name:"Porsche 911 GT3" ,
    agency:"Agencia Porsche Querétaro",
    variant:"var1"
  },
};
/**
 * Card without clear icon. Contains: car image, car name, and agency.
 */
export const Variant2: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: {
    carImg:"https://files.porsche.com/filestore/image/multimedia/none/992-gt3-modelimage-sideshot/thumbwhite/fcb6d09a-51bc-11eb-80d1-005056bbdc38;sK;twebp065/porsche-thumbwhite.webp",
    name:"Porsche 911 GT3" ,
    agency:"Agencia Porsche Querétaro",
    variant:"var2"
  },
};
/**
 * Contains: Company logo, car image and car name.
 */
export const Variant3: Story = {
    // More on args: https://storybook.js.org/docs/react/writing-stories/args
    args: {
      carImg:"https://files.porsche.com/filestore/image/multimedia/none/992-gt3-modelimage-sideshot/thumbwhite/fcb6d09a-51bc-11eb-80d1-005056bbdc38;sK;twebp065/porsche-thumbwhite.webp",
      name:"Porsche 911 GT3" ,
      companyLogo:"https://assets.stickpng.com/images/580b585b2edbce24c47b2cac.png",
      variant:"var3"
    },
  };

/**
 * Contains: Company logo, car image, car name and price.
 */
  export const Variant4: Story = {
    // More on args: https://storybook.js.org/docs/react/writing-stories/args
    args: {
      carImg:"https://files.porsche.com/filestore/image/multimedia/none/992-gt3-modelimage-sideshot/thumbwhite/fcb6d09a-51bc-11eb-80d1-005056bbdc38;sK;twebp065/porsche-thumbwhite.webp",
      name:"Porsche 911 GT3" ,
      companyLogo:"https://assets.stickpng.com/images/580b585b2edbce24c47b2cac.png",
      price:"1,468,000.00",
      variant:"var4"
    },
  };

/**
 * Custom card for sales page.
 */
    export const Variant5: Story = {
      // More on args: https://storybook.js.org/docs/react/writing-stories/args
      args: {
        agency:"Agencia Porsche Querétaro",
        carImg:"https://files.porsche.com/filestore/image/multimedia/none/992-gt3-modelimage-sideshot/thumbwhite/fcb6d09a-51bc-11eb-80d1-005056bbdc38;sK;twebp065/porsche-thumbwhite.webp",
        name:"Porsche 911 GT3",
        companyLogo:"https://assets.stickpng.com/images/580b585b2edbce24c47b2cac.png",
        price:"1,468,000.00",
        variant:"var5",
      },
    };