import { ReactNode } from "react";
import * as MUIcon from "@mui/icons-material";

export interface HeaderAgencyProp {
  /**
   * Big label
   */
  label: string
   /**
   * small label
   */
   labelSmall: String
  /**
   * logo image
   */
  logo: string
  /**
   * backgroud image
   */
  image: string

  /**
   * action for the button
   */
  onClick: () => void;
    /**
   * It use an icon 
   */
     withIcon?: boolean
     /**
     * Icon 
     */
     icon?: keyof typeof MUIcon;
  
    /**
   * Children for the button content
   */
   children?: ReactNode;
  
}

