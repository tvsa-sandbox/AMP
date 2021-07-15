import React, { useContext } from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "styled-components";
import { ModalStyles, ModalClose } from "./styles";

const Modal = props => {
    const { children, handleClose, closebtn, variantClose, iconSize } = props;
    const themeContext = useContext(ThemeContext);
    const ui = themeContext.ui.name;
    const tudnColor = ui === "tudn" ? "#007350" : "#fff";
    return (
        <ModalStyles variant="Transparent" as="section" {...props}>
            {closebtn ? (
                <ModalClose
                    variant={variantClose}
                    onClick={handleClose}
                    aria-label="close"
                    my="12px"
                    icon="Close"
                    iconcolor={tudnColor}
                    btniconsize={iconSize}
                />
            ) : null}
            {children}
        </ModalStyles>
    );
};

Modal.propTypes = {
    children: PropTypes.node,
    closebtn: PropTypes.bool,
    handleClose: PropTypes.func.isRequired,
    variantClose: PropTypes.string,
    iconSize: PropTypes.number,
};

Modal.defaultProps = {
    children: null,
    closebtn: true,
    variantClose: "Normal",
    iconSize: 40,
};

export default Modal;
