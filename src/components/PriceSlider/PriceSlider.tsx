import { Container, Inputs, TextField } from "./styles";
import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import theme from "theme/theme";
import { PriceSliderProps } from "./types";

function valuetext(value: number) {
    const valuef = value * 2000000 / 100;
    return `$ ${valuef}`;
}

const PriceSlider:React.FC<PriceSliderProps> = React.forwardRef(({max, min,step, setMax, setMin}, ref) => {
    
    const [sValue, setSValue] = React.useState(min);
    const [eValue, setEValue] = React.useState(max);
    const [value, setValue] = React.useState<number[]>([sValue, eValue]);

    React.useImperativeHandle(ref, () => ({
        clearSlider()  {
            setSValue(min);
            setEValue(max);
            setValue([min, max]);
        }
    }));

    const sValueHandler = (text: number) => {
        if (isNaN(text) || text < 0) {
            text = 0;
        } 
        setSValue(text);
        setValue([text, eValue]);

    }

    const eValueHandler = (text: number) => {
        if (isNaN(text) || text < 0) {
            text = 0;
        } 
        setEValue(text);
        setValue([sValue, text]);
    }

    React.useEffect(() => {
        setSValue(sValue);
        setEValue(eValue);
        setValue([sValue, eValue]);
    }, [sValue, eValue])

    

    const handleChange = (event: Event, newValue: number | number[]) => {
        const val = newValue as number[]

        setValue(val);
        setSValue(val[0]);
        setMin(val[0]);
        // console.log(val[0]);
        setEValue(val[1]);
        setMax(val[1]);
        // console.log(val[1]);

    
    };
    return (
        <Container>
            <Inputs>
                <TextField 
                    type="text" 
                    placeholder="Start"
                    value={sValue.toLocaleString('mx-MX')}
                    onChange={(e) => {
                        sValueHandler(parseInt(e.target.value))
                        // setMin(sValue);
                        // console.log(sValue);
                    }
                    }
                    />
                <TextField 
                    type="text" 
                    placeholder="End"
                    value={eValue.toLocaleString('mx-MX')}
                    onChange={(e) => {
                        eValueHandler(parseInt(e.target.value));
                        // setMax(parseInt(e.target.value));
                        // console.log(parseInt(e.target.value));
                    }
                    }
                    />
            </Inputs>

            <Box >
            <Slider
                getAriaLabel={() => 'Range'}
                value={value}
                onChange={handleChange}
                //valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                max={max}
                min={min}
                step={step}
            />
            </Box>

        </Container>


    );
});


export default PriceSlider;