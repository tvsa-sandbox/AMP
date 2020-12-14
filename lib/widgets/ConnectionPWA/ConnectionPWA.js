import React from "react";
import PropTypes from "prop-types";
import { ConnectionBoxStyles, ConnectionIconStyle } from "./styles";
import { Info } from "../../accessories";

const ConnectionPWA = ({ text }) => {
    return (
        <ConnectionBoxStyles variant="Flex">
            <ConnectionIconStyle name="Cloud" />
            <Info>{text}</Info>
        </ConnectionBoxStyles>
    );
};

ConnectionPWA.propTypes = {
    text: PropTypes.string,
};

ConnectionPWA.defaultProps = {
    text: "Estás disfrutando de nuestro contenido sin conexión",
};

export default ConnectionPWA;
