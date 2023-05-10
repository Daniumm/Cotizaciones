import React from "react";
import MotoSpotWhite from "../../Assets/MotoSpotWhite.png";
import {
	FooterBelowContainer,
	FooterContainer,
	FooterCopyrightContainer,
	FooterCopyrightIcon,
	FooterCopyrightText,
	FooterDivider,
	FooterLink,
	FooterLinkContainer,
	FooterLinkWrapper,
	FooterLogoImg,
	FooterLogoImgContainer,
	FooterUpperContainer,
	FooterWrapper,
} from "./styles";
import CopyrightIcon from "@mui/icons-material/Copyright";


/**
 * Footer for all pages in the project. Does not receive any arguments.
 */

const Footer = () => {
	return (
		<FooterWrapper>
			<FooterContainer>
				<FooterUpperContainer>
					<FooterLogoImgContainer>
						<FooterLogoImg src={MotoSpotWhite} />
					</FooterLogoImgContainer>

					<FooterLinkWrapper>
						<FooterLinkContainer>
							<FooterLink>Compra un auto</FooterLink>
							<FooterLink>Nosotros</FooterLink>
							<FooterLink>Contacto</FooterLink>
							<FooterLink>Preguntas frecuentes</FooterLink>
							<FooterLink>Políticas de privacidad</FooterLink>
						</FooterLinkContainer>
					</FooterLinkWrapper>
				</FooterUpperContainer>

				<FooterBelowContainer>
					<FooterDivider />
					<FooterCopyrightContainer>
						<FooterCopyrightIcon>
							<CopyrightIcon sx={{ fontSize: 15 }} />
						</FooterCopyrightIcon>
						<FooterCopyrightText>
							&nbsp;2023 NDS Motor Spot. All rights reserved.
						</FooterCopyrightText>
					</FooterCopyrightContainer>
				</FooterBelowContainer>
			</FooterContainer>
		</FooterWrapper>
	);
};

export default Footer;
