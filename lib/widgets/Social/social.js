import React from "react";
import PropTypes from "prop-types";
import SocialStyles from "./styles";

const Social = props => {
    const { children } = props;
    return (
        <SocialStyles variant="Flex" {...props}>
            {children}
        </SocialStyles>
    );
};

Social.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Social;
