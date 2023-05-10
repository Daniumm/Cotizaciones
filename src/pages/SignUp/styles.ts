import styled from "styled-components";
import theme from 'theme/theme'

export const SignUpInfo = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 80vh;
    margin: 0;

    @media (max-width: 960px) {
        min-height: auto;
        align-items: flex-start;
    }
`;

export const SignUpInfoContainer = styled.div`
    max-height: 80vh;
    display: flex;
    gap: 1rem;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    margin: 0 60px;
    flex-wrap: wrap;

    @media (max-width: 600px) {
        margin: 0 30px;
    }

    @media (max-width: 960px) {
        margin: 0 40px;
    }
`;

export const IconColumn = styled.div`
    flex: 0 0 auto;
    height: 100%;
`;

export const ContentColumn = styled.div`
    flex: 1;
    width: 100%;
    padding-left: 1rem;

    @media (max-width: 600px) {
        padding-left: 0.5rem;
    }

`;

export const SignUpInfoTitle = styled.h1`
    text-align: left;
    font-size: 48px;
    font-weight: 700;
    margin-bottom: 1rem;
    margin-top: 0px;

    @media (max-width: 600px) {
        font-size: 32px;
    }

    @media (max-width: 960px) {
        font-size: 40px;
    }
`;

export const SignUpForm = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;

    @media (max-width: 600px) {
        gap: 1rem;
    }

    @media (max-width: 960px) {
        gap: 1.5rem;
    }
`;

export const SignUpLinks = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 0.5rem;

    @media (max-width: 600px) {
        gap: 0.25rem;
    }

    @media (max-width: 960px) {
        gap: 0.4rem;
    }
`;

export const SignUpTextLink = styled.span`
    color: #${theme.color.gray};
    margin-top: 1rem;
`;

export const SignUpLink = styled.a`
    color: ${theme.color.navy};
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`;