import React from "react";
import { MainContainer, InfoMainContainer, InfoContainer, ImageContainer, ImageStyled, LargeButton, CenterButton, StatusCode, Message1, Message2 } from "./styles";
import ErrorImage from "Assets/ErrorImage.png";
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <MainContainer>
            <InfoMainContainer>
                <InfoContainer>
                    <StatusCode>404</StatusCode>
                    <Message1>¡Oh no! La página que buscas no se ha podido encontrar</Message1>
                    <Message2>Prueba regresando a nuestra página inicial</Message2>
                </InfoContainer>
                <CenterButton>
                    <LargeButton><Link to="/">Volver al Inicio</Link></LargeButton>
                </CenterButton>
            </InfoMainContainer>

            <ImageContainer>
                <ImageStyled src={ErrorImage} alt="Motor Spot - Error icon"></ImageStyled>
            </ImageContainer>
        </MainContainer>
    )
}

export default ErrorPage;