import { ReactNode } from "react";

export interface FAQprops {
  /**
   * Id of the question
   */
  id: number,
  /**
   * Question for the accordion
   */
  question: string;
  /**
   * Answer for the accordion
   */
  answer: string;
  /**
   * Is the accordion disabled or not T/F
   */
  disabled: boolean;
}

