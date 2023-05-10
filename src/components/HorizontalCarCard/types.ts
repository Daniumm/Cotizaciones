import { ReactNode } from "react";


export interface HorizontalCarCardProp {
  /**
   * Background color for card
   */
  bgColor?: string;

  /**
   * Car price
   */
  date?: string;

  /**
   * Car model
   */
  model?: string;

  /**
   * Agency location
   */
  location?: string;

  /**
   * Car image
   */
  carImage: string;

  /**
   * Company logo (Optional)
   */
  companyLogo?: string;

  /**
   * Company logo (Optional)
   */
  width?: number;

  /**
   * Company logo (Optional)
   */
  height?: number;
}
