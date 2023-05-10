import styled from "styled-components";
import theme from 'theme/theme'

export const LoginInfo = styled.section`
    margin: 7rem 0;

    @media (max-width: 600px) {
        margin: 0;
    }

    @media (max-width: 960px) {
        margin: 0;
    }
`;

export const ContainerLogin = styled.div`
    max-height: 80vh;
    display: flex;
    gap: 1rem;
    flex-direction: row;
    justify-content: flex-start;
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

export const LoginTitle = styled.h1`
    text-align: left;
    font-size: 48px;
    font-weight: 700;
    margin-bottom: 1rem;

    @media (max-width: 600px) {
        font-size: 32px;
    }

    @media (max-width: 960px) {
        font-size: 40px;
    }
`;

export const LoginForms = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem; /* Ajusta este valor según el espacio deseado */
    width: 100%;

    @media (max-width: 600px) {
        gap: 1rem;
    }

    @media (max-width: 960px) {
        gap: 1.5rem;
    }
`;

export const LinksExtraLogin = styled.div`
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

export const LinkExtraLogin = styled.a`
    color: ${theme.color.navy};
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`;

export const LinkText = styled.span`
    color: ${theme.color.gray};
`;