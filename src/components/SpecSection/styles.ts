import styled from "styled-components";
import theme from "theme/theme";

export const VersionHeading = styled.input`
    font-size: 20px;
    font-weight: 700;
    font-family: 'Inter', sans-serif;
    border: none;
    outline: none;
    background-color: transparent;
    width: 100%;
    margin: 0;
    padding: 0;
`;

export const SpecsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 20px;
    justify-content: space-between;
`;

export const NewSpecField = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0 0 0 50px;
`;

export const FieldInput = styled.input`
    font-size: 16px;
    font-weight: 400;
    font-family: 'Inter', sans-serif;
    border: none;
    outline: none;
    background-color: transparent;
    width: 100%;
    margin: 0;
    padding: 0;
    ::placeholder {
        color: ${theme.color.gray};
    }
`;