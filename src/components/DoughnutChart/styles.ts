import styled from "styled-components";

/**
 * This is the main container for the DoughnutChart component
 */
export const ShowDoughnutChart = styled.div`
max-width: 45%;
margin: 30px;
border: none;
padding: 10px;
border-radius: 14px;
box-shadow: 0 4px 4px rgba(0,0,0, 0.25);
aspect-ratio: 2/1;

@media (max-width: 768px) {
    max-width: 80%;
    justify-content: center;
    margin: 10px auto;
}
`;


