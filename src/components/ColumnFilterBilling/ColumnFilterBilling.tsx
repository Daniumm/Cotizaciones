import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import { ColumnFilterBillingProps } from "./types";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { Controls, FilterContainer } from "./styles";
import { TextWithIcon } from "components/TextWithIcon";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  borderTop: `1px solid ${theme.color.stone}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const ColumnFilterBilling: React.FC<ColumnFilterBillingProps> = ({
  options = [
    {
      date: "07/03/2023",
      billingAccount: "Billing Account 1",
      clientName: "Ángel Ruiz Luna",
      amount: "MXN 7,590.00",
    },
    {
      date: "02/03/2023",
      billingAccount: "Billing Account 2",
      clientName: "Mónica Ramírez...",
      amount: "MXN 9,280.00",
    },
    {
      date: "28/02/2023",
      billingAccount: "Billing Account 3",
      clientName: "Owen Rosales R...",
      amount: "MXN 5,892.00",
    },
    {
      date: "23/02/2023",
      billingAccount: "Billing Account 4",
      clientName: "Axel Pailla Ame...",
      amount: "MXN 11,210.00",
    },
    {
      date: "19/02/2023",
      billingAccount: "Billing Account 1",
      clientName: "Bernardo Gueva...",
      amount: "MXN 7,590.00",
    },
    {
      date: "17/02/2023",
      billingAccount: "Billing Account 2",
      clientName: "Ximena Carillo Z...",
      amount: "MXN 9,280.00",
    },
    {
      date: "12/02/2023",
      billingAccount: "Billing Account 3",
      clientName: "André Cuevas G...",
      amount: "MXN 5,892.00",
    },
    {
      date: "07/02/2023",
      billingAccount: "Billing Account 4",
      clientName: "Donají Monzalvo...",
      amount: "MXN 11,210.00",
    },
    {
      date: "28/01/2023",
      billingAccount: "Billing Account 3",
      clientName: "Josselin Pineda V...",
      amount: "MXN 5,892.00",
    },
    {
      date: "22/01/2023",
      billingAccount: "Billing Account 4",
      clientName: "Manuel Antonio G...",
      amount: "MXN 11,210.00",
    },
  ],
  onFilterChange,
  children,
}) => {
  const billingAccountFilters = Array.from(
    new Set(options.map((option) => option.billingAccount))
  );

  const dateFilters = Array.from(
    new Set(options.map((option) => option.date))
  );


  const [selectedBillingAccounts, setSelectedBillingAccounts] = React.useState<string[]>([]);
  const [selectedDate, setSelectedDate] = React.useState<string[]>([]);
  
  const [filtersVisible, setFiltersVisible] = React.useState<boolean>(true);

  const toggleFilters = () => {
    setFiltersVisible(!filtersVisible);
  };

  const resetFilters = () => {
    setSelectedBillingAccounts([]);
    setSelectedDate([]);
  };

  const applyFilters = () => {
    const filteredData = options.filter(
      (option) =>
        (selectedBillingAccounts.length === 0 ||
          selectedBillingAccounts.includes(option.billingAccount)) &&
        (selectedDate.length === 0 || selectedDate.includes(option.date))
    );
    if (onFilterChange) {
      if (filteredData.length === 0 && (selectedBillingAccounts.length > 0 || selectedDate.length > 0)) {
        onFilterChange([{
          date: "",
          billingAccount: "",
          clientName: "",
          amount: "",
        }]);
      } else {
        onFilterChange(filteredData);
        console.log(filteredData);
      }
    }
  };

  React.useEffect(() => {
    applyFilters();
  }, [selectedBillingAccounts, selectedDate]);

  return (
    <FilterContainer>
      <Controls>
        <TextWithIcon
          text={filtersVisible ? "Ocultar filtros" : "Mostrar filtros"}
          icon="FilterList"
          button
          size="Small"
          onClick={toggleFilters}
        />
        <Button
            variant="text"
            color="inherit"
            size="small"
            onClick={resetFilters}
            sx={{
              borderColor: "grey.400",
              color: "grey.700",
            }}
          >Limpiar</Button>
      </Controls>
      {filtersVisible && (
        <>
          <Accordion>
            <AccordionDetails>
              <FormControl fullWidth variant="outlined">
                <InputLabel>Billing Account</InputLabel>
                <Select
                  multiple
                  value={selectedBillingAccounts}
                  onChange={(event: SelectChangeEvent<string[]>) =>
                    setSelectedBillingAccounts(event.target.value as string[])
                  }
                  renderValue={(selected) => (selected as string[]).join(", ")}
                >
                  {billingAccountFilters.map((filter, index) => (
                    <MenuItem
                      key={index}
                      value={filter}
                      sx={{
                        fontWeight: selectedBillingAccounts.includes(filter)
                          ? "bold"
                          : "normal",
                        backgroundColor: selectedBillingAccounts.includes(filter)
                          ? "rgba(63, 81, 181, 0.1)"
                          : "inherit",
                      }}
                    >
                      {filter}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionDetails>
              <FormControl fullWidth variant="outlined">
                <InputLabel>Fecha</InputLabel>
                <Select
                  multiple
                  value={selectedDate}
                  onChange={(event: SelectChangeEvent<string[]>) =>
                    setSelectedDate(event.target.value as string[])
                  }
                  renderValue={(selected) => (selected as string[]).join(", ")}
                >
                  {dateFilters.map((filter, index) => (
                    <MenuItem
                      key={index}
                      value={filter}
                      sx={{
                        fontWeight: selectedDate.includes(filter)
                          ? "bold"
                          : "normal",
                        backgroundColor: selectedDate.includes(filter)
                          ? "rgba(63, 81, 181, 0.1)"
                          : "inherit",
                      }}
                    >
                      {filter}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </AccordionDetails>
          </Accordion>

        </>
      )}
    </FilterContainer>
  );
};

export default ColumnFilterBilling;
