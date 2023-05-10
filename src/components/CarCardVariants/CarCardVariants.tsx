import React from 'react';
import { CarCardVariantsProps } from './types';
import { Icon } from '@mui/material';
import PlaceIcon from '@mui/icons-material/Place';
import ClearIcon from '@mui/icons-material/Clear';
import { CardContainer, CardHeader, CardContent, CardImage, CardTitle, CardTitle2, CardText, CardLocationIcon, CrossIcon, CardLogoContainer, CardLogo, CardContent2, CardContentSales, CardHeaderSales, CardLocationIconSales, CardPriceDescription, CardPriceText, CardPriceValue, CardLogoSales } from './styles';
import theme from 'theme/theme';

const CarCardVariants: React.FC<CarCardVariantsProps> = ({
  carImg,
  name,
  agency = "Agencia X Querétaro",
  companyLogo = "https://assets.stickpng.com/images/580b585b2edbce24c47b2cac.png",
  price = "1,458,000.00",
  variant = "var1",
  color = theme.color.white,
  width,
  contained = false,
  onChange = () => { },
}) => {
  if (variant === "var1") {
    return (
      <CardContainer color={color} width={width} >
        <CrossIcon onClick={onChange}>
          <Icon>
            <ClearIcon />
          </Icon>
        </CrossIcon>
        <CardImage src={carImg} alt={name} contained={contained}/>
        <CardTitle>{name}</CardTitle>
        <CardContent>
          <CardLocationIcon>
            <Icon>
              <PlaceIcon fontSize='small' />
            </Icon>
          </CardLocationIcon>
          <CardText>{agency}</CardText>
        </CardContent>
      </CardContainer>
    );
  }
  else if (variant === "var2") {
    return (
      <CardContainer color={color} width={width}>
        <CardImage src={carImg} alt={name} />
        <CardTitle>{name}</CardTitle>
        <CardContent>
          <CardLocationIcon>
            <Icon>
              <PlaceIcon fontSize='small' />
            </Icon>
          </CardLocationIcon>
          <CardText>{agency}</CardText>
        </CardContent>
      </CardContainer>
    )
  }
  else if (variant === "var3") {
    return (
      <CardContainer color={color} width={width}>
        <CardHeader>
          <CardLogoContainer>
            <CardLogo src={companyLogo} alt="" />
          </CardLogoContainer>
          <CardTitle2>{name}</CardTitle2>
        </CardHeader>
        <CardImage src={carImg} alt={name} />
      </CardContainer>
    )
  }
  else if (variant === "var4") {
    return (
      <CardContainer color={color} width={width}>
        <CardHeader>
          <CardLogoContainer>
            <CardLogo src={companyLogo} alt="" />
          </CardLogoContainer>
          <CardTitle2>{name}</CardTitle2>
        </CardHeader>
        <CardImage src={carImg} alt={name} />
        <CardContent2>
          <CardText> MXN ${price}</CardText>
        </CardContent2>
      </CardContainer>
    )
  }
  else {
    return (
      <CardContainer color={color} width={width}>
        <CardHeaderSales>
            <CardLogoSales src={companyLogo} alt="" />
            <CardContentSales>
            <CardTitle2>{name}</CardTitle2>
              <CardLocationIconSales>
                <Icon>
                  <PlaceIcon fontSize='small' />
                </Icon>
              <CardText>{agency}</CardText>
              </CardLocationIconSales>
            </CardContentSales>
        </CardHeaderSales>
        <CardImage src={carImg} alt={name} />
        <CardPriceDescription>
          <CardPriceText>Precio total:</CardPriceText>
          <CardPriceValue> MXN ${price}</CardPriceValue>
        </CardPriceDescription>
      </CardContainer>
    )
  }
}

export default CarCardVariants;