import React from "react";
import PropTypes from "prop-types";
import {
    LoginItemTitle,
    LoginButtonStyles,
    LoginFormContent,
    LoginModalStyles,
} from "../LoginItem/styles";
import { EmailItemText } from "../EmailItem/styles";
import { NewCodeLabel, CheckInput } from "../NewCodeItem/styles";
import { DeleteAccountItemStyles, CommentInputStyles, CommentLabelStyles } from "./styles";

const DeleteAccountItem = props => {
    return (
        <DeleteAccountItemStyles variant="Transparent">
            <LoginModalStyles variantClose="Login" iconSize={30}>
                <LoginFormContent variant="Solid">
                    <LoginItemTitle variant="h2">Eliminar perfil</LoginItemTitle>
                    <EmailItemText>Cuéntanos por que quieres eliminar tu cuenta</EmailItemText>
                    <NewCodeLabel>
                        <CheckInput type="Radio" checked="Checked" />
                        No me parece útil
                    </NewCodeLabel>
                    <NewCodeLabel>
                        <CheckInput type="Radio" checked="Checked" />
                        Me preocupa mi privacidad
                    </NewCodeLabel>
                    <NewCodeLabel>
                        <CheckInput type="Radio" checked="Checked" />
                        No encuentro contenido de mi interés
                    </NewCodeLabel>
                    <CommentLabelStyles>Comentarios:</CommentLabelStyles>
                    <CommentInputStyles variant="Interaction" placeholder="COMENTARIOS" />
                    <LoginButtonStyles variant="Inactive">ACEPTAR</LoginButtonStyles>
                </LoginFormContent>
            </LoginModalStyles>
        </DeleteAccountItemStyles>
    );
};

export default DeleteAccountItem;
