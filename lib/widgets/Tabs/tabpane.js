import React from "react";
import PropTypes from "prop-types";
import { TabPaneStyles } from "./styles";

const TabPane = props => {
    const { children } = props;
    return <TabPaneStyles id="">{children}</TabPaneStyles>;
};

TabPane.propTypes = {
    children: PropTypes.node.isRequired,
};

export default TabPane;
