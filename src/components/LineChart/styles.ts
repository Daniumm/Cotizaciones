import styled from "styled-components";

/**
 * This is the main container for the LineChart component
 */
export const ShowLineChart = styled.div`
width: 45%;
margin: 30px;
border: none;
padding: 10px;
border-radius: 14px;
box-shadow: 0 4px 4px rgba(0,0,0, 0.25);

@media (max-width: 768px) {
    width: 80%;
    justify-content: center;
    margin: 10px auto;
}
`;