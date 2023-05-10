export interface TestimonialCustomProp {
  /**
   * Altetnative text for the image
   */
  alt: string;
  /**
   * Source for the image
   */
  src?: string;
  /**
   * Margin for the component
   */
  margin?: string;
  /**
   * Name of the person
   */
  name: string;
  /**
   * Title for the testimonial
   */
  testimonialTitle: string;
  /**
   * Text for the testimonial
   */
  testimonialText: string;
}

export interface TestimonialProps {
  margin?: string;
}