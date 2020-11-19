import React from "react";
import PropTypes from "prop-types";
import { TabPaneStyles } from "./styles";

const TabPane = props => {
    const { children, idtab, active } = props;
    return (
        <TabPaneStyles id={idtab} variant="Transparent" active={active}>
            {children}
        </TabPaneStyles>
    );
};

TabPane.propTypes = {
    children: PropTypes.node.isRequired,
};

export default TabPane;
