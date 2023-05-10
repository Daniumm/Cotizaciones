import type { Meta, StoryObj } from "@storybook/react";

import AvatarUser from "components/AvatarUser/AvatarUser";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof AvatarUser> = {
    title: "Components/AvatarUser",
    component: AvatarUser,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        
    },
};

export default meta;
type Story = StoryObj<typeof AvatarUser>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Default: Story = {
    // More on args: https://storybook.js.org/docs/react/writing-stories/args
    args: {
        size: "Small",
        edit: false
    },
};

export const LargeUser: Story = {
    args: {
        size: "Large",
        edit: false
    },
};

export const MediumUser: Story = {
    args: {
        size: "Medium",
    },
};

export const SmallUser: Story = {
    args: {
        size: "Small",
    },
};
export const Large_User_Edit: Story = {
    args: {
        size: "Large",
        edit: true
    },
};

export const Medium_User_Edit: Story = {
    args: {
        size: "Medium",
        edit: true
    },
};

export const Small_User_Edit: Story = {
    args: {
        size: "Small",
        edit: true
    },
};