import theme from "theme/theme";
import { ButtonContainer, Controls, FilterContainer } from "./styles";
import * as React from "react";
import { styled } from '@mui/material/styles';
// import Accordion from "@mui/material/Accordion";
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Boton from "components/Button/Button";
import { TextWithIcon } from "components/TextWithIcon";
import { PriceSlider } from "components/PriceSlider";
import { Input } from "components/Input";
import { SelectChangeEvent, Stack, ToggleButton, ToggleButtonProps } from "@mui/material";
import { SearchBar } from "components/SearchBar";
import { ColumnFilterProps } from "./types";

const Accordion = styled((props: AccordionProps) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    borderTop: `1px solid ${theme.color.stone}`,
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
  }));




const search = () => (
    console.log('void')
)

interface ButtonStates {
    [buttonId: string]: boolean;
}


const ColumnFilter: React.FC<ColumnFilterProps> = React.forwardRef(({options, setCarData}, ref) => {
    const PriceSliderRef = React.useRef<any>();
    const KmSliderRef = React.useRef<any>();
    const ModelSliderRef = React.useRef<any>();

    const [buttonStates, setButtonStates] = React.useState<ButtonStates>({});

    const locationFilter = Array.from(
        new Set(options.map((option) => option.location))
    );

    const colorFilter = Array.from(
        new Set(options.map((option) => option.color))
    );

    const typeFilter = Array.from(
        new Set(options.map((option) => option.type))
    );

    const conditionFilter = Array.from(
        new Set(options.map((option) => option.car_condition))
    )

    const fuelFilter = Array.from(
        new Set(options.map((option) => option.fuel))
    )

    const passengersFilter = Array.from(
        new Set(options.map((option) => option.passengers))
    )
    
    const transmissionFilter = Array.from(
        new Set(options.map((option) => option.transmission))
    )

    const priceFilter = Array.from(
        new Set(options.map((option) => option.price))
    )

    const yearFilter = Array.from(
        new Set(options.map((option) => option.model))
    )

    const kmFilter = Array.from(
        new Set(options.map((option) => option.km))
    )

    const status = (filter:boolean) => filter ? 'Nuevo' : 'Seminuevo';

    const maxPrice = Math.max(...priceFilter);
    const minPrice = Math.min(...priceFilter);

    const maxYear = Math.max(...yearFilter);
    const minYear = Math.min(...yearFilter);

    const maxKm = Math.max(...kmFilter);
    const minKm = Math.min(...kmFilter);


    const toggleButton = (buttonId: string) => {
        setButtonStates((prevState) => {
            const newState = { ...prevState };
            newState[buttonId] = !newState[buttonId];
            return newState;
        });
    }

    React.useImperativeHandle(ref, () => ({
        clearFilters()  {
            setCarData(options)
            PriceSliderRef.current.clearSlider();
            KmSliderRef.current.clearSlider();
            ModelSliderRef.current.clearSlider();
            
            setButtonStates(Object.keys(buttonStates).reduce((acc, key) => {
                acc[key] = false;
                return acc;
            }, {} as ButtonStates));
        }
    }));

    const [selectedLocation, setSelectedLocation] = React.useState<string[]>([]);
    const [selectedColor, setSelectedColor] = React.useState<string[]>([]);
    const [selectedType, setSelectedType] = React.useState<string[]>([]);
    const [selectedCondition, setSelectedCondition] = React.useState<boolean[]>([]);
    const [selectedFuel, setSelectedFuel] = React.useState<string[]>([]);
    const [selectedPassengers, setSelectedPassengers] = React.useState<number[]>([]);
    const [selectedTransmission, setSelectedTransmission] = React.useState<string[]>([]);
    const [selectedMinPrice, setSelectedMinPrice] = React.useState<number>(minPrice);
    const [selectedMaxPrice, setSelectedMaxPrice] = React.useState<number>(maxPrice);
    const [selectedMaxKm, setSelectedMaxKm] = React.useState<number>(maxKm);
    const [selectedMinKm, setSelectedMinKm] = React.useState<number>(minKm);
    const [selectedMaxModel, setSelectedMaxModel] = React.useState<number>(maxYear);
    const [selectedMinModel, setSelectedMinModel] = React.useState<number>(minYear);

    const applyFilters = () => {
        const filteredCars = options.filter((car) => 
            (selectedLocation.length === 0 || selectedLocation.includes(car.location)) &&
            (selectedColor.length === 0 || selectedColor.includes(car.color)) &&
            (selectedType.length === 0 || selectedType.includes(car.type)) &&
            (selectedCondition.length === 0 || selectedCondition.includes(car.car_condition)) &&
            (selectedFuel.length === 0 || selectedFuel.includes(car.fuel)) &&
            (selectedPassengers.length === 0 || selectedPassengers.includes(car.passengers)) &&
            (selectedTransmission.length === 0 || selectedTransmission.includes(car.transmission)) &&
            (selectedMinPrice <= car.price) && (selectedMaxPrice >= car.price) &&
            (selectedMinKm <= car.km) && (selectedMaxKm >= car.km) &&
            (selectedMinModel <= car.model) && (selectedMaxModel >= car.model)
        );
    if (setCarData) {
        if(filteredCars.length === 0 && (selectedLocation.length > 0 || selectedColor.length > 0 || selectedType.length > 0 || selectedCondition.length > 0 || selectedFuel.length > 0 || selectedPassengers.length > 0 || selectedTransmission.length > 0 )) {
            setCarData([{
                id: 0,
                location: '',
                color: '',
                type: '',
                car_condition: '',
                fuel: '',
                passengers: 0,
                transmission: '',
                price: 0,
                km: 0,
                model: 0,
                image: '',
            }]);
        } else {
            setCarData(filteredCars);
        }
    }
    };

    // const handlePriceRangeChange = (newPriceRange: PriceRange) => {
    //     setSelectedPriceRange(newPriceRange);
    // };

    React.useEffect(() => {
        applyFilters();
    }, [selectedLocation, selectedColor, selectedType, selectedCondition, selectedFuel, selectedPassengers, selectedTransmission, selectedMinPrice, selectedMaxPrice, selectedMaxKm, selectedMinKm, selectedMaxModel, selectedMinModel]);



    const [selectedFilters, setSelectedFilters] = React.useState({
        location: [],
        price: [],
        color: [],
        type: [],
        condition: [],
        fuel: [],
        passengers: [],
        transmission: [],
        model: [],
        km: []
    });


return (


        <FilterContainer>
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: theme.color.cobalt }}/>}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
            <Typography>Ubicación</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Stack spacing={1} direction="row" useFlexGap flexWrap="wrap">
                
                {locationFilter.sort().map((filter,index) => (
                        <ToggleButton key={index} value={selectedFilters.location} 
                        selected={buttonStates[filter]}
                        color="primary"
                        id={filter}
                        sx={{textTransform: 'none'}}
                        onChange={() => {
                            toggleButton(filter);
                            setSelectedLocation(buttonStates[filter] ? selectedLocation.filter((location) => location !== filter) : [...selectedLocation, filter]);
                        }}>
                            {filter}
                        </ToggleButton>
                    ))
                    }
            </Stack>
            </AccordionDetails>
        </Accordion>

        <Accordion>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: theme.color.cobalt }}/>}
            aria-controls="panel2a-content"
            id="panel2a-header"
            >
            <Typography>Precio</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography>
                <PriceSlider max={maxPrice} min={minPrice} step={1000} setMax={setSelectedMaxPrice} setMin={setSelectedMinPrice} ref={PriceSliderRef}/>
            </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: theme.color.cobalt }}/>}
            aria-controls="panel2a-content"
            id="panel2a-header"
            >
            <Typography>Marca y modelo</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography>
                <SearchBar barType="integrated" label="Busca por marca o modelo" searchClick={search} />
            </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: theme.color.cobalt }}/>}
            aria-controls="panel2a-content"
            id="panel2a-header"
            >
            <Typography>Año</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography>
                <PriceSlider max={maxYear} min={minYear} step={1} setMax={setSelectedMaxModel} setMin={setSelectedMinModel} ref={ModelSliderRef}/>
            </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: theme.color.cobalt }}/>}
            aria-controls="panel2a-content"
            id="panel2a-header"
            >
            <Typography>Nuevo / Seminuevo</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography>
            <Stack spacing={1} direction="row" useFlexGap flexWrap="wrap">
                
                {conditionFilter.map((filter,index) => (
                        <ToggleButton key={index} value={selectedFilters.condition} 
                        selected={buttonStates[status(filter)]}
                        color="primary"
                        id={status(filter)}
                        sx={{textTransform: 'none'}}
                        onChange={() => {
                            toggleButton(status(filter));
                            setSelectedCondition(buttonStates[status(filter)] ? selectedCondition.filter((condition) => condition !== filter) : [...selectedCondition, filter]);
                        }}>
                            {status(filter)}
                        </ToggleButton>
                    ))
                    }
            </Stack>
            </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: theme.color.cobalt }}/>}
            aria-controls="panel2a-content"
            id="panel2a-header"
            >
            <Typography>Tipo</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography>
            <Stack spacing={1} direction="row" useFlexGap flexWrap="wrap">
            {typeFilter.sort().map((filter,index) => (
                        <ToggleButton key={index} value={selectedFilters.type} 
                        selected={buttonStates[filter]}
                        color="primary"
                        id={filter}
                        sx={{textTransform: 'none'}}
                        onChange={() => {
                            toggleButton(filter);
                            setSelectedType(buttonStates[filter] ? selectedType.filter((type) => type !== filter) : [...selectedType, filter]);
                        }}>
                            {filter}
                        </ToggleButton>
                    ))
                    }
            </Stack>
            </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: theme.color.cobalt }}/>}
            aria-controls="panel2a-content"
            id="panel2a-header"
            >
            <Typography>Color</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Stack spacing={1} direction="row" useFlexGap flexWrap="wrap">
                
                    {colorFilter.sort().map((filter,index) => (
                        <ToggleButton key={index} value={selectedFilters.color} 
                        selected={buttonStates[filter]}
                        color="primary"
                        id={filter}
                        sx={{textTransform: 'none'}}
                        onChange={() => {
                            toggleButton(filter);
                            setSelectedColor(buttonStates[filter] ? selectedColor.filter((color) => color !== filter) : [...selectedColor, filter]);
                        }}>
                            {filter}
                        </ToggleButton>
                    ))
                    }
            </Stack>
            </AccordionDetails>
        </Accordion>

        <Accordion>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: theme.color.cobalt }}/>}
            aria-controls="panel2a-content"
            id="panel2a-header"
            >
            <Typography>Kilometraje</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography>
            <PriceSlider max={maxKm} min={minKm} step={1000} setMax={setSelectedMaxKm} setMin={setSelectedMinKm} ref={KmSliderRef}/>
            </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: theme.color.cobalt }}/>}
            aria-controls="panel2a-content"
            id="panel2a-header"
            >
            <Typography>Combustible</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Stack spacing={1} direction="row" useFlexGap flexWrap="wrap">
                
                    {fuelFilter.sort().map((filter,index) => (
                        <ToggleButton key={index} value={selectedFilters.fuel} 
                        selected={buttonStates[filter]}
                        color="primary"
                        id={filter}
                        sx={{textTransform: 'none'}}
                        onChange={() => {
                            toggleButton(filter);
                            setSelectedFuel(buttonStates[filter] ? selectedFuel.filter((fuel) => fuel !== filter) : [...selectedFuel, filter]);
                        }}>
                            {filter}
                        </ToggleButton>
                    ))
                    }
            </Stack>
            </AccordionDetails>
        </Accordion>

        <Accordion>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: theme.color.cobalt }}/>}
            aria-controls="panel2a-content"
            id="panel2a-header"
            >
            <Typography>Pasajeros</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography>
            <Stack spacing={1} direction="row" useFlexGap flexWrap="wrap">
                
                    {passengersFilter.sort((a, b) => a - b).map((filter,index) => (
                        <ToggleButton key={index} value={selectedFilters.passengers} 
                        selected={buttonStates[filter.toString()]}
                        color="primary"
                        id={filter.toString()}
                        sx={{textTransform: 'none'}}
                        onChange={() => {
                            toggleButton(filter.toString());
                            setSelectedPassengers(buttonStates[filter.toString()] ? selectedPassengers.filter((passengers) => passengers !== filter) : [...selectedPassengers, filter]);
                        }}>
                            {filter}
                        </ToggleButton>
                    ))
                    }
            </Stack>
            </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: theme.color.cobalt }}/>}
            aria-controls="panel2a-content"
            id="panel2a-header"
            >
            <Typography>Transmisión</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Stack spacing={1} direction="row" useFlexGap flexWrap="wrap">
                
                    {transmissionFilter.sort().map((filter,index) => (
                        <ToggleButton key={index} value={selectedFilters.transmission} 
                        selected={buttonStates[filter]}
                        color="primary"
                        id={filter}
                        sx={{textTransform: 'none'}}
                        onChange={() => {
                            toggleButton(filter);
                            setSelectedTransmission(buttonStates[filter] ? selectedTransmission.filter((transmission) => transmission !== filter) : [...selectedTransmission, filter]);
                        }}>
                            {filter}
                        </ToggleButton>
                    ))
                    }
            </Stack>
            </AccordionDetails>
        </Accordion>
        </FilterContainer>
    );
});


export default ColumnFilter;

