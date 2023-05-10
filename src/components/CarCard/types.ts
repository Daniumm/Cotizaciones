import { ReactNode } from "react";

export interface CarCardProp {
  /**
   * Background color for card
   */
  bgColor?: string;

  /**
   * Show favorite button
   */
  showButton?: boolean;

  /**
   * Car price
   */
  price?: string;

  /**
   * Car model
   */
  model?: string;

  /**
   * Car characteristics
   */
  chars?: string;

  /**
   * Agency location
   */
  location?: string;

  /**
   * Payment status
   */
  payment?: string;

  /**
   * Car image
   */
  carImage: string;

  /**
   * Variant
   */
  variant: string;

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

  /**
   * Is Favorite?
   */
  starActive?: boolean;

  side?: boolean;
}
