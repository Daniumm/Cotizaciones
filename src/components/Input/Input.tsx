import React, { useState } from "react";
import {
  TextField,
  Checkbox,
  FormControlLabel,
  RadioGroup,
  Radio,
  IconButton,
  InputAdornment,
  useTheme,
} from "@mui/material";
import { InputProp } from "./types";
import { ThemeProvider } from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Visa from "resources/visa.png";
import Express from "resources/americanExpress.png";
import Master from "resources/master.png";
import CvvIcon from "resources/CvvIcon.png";
import Visibility from "@material-ui/icons/Visibility";

/**
 * Uses of the text field
 */

const Input: React.FC<InputProp> = ({
  label,
  typeText,
  multiLine,
  rows,
  fullWidth,
  select,
  options,
  color,
  forFilter,
  onChange,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const theme = useTheme();

  const handleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <>
      {typeText === "checkbox" ? (
        <FormControlLabel
          control={<Checkbox color="primary" />}
          label={label}
        />
      ) : typeText === "radio" ? (
        <RadioGroup aria-label={label}>
          {options?.map((option) => (
            <FormControlLabel
              key={option.value}
              value={option.value}
              control={<Radio />}
              label={option.label}
            />
          ))}
        </RadioGroup>
      ) : typeText === "password" ? (
        <TextField
          label={label}
          type={showPassword ? "text" : "password"}
          onChange={onChange}
          InputProps={{
            style: {
              fontFamily: "Inter",
              fontSize: "12px",
              borderRadius: "10px",
            },
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleShowPassword} edge="end">
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      ) : typeText === "card" ? (
        <TextField
          label={label}
          onKeyPress={(event) => {
            if (!/[0-9]/.test(event.key)) {
              event.preventDefault();
            }
          }}
          onChange={onChange}
          InputProps={{
            style: {
              fontFamily: "Inter",
              fontSize: "12px",
              borderRadius: "10px",
            },
            endAdornment: (
              <InputAdornment position="end">
                <div style={{ width: 25, height: 25 }}>
                  <img
                    src={Visa}
                    alt="Visa"
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
                <div style={{ width: 24, height: 24 }}>
                  <img
                    src={Master}
                    alt="Visa"
                    style={{ width: "100%", height: "100%", marginLeft: "2px" }}
                  />
                </div>
                <div style={{ width: 22, height: 22 }}>
                  <img
                    src={Express}
                    alt="Visa"
                    style={{ width: "100%", height: "100%", marginLeft: "3px" }}
                  />
                </div>
              </InputAdornment>
            ),
          }}
        />
      ) : typeText === "cvv" ? (
        <TextField
          label={label}
          fullWidth={fullWidth}
          type={showPassword ? "text" : "password"}
          onKeyPress={(event) => {
            if (!/[0-9]/.test(event.key)) {
              event.preventDefault();
            }
          }}
          inputProps={{ maxLength: 3 }}
          onChange={onChange}
          InputProps={{
            style: {
              fontFamily: "Inter",
              fontSize: "12px",
              borderRadius: "10px",
            },
            endAdornment: (
              <InputAdornment position="end">
                <div style={{ width: 25, height: 25 }}>
                  <img
                    src={CvvIcon}
                    alt="Visa"
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
              </InputAdornment>
            ),
          }}
        />
      ) : forFilter === true ? (
        <TextField
          size="small"
          margin="normal"
          type={typeText === "select" ? undefined : typeText}
          multiline={multiLine}
          placeholder={label}
          rows={rows}
          fullWidth={fullWidth}
          select={select}
          defaultValue={options && options.length > 0 ? options[0].value : ""}
          onChange={onChange}
          InputProps={{
            style: {
              fontFamily: "Inter",
              fontSize: "12px",
              borderRadius: "15px",
              backgroundColor: color,
            },
          }}
        >
          {typeText === "select" &&
            options?.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
        </TextField>
      ) : (
        <TextField
          label={label}
          size="small"
          margin="normal"
          type={typeText === "select" ? undefined : typeText}
          multiline={multiLine}
          onChange={onChange}
          rows={rows}
          fullWidth={fullWidth}
          select={select}
          defaultValue={options && options.length > 0 ? options[0].value : ""}
          InputProps={{
            style: {
              fontFamily: "Inter",
              fontSize: "12px",
              borderRadius: "10px",
            },
          }}
        >
          {typeText === "select" &&
            options?.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
        </TextField>
      )}
    </>
  );
};

export default Input;
