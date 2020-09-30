import React from "react";
import PropTypes from "prop-types";
import Icons from "../Icons";
import { ModalStyles, ModalClose } from "./styles";

const Modal = props => {
    const { children, handleClose } = props;
    return (
        <ModalStyles variant="Transparent" as="section" {...props}>
            <ModalClose variant="Transparent" onClick={handleClose} aria-label="close">
                <Icons color="#fff" name="Close" variant="Transparent" />
            </ModalClose>
            {children}
        </ModalStyles>
    );
};

Modal.propTypes = {
    children: PropTypes.node,
    handleClose: PropTypes.func.isRequired,
};

Modal.defaultProps = {
    children: null,
};

export default Modal;
