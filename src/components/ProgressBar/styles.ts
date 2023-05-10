import styled from "styled-components";
import { ColorProp, DotProp } from "./types";

export const ParentContainer = styled.div`
  background: #ffffff;
  width: 844px;
  height: 160px;
`;

export const MarginArea = styled.div`
  position: relative;
  text-align: center;
  font-family: "Trebuchet", sans-serif;
  font-size: 14px;
  margin: 0 20px;
`;

export const DotOne = styled.div<DotProp>`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  position: absolute;
  background: #000;
  border-radius: 50%;
  top: 0px;
  color: #fff;
  line-height: 30px;
  z-index: 9999;
  left: 65px;
  background: ${(props) => props.color};
`;
export const DotTwo = styled.div<DotProp>`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  position: absolute;
  background: #000;
  border-radius: 50%;
  color: #fff;
  line-height: 30px;
  top: 0px;
  z-index: 9999;
  left: 280px;
  background: ${(props) => props.color};
`;
export const DotThree = styled.div<DotProp>`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  position: absolute;
  background: #000;
  border-radius: 50%;
  top: 0px;
  color: #fff;
  line-height: 30px;
  z-index: 9999;
  left: 495px;
  background: ${(props) => props.color};
`;
export const DotFour = styled.div<DotProp>`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  position: absolute;
  background: #000;
  border-radius: 50%;
  top: 0px;
  color: #fff;
  line-height: 30px;
  z-index: 9999;
  left: 710px;
  background: ${(props) => props.color};
`;

export const Cero = styled.div`
  position: absolute;
  height: 15px;
  width: 8%;
  top: 20px;
  left: 5%;
  background-color: #001940;
  border-radius: 10px 0 0 10px;
`;

export const First = styled.div<ColorProp>`
  position: absolute;
  height: 15px;
  width: 30%;
  top: 20px;
  left: 10%;
  background-color: ${(props) => props.color};
  border-radius: 10px 0 0 10px;
`;
export const Second = styled.div<ColorProp>`
  position: absolute;
  height: 15px;
  width: 25%;
  top: 20px;
  left: 10%;
  background-color: ${(props) => props.color};
  left: 37%;
`;
export const Third = styled.div<ColorProp>`
  position: absolute;
  height: 15px;
  width: 38%;
  top: 20px;
  left: 10%;
  background-color: ${(props) => props.color};
  left: 62%;
  border-radius: 0 10px 10px 0;
`;

export const MessageOne = styled.div`
  top: 40px;
  color: #000;
`;

export const MessageTwo = styled.div`
  left: 210px;
`;
export const MessageThree = styled.div`
  left: 210px;
`;
export const MessageFour = styled.div`
  left: 210px;
`;
export const IconContainer = styled.div`
  position: absolute;
  top: 13px;
  left: 13px;
`;
