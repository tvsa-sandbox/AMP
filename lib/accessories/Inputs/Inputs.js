import React from "react";
import PropTypes from "prop-types";
import InputsStyles from "./styles";
// import Info from "../Info";
import Box from "../Box";

const Inputs = props => {
    const { icon } = props;
    return (
        <Box variant="Auto">
            <InputsStyles {...props} type="search" name={icon} aria-label="Search" />
            {/* <Info>*Error In Caption</Info> */}
        </Box>
    );
};

Inputs.propTypes = {
    title: PropTypes.string,
    icon: PropTypes.string,
    size: PropTypes.string,
};

Inputs.defaultProps = {
    title: "Angelique Boyer con toda la mejor actitud en su regreso triunfal a Tik Tok por segunda vez",
    icon: "Buscar",
    size: "50",
};

export default Inputs;
