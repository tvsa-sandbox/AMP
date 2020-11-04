import React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";
import { Title } from "accessories";

import TabsMatch from "../../lib/widgets/TabsMatch";

export default {
    decorators: [withKnobs],
    title: "Desing System/Widgets/TabsMatch",
};

export const TABSMATCH = () => {
    return (
        <div>
            <Title variant="h2">TabsMatch</Title>
            <TabsMatch />
        </div>
    );
};
