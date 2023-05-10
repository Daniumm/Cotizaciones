import * as MUIcon from "@mui/icons-material";

export interface InfoProps {
    /**
     * Title of the info
     */
    title: string;

    /**
     * Content to be displayed
     */
    content: string;

    /**
     * Icon to be displayed
     */
    icon: keyof typeof MUIcon;
}

