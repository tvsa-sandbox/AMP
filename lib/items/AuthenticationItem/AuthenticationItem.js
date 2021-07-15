import React from "react";
import PropTypes from "prop-types";
import {
    LoginModalStyles,
    LoginItemTitle,
    LoginButtonStyles,
    LoginFormContent,
} from "../LoginItem/styles";
import { EmailItemText } from "../EmailItem/styles";
import {
    AuthenticationItemStyles,
    AuthenticationInputStyles,
    AuthenticationAnchorStyles,
    AuthenticationInputsBox,
    AuthenticationTime,
} from "./styles";

const AuthenticationItem = props => {
    return (
        <AuthenticationItemStyles variant="Transparent">
            <LoginModalStyles variantClose="Login" iconSize={30}>
                <LoginFormContent variant="Solid">
                    <LoginItemTitle variant="h2">Autenticación</LoginItemTitle>
                    <EmailItemText>
                        Te hemos enviado un correo para verificar tu cuenta, escribe los 4 digitos a
                        continuación
                    </EmailItemText>
                    <AuthenticationInputsBox variant="Flex">
                        <AuthenticationInputStyles variant="Interaction" />
                        <AuthenticationInputStyles variant="Interaction" />
                        <AuthenticationInputStyles variant="Interaction" />
                        <AuthenticationInputStyles variant="Interaction" />
                    </AuthenticationInputsBox>
                    <EmailItemText>
                        Tu código expira en{" "}
                        <AuthenticationTime variant="Duration">1:05</AuthenticationTime>
                    </EmailItemText>
                    <LoginButtonStyles variant="Inactive">VERIFICAR</LoginButtonStyles>
                    <AuthenticationAnchorStyles>
                        ¿No has recibido un código de verificación?
                    </AuthenticationAnchorStyles>
                </LoginFormContent>
            </LoginModalStyles>
        </AuthenticationItemStyles>
    );
};

export default AuthenticationItem;
