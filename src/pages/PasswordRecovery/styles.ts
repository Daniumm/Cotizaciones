import styled from "styled-components";
import theme from 'theme/theme'

export const PasswordInfo = styled.section`
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

export const PasswordInfoContainer = styled.div`
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

export const PasswordInfoTitle = styled.h1`
    text-align: left;
    font-size: 48px;
    font-weight: 700;
    margin-bottom: 1rem;
    margin-top: 0px;

    @media (max-width: 600px) {
        font-size: 30px;
    }

    @media (max-width: 960px) {  
        font-size: 30px;
    }
`;

export const PasswordInfoText = styled.p`
    text-align: left;
    font-size: 18px;
    font-weight: 400;
    color: ${theme.color.navy};
`;

export const PasswordInfoForm = styled.div`
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

export const Separator = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1rem 0;
`;

export const SeparatorLine = styled.hr`
    flex-grow: 1;
    border: none;
    border-top: 1px solid ${theme.color.gray};
`;

export const SeparatorText = styled.span`
    margin: 0 0.5rem;
    font-size: 16px;
    color: ${theme.color.gray};
`;

export const LinksExtra = styled.div`
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

export const LinkExtra = styled.a`
    color: ${theme.color.navy};
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`;