import * as MUIcon from "@mui/icons-material";

export interface NotificationProps {
    /**
     * Parameter to choose the type of notification
     */
    type: 1 | 2;
    /**
     * Text to show in the notification variant 1 or 2
     */
    text: string;
    /**
     * Text light to show in the notification variant 2
     */
    text_light?: string;
    /**
     * Text to show in the button of the variant 1
     */
    button_v1_text?: string;
    /**
     * Color of the button of the variant 1
     */
    button_v1_color?: string;
    /**
     * Determines if there is an icon in the button of the variant 1
     */
    button_v1_icon_bool?: boolean;
    /**
     * Icon to show in the button of the variant 1, availables in MUI
     */
    button_v1_icon?: keyof typeof MUIcon;
    /**
     * Text to show in the button 1 of the variant 2
     */
    button1_v2_text?: string;
    /**
     * Text to show in the button 2 of the variant 2
     */
    button2_v2_text?: string;
    /**
     * Color of the button 1 of the variant 2
     */
    button1_v2_color?: string;
    /**
     * Color of the button 2 of the variant 2
     */
    button2_v2_color?: string;
    /**
     * Determines if there is an icon in the button 1 of the variant 2
     */
    button1_v2_icon_bool?: boolean;
    /**
     * Icon to show in the button 1 of the variant 2, availables in MUI
     */
    button1_v2_icon?: keyof typeof MUIcon;
    /**
     * Determines if there is an icon in the button 2 of the variant 2
     */
    button2_v2_icon_bool?: boolean;
    /**
     * Icon to show in the button 2 of the variant 2, availables in MUI
     */
    button2_v2_icon?: keyof typeof MUIcon;
}