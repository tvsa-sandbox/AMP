import React, { useContext } from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "styled-components";
import { ButtonStyles, ButtonIcon } from "./styles";

const Button = props => {
    const { children, icon, iconcolor, btniconsize } = props;
    const themeContext = useContext(ThemeContext);
    const ui = themeContext.ui.name;
    return ui === "elnueve" ? (
        <ButtonStyles {...props} color="elnueve">
            {icon ? <ButtonIcon name={icon} iconcolor={iconcolor} size={btniconsize} /> : null}
            {children}
        </ButtonStyles>
    ) : (
        <ButtonStyles {...props}>
            {icon ? <ButtonIcon name={icon} iconcolor={iconcolor} size={btniconsize} /> : null}
            {children}
        </ButtonStyles>
    );
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    variant: PropTypes.string,
    icon: PropTypes.string,
    iconcolor: PropTypes.string,
    btniconsize: PropTypes.number,
};

Button.defaultProps = {
    variant: "Solid",
    icon: "",
    iconcolor: "",
    btniconsize: 40,
};

export default Button;
