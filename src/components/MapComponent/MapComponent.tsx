import React from "react";
import { MapComponentProp } from "./types";
import theme from "theme/theme";
import GoogleMapReact from "google-map-react";
import { makeStyles } from "@material-ui/core/styles";
import LocationOnIcon from "@material-ui/icons/LocationOn";

const useStyles = makeStyles((theme) => ({
  map: {
    height: "500px",
    width: "100%",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  marker: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: theme.palette.secondary.main,
    fontSize: "3rem",
  },
}));

const MapComponent: React.FC = () => {
  const classes = useStyles();

  const defaultCenter = {
    lat: 19.285173,
    lng: -99.136077,
  };

  const defaultZoom = 12;

  return (
    <div className={classes.map}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY || "" }}
        defaultCenter={defaultCenter}
        defaultZoom={defaultZoom}
      >
        <LocationOnIcon className={classes.marker} />
      </GoogleMapReact>
    </div>
  );
};

export default MapComponent;




/**
 * Example component used to show text with background in different sizes
 */
