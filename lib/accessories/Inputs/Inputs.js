import React from "react";
import PropTypes from "prop-types";
import InputsStyles from "./styles";
import { Info, Box, Icons } from "../index";

const Inputs = props => {
    const { icon, iconcolor, iconsize, error, variant, inputWidth } = props;
    return (
        <Box variant="Transparent" w={inputWidth}>
            <Box variant="Flex">
                <InputsStyles type="search" aria-label="Search" {...props} />
                {icon ? <Icons name={icon} color={iconcolor} size={iconsize} /> : null}
            </Box>
            {error ? <Info variant="Error">*Error In Caption</Info> : null}
        </Box>
    );
};

Inputs.propTypes = {
    icon: PropTypes.string,
    error: PropTypes.bool,
    variant: PropTypes.string,
    inputWidth: PropTypes.string,
};

Inputs.defaultProps = {
    icon: "Buscar",
    error: false,
    variant: "White",
    inputWidth: "auto",
};

export default Inputs;
