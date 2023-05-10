import styled from "styled-components";
import theme from "theme/theme";

/**
 * This is the main container for the DateTimeReservation component
 */
export const ShowDateTimeRes = styled.div`
max-width: 90%;
margin: 30px;

@media (max-width: 768px) {
    max-width: 80%;
    justify-content: center;
    margin: 10px auto;
}
`;

/**
 * Styling the <p> tag at the top
 */
export const TextDTR = styled.p`
color: ${theme.color.black};
font-size: 25px
`;

/**
 * This is the container used for the Date buttons
 */
export const ShowDateBar = styled.div`
display: flex;
justify-content: space-between;
min-width: 100%;
flex-wrap: wrap;
margin: 10px auto; 
`;

/**
 * This is a single Date button
 */
export const BtnDateBar = styled.div`
background-color: ${theme.color.white};
color: ${theme.color.black};
border: none;
padding: 20px;
cursor: pointer;
border-radius: 5px;
box-shadow: 0 4px 4px rgba(0,0,0, 0.25);
text-align: center;
margin: 5px;
&:hover{
    background-color: ${theme.color.darkWhite};
}
`;

/**
 * Styling the top <p> tag inside the Date buttons
 */
export const WeekDay = styled.p`
margin: 0;
font-size: 12px;
`;

/**
 * Styling the bottom <p> tag inside the Date buttons
 */
export const WeekDate = styled.p`
margin: 0;
font-size: 20px;
text-transform: uppercase;
min-width: 90%;
`;

/**
 * This is the container used for the Hour buttons
 */
export const ShowTimeBar = styled.div`
min-width: 100%;
margin: 20px auto;
`;

/**
 * This is a single Hour button
 */
export const BtnTimeBar = styled.div`
display: block;
background-color: ${theme.color.white};
color: ${theme.color.black};
border: none;
padding: 10px;
border-radius: 5px;
cursor: pointer;
box-shadow: 0 4px 4px rgba(0,0,0, 0.25);
text-align: center;
margin: 10px 5px;
font-size: 20px;
&:hover{
    background-color: ${theme.color.darkWhite};
}
`;