import React from "react";
import PropTypes from "prop-types";
import Icons from "../Icons";
import { ModalStyles, ModalClose } from "./styles";

const Modal = props => {
    const { children, handleClose, closebtn } = props;
    return (
        <ModalStyles variant="Transparent" as="section" {...props}>
            {closebtn ? (
                <ModalClose variant="Transparent" onClick={handleClose} aria-label="close">
                    <Icons color="#fff" name="Close" variant="Transparent" />
                </ModalClose>
            ) : null}
            {children}
        </ModalStyles>
    );
};

Modal.propTypes = {
    children: PropTypes.node,
    closebtn: PropTypes.bool,
    handleClose: PropTypes.func.isRequired,
};

Modal.defaultProps = {
    children: null,
    closebtn: true,
};

export default Modal;
