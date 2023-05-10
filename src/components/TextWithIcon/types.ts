import * as MUIcon from "@mui/icons-material";

export interface TextWithIconProps {
    /**
     * Text to be displayed
     */
    text: string;

    /**
     * Icon to be displayed
     */
    icon: keyof typeof MUIcon;

    /**
     * Color of the text and icon
     */
    color?: string;

    /**
   * Size of the container
   */
    size?: 'Large' | 'Medium' | 'Small';

    /**
     * The text is a button or not
     */
    button?: boolean;

    /**
     * Function of the button
     */
    onClick?: () => void;
}

export interface LabelProps {
    color: string;
    size: 'Large' | 'Medium' | 'Small';
    button: boolean;
    onClick?: () => void;
}