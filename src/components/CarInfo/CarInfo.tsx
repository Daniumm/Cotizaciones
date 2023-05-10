import React, { useState } from 'react'
import { CarInfoProps } from './types'
import { Icon } from '@mui/material'
import PlaceIcon from '@mui/icons-material/Place';
import { Star, StarOutline } from '@mui/icons-material';
import { CarDetailsContainer, CarDetailsInfo, CarInfoContainer, CarLocation, CarLocationContainer, CarPrice, CarTitle, InfoHeader, StarContainer } from './styles';
import { CardLocationIcon } from 'components/CarCardVariants/styles';
import theme from 'theme/theme';

const CarInfo: React.FC<CarInfoProps> = ({
    title,
    year = "2023",
    mileage = "0",
    agency = "Agencia X Querétaro",
    price = "2,028,000",
    starIcon = true

}) => {
    const [activeStar, setActiveStar] = useState(false);

    const handleStarClick = () => {
        setActiveStar(!activeStar);
    }
    return (
        <CarInfoContainer>
            <InfoHeader>
                <CarTitle>{title}</CarTitle>
                {starIcon ?
                    <StarContainer onClick={handleStarClick}>
                        {
                            activeStar ?
                                <Icon fontSize='large'>
                                    <Star style={{ color: theme.color.star }} fontSize='large' />
                                </Icon>
                                :
                                <Icon fontSize='large'>
                                    <StarOutline style={{ color: theme.color.gray }} fontSize='large' />
                                </Icon>
                        }
                    </StarContainer>
                    : null
                }
            </InfoHeader>
            <CarDetailsContainer>
                <CarDetailsInfo>{year} • {mileage} km</CarDetailsInfo>
            </CarDetailsContainer>
            <CarLocationContainer>
                <CardLocationIcon>
                    <Icon>
                        <PlaceIcon />
                    </Icon>
                </CardLocationIcon>
                <CarLocation>{agency}</CarLocation>
            </CarLocationContainer>
            <CarPrice>$ {price}</CarPrice>

        </CarInfoContainer>
    )
}

export default CarInfo