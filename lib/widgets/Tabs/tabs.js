import React from "react";
import PropTypes from "prop-types";
import { TabsList, Tab, TabButton } from "./styles";
import tablinks from "./tabs.json";

export const Tabs = props => {
    const { btncolor } = props;
    return (
        <nav role="navigation">
            <TabsList>
                {tablinks.map(tab => {
                    return (
                        <Tab key={tab.name}>
                            <TabButton
                                href={tab.path}
                                variant="Transparent"
                                color={btncolor}
                                // active={SECTION[0] === tab.path}
                            >
                                {tab.name}
                            </TabButton>
                        </Tab>
                    );
                })}
            </TabsList>
        </nav>
    );
};

Tabs.propTypes = {
    btncolor: PropTypes.string,
};
Tabs.defaultProps = {
    btncolor: "white",
};

export default Tabs;
