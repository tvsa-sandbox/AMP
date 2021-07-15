import React from "react";
import PropTypes from "prop-types";
import {
    LoginItemTitle,
    LoginButtonStyles,
    LoginInputStyles,
    LoginFormContent,
    LoginModalStyles,
} from "../LoginItem/styles";
import { EmailItemStyles, EmailItemText } from "./styles";

const EmailItem = props => {
    return (
        <EmailItemStyles variant="Transparent">
            <LoginModalStyles variantClose="Login" iconSize={30}>
                <LoginFormContent variant="Solid">
                    <LoginItemTitle variant="h2">Recuperar contraseña</LoginItemTitle>
                    <EmailItemText>
                        Ingresa la dirección de correo electrónico asociada a tu cuenta y te
                        enviaremos un enlace para restablecer tu contraseña.
                    </EmailItemText>
                    <LoginInputStyles variant="Interaction" placeholder="E-MAIL" />
                    <LoginButtonStyles variant="Inactive">ENVIAR ENLACE</LoginButtonStyles>
                </LoginFormContent>
            </LoginModalStyles>
        </EmailItemStyles>
    );
};

export default EmailItem;
