import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CarCardProp } from "./types";
import GradeIcon from "@mui/icons-material/Grade";
import { red } from "@mui/material/colors";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import theme from "theme/theme";
import { Box, CardActionArea } from "@mui/material";
import { StarContainer, CardLogo, CardLogoContainer } from "./styles";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import { useState } from "react";
import { Height } from "@mui/icons-material";
import AvatarUser from "components/AvatarUser/AvatarUser";
import { Link } from "react-router-dom";

const CarCard: React.FC<CarCardProp> = ({
  bgColor,
  showButton,
  price,
  model,
  chars,
  variant,
  location,
  payment,
  carImage,
  width,
  height,
  companyLogo,
  starActive=false,
}) => {
  const [isFavorited, setIsFavorited] = useState(starActive || false);

  const iconColor = isFavorited ? theme.color.star : theme.color.stone;

  const handleClick = () => {
    setIsFavorited(!isFavorited);
  };
  
  const colorPrice = theme.color.cobalt;
  const colorModel = theme.color.black;
  const colorChars = theme.color.gray;


  if (variant === "variant1") {
    return (
      <Card
        sx={{ width: width, height: height, background: bgColor, borderRadius: 5 }}
      >
        <CardActionArea  sx={{ justifyContent: "center", padding: 0 }}>
          <StarContainer>
              <>
                <Box
                  sx={{ display: "flex", paddingLeft: 3, marginTop: "20px" }}
                >
                  <AvatarUser size="Small" setImage={companyLogo} />
                  <Typography
                    fontFamily="Inter"
                    fontWeight="700"
                    fontSize="30px"
                    paddingLeft="20px"
                    component="div"
                    color={colorModel}
                  >
                    {model}
                  </Typography>
                </Box>
                <Box sx={{ paddingLeft: 13, display: "flex" }}>
                  <LocationOnIcon fontSize="small" />
                  <Typography
                    component="div"
                    fontSize={16}
                    fontWeight={400}
                    fontFamily="Inter"
                    paddingLeft={1}
                    color="black"
                    marginBottom={"20px"}
                  >
                    {location}
                  </Typography>
                </Box>
              </>
              <CardMedia
                component="img"
                image={carImage}
                alt="lambo"
                sx={{
                  textAlign: "center",
                  padding: 0,
                  height: 150,
                }}
              />
              <>
                <Typography
                  fontFamily="Inter"
                  marginLeft="10%"
                  paddingTop="40px"
                  lineHeight={"28px"}
                  fontWeight={400}
                  fontSize={18}
                  component="div"
                >
                  Estado de la compra...
                </Typography>

                <Box
                  sx={{
                    paddingLeft: 7,
                    display: "flex",
                    marginTop: "10px",
                    marginBottom: "10px",
                  }}
                >
                  <MonetizationOnIcon
                    fontSize="large"
                    style={{ marginTop: "3px" }}
                  />
                  <Typography
                    color={colorChars}
                    paddingTop="5px"
                    fontSize={18}
                    paddingLeft="5px"
                    fontWeight={400}
                    marginBottom={"15px"}
                  >
                    {payment}
                  </Typography>
                </Box>
              </>
          </StarContainer>
        </CardActionArea>
      </Card>
    );
  } else  {
    return (
      <Card sx={{ width: width, background: bgColor, borderRadius: 5 }}>
        <CardActionArea  sx={{ justifyContent: "center", padding: 0 }}>
          <StarContainer>
            <div>
              <CardMedia
                component="img"
                image={carImage}
                alt="{model}"
                sx={{
                  textAlign: "center",
                  padding: 0,
                  height: 140,
                }}
              />
            </div>
            
            <CardContent >
              <>
                {showButton ? (
                  <Button
                    sx={{
                      position: "absolute",
                      top: 3,
                      paddingLeft: "210px",
                      zIndex: 1,
                      color: red,
                    }}
                    onClick={handleClick}
                  >
                    {isFavorited ? (
                      <GradeIcon fontSize="large" sx={{ color: iconColor }} />
                    ) : (
                      <GradeIcon fontSize="large" sx={{ color: iconColor }} />
                    )}

                  </Button>
                ) : null}
              </>
              <>
                <Typography
                  sx={{ fontWeight: "bold", fontSize: 20, marginBottom: 0 }}
                  gutterBottom
                  variant="h5"
                  component="div"
                  color={colorModel}
                >
                  {model}
                </Typography>
                <Typography
                  sx={{ fontSize: 16, marginBottom: 0 }}
                  variant="body2"
                  color={colorChars}
                >
                  {chars}
                </Typography>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  color={colorPrice}
                  sx={{
                    textAlign: "end",
                    fontWeight: "bold",
                    fontSize: 24,
                    marginTop: "15px",
                    marginBottom: "0px",
                  }}
                >
                  {price}
                </Typography>
              </>
            </CardContent>
          </StarContainer>
        </CardActionArea>
      </Card>
    );
  }
};

export default CarCard;