import styled from "styled-components";
import { LabelProps } from "./types";
import { createTheme } from '@mui/material/styles';

const getFontSize = (size: string) => {
    if (size === "Large") {
        return "24px";
    }
    if (size === "Medium") {
        return "20px";
    }
    return "14px";
};

const isButton = (button: boolean) => {
    if (button === true) {
        return 0.75;
    }
    else
    return 1;
};

const buttonPointer = (button: boolean) => {
    if (button === true) {
        return "pointer";
    }
    else
    return "default";
};


export const setColor = (color: string) => {
    return color;
};

export const ShowLabel = styled.div<LabelProps>`
    color: ${({ color }) => setColor(color)};
    display: flex;
    flex-direction: row;
    padding: 5px;
    font-size: ${({ size }) => getFontSize(size)};
    font-weight: 500;
    line-height: 1.2;
    margin: 0 0 5px 0;
    align-items: center;
    opacity: ${({ button }) => isButton(button)};
    &:hover {
        cursor: ${({ button }) => buttonPointer(button)};
        opacity: 1;
    }
`;

export const ShowIcon = styled.p`
    display: inline-block;
    margin: 0 0 0 5px ;
    font-family: "Inter", sans-serif;
`;

