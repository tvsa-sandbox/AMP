import React from "react";
import InputsStyles from "./styles";
// import Info from "../Info";
import Box from "../Box";

const Inputs = props => {
    return (
        <Box variant="Auto">
            <InputsStyles {...props} type="search" name="Buscar" aria-label="Search" />
            {/* <Info>*Error In Caption</Info> */}
        </Box>
    );
};

export default Inputs;
