import { AvatarUser } from "components/AvatarUser";
import Card from "components/Card/Card";
import CarCard from "components/CarCard/CarCard";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import PostAddIcon from '@mui/icons-material/PostAdd';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import LogoutIcon from '@mui/icons-material/Logout';
import IconButton from '@mui/material/IconButton';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import theme from 'theme/theme'
import React from "react";
import { TopContent, BottomContent, IconButtonCointainer } from "./styles"
import styled from "styled-components";

const carList = [
    {
        bgColor: "#ffffff",
        carImage: "https://images.drive.com.au/driveau/image/upload/c_fill,f_auto,g_auto,h_720,q_auto:good,w_1280/cms/uploads/cxkqjyjtpckk1t7owne5",
        chars: "2023 • CDMX • 0 km ",
        location: "Lamborghini Querétaro",
        model: "Lamborghini",
        payment: "Esperando pago de enganche",
        companyLogo: "https://img.remediosdigitales.com/ea3a4d/10974309_1087071384651814_2377105394985826515_o/1366_2000.jpg",
        variant: "variant1",
    },
    {
        bgColor: "#ffffff",
        carImage: "https://files.porsche.com/filestore/image/multimedia/none/992-gt3-modelimage-sideshot/model/765dfc51-51bc-11eb-80d1-005056bbdc38/porsche-model.png",
        location: "Agencia Porsche Querétaro",
        model: "Porsche 718 GT4",
        chars: "2023 • CDMX • 0 km ",
        payment: "Esperando pago de enganche",
        variant: "variant1",
        companyLogo: "https://img.remediosdigitales.com/96633b/140013_cor/450_1000.jpg"
    },
    {
        bgColor: "#ffffff",
        carImage: "https://st1.uvnimg.com/d4/4a/006304a74db4902c0b4d8d8026c8/chevrolet-corvette-c8-stingray-2020-1280-08.jpg",
        location: "Agencia Ferrari Querétaro",
        model: "Ferrari rapido",
        chars: "2023 • CDMX • 0 km ",
        payment: "Esperando pago de enganche",
        variant: "variant1",
        companyLogo: "https://1000logos.net/wp-content/uploads/2018/02/Porsche-Logo.png"
    },
    {
        bgColor: "#ffffff",
        carImage: "https://www.kia.com/content/dam/kwcms/gt/en/images/discover-kia/voice-search/parts-80-3.jpg",
        location: "Agencia Kia CDMX",
        model: "KIA 777",
        chars: "2023 • CDMX • 0 km ",
        payment: "Esperando pago de enganche",
        variant: "variant1",
        companyLogo: "https://img.remediosdigitales.com/4d749f/nuevo-logo-de-kia/1366_2000.jpg"
    },
]

const UserProfile = () => {
    const [currentIndex, setCurrentIndex] = React.useState(0);

    const handleNext = () => {
        setCurrentIndex((currentIndex + 1) % carList.length);
    };

    const handlePrev = () => {
        setCurrentIndex((currentIndex - 1 + carList.length) % carList.length);
    };
    return (
        <>
            <TopContent>
                <Card
                    height="665px"
                    width="506px"
                    colorBackground={theme.color.navy}
                    color={theme.color.white}
                >
                    <List >
                        <ListItem sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} disablePadding>
                            <AvatarUser size="Large" edit />
                        </ListItem>
                        <ListItem disablePadding style={{ marginTop: "30px" }} sx={{ alignItems: 'start' }}>
                            <ListItemText
                                primary="Hola, "
                                sx={{ my: 0 }}
                                primaryTypographyProps={{
                                    fontSize: "32px",
                                    fontWeight: 500,
                                    lineHeight: '64px',
                                    letterSpacing: 0,
                                    fontFamily: 'Inter, sans serif',
                                    marginLeft: '33px'
                                }} />
                        </ListItem>
                        <ListItem>
                            <ListItemText
                                primary="NOMBRE "
                                sx={{ my: 0 }}
                                primaryTypographyProps={{
                                    fontSize: "48px",
                                    fontWeight: 800,
                                    lineHeight: '64px',
                                    fontFamily: 'Inter, sans serif',
                                    fontStyle: "italic",
                                    letterSpacing: 0,
                                    marginLeft: '43px'
                                }} />
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemText
                                primary="Compras en curso: "
                                sx={{ my: 0 }}
                                primaryTypographyProps={{
                                    fontSize: "28px",
                                    fontWeight: 700,
                                    letterSpacing: 0,
                                    lineHeight: '34px',
                                    fontFamily: 'Inter, sans serif',
                                    marginLeft: '33px',
                                    marginTop: "10px"
                                }} />
                        </ListItem>
                    </List>
                </Card>
                <Card
                    height="321px"
                    width="450px"
                    color={theme.color.navy}
                >
                    <List sx={{ bgcolor: "background.paper", margin: 'auto' }}>
                        <ListItem>
                            <ListItemText
                                primary="Mi perfil "
                                sx={{ my: 0 }}
                                primaryTypographyProps={{
                                    fontSize: "24px",
                                    fontWeight: 700,
                                    lineHeight: '32px',
                                    fontFamily: 'Inter',
                                }} />
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon style={{ minWidth: '30px' }}>
                                    <AccountCircleOutlinedIcon style={{ color: theme.color.navy }} />
                                </ListItemIcon >
                                <ListItemText primary="Información personal"
                                    primaryTypographyProps={{
                                        color: `${theme.color.navy}`,
                                        fontSize: "24px",
                                        fontWeight: 400,
                                        lineHeight: '32px',
                                        fontFamily: 'Inter',
                                    }} />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon style={{ minWidth: '30px' }}>
                                    <PostAddIcon style={{ color: theme.color.navy }} />
                                </ListItemIcon>
                                <ListItemText primary="Documentos personales"
                                    primaryTypographyProps={{
                                        color: `${theme.color.navy}`,
                                        fontSize: "24px",
                                        fontWeight: 400,
                                        lineHeight: '32px',
                                        fontFamily: 'Inter',
                                    }} />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon style={{ minWidth: '30px' }}>
                                    <StarBorderIcon style={{ color: theme.color.navy }} />
                                </ListItemIcon>
                                <ListItemText primary="Favoritos"
                                    primaryTypographyProps={{
                                        color: `${theme.color.navy}`,
                                        fontSize: "24px",
                                        fontWeight: 400,
                                        lineHeight: '32px',
                                        fontFamily: 'Inter',
                                    }} />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon style={{ minWidth: '30px' }}>
                                    <LogoutIcon style={{ color: theme.color.danger }} />
                                </ListItemIcon>
                                <ListItemText primary="Cerrar sesión"
                                    primaryTypographyProps={{
                                        color: `${theme.color.danger}`,
                                        fontSize: "24px",
                                        fontWeight: 400,
                                        lineHeight: '32px',
                                        fontFamily: 'Inter',
                                    }} />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Card>
            </TopContent>
            <BottomContent>
                <IconButtonCointainer>
                    <IconButton
                        onClick={handlePrev}
                    >
                        <NavigateBeforeIcon />
                    </IconButton>
                </IconButtonCointainer>
                {carList
                    .slice(currentIndex, currentIndex + 2)
                    .map((car, index) => (
                        <CarCard
                            key={index}
                            bgColor={car.bgColor}
                            carImage={car.carImage}
                            chars={car.chars}
                            location={car.location}
                            model={car.model}
                            payment={car.payment}
                            companyLogo={car.companyLogo}
                            variant={car.variant}
                            width={460}
                        />
                    ))}
                <IconButtonCointainer>
                    <IconButton
                        onClick={handleNext}
                    >
                        <NavigateNextIcon />
                </IconButton>
                </IconButtonCointainer>
            </BottomContent>

        </>
    );
};

export default UserProfile;