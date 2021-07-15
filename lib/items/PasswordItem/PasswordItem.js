import React from "react";
import PropTypes from "prop-types";
import {
    LoginItemTitle,
    LoginButtonStyles,
    LoginInputStyles,
    LoginFormContent,
    LoginModalStyles,
} from "../LoginItem/styles";
import { EmailItemText } from "../EmailItem/styles";
import { PasswordItemStyles } from "./styles";

const PasswordItem = props => {
    return (
        <PasswordItemStyles variant="Transparent">
            <LoginModalStyles variantClose="Login" iconSize={30}>
                <LoginFormContent variant="Solid">
                    <LoginItemTitle variant="h2">Recuperar contraseña</LoginItemTitle>
                    <EmailItemText>Instrucciones para recuperar la contraseña.</EmailItemText>
                    <LoginInputStyles variant="Interaction" placeholder="NUEVA CONTRASEÑA" />
                    <LoginInputStyles variant="Interaction" placeholder="REPETIR CONTRASEÑA" />
                    <LoginButtonStyles variant="Inactive">ACTUALIZAR</LoginButtonStyles>
                </LoginFormContent>
            </LoginModalStyles>
        </PasswordItemStyles>
    );
};

export default PasswordItem;
