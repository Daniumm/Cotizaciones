import styled from 'styled-components';
import theme from 'theme/theme';

export const CrossIcon = styled.div`
position: absolute;
top: 10px;
right: 10px;
`;

export const CardContainer = styled.div<{ color?: string, width?: string} >`
box-shadow: 0 4px 4px 0 rgba(0,0,0,0.25);
position: relative;
transition: 0.3s;
background-color: ${({color}) => color};
width: ${({ width }) => width || "450px"};
height: auto;
box-sizing: border-box;
border-radius: 8px;
padding: 20px;
&:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}
`;

export const CardHeader = styled.div`
display: grid;
grid-template-columns: 1fr 6fr;
margin: 0px;
`;

export const CardHeaderSales = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-start;
gap: 20px;
align-items: center;
margin: 0 0 0 20px;
`;

export const CardLogoSales = styled.img`
max-width: 15%;
`;

export const CardLogoContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;

export const CardLogo = styled.img`
max-height: 40px;
max-width: 40px;
`;

export const CardImage = styled.img<{contained?: boolean}>`
display: block;
margin-left: auto;
margin-right: auto;
width: ${props => props.contained ? "80%" : "100%"};
`;

export const CardTitle = styled.h3`
margin: 0;
font-family: 'Inter', sans-serif;
font-weight: 400;
font-size: 20px;
`;

export const CardTitle2 = styled.h3`
margin: 0;
font-size: 1.75rem;
font-weight: 700;
font-family: 'Inter', sans-serif;
`;

export const CardText = styled.p`
margin: 0;
padding-top: 4px;
font-family: 'Inter', sans-serif;
font-weight: 400;
font-size: 16px;
`;

export const CardContent = styled.div`
display: flex;
flex-direction: row;
margin-left: 10px;
`;

export const CardContent2 = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-end;
`;


export const CardPriceDescription = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
gap: 60px;
`;

export const CardPriceText = styled.p`
margin: 0;
padding-top: 4px;
font-family: 'Inter', sans-serif;
font-weight: 400;
font-size: 16px;
color: ${theme.color.gray};
`;

export const CardPriceValue = styled.p`
margin: 0;
padding-top: 4px;
font-family: 'Inter', sans-serif;
font-weight: 400;
font-size: 16px;
`;

export const CardContentSales = styled.div`
display: flex;
flex-direction: column;
margin-left: 10px;
`;

export const CardLocationIcon = styled.span`
margin-top: 0px;
`;

export const CardLocationIconSales = styled.span`
display: flex;
flex-direction: row;
margin-top: 0px;
`;