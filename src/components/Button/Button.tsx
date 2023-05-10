import React, { useState } from "react";
import { ButtonProp } from "./types";
import theme from "theme/theme";
import { Button as ButtonMui } from "@mui/material";
import * as MUIcon from "@mui/icons-material";
import { setColor } from "components/TextWithIcon/styles";

const Button: React.FC<ButtonProp> = ({
  bgColor,
  color,
  hoverColor,
  children,
  size = "large",
  firstIcon,
  firstIconBool,
  secondIconBool,
  secondIcon,
  paddingLeft,
  paddingRight,
  fontSize,
  borderRadius,
  onClick,
  visited,
}) => {
  const Icon1 = firstIcon && MUIcon[firstIcon];
  const Icon2 = secondIcon && MUIcon[secondIcon];
  const [colorButton, setColorButton] = useState(true);
  const colorBtn = colorButton ? theme.color.space : theme.color.gray;
  const handleClick = () => {
    setColorButton(!colorButton);
  };
  return (
    <ButtonMui
      sx={{
        backgroundColor: bgColor,
        color: color,
        borderRadius: { borderRadius },
        textTransform: "none",
        paddingLeft: { paddingLeft },
        paddingRight: { paddingRight },
        fontSize: { fontSize },
        "&:hover": {
          backgroundColor: hoverColor,
        },
      }}
      startIcon={firstIconBool && Icon1 ? <Icon1 /> : null}
      endIcon={secondIconBool && Icon2 ? <Icon2 /> : null}
      onClick={onClick}
    >
      {children}
    </ButtonMui>
  );
};

export default Button;
