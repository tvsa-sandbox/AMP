import React from "react";
import PropTypes from "prop-types";
import {
    LoginItemStyles,
    LoginInputStyles,
    LoginButtonStyles,
    LoginItemText,
    LoginItemTitle,
    LoginAnchorStyles,
    LoginFormContent,
    LoginItemContent,
    LoginModalStyles,
} from "./styles";

const LoginItem = props => {
    return (
        <LoginItemStyles variant="Transparent">
            <LoginModalStyles variantClose="Login" iconSize={30}>
                <LoginFormContent variant="Solid">
                    <LoginItemTitle variant="h2">Inicia sesión o registrate</LoginItemTitle>
                    <LoginInputStyles variant="Interaction" placeholder="E-MAIL" />
                    <LoginInputStyles variant="Interaction" placeholder="CONTRASEÑA" />
                    <LoginItemContent variant="Flex">
                        <LoginAnchorStyles>¿Olvidaste tu contraseña?</LoginAnchorStyles>
                        <LoginAnchorStyles>Registrate</LoginAnchorStyles>
                    </LoginItemContent>
                    <LoginButtonStyles variant="Inactive">INICIAR SESIÓN</LoginButtonStyles>
                    <LoginItemText>O</LoginItemText>
                    <LoginButtonStyles
                        bg="facebook"
                        variant="Solid"
                        icon="Facebook"
                        btniconsize={30}
                    >
                        CONTINUAR CON FACEBOOK
                    </LoginButtonStyles>
                    <LoginButtonStyles bg="google" variant="Solid" icon="Google" btniconsize={30}>
                        CONTINUAR CON GOOGLE
                    </LoginButtonStyles>
                    <LoginButtonStyles bg="twitter" variant="Solid" icon="Twitter" btniconsize={30}>
                        CONTINUAR CON TWITTER
                    </LoginButtonStyles>
                </LoginFormContent>
            </LoginModalStyles>
        </LoginItemStyles>
    );
};

export default LoginItem;
