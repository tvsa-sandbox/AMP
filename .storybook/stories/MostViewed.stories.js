import React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";
import { Title } from "accessories";

import MostViewed from "../../lib/widgets/MostViewed";

export default {
    decorators: [withKnobs],
    title: "Desing System/Widgets/MostViewed",
};

export const MOSTVIEWED = () => {
    return (
        <div>
            <Title variant="h2">MostViewed</Title>
            <MostViewed />
        </div>
    );
};
