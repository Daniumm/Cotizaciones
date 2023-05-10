import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import { ColumnFilterSalesProps } from "./types";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { Controls, FilterContainer } from "./styles";
import DateRangePicker from "@mui/lab/DateRangePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { DateRange } from "@mui/lab/DateRangePicker";
import { TextFieldProps } from "@mui/material/TextField";
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

const ColumnFilterSales: React.FC<ColumnFilterSalesProps> = ({
  options = [
    {
      id: 1,
      car: "Porsche 911 GT3 RS",
      salesman: "Axel Rosales García",
      initialDate: "02/03/2023",
      paymentDate: "18/03/2023",
      price: "MXN 4,438,000.00",
      imgLogo:
        "https://tse1.mm.bing.net/th?id=OIP.tMHR6LMDGRzKQ-382IoefAHaEK&pid=Api&rs=1&c=1&qlt=95&w=195&h=109",
      imgCar:
        "https://tse1.mm.bing.net/th?id=OIP.NPKKURwD5MetFOl7ZMjqogHaE8&pid=Api&rs=1&c=1&qlt=95&w=137&h=91",
      manager: "Roberto Carlos Quiroz Gómez",
      client: "Clara Hernández Saucedo",
      agency: "Porsche Queretaro",
    },
    {
      id: 2,
      car: "Ford Fiesta",
      salesman: "Roberto Martínez García",
      initialDate: "04/03/2023",
      paymentDate: "18/03/2023",
      price: "MXN 4,438,000.00",
      imgLogo:
        "https://tse1.mm.bing.net/th?id=OIP.tMHR6LMDGRzKQ-382IoefAHaEK&pid=Api&rs=1&c=1&qlt=95&w=195&h=109",
      imgCar:
        "https://tse1.mm.bing.net/th?id=OIP.NPKKURwD5MetFOl7ZMjqogHaE8&pid=Api&rs=1&c=1&qlt=95&w=137&h=91",
      manager: "Roberto Hernandez Quiroz Gómez",
      client: "Clara Suaste Saucedo",
      agency: "Porsche Queretaro",
    },
    {
      id: 3,
      car: "Tesla Model S",
      salesman: "Jorge Hernández Flores",
      initialDate: "05/03/2023",
      paymentDate: "19/03/2023",
      price: "MXN 2,500,000.00",
      imgLogo:
        "https://tse2.mm.bing.net/th?id=OIP.Z1iFjrF5ihR-pjKl-QX9MgHaEK&pid=Api&P=0&w=284&h=161",
      imgCar:
        "https://tse3.mm.bing.net/th?id=OIP.WkTVTiaUfTn4gRR4rxvj4AHaE6&pid=Api&P=0&w=235&h=157",
      manager: "Fernando García Jiménez",
      client: "Luis González Castro",
      agency: "Tesla CDMX",
    },
    {
      id: 4,
      car: "Ferrari 488 GTB",
      salesman: "Ana Karen Sánchez Hernández",
      initialDate: "06/03/2023",
      paymentDate: "20/03/2023",
      price: "MXN 5,250,000.00",
      imgLogo:
        "https://tse4.mm.bing.net/th?id=OIP.qYdX9SgVEAaN7pS6nEJj7AHaEK&pid=Api&P=0&w=300&h=169",
      imgCar:
        "https://tse3.mm.bing.net/th?id=OIP.n8pIOswHmPdM9tjKyxUGdwHaEK&pid=Api&P=0&w=297&h=188",
      manager: "María Fernanda Pérez Juárez",
      client: "Juan Carlos García Muñoz",
      agency: "Ferrari Guadalajara",
    },
    {
      id: 5,
      car: "Audi Q5",
      salesman: "Daniel López Hernández",
      initialDate: "08/03/2023",
      paymentDate: "22/03/2023",
      price: "MXN 1,100,000.00",
      imgLogo:
        "https://tse2.mm.bing.net/th?id=OIP.DzTJyAmkg6Uz28Y9EBu1RwHaHa&pid=Api&P=0&w=300&h=300",
      imgCar:
        "https://tse4.mm.bing.net/th?id=OIP.RCwGppJLHfT6TWhT-rU1jgHaE7&pid=Api&P=0&w=277&h=185",
      manager: "Alejandro Hernández Pérez",
      client: "María Guadalupe Sánchez Ramírez",
      agency: "Audi Monterrey",
    },
    {
      id: 6,
      car: "BMW X7",
      salesman: "Rodrigo García Fernández",
      initialDate: "10/03/2023",
      paymentDate: "24/03/2023",
      price: "MXN 2,900,000.00",
      imgLogo:
        "https://tse3.mm.bing.net/th?id=OIP.M3qsz8hW9XvZPjGZQHjKbAHaCg&pid=Api&P=0&w=466&h=158",
      imgCar:
        "https://tse2.mm.bing.net/th?id=OIP.bkKzU0y6_zIjKkfXvQaomgHaE8&pid=Api&P=0&w=250&h=168",
      manager: "David Torres Sánchez",
      client: "Martha Isabel Hernández Torres",
      agency: "BMW México City",
    },
    {
      id: 7,
      car: "Mercedes-Benz GLE",
      salesman: "Miguel Ángel Torres García",
      initialDate: "12/03/2023",
      paymentDate: "26/03/2023",
      price: "MXN 1,750,000.00",
      imgLogo:
        "https://tse1.mm.bing.net/th?id=OIP.4w4Ou4GKsP9Xlkpd8oIaKgHaD7&pid=Api&P=0&w=357&h=190",
      imgCar:
        "https://tse4.mm.bing.net/th?id=OIP.1M_8Mn-XnPTkzYQaJBX9RQHaE8&pid=Api&P=0&w=301&h=196",
      manager: "Juan Pablo Ramírez Díaz",
      client: "Carlos Alberto López Hernández",
      agency: "Mercedes-Benz Puebla",
    },
    {
      id: 8,
      car: "Lamborghini Huracán EVO",
      salesman: "Sofía Torres Rodríguez",
      initialDate: "14/03/2023",
      paymentDate: "28/03/2023",
      price: "MXN 8,750,000.00",
      imgLogo:
        "https://tse3.mm.bing.net/th?id=OIP.X5n5p7kjIyaDUtUPp7tX9gHaE8&pid=Api&P=0&w=250&h=168",
      imgCar:
        "https://tse1.mm.bing.net/th?id=OIP.RYONpJkM4sP4o_7hJ28PzgHaFj&pid=Api&P=0&w=241&h=181",
      manager: "Paulina Sánchez García",
      client: "José Manuel García Méndez",
      agency: "Lamborghini Monterrey",
    },
    {
      id: 9,
      car: "Chevrolet Tahoe",
      salesman: "Javier García Torres",
      initialDate: "16/03/2023",
      paymentDate: "30/03/2023",
      price: "MXN 1,800,000.00",
      imgLogo:
        "https://tse3.mm.bing.net/th?id=OIP.JVzK0R5l5y5J5bnvy8BYiAHaD4&pid=Api&P=0&w=349&h=184",
      imgCar:
        "https://tse3.mm.bing.net/th?id=OIP._wR_dVUpM85eOC8qVUzNzwHaE7&pid=Api&P=0&w=277&h=185",
      manager: "María Guadalupe López Torres",
      client: "Francisco Javier Pérez Hernández",
      agency: "Chevrolet Guadalajara",
    },
    {
      id: 10,
      car: "Volvo XC90",
      salesman: "Ricardo González Hernández",
      initialDate: "18/03/2023",
      paymentDate: "01/04/2023",
      price: "MXN 1,950,000.00",
      imgLogo:
        "https://tse3.mm.bing.net/th?id=OIP.zcyKjMbUrHulJdt4Xz4juwHaDZ&pid=Api&P=0&w=389&h=179",
      imgCar:
        "https://tse2.mm.bing.net/th?id=OIP.fTkDvmRJmgnn7TF2aPy8LwHaD7&pid=Api&P=0&w=348&h=186",
      manager: "Juan Carlos Hernández Cruz",
      client: "Carmen Sánchez García",
      agency: "Volvo México City",
    },
  ],
  onFilterChange,
  children,
}) => {
  const salesmanFilters = Array.from(
    new Set(options.map((option) => option.salesman))
  );

  const agencyFilters = Array.from(
    new Set(options.map((option) => option.agency))
  );

  const dateFilters = Array.from(
    new Set(options.map((option) => new Date(option.initialDate)))
  );

  const gerenteFilters = Array.from(
    new Set(options.map((option) => option.manager))
  );

  const [selectedSalesman, setSelectedSalesman] = React.useState<string[]>([]);
  const [selectedAgency, setSelectedAgency] = React.useState<string[]>([]);
  const [selectedManager, setSelectedManager] = React.useState<string[]>([]);
  const [selectedDate, setSelectedDate] = React.useState<DateRange<Date>>([
    null,
    null,
  ]);
  const [filtersVisible, setFiltersVisible] = React.useState<boolean>(true);

  const toggleFilters = () => {
    setFiltersVisible(!filtersVisible);
  };

  const resetFilters = () => {
    setSelectedSalesman([]);
    setSelectedAgency([]);
    setSelectedManager([]);
    setSelectedDate([null, null]);
  };

  const applyFilters = () => {
    const filteredData = options.filter((option) =>
      (selectedSalesman.length === 0 || selectedSalesman.includes(option.salesman)) &&
      (selectedAgency.length === 0 || selectedAgency.includes(option.agency)) &&
      (selectedManager.length === 0 || selectedManager.includes(option.manager))
    );
    if (onFilterChange) {
      if (filteredData.length === 0 && (selectedSalesman.length > 0 || selectedAgency.length > 0 || selectedManager.length > 0)) {
        onFilterChange([{
          id: 999,
          car: '',
          salesman: '',
          initialDate: '',
          paymentDate: '',
          price: '',
          imgLogo: '',
          imgCar: '',
          manager: '',
          client: '',
          agency: '',
        }]);
      } else {
        onFilterChange(filteredData);
        console.log(filteredData);
      }
    }
  };
  
  React.useEffect(() => {
    applyFilters();
  }, [selectedSalesman, selectedAgency, selectedManager, selectedDate]);

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
        >
          Limpiar
        </Button>
      </Controls>
      {filtersVisible && (
        <>
          <Accordion>
            <AccordionDetails>
              <FormControl fullWidth variant="outlined">
                <InputLabel>Vendedor</InputLabel>
                <Select
                  multiple
                  value={selectedSalesman}
                  onChange={(event: SelectChangeEvent<string[]>) =>
                    setSelectedSalesman(event.target.value as string[])
                  }
                  renderValue={(selected) => (selected as string[]).join(", ")}
                >
                  {salesmanFilters.map((filter, index) => (
                    <MenuItem
                      key={index}
                      value={filter}
                      sx={{
                        fontWeight: selectedSalesman.includes(filter)
                          ? "bold"
                          : "normal",
                        backgroundColor: selectedSalesman.includes(filter)
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
                <InputLabel>Agencia</InputLabel>
                <Select
                  multiple
                  value={selectedAgency}
                  onChange={(event: SelectChangeEvent<string[]>) =>
                    setSelectedAgency(event.target.value as string[])
                  }
                  renderValue={(selected) => (selected as string[]).join(", ")}
                >
                  {agencyFilters.map((filter, index) => (
                    <MenuItem
                      key={index}
                      value={filter}
                      sx={{
                        fontWeight: selectedAgency.includes(filter)
                          ? "bold"
                          : "normal",
                        backgroundColor: selectedAgency.includes(filter)
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
                <InputLabel>Gerente</InputLabel>
                <Select
                  multiple
                  value={selectedManager}
                  onChange={(event: SelectChangeEvent<string[]>) =>
                    setSelectedManager(event.target.value as string[])
                  }
                  renderValue={(selected) => (selected as string[]).join(", ")}
                >
                  {gerenteFilters.map((filter, index) => (
                    <MenuItem
                      key={index}
                      value={filter}
                      sx={{
                        fontWeight: selectedManager.includes(filter)
                          ? "bold"
                          : "normal",
                        backgroundColor: selectedManager.includes(filter)
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
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DateRangePicker
                  startText="Start Date"
                  endText="End Date"
                  value={selectedDate}
                  onChange={(newValue: DateRange<Date>) =>
                    setSelectedDate(newValue)
                  }
                  renderInput={(
                    startProps: TextFieldProps,
                    endProps: TextFieldProps
                  ) => (
                    <React.Fragment>
                      <Grid item xs={6}>
                        <TextField {...startProps} fullWidth />
                      </Grid>
                      <Grid item xs={6}>
                        <TextField {...endProps} fullWidth />
                      </Grid>
                    </React.Fragment>
                  )}
                />
              </LocalizationProvider>
            </AccordionDetails>
          </Accordion>
        </>
      )}
    </FilterContainer>
  );
};

export default ColumnFilterSales;
