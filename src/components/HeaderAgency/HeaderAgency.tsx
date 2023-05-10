import React from "react";
import { HeaderAgencyProp } from "./types";
import { AppBar, Box, IconButton, Toolbar, Typography, createTheme } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import * as MUIcon from "@mui/icons-material";
  

const HeaderAgency: React.FC<HeaderAgencyProp> = ({
    label,
    labelSmall, 
    logo,
    image,
    onClick, 
    children,
    icon,
    withIcon
}) => {
  const Icon = icon && MUIcon[icon];
  return (
    <AppBar position="static">
      <Box
        sx={{ position: "relative" ,backgroundColor: '#FFFFFF', }}
      >
        <img
          src={image} 
          style={{
            width: "100%",
            height: "150px",
          }}
        />
        <img
          src={logo}
          alt="Logo"
          style={{
            height: "110px",
            position: "absolute",
            top: 90,
            left: 10,
            zIndex: 1,
          }}
        />
      </Box>
      <Box 
        sx={{
          display: "flex", 
          alignItems: "center",
          backgroundColor: '#FFFFFF',
        }}
      >
        <IconButton
          sx={{ ml: 1, 
            color: "#255ED1",
            marginLeft: 12
          }}
          onClick={onClick} 
        >
          <ArrowBackIosIcon />
        </IconButton>
        <Typography variant="h3" component="div" 
          sx={{ 
            color: "#000000",
            fontFamily: "Inter", 
            fontSize: "48px", 
          }}
        >
          {label}
        </Typography>
        if(withIcon == true){
          <IconButton
          component="div" 
          size="medium"
          sx={{
            marginTop: 2,
            marginLeft :"-12%",
            color: "black"

          }}>
            {Icon && <Icon fontSize="inherit"/>}
          </IconButton>
        }
        else{
          <Typography variant="subtitle1" component="div" 
          sx={{ ml: 1,
            marginTop: 3,
            color: "#000000",
            fontFamily: "Inter", 
            fontSize: "18px", 
          }}
          >
          {labelSmall}
          </Typography>
        }
        
      </Box>
      <Box sx={{
          backgroundColor: '#FFFFFF',
        }}>
      {children}
      </Box>
    
    </AppBar>
  );
};

export default HeaderAgency;
