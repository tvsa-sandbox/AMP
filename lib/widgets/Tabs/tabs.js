import React, { useState } from "react";
import PropTypes from "prop-types";
import { TabsList, Tab, TabButton } from "./styles";

export const Tabs = props => {
    const { btncolor, tablinks } = props;
    const [active, setActive] = useState(0);
    const changeActive = (name, index) => {
        setActive(index);
        props.func(name);
    };
    return (
        <nav role="navigation">
            <TabsList>
                {tablinks.map((tab, index) => {
                    return (
                        <Tab key={tab.name}>
                            <TabButton
                                id={tab.tabid}
                                variant="Transparent"
                                color={btncolor}
                                onClick={() => changeActive(tab.tabid, index)}
                                active={index === active}
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
    func: PropTypes.func,
    tablinks: PropTypes.arrayOf(PropTypes.shape({})),
};
Tabs.defaultProps = {
    btncolor: "white",
    tablinks: [],
    func: () => {},
};
export default Tabs;
