import React from "react";
import PropTypes from "prop-types";
import {
    LoginItemTitle,
    LoginButtonStyles,
    LoginInputStyles,
    LoginFormContent,
    LoginModalStyles,
} from "../LoginItem/styles";
import {
    SignupItemStyles,
    SignupAnchorStyles,
    SignupInfoStyles,
    SignupPrivacyContent,
} from "./styles";

const SignupItem = props => {
    return (
        <SignupItemStyles variant="Transparent">
            <LoginModalStyles variantClose="Login" iconSize={30}>
                <LoginFormContent variant="Solid">
                    <LoginItemTitle variant="h2">Registro correo electrónico</LoginItemTitle>
                    <LoginInputStyles variant="Interaction" placeholder="NOMBRE" />
                    <LoginInputStyles variant="Interaction" placeholder="CORREO ELECTRÓNICO" />
                    <LoginInputStyles variant="Interaction" placeholder="CONTRASEÑA" />
                    <LoginInputStyles variant="Interaction" placeholder="REPETIR CONTRASEÑA" />
                    <SignupPrivacyContent>
                        <SignupInfoStyles>
                            Al seleccionar ACEPTAR Y CONTINUAR a continuación, aceptaras los{" "}
                            <SignupAnchorStyles>Términos del servicio</SignupAnchorStyles> y la{" "}
                            <SignupAnchorStyles>Política de privacidad</SignupAnchorStyles>.
                        </SignupInfoStyles>
                    </SignupPrivacyContent>
                    <LoginButtonStyles variant="Inactive">ACEPTAR Y CONTINUAR</LoginButtonStyles>
                    <LoginButtonStyles variant="Outline">
                        INICIA SESIÓN CON UNA RED SOCIAL
                    </LoginButtonStyles>
                </LoginFormContent>
            </LoginModalStyles>
        </SignupItemStyles>
    );
};

export default SignupItem;
