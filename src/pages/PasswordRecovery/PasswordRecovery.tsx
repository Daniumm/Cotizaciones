import React, { useState } from "react";
import { BigInfo } from "components/BigInfo";
import { Button } from "components/Button";
import { Input } from "components/Input";
import theme from "theme/theme";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import firebaseConfig from "../../Firebase/firebaseConfig";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import {
  PasswordInfo,
  PasswordInfoContainer,
  IconColumn,
  ContentColumn,
  PasswordInfoTitle,
  PasswordInfoText,
  PasswordInfoForm,
  Separator,
  SeparatorLine,
  SeparatorText,
  LinksExtra,
  LinkExtra,
} from "./styles";

const PasswordRecovery = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handlePasswordReset = async () => {
    const auth = getAuth(firebaseConfig.firebase);
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage("Password reset email sent. Check your inbox.");
    } catch (err: unknown) { // add type annotation here
        setMessage((err as Error).message); // cast err to Error type
      }
  };

  return (
    <div>
      <BigInfo imgSrc="key-password.jpeg" side="right">
        <PasswordInfo>
          <PasswordInfoContainer>
            <IconColumn>
              <a href="/login">
                <ArrowBackIosOutlinedIcon />
              </a>
            </IconColumn>
            <ContentColumn>
              <PasswordInfoTitle>Recuperación de contraseña</PasswordInfoTitle>
              <PasswordInfoText>
                Ingresa tu correo electrónico y te enviaremos un mensaje con las
                indicaciones para recuperar el acceso a tu cuenta.
              </PasswordInfoText>

              <PasswordInfoForm>
                <Input
                  fullWidth
                  label="Email"
                  typeText="normal"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setEmail(e.target.value)
                  }
                />
                <Button
                  bgColor={theme.color.navy}
                  color={theme.color.white}
                  hoverColor={theme.color.white}
                  onClick={handlePasswordReset}
                  size="large"
                >
                  Enviar
                </Button>
                {message && <div>{message}</div>}

                <Separator>
                  <SeparatorLine />
                  <SeparatorText>o</SeparatorText>
                  <SeparatorLine />
                </Separator>

                <LinksExtra>
                  <LinkExtra href="/signup">Crear nueva cuenta</LinkExtra>
                </LinksExtra>
              </PasswordInfoForm>
            </ContentColumn>
          </PasswordInfoContainer>
        </PasswordInfo>
      </BigInfo>
    </div>
  );
};

export default PasswordRecovery;
