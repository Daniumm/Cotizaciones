import type { Meta, StoryObj } from "@storybook/react";
import TextWithIcon from "components/TextWithIcon/TextWithIcon";

const meta: Meta<typeof TextWithIcon> = {
    title: "Components/TextWithIcon",
    component: TextWithIcon,
    tags: ['autodocs'],
    argTypes: {
        text: { control: "text" },
        icon: { control: "text" },
        color: { control: "color" },
        size: { control: "select", options: ["Large", "Medium", "Small"] },
        button: { control: "boolean" },
        onClick: { control: "function" },
    },
};

export default meta;
type Story = StoryObj<typeof TextWithIcon>;

export const Default: Story = {
    args: {
        text: "Example text",
    },
};

/**
 * Text as button, opacity changes and pointer appears on hover.
 */

export const CustomButton: Story = {
    args: {
        text: "Example text",
        button: true,
    },
};

/**
 * To change the icon, respect the use of upper and lower case letters.
 */
export const CustomIcon: Story = {
    args: {
        text: "Different icon example text",
        icon: "Save",
    },
};


export const CustomColor: Story = {
    args: {
        text: "Example text",
        color: "red",
    },
};

export const Large: Story = {
    args: {
        text: "Example text",
        size: "Large",
    },  
};

export const Medium: Story = {
    args: {
        text: "Example text",
        size: "Medium",
    },
};