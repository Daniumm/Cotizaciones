import styled from "styled-components";

export const Card = styled.div`
    margin: 0 auto;
    max-width: 600px;
    padding: 2rem;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    position: relative;
`;
export const DivIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 2rem;
`;

export const TextStrong = styled.h3`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@800&display=swap');
    font-family: 'Inter', sans-serif;
    font-weight: 800;
    font-size: 40px;
    line-height: 54px;
    text-align: center;
    font-feature-settings: 'salt' on, 'liga' off;
    color: #000000;
    margin-top: 0;
    margin-bottom:1rem;
`;

export const TextLight = styled.h3`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@800&display=swap');
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 20px;
    text-align: center;
    font-feature-settings: 'salt' on, 'liga' off;
    color: #000000;
    margin-top: 0;
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 1rem;
`;
