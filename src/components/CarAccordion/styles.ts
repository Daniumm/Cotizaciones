import styled from "styled-components";

export const StyledHeader = styled.div`
  font-weight: bold;
  font-family: Inter;
  margin-left: 1;
`;

export const StyledDescription = styled.div`
  color: text.secondary;
  font-family: Inter;
  margin-left: 1;
`;

export const InLine = styled.div`
  display: inline-block;
  flex: 1;
`;

export const CarCardContainer = styled.div`
  flex: 1;
  display: inline-block;
`;

export const WholeCardContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const TextCarCardContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TextCardCard = styled.div`
  margin-bottom: 10px;
`;

export const LabelText = styled.span`
  color: grey;
  margin-right: 8px;
`;

export const ValueText = styled.span`
  font-weight: bold;
  margin-left: 8px;
`;
