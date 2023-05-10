import React from "react";
import { TestimonialCustomProp } from "./types";
import { Avatar } from "@mui/material";
import { 
  ParentContainer, 
  CardContainer, 
  TitleTestimonial,
  TextTestimonial,
  NameTestimonial
} from "./styles";


const Testimonial: React.FC<TestimonialCustomProp> = ({
  alt,
  src="https://cdn-icons-png.flaticon.com/512/666/666201.png",
  margin,
  name,
  testimonialTitle,
  testimonialText
}) => {
  return (
  <ParentContainer margin={margin}>
    <CardContainer>
      <TitleTestimonial>{testimonialTitle}</TitleTestimonial>

      <TextTestimonial>{testimonialText}</TextTestimonial>
    </CardContainer>

    <Avatar alt={alt} src={src} 
      sx={{
        width: "70px",
        height: "70px",
        marginTop: "0.1rem",
      }} 
    />

    <NameTestimonial>{name}</NameTestimonial>
  </ParentContainer>
  )
};

export default Testimonial;