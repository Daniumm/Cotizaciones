import styled from "styled-components";
import theme from "theme/theme";

export const UploadFileContainer = styled.div`
  color: ${theme.color.black};
  width: 100%;
  max-width: 500;
  display: flex;
  align-items: center;
  text-align: left;
  font-family: "Inter", sans-serif;
`;

export const DropZone = styled.div`
  border: 2px dashed #bbb;
  border-radius: 4px;
  text-align: center;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-bottom: 16px;
  padding: 16px;
  width: 420px;
  height: 150px;
`;

export const BtnContainer = styled.div`
  align-items: center;
  text-align: center;
`;

export const BoldText = styled.p`
  font-weight: bold;
  height: 64px;
  width: 334px;
`;

export const ShowIcon = styled.div`
  text-align: center;
`;
