export interface InputProp {
 
  /**
   * Text
   */
  label: string;
  
   /**
   * Type of input
   */
  typeText:'normal' | 'password'| 'select'| 'checkbox'| 'radio'| 'card'| 'cvv';

  /**
   * Type of textField
   */
  multiLine?: boolean;

  /**
   * Rows for the textField
   */
  rows? : number;

  /**
   * Full width
  */
  fullWidth? : boolean;

  /**
   * Select
  */
  select? : boolean;

  /**
   * Options for the select
  */
  options?: Array<{ label: string; value: string }>;

   /**
   * Color of background
  */
   color?: string;

   /**
   * Color of background
  */
   forFilter?: boolean;

    /**
   * action for the button
   */
    onChange?: (e: any) => void;
  
  
}