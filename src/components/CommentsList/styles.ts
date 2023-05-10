import styled from "styled-components";
import theme from "theme/theme";

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0 0 0 0;
    @media (max-width: 1024px) {
        margin: 0 auto;
    }
`;

export const CommentContainer = styled.div`
    margin: 0 0 1rem 0;
`;

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 0 0 0 0;
`;