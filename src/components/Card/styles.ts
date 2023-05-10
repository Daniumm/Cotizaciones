import styled from "styled-components";
import { CardProp } from "./types";

export const WhiteCard = styled.div<CardProp>`
    background-color: ${({ colorBackground }) => colorBackground ?? "#ffff"};
    border-radius: 8px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);  
    display: table;
    width: ${({ width }) => width ?? "auto"};
    height: ${({ height }) => height ?? "auto"};
    max-width: 93%;
    min-width: 16em;
    min-height: 10em;
    padding: 30px;
    color:  ${({ color }) => color ?? "#ffff"};
`;