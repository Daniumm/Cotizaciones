import styled from "styled-components";
import theme from "theme/theme";

/**
 * This is the main container for the ErrorPage
 */
export const MainContainer = styled.div`
width: 100%;
height: 70vh;
display: flex;
justify-content: center;
align-items: center;
margin: 0 auto;

@media (max-width: 580px) {
    //flex-direction: column;
    height: 50vh;
}
`;

/**
 * This is the principal container for the info
 */
export const InfoMainContainer = styled.div`
width: 60%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: left;
// margin: 2rem auto;

@media (max-width: 580px) {
    width: 90%;
    height: 100%;
}
`;

/**
 * This is container for the p tags
 */
export const InfoContainer = styled.div`
width: 80%;
display: flex;
flex-direction: column;
`;

/**
 * This is the status code error
 */
export const StatusCode = styled.p`
font-size: 80px;
color: ${theme.color.steel};
font-weight: bold;
margin: 4px 0;

@media (max-width: 720px) {
    font-size: 60px;
}

@media (max-width: 580px) {
    font-size: 40px;
}
`;

/**
 * This is one of the 2 messages the user will see
 */
export const Message1 = styled.p`
font-size: 35px;
color: ${theme.color.black};
font-weight: bold;
margin: 4px 0;

@media (max-width: 720px) {
    font-size: 25px;
}

@media (max-width: 580px) {
    font-size: 20px;
}
`;

/**
 * This is the second message the user will see
 */
export const Message2 = styled.p`
font-size: 16px;
color: ${theme.color.black};
margin: 4px 0;

@media (max-width: 720px) {
    font-size: 14px;
}

@media (max-width: 580px) {
    font-size: 12px;
}
`;

/**
 * This is the principal container for the image
 */
export const ImageContainer = styled.div`
width: 40%;
height: 100%;
background-color: ${theme.color.space};
display: flex;
justify-content: center;
align-items: center;
// margin: 2rem auto;

@media (max-width: 580px) {
    // width: 100%;
    // height: 50%;
    display: none;
}
`;

/**
 * This is the styles regarding the image
 */
export const ImageStyled = styled.img`
max-width: 80%;
height: auto;
`;

/**
 * This is the button that sends the user back to the home page
 */
export const LargeButton = styled.button`
background-color: ${theme.color.space};
padding: 10px;
border-radius: 8px;
width: 60%;
font-size: 14px;
margin: 2rem auto 1rem;

& > a {
    color: ${theme.color.white};
    text-decoration: none;
    display: block;
}
`;

/**
 * Styles needed to center the button
 */
export const CenterButton = styled.div` {
    width: 100%;
    display: flex;
}
`;