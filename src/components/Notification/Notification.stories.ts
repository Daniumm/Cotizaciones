import type { Meta, StoryObj } from "@storybook/react";

import Notification from "components/Notification/Notification";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Notification> = {
  title: "Components/Notification",
  component: Notification,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },
};

export default meta;
type Story = StoryObj<typeof Notification>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
/**
 * Notification component when the personal information of the user has been updated.
 * This is the exact variant 1 of the figma
 */
export const Variant1: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: {
    type: 1,
    text: "Tu información personal ha sido actualizada de manera exitosa"
  },
};

/**
 * Notification component when you want to delete a vehicle, it has an option to cancel, eliminate or close the notification.
 * This is the exact variant 2 of the figma
 */
export const Variant2: Story = {
  args: {
    type: 2,
    text: "¿Deseas eliminar este vehículo?"
  },
};

/**
 * An example of a variant 1 modified
 */
export const Variant1Modified: Story = {
  args: {
    type: 1,
    text: "Los cambios han sido aplicados",
    button_v1_text: "Ir a home",
    button_v1_color: "#fd2ed0",
    button_v1_icon_bool: true,
    button_v1_icon: "Done"
  },
};

/**
 * An example of a variant 2 modified
 */
export const Variant2Modified: Story = {
  args: {
    type: 2,
    text: "¿Seguro quieres eliminar tu cuenta?",
    text_light: "Espero estés 100% seguro",
    button1_v2_text: "No quiero",
    button2_v2_text: "Sí quiero",
    button1_v2_color: "#499a23",
    button2_v2_color: "#1720ad",
    button1_v2_icon_bool: true,
    button1_v2_icon: "Hiking",
    button2_v2_icon_bool: true,
    button2_v2_icon: "BugReport",
  },
};

