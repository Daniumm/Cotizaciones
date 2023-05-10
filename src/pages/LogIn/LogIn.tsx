import { BigInfo } from "components/BigInfo";
import { Button } from "components/Button";
import { Input } from "components/Input";
import theme from "theme/theme";
import React, { useState } from "react";
import firebaseConfig from "../../Firebase/firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";

import {
  LoginInfo,
  ContainerLogin,
  LoginTitle,
  LoginForms,
  LinksExtraLogin,
  LinkExtraLogin,
  LinkText,
} from "./style";
import { InputProp } from "components/Input/types";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const auth = getAuth(firebaseConfig.firebase);
  const [user, loading, error] = useAuthState(auth);

  const handleLogin = async () => {
    console.log("handleLogin function called");
    console.log("Email:", email);
    console.log("Password:", password);
    if (!email || !password) {
      setErrorMessage("Please enter a valid email address and password.");
      return;
    }

    try {
      console.log("Attempting to sign in with email:", email);
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Signed in successfully.");
    } catch (err: unknown) {
      console.error("Error signing in", err);
      setErrorMessage((err as Error).message); // cast err to Error type
    }
  };

  const emailInputProps = {
    fullWidth: true,
    label: "Email",
    typeText: "normal" as const,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      console.log("Email input value changed:", e.target.value);
      setEmail(e.target.value);
    },
  };

  const passwordInputProps = {
    fullWidth: true,
    label: "Contraseña",
    typeText: "password" as const,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      console.log("Password input value changed:", e.target.value);
      setPassword(e.target.value);
    },
  };

  return (
    <div>
      <BigInfo imgSrc="key-login.jpeg" side="right">
        <LoginInfo>
          <ContainerLogin>
            <LoginTitle>Iniciar sesión</LoginTitle>

            <LoginForms>
              {errorMessage && (
                <div style={{ color: "red" }}>{errorMessage}</div>
              )}
              <Input {...emailInputProps} />
              <Input {...passwordInputProps} />
              <Button
                bgColor={theme.color.navy}
                color={theme.color.white}
                hoverColor={theme.color.black}
                onClick={handleLogin}
                size="large"
              >
                Iniciar sesión
              </Button>

              <LinksExtraLogin>
                <LinkExtraLogin href="/password-recovery">
                  ¿Olvidaste tu contraseña?
                </LinkExtraLogin>
                <LinkText>
                  ¿No tienes una cuenta?{" "}
                  <LinkExtraLogin href="/signup">Regístrate</LinkExtraLogin>
                </LinkText>
              </LinksExtraLogin>
            </LoginForms>
          </ContainerLogin>
        </LoginInfo>
      </BigInfo>
    </div>
  );
};

export default LogIn;
