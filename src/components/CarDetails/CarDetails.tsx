import React, { useState, useEffect } from "react";
import { CarDetailsProp } from "./types";
import { ShowCarDetails, ShowButtons, SelectableButton, TextInfo, InfoContainer, InvisibleBox, InvisibleButtons, CardContainer, NormalText, AnchorTagButton } from "./styles";
import theme from "theme/theme";
import SettingsIcon from '@mui/icons-material/Settings';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import CarCardVariants from "components/CarCardVariants/CarCardVariants";

/** 
 * CarDetails describes relevant specifications of a car
 * If cardType !=== null, the descriptive attribute table will be rendered
 * Example: <CarDetails cardType="description" /> || <CarDetails manualCar={carManual1} automaticCar={carAutomatic1} />
 */
const CarDetails: React.FC<CarDetailsProp> = ({
    cardType = null,
    manualCar = {
        name: "-",
        car_image: "-",
        agency: "-",
        price: 0,
        power: 0,
        acceleration: 0,
        max_speed: 0,
        consumption: 0,
        carbon_emissions: 0,
        height: 0,
        width: 0,
        length: 0,
    },
    automaticCar = {
        name: "-",
        car_image: "-",
        agency: "-",
        price: 0,
        power: 0,
        acceleration: 0,
        max_speed: 0,
        consumption: 0,
        carbon_emissions: 0,
        height: 0,
        width: 0,
        length: 0,
    },
    onChange = () => { },
}) => {
    const [manualSelected, setManualSelected] = useState(true);
    const [automaticSelected, setAutomaticSelected] = useState(false);

    const handleEventClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        var idButton = e.currentTarget.id;

        if (idButton === "manual") {
            setManualSelected(true);
            setAutomaticSelected(false);
        } else if (idButton === "automatic") {
            setManualSelected(false);
            setAutomaticSelected(true);
        }
    };

    // Attributes to consider
    if (cardType !== null) {
        return (
            <ShowCarDetails>
                <InfoContainer>
                    <InvisibleBox><NormalText>Escoja hasta 3 modelos para comparar</NormalText></InvisibleBox>

                    <InvisibleButtons></InvisibleButtons>

                    <TextInfo><div></div><span>Precio</span></TextInfo>
                    <TextInfo><div></div><span>Potencia</span></TextInfo>
                    <TextInfo><div></div><span>Aceleración</span></TextInfo>
                    <TextInfo><div></div><span>Velocidad máxima</span></TextInfo>
                    <TextInfo><div></div><span>Rendimiento</span></TextInfo>
                    <TextInfo><div></div><span>Emisiones CO2</span></TextInfo>
                    <TextInfo><div></div><span>Altura</span></TextInfo>
                    <TextInfo><div></div><span>Ancho</span></TextInfo>
                    <TextInfo><div></div><span>Longitud</span></TextInfo>
                </InfoContainer>
            </ShowCarDetails>
        );
    }

    // There is no car selected
    else if (automaticCar.name === "-" && manualCar.name === "-") {
        return (
            <ShowCarDetails>
                <InfoContainer>
                    <CardContainer onClick={onChange}><span>+</span><p>Añadir modelo</p></CardContainer>

                    <InvisibleButtons></InvisibleButtons>

                    <TextInfo><div></div><span> </span></TextInfo>
                    <TextInfo><div></div><span> </span></TextInfo>
                    <TextInfo><div></div><span> </span></TextInfo>
                    <TextInfo><div></div><span> </span></TextInfo>
                    <TextInfo><div></div><span> </span></TextInfo>
                    <TextInfo><div></div><span> </span></TextInfo>
                    <TextInfo><div></div><span> </span></TextInfo>
                    <TextInfo><div></div><span> </span></TextInfo>
                    <TextInfo><div></div><span> </span></TextInfo>
                </InfoContainer>
            </ShowCarDetails>
        )
    }

    // There is a car selected, either with one or two versions
    else {
        let existAutomatic = true;
        let existManual = true;

        if (automaticCar.name === "-") {
            existAutomatic = false;
        } else if (manualCar.name === "-") {
            existManual = false;
        }

        const selectedCar = manualSelected && existManual ? manualCar : automaticCar;

        return (
            <ShowCarDetails>

                {existManual ?
                    <CarCardVariants carImg={manualCar.car_image} name={manualCar.name} agency={manualCar.agency} onChange={onChange} width="90%" contained={true}/> :
                    <CarCardVariants carImg={automaticCar.car_image} name={automaticCar.name} agency={automaticCar.agency} onChange={onChange} width="90%" contained={true}/>}

                <InfoContainer>
                    <ShowButtons>
                        {existAutomatic && existManual && (
                            <>
                                <SelectableButton id="manual" onClick={handleEventClick}
                                    style={manualSelected ? { color: `${theme.color.danger}`, borderBottom: `solid ${theme.color.danger}` } : {}}>
                                    Manual
                                </SelectableButton>
                                <SelectableButton id="automatic" onClick={handleEventClick}
                                    style={automaticSelected ? { color: `${theme.color.danger}`, borderBottom: `solid ${theme.color.danger}` } : {}}>
                                    Automático
                                </SelectableButton>
                            </>
                        )}

                        {existManual && !existAutomatic && (
                            <SelectableButton id="manual" onClick={handleEventClick}
                                style={manualSelected ? { color: "red", borderBottom: `solid ${theme.color.danger}`, width: "100%" } : {}}>
                                Manual
                            </SelectableButton>
                        )}

                        {!existManual && existAutomatic && (
                            <SelectableButton id="automatic" fullWidth={!existManual && existAutomatic} colored={!existManual && existAutomatic} onClick={handleEventClick}>
                                Automático
                            </SelectableButton>
                        )}
                    </ShowButtons>

                    <TextInfo><div></div><span>MXN {new Intl.NumberFormat().format(selectedCar.price)}</span></TextInfo>
                    <TextInfo><div></div><span>{selectedCar.power} HP</span></TextInfo>
                    <TextInfo><div></div><span>{selectedCar.acceleration} s</span></TextInfo>
                    <TextInfo><div></div><span>{selectedCar.max_speed} km/h</span></TextInfo>
                    <TextInfo><div></div><span>{selectedCar.consumption} km/L</span></TextInfo>
                    <TextInfo><div></div><span>{selectedCar.carbon_emissions} g/km</span></TextInfo>
                    <TextInfo><div></div><span>{selectedCar.height} mm</span></TextInfo>
                    <TextInfo><div></div><span>{selectedCar.width} mm</span></TextInfo>
                    <TextInfo><div></div><span>{selectedCar.length} mm</span></TextInfo>
                </InfoContainer>

                <AnchorTagButton href="/user/buy/configure"><SettingsIcon fontSize="small" />Personalizar</AnchorTagButton>
                <AnchorTagButton href="/user/buy/car-description"><KeyboardArrowRightIcon fontSize="small" /> Detalles</AnchorTagButton>

            </ShowCarDetails>
        )
    }


}

export default CarDetails;