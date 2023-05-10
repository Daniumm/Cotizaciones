import React from "react";
import { ShowIcon, ShowLabel } from "./styles";
import { TextWithIconProps } from "./types";
import theme from "theme/theme";
import * as MUIcon from "@mui/icons-material";

const TextWithIcon: React.FC<TextWithIconProps> = ({
    color = theme.color.black,
    text,
    icon = "LocationOn",
    size = "Small",
    button = false,
    onClick,
}) => {
    const Icon = icon && MUIcon[icon];

    return (
            <ShowLabel color={color} size={size} button={button} onClick={onClick}>
                {Icon && <Icon fontSize="inherit"/>}
                <ShowIcon>{text}</ShowIcon>
            </ShowLabel>
    )

};

export default TextWithIcon;