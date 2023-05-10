import { ReactNode } from "react";
import * as MUIcon from "@mui/icons-material";

export interface ButtonProp {
  /**
   * Background color for button
   */
  bgColor: string;
  /**
   * Color for the text
   */
  color?: string;
  /**
   * Color for hover over button
   */
  hoverColor: string;
  /**
   * Children for the button content
   */
  children?: ReactNode;
  /**
   * How large should the button be?
   */
  size: "small" | "medium" | "large";

  /**
   * Show icon at the beginning
   */
  firstIconBool?: boolean;

  /**
   * Choose icon at the beginning
   */
  firstIcon?: keyof typeof MUIcon;

  /**
   * Show icon at the end
   */
  secondIconBool?: boolean;

  /**
   * Choose icon at the end
   */
  secondIcon?: keyof typeof MUIcon;

  /**
   * onClick function
   */
  onClick?: () => void;

  /**
   * padding-left
   */
  paddingLeft?: string;

  /**
   * padding-right
   */
  paddingRight?: string;

  /**
   * padding-right
   */
  fontSize?: string;

  /**
   * padding-right
   */
  borderRadius?: string;

  /**
   * onClick function
   */
  visited?: () => void;
}
