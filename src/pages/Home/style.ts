import styled from "styled-components";
import theme from 'theme/theme'

export const MainInfoText = styled.div`
    padding: 0 2rem;
`

export const MainInfoTitle = styled.h1`
    font-size: 48px;
    font-weight: 700;
    margin-bottom: 1rem;
`

export const MainInfoSubtitle = styled.h2`
    font-size: 24px;
    font-weight: 400;
    margin-bottom: 1.5rem;
`

export const Reasons = styled.section`
    padding: 2rem;
    text-align: center;
    background-color: #F8F8F8;
`

export const ReasonsTitle = styled.h2`
    font-size: 48px;
    font-weight: 700;
    margin: 1rem 0 0;
`

export const ReasonsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin: 1rem 0 0;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }
`

export const Testimonials = styled.section`
    padding: 2rem;
    text-align: center;
    background-color: #F8F8F8;
`

export const TestimonialSlide = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    
    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`

export const FAQSection = styled.section`
    text-align: center;
`

export const FAQGrid = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    max-width: 80%;
    margin: 0 auto;
    padding-bottom: 1rem;

    @media screen and (max-width: 768px) {
        max-width: 90%;
        gap: 1rem;
    }
`

export const FAQItem = styled.div`
    width: 100%;
    max-width: 800px;

    @media (max-width: 768px) {
        max-width: 100%;
    }
`