import React from "react";
import PropTypes from "prop-types";
import TextStyles from "./styles";

const Text = props => {
    const { children } = props;
    return <TextStyles {...props}>{children}</TextStyles>;
};

Text.propTypes = {
    children: PropTypes.node,
};
Text.defaultProps = {
    children: null,
};

export default Text;
