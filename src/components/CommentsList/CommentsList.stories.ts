import type { Meta, StoryObj } from "@storybook/react";

import CommentsList from "components/CommentsList/CommentsList";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof CommentsList> = {
    title: "Components/CommentsList",
    component: CommentsList,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        comments: { control: "object" },
    },
};

export default meta;
type Story = StoryObj<typeof CommentsList>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Default: Story = {
    // More on args: https://storybook.js.org/docs/react/writing-stories/args
    args: {
        comments: [
            {
                name: "Alfredo Díaz",
                date: "Compra realizada el 10 de marzo de 2023",
                title: "Excelente Auto",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada lectus a ipsum vulputate, nec venenatis mi accumsan. In auctor ex ut sapien vestibulum, sit amet bibendum elit dapibus. Maecenas euismod turpis ac justo malesuada, vel viverra libero dignissim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque sit amet purus non magna consequat consequat eu non nisl.",
            },
            {
                name: "Mariana Luna",
                date: "Compra realizada el 10 de marzo de 2023",
                title: "Excelente Auto",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada lectus a ipsum vulputate, nec venenatis mi accumsan. In auctor ex ut sapien vestibulum, sit amet bibendum elit dapibus. Maecenas euismod turpis ac justo malesuada, vel viverra libero dignissim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque sit amet purus non magna consequat consequat eu non nisl.",
            },
            {
                name: "Guillermo Rincón",
                date: "Compra realizada el 10 de marzo de 2023",
                title: "Excelente Auto",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada lectus a ipsum vulputate, nec venenatis mi accumsan. In auctor ex ut sapien vestibulum, sit amet bibendum elit dapibus. Maecenas euismod turpis ac justo malesuada, vel viverra libero dignissim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque sit amet purus non magna consequat consequat eu non nisl.",
            },
            {
                name: "Pedro Solano",
                date: "Compra realizada el 10 de marzo de 2023",
                title: "Excelente Auto",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada lectus a ipsum vulputate, nec venenatis mi accumsan. In auctor ex ut sapien vestibulum, sit amet bibendum elit dapibus. Maecenas euismod turpis ac justo malesuada, vel viverra libero dignissim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque sit amet purus non magna consequat consequat eu non nisl.",
            },
        ],
    },
};
