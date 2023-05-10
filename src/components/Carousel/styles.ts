import styled from "styled-components";
import theme from "theme/theme";

export const CarouselContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
`;

export const CarouselWrapper = styled.div`
    height: 400px;
    overflow: hidden;
    margin-bottom: 16px;
`;

export const CurrentImgContainer = styled.img`
    width: 100%;
    height: 100%;
    min-width: 600px;
    object-fit: cover;
    object-position: center;
    justify-content: center;
    border-radius: 8px;
    @media (max-width: 768px) {
        min-width: 100%;
    }

`;

export const CarouselThumbnails = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    max-width: 600px;
    overflow-x: auto;
    padding-top: 8px;
    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
        display: none;
    }
    @media (max-width: 768px) {
        max-width: 350px;
    }
`;

export const ThumbnailImg = styled.img`
    width: 170px;
    min-width: 170px;
    height: 80px;
    margin-right: 8px;
    border: 2px solid #ccc;
    border-radius: 8px;
    cursor: pointer;
    &:hover {
        border: 2px solid #000;
    }
`;