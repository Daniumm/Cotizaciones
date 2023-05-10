import theme from 'theme/theme';
import React, { useState } from 'react';
import { IconButton } from '@mui/material';
import { NotificationProps } from './types';
import Button from 'components/Button/Button';
import CloseIcon from '@mui/icons-material/Close';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Card, TextStrong, DivIcon, TextLight, ButtonContainer } from './styles';
/**
 * Notification component, it has two variants.
 * Mandatory: type of the variant (1 or 2), the text of the notification.
 * Optional: the text light of the variant 2, the text of the buttons, booleans to determine
 * if the buttons have icons, icons of the buttons and colors of the buttons. 
 */
const Notification: React.FC<NotificationProps> = ({
    type,
    text,
    text_light = "Esta acción no se puede deshacer.",
    button_v1_text = "Listo",
    button1_v2_text = "Cancelar",
    button2_v2_text = "Eliminar",
    button_v1_color = theme.color.navy,
    button1_v2_color = theme.color.gray,
    button2_v2_color = theme.color.scarlet,
    button_v1_icon_bool = false,
    button_v1_icon = "Delete",
    button1_v2_icon_bool = false,
    button1_v2_icon = "Delete",
    button2_v2_icon_bool = true,
    button2_v2_icon = "Delete",
}) => {
    const [show, setShow] = useState(true);

    const handleClose = () => {
        setShow(false);
    };

    if (type === 1) {
        return (
            <>
                {show && (
                    <Card>
                        <IconButton sx={{
                            position: 'absolute',
                            top: 0,
                            right: 0,
                            width: '20px',
                            height: ' 20px',
                            padding: '1rem'
                        }} onClick={handleClose}>
                            <CloseIcon />
                        </IconButton >
                        <DivIcon>
                            <CheckCircleIcon sx={{
                                color: '#4BAE4F',
                                height: '100%',
                                width: '4rem'
                            }} />
                        </DivIcon>
                        <TextStrong>{text}</TextStrong>
                        <ButtonContainer>
                            <Button
                                size='large'
                                bgColor={button_v1_color}
                                color={theme.color.white}
                                hoverColor={theme.color.black}
                                firstIcon={button_v1_icon}
                                firstIconBool={button_v1_icon_bool}
                                secondIcon={button_v1_icon}
                                secondIconBool={false}
                            >
                                {button_v1_text}
                            </Button>
                        </ButtonContainer>

                    </Card >
                )}
            </>
        );
    }
    else {
        return (
            <>
                {show && (
                    <Card>
                        <IconButton sx={{
                            position: 'absolute',
                            top: 0,
                            right: 0,
                            width: '20px',
                            height: ' 20px',
                            padding: '1rem'
                        }} onClick={handleClose}>
                            <CloseIcon />
                        </IconButton >
                        <TextStrong>{text}</TextStrong>
                        <TextLight>{text_light}</TextLight>
                        <ButtonContainer>
                            <Button
                                size="large"
                                bgColor={button1_v2_color}
                                color={theme.color.white}
                                hoverColor={theme.color.black}
                                firstIcon={button1_v2_icon}
                                firstIconBool={button1_v2_icon_bool}
                                secondIcon={button1_v2_icon}
                                secondIconBool={false}
                            >
                                {button1_v2_text}
                            </Button>
                            <Button
                                size="large"
                                bgColor={button2_v2_color}
                                color={theme.color.white}
                                hoverColor={theme.color.black}
                                firstIcon={button2_v2_icon}
                                firstIconBool={button2_v2_icon_bool}
                                secondIcon={button2_v2_icon}
                                secondIconBool={false}
                            >
                                {button2_v2_text}
                            </Button>
                        </ButtonContainer>
                    </Card >
                )}
            </>
        );
    }

};

export default Notification;