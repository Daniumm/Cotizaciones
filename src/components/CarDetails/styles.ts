import styled from "styled-components";
import { SelectableButtonProps } from "./types";
import theme from "theme/theme";

/**
 * This is the main container for the CarDescrition component
 */
export const ShowCarDetails = styled.div`
width: 25%;
margin: 30px auto;
display: flex;
flex-direction: column;
align-items: center;

@media (max-width: 768px) {
  width: 40%;
}

@media (max-width: 580px) {
  width: 90%;
}
`;

/**
 * This is the main container for the Buttons
 */
export const ShowButtons = styled.div`
display: flex;
max-width: 100%;
margin-top: 20px;
`;

/**
 * This are the styles used in the selectable buttons
 */
export const SelectableButton = styled.button<SelectableButtonProps>`
width: ${props => props.fullWidth ? '100%' : '50%'};
border: none;
background-color: ${theme.color.white};
color: ${props => props.colored ? `${theme.color.danger}` : `${theme.color.gray}`};
border-bottom: ${props => props.colored ? `solid ${theme.color.danger}` : 'none'};
font-size: 16px;
cursor: pointer;

&:hover{
  color: ${props => props.colored ? `${theme.color.danger}` : `${theme.color.black}`};
}

@media (max-width: 768px) {
  font-size: 13px;
}
`;

/**
 * This is the container for a specific description
 */
export const TextInfo = styled.div`
color: ${theme.color.gray};
font-size: 14px;
border-top: 1px solid ${theme.color.gray};
margin: 2px auto;

span {
    margin-left: 10px;
}

@media (max-width: 768px) {
    font-size: 12px;
}
`;

/**
 * This is the container for all the car's info
 */
export const InfoContainer = styled.div`
width: 90%;
margin-bottom: 15px;
`;

/**
 * This is an invisible container to simulate the space of a car image
 */
export const InvisibleBox = styled.div`
min-width: 90%;
max-height: 300px;
min-height: 200px;
padding: 12px;

@media (max-width: 580px) {
  // display: none;
  display:inline-block;
  max-height: 30px;
  min-height: 0;
}
`;

/**
 * This is an selectable container to choose a new car to compare
 */
export const CardContainer = styled.div`
box-shadow: 0 4px 4px 0 rgba(0,0,0,0.25);
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
transition: 0.3s;
background-color: ${theme.color.stone};
width: 40%;
border-radius: 8px;
padding: 12px;
width: 100%;
max-height: 300px;
min-height: 190px;
padding: 10px;

span{
  font-size: 38px;
}

p{
  font-size: 16px;
  margin-top: 0px;
}

&:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    color: ${theme.color.danger};
    cursor: pointer;
}
`;

/**
 * This is an invisible container to simulate the space of the buttons
 */
export const InvisibleButtons = styled.div`
max-width: 100%;
margin-top: 30px;
color: ${theme.color.white};

@media (min-width: 1200px) {
  height: 17px;
}
`;

/**
 * Normal text
 */
export const NormalText = styled.div`
font-size: 18px;
color: ${theme.color.black};

@media (max-width: 768px) {
  font-size: 16px;
}
`;

export const AnchorTagButton = styled.a`
border: 1px solid ${theme.color.gray};
padding: 4px;
text-decoration: none;
background-color: ${theme.color.darkWhite};
color: ${theme.color.gray};
font-size: 14px;
width: 90%;
margin: 4px;
border-radius: 4px;
display: flex;
gap: 5px;
align-items: center;
padding-left: 15px;

@media (max-width: 768px) {
  font-size: 12px;
}
`;
