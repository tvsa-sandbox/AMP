import React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";
import { Title } from "accessories";

import News from "../../lib/widgets/News";

export default {
    decorators: [withKnobs],
    title: "Desing System/Widgets/News",
};

export const NEWS = () => {
    return (
        <div>
            <Title variant="h2">News</Title>
            <News />;
        </div>
    );
};
