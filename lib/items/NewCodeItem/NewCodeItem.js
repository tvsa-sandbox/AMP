import React from "react";
import PropTypes from "prop-types";
import {
    LoginItemTitle,
    LoginButtonStyles,
    LoginFormContent,
    LoginModalStyles,
} from "../LoginItem/styles";
import { EmailItemText } from "../EmailItem/styles";
import { NewCodeItemStyles, NewCodeLabel, CheckInput } from "./styles";

const NewCodeItem = props => {
    return (
        <NewCodeItemStyles variant="Transparent">
            <LoginModalStyles variantClose="Login" iconSize={30}>
                <LoginFormContent variant="Solid">
                    <LoginItemTitle variant="h2">Registro correo electrónico</LoginItemTitle>
                    <EmailItemText>Elige una de las siguentes opciones</EmailItemText>
                    <NewCodeLabel>
                        <CheckInput type="Radio" checked="Checked" />
                        Reenviar el código al correo ****er@domain.com{" "}
                    </NewCodeLabel>
                    <NewCodeLabel>
                        <CheckInput type="Radio" checked="Checked" />
                        Registarme con otro correo electrónico.
                    </NewCodeLabel>
                    <LoginButtonStyles variant="Inactive">ACEPTAR</LoginButtonStyles>
                </LoginFormContent>
            </LoginModalStyles>
        </NewCodeItemStyles>
    );
};

export default NewCodeItem;
