import * as React from "react";
import { HorizontalCarCardProp } from "./types";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea } from "@mui/material";
import { AvatarUser } from "components/AvatarUser";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { CardTitle, CardText } from "./styles";
import theme from "theme/theme";

const HorizontalCarCard: React.FC<HorizontalCarCardProp> = ({
  companyLogo,
  bgColor,
  date,
  model,
  location,
  carImage,
  width,
  height,
}) => {
  return (
    <Card
      sx={{
        width: "fit",
        backgroundColor: bgColor,
        boxShadow: "0 4px 4px 0 rgba(0,0,0,0.25)",
        borderRadius: 3
      }}
    >
      <CardActionArea sx={{ display: "flex" }}>
        <AvatarUser size="Small" setImage={companyLogo} />

        <CardContent>
          <CardTitle>{model}</CardTitle>
          <Box sx={{ display: "flex" }}>
            <LocationOnIcon fontSize="small" sx={{ color: theme.color.gray }} />
            <CardText>{location}</CardText>
          </Box>
        </CardContent>
        <CardMedia
          component="img"
          height="140"
          width="40%"
          image={carImage}
          alt="car"
          sx={{ maxWidth: "25%", marginRight: "120px" }}
        />
        <Box sx={{ display: "flex", padding: "16px" }}>
          <Typography sx={{ marginRight: "30px" }}>Fecha de entrega</Typography>
          <Typography sx={{ fontWeight: 700 }}>{date}</Typography>
        </Box>
      </CardActionArea>
    </Card>
  );
};

export default HorizontalCarCard;
