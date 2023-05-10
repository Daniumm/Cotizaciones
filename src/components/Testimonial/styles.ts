import styled from "styled-components";
import { TestimonialProps } from "./types";

export const ParentContainer = styled.div<TestimonialProps>`
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: ${({margin}) => margin || "0 2rem 0 0"};
      `;

export const CardContainer = styled.div`
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.09);
    padding: 1rem;
    max-width: 20rem;
    margin-bottom: 1rem;
    `;

export const TitleTestimonial = styled.h5`
    font-size: 24px;
    text-align: center;
    font-weight: bold;
    margin: 16px 0 0.1rem 0;
    `;

export const TextTestimonial = styled.p`
    margin: 3px 10px 16px 10px;
    text-align: center;
    font-size: 14px;
    line-height: 1.5;
    `;

export const NameTestimonial = styled.p`
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    `;