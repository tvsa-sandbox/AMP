import React, { useContext } from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "styled-components";
import ButtonStyles from "./styles";

const Button = props => {
    const { children } = props;
    const themeContext = useContext(ThemeContext);
    const ui = themeContext.ui.name;
    return ui === "elnueve" ? (
        <ButtonStyles {...props} color="Secondary">
            {children}
        </ButtonStyles>
    ) : (
        <ButtonStyles {...props}>{children}</ButtonStyles>
    );
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    variant: PropTypes.string,
};

Button.defaultProps = {
    variant: "Solid",
};

export default Button;
