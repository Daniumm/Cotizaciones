import { ReactNode } from "react";

export interface CommentsProp {
    /**
   * User´s name
   */
  name: string;
  /**
   * Publication date
   */
  date: string;
  /**
   * Comment title
   */
  title: string;
  /**
   * Comment
   */
  text: string;
}