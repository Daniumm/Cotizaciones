import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { InsuranceProp } from "./types";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, FormControlLabel, styled } from "@mui/material";
import { Radio, RadioGroup } from "@mui/material";
import InsuranceCard from "components/Insurance/InsuranceCard/InsuranceCard";
import "../../index.css";
import {
  BigBlueMargin,
  StyledDescription,
} from "./styles";

const StyledFormControlLabel = styled(FormControlLabel)({
  "& .MuiFormControlLabel-label": {
    fontWeight: "bold",
    fontStyle: "italic",
    color: "blue",
    fontFamily: "Inter",
  },
});

const Insurance: React.FC<InsuranceProp> = ({ options =[{
  imgSrc:
    "http://2.bp.blogspot.com/-lMxiVKInxLo/UhVcn0_Ed2I/AAAAAAAAAOQ/oQ0kZL-i88M/s1600/gnp10.jpg",
  description: "/año",
  insuranceId: 1,
  name: "Example Insurance",
  duration: "1 year",
  price: "$1000",
  agency: 1,
  crane: true,
  thirdQty: "500,000.00",
  totalLoss: "10% V. COMERCIAL",
  selfQty: "5% V. COMERCIAL",
}] }) => {
  const [selected, setSelected] = React.useState("");
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(event.target.value);
  };


  return (
    <div>
      <RadioGroup value={selected} onChange={handleRadioChange}>
        {options.map(
          ({
            imgSrc,
            description,
            insuranceId,
            name,
            duration,
            price,
            agency,
            crane,
            thirdQty,
            totalLoss,
            selfQty,
          }) => (
            <Accordion 
              key={insuranceId.toString()}
              expanded={expanded === insuranceId.toString()}
              onChange={handleChange(insuranceId.toString())}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`${insuranceId.toString()}bh-content`}
                id={`${insuranceId.toString()}bh-header`}
              >
                <Box
                  sx={{ display: "flex", alignItems: "center", width: "100%"}}
                >
                  <StyledFormControlLabel
                    value={insuranceId.toString()}
                    control={<Radio />}
                    label=""
                    onClick={(event) => event.stopPropagation()}
                    onFocus={(event) => event.stopPropagation()}
                  />
                  <img src={imgSrc} height="100" />
                    <BigBlueMargin>{price}</BigBlueMargin>
                    <StyledDescription>{description}</StyledDescription>
                </Box>
              </AccordionSummary>
              <AccordionDetails >
                <Typography  >
                  <InsuranceCard 
                    
                    insuranceId={insuranceId}
                    name={name}
                    duration={duration}
                    price={price}
                    description={description}
                    agency={agency}
                    crane={crane}
                    thirdQty={thirdQty}
                    totalLoss={totalLoss}
                    selfQty={selfQty}
                    
                    
                  />
                  
                </Typography>
              </AccordionDetails>
            </Accordion>
          )
        )}
      </RadioGroup>
    </div>
  );
};

export default Insurance;
