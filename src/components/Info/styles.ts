import styled from "styled-components";
import theme from "theme/theme";

export const ShowLabel = styled.div`
  color: ${theme.color.black};
  text-align: center;
  max-width: 420px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: left;
  font-family: "Inter", sans-serif;
  margin: 20px;
  padding: 20px;
`;

export const ShowTitle = styled.h2`
  font-size: 24px;
  font-weight: semi-bold;
  margin: 15px 0 5px 0;
  padding: 0;
  text-align: center;
  width: 70%;
`;

export const ShowDescription = styled.p`
  font-size: 18px;
  font-weight: regular;
  margin: 15px 0 0 0;
  padding: 0;
`;

export const ShowIcon = styled.div`
  margin-bottom: 10px;
  height: 130px;
  text-align: center;
  margin: auto;
`;
