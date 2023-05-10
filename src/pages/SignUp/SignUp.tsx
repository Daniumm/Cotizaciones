import { BigInfo } from "components/BigInfo";
import { Button } from "components/Button";
import { Input } from "components/Input";
import theme from 'theme/theme'
import React from "react";

import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';

import { SignUpInfo, 
        SignUpInfoContainer,
        IconColumn,
        ContentColumn, 
        SignUpInfoTitle,
        SignUpForm,
        SignUpLinks,
        SignUpTextLink,
        SignUpLink} from "./styles";

const SignUp = () => {
  return (
    <div>
        <BigInfo
            imgSrc="car-sign.jpeg"
            side="right"
        >
            <SignUpInfo>
                <SignUpInfoContainer>
                    <IconColumn>
                        <a href="/login">
                            <ArrowBackIosOutlinedIcon />
                        </a>
                    </IconColumn>
                
                    <ContentColumn>
                        <SignUpInfoTitle>Registro</SignUpInfoTitle>

                        <SignUpForm>
                            <Input fullWidth label="Nombre completo" typeText="normal" />
                            <Input fullWidth label="Email" typeText="normal" />
                            <Input fullWidth label="Contraseña" typeText="password" />
                            <Input fullWidth label="Contraseña (confirmación)" typeText="password" />

                            <Input label="Estoy de acuerdo con los Términos de servicio y Políticas de Privacidad" typeText="checkbox"/>
                            <SignUpLinks>

                                <Button
                                bgColor={theme.color.navy}
                                color="white"
                                hoverColor="black"
                                onClick={() => {}}
                                size="large"
                                >
                                Registrarse
                                </Button>

                                <SignUpTextLink>
                                    ¿Ya tienes cuenta? <SignUpLink href="/login">Inicia sesión</SignUpLink>
                                </SignUpTextLink>
                            </SignUpLinks>
                        </SignUpForm>
                    </ContentColumn>

                </SignUpInfoContainer>
            </SignUpInfo>
        </BigInfo>
    </div>
  )
};

export default SignUp;
