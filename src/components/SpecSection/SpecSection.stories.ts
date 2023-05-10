import type { Meta, StoryObj } from "@storybook/react";

import SpecSection from "components/SpecSection/SpecSection";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof SpecSection> = {
    title: "Components/SpecSection",
    component: SpecSection,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        sections: { control: "object" },
    },
};

export default meta;
type Story = StoryObj<typeof SpecSection>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
/**
 * Example of SpecSection
 */
export const Default: Story = {
    // More on args: https://storybook.js.org/docs/react/writing-stories/args
    args: {
        sections: [
            {
                title: "General",
                fields: [
                    "Marca: Toyota",
                    "Modelo: Corolla",
                    "Año: 2019",
                    "Kilometraje: 20.000",
                ],
            },
        ],
    },
};