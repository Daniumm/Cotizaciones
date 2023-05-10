import type { Meta, StoryObj } from "@storybook/react";

import TableView from "components/TableView/TableView";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof TableView> = {
    title: "Components/TableView",
    component: TableView,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        sectionHeader: { control: "text" },
        rows: { control: "object" },
    },
};

export default meta;
type Story = StoryObj<typeof TableView>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Default: Story = {
    // More on args: https://storybook.js.org/docs/react/writing-stories/args
    args: {
        sectionHeader: "General",
        rows: [
            {
                "description": "Número de cilindros",
                "value": "6"
            },
            {
                "description": "Potencia",
                "value": "420 HP"
            },
            {
                "description": "Par máximo (manual)",
                "value": "420 Nm"
            },
            {
                "description": "Par máximo (PDK)",
                "value": "430 Nm"
            },
            {
                "description": "Transmisión",
                "value": "Manual/PDK"
            },
            {
                "description": "Rendimiento (combinado)",
                "value": "10.9 km/L"
            },
            {
                "description": "Aceleración de 0 - 100 km/h",
                "value": "4.4 s"
            },
            {
                "description": "Velocidad máxima",
                "value": "304 km/h"
            },
            {
                "description": "Tanque de combustible",
                "value": "64 L"
            },
            {
                "description": "Emisiones de CO2",
                "value": "251 gr/km"
            },
            {
                "description": "Tracción",
                "value": "Trasera"
            },
            {
                "description": "Peso",
                "value": "1750 kg"
            }
        ]
    },
};
