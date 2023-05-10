import styled from "styled-components";
import theme from "theme/theme";

export const setColor = (color: string) => {
    return color;
}

export const CarInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 0 0 0;
    padding: 0 0 0 0;
`;

export const InfoHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center,
`;

export const CarTitle = styled.h1`
    font-family: "Inter", sans-serif;
    font-weight: 800;
    font-size: 40px;
    margin: 0;
    padding: 0 20px 0 0;
}
`;

export const StarContainer = styled.div`    
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin: 0;
    padding: 0;
`;

export const CarDetailsContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0;
    color: ${theme.color.gray};
`;

export const CarDetailsInfo = styled.p`
    font-family: "Inter", sans-serif;
    font-weight: 400;
    font-size: 20px;
    margin: 0;
`;


export const CarLocationContainer = styled.div`
    margin: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const CarLocation = styled.p`
    font-family: "Inter", sans-serif;
    font-weight: 400;
    font-size: 24px;
    margin: 0;
`;

// align price to left of p
export const CarPrice = styled.p`
    font-family: "Inter", sans-serif;
    font-weight: 800;
    font-size: 30px;
    margin: 20px 0 0 0;
    text-align: right;
    color: ${theme.color.cobalt};
    @media (max-width: 1024px) {
        margin-bottom: 20px;
    }
    @media (max-width: 768px) {
        text-align: center;
`;