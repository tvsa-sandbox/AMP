import React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";
import { Title } from "accessories";

import { Tabs } from "../../lib/widgets";
// import { TabPane } from "../../lib/widgets/Tabs/tabpane";

export default {
    decorators: [withKnobs],
    title: "Desing System/Widgets/Tabs",
};

export const TABS = () => {
    return (
        <div>
            <Title variant="h2">Tabs</Title>
            <Tabs />
            {/* <TabPane>texto</TabPane> */}
        </div>
    );
};
