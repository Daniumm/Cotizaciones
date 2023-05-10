import { ReactNode } from "react";

export interface CardProp {
  /**
 * Children for the card content
 */
  children: ReactNode;

  /**
 * Width for the card
 */
  width?: string;

  /**
 * Height for the card
 */
  height?: string;

  colorBackground?: string;

  color?: string;
}