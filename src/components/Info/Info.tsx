import React from "react";
import { InfoProps } from "./types";
import { ShowDescription, ShowIcon, ShowLabel, ShowTitle } from "./styles";
import * as MUIcon from "@mui/icons-material";

const Info: React.FC<InfoProps> = ({ title, content, icon}) => {

    const Icon = icon && MUIcon[icon];

    return (
        <div>
        <ShowLabel>
            <ShowIcon>
                {Icon && <Icon sx={{ fontSize: "128px" }} />}
            </ShowIcon>
            <ShowTitle>{title}</ShowTitle>
            <ShowDescription>{content}</ShowDescription>
        </ShowLabel>
        </div>
    );
};

export default Info;
