import type { Meta, StoryObj } from '@storybook/react';

import CarDetails from 'components/CarDetails/CarDetails';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof CarDetails> = {
    title: "Components/CarDetails",
    component: CarDetails,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        cardType: { control: "text" },
        manualCar: { control: "object" },
        automaticCar: { control: "object" },
    },
};

export default meta;
type Story = StoryObj<typeof CarDetails>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Variant1: Story = {
    // More on args: https://storybook.js.org/docs/react/writing-stories/args
    args: {
        manualCar: {
            "name": "Porsche 718 Spyder",
            "car_image": "https://files.porsche.com/filestore/image/multimedia/none/982-718spyder-modelimage-sideshot/thumbnail/e9f11134-fa4e-11e9-80c6-005056bbdc38/porsche-thumbnail.png",
            "agency": "Agencia X CDMX",
            "price": 230000,
            "power": 420,
            "acceleration": 4.4,
            "max_speed": 304,
            "consumption": 10.9,
            "carbon_emissions": 214.8,
            "height": 1269,
            "width": 1801,
            "length": 4456
        },
        automaticCar: {
            "name": "Porsche 718 Spyder",
            "car_image": "https://files.porsche.com/filestore/image/multimedia/none/982-718spyder-modelimage-sideshot/thumbnail/e9f11134-fa4e-11e9-80c6-005056bbdc38/porsche-thumbnail.png",
            "agency": "Agencia X CDMX",
            "price": 258000,
            "power": 400,
            "acceleration": 5.2,
            "max_speed": 295,
            "consumption": 11.5,
            "carbon_emissions": 236.7,
            "height": 1269,
            "width": 1801,
            "length": 4456
        }
    },
};

export const Variant2: Story = {
    args: {
        cardType: "description"
    },
};