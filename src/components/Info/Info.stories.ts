import type { Meta, StoryObj } from "@storybook/react";
import Info from "components/Info/Info";

const meta: Meta<typeof Info> = {
    title: "Components/Info",
    component: Info,
    tags: ['autodocs'],
    argTypes: {
        title: { control: "text" },
        content: { control: "text" },
        icon: { control: "text" },
    },
};

export default meta;
type Story = StoryObj<typeof Info>;

export const Default: Story = {
    args: {
        title: "Example Title",
        icon: "GppGoodOutlined",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis odio ex, varius maximus posuere ac, venenatis sit amet nisi. Curabitur dignissim nisl sit amet nisi imperdiet aliquam.",
    },
};

/**
 * To change the icon, respect the use of upper and lower case letters.
 */
export const CustomIcon: Story = {
    args: {
        title: "Transparente",
        icon: "HandshakeOutlined",
        content: "Te asignamos un vendedor dentro de cada agencia, el cual estará contigo para asistirte durante tu proceso.",
    },
};