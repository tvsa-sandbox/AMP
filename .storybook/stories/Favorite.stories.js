import React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";
import { Title } from "accessories";

import Favorite from "../../lib/widgets/Favorite";

export default {
    decorators: [withKnobs],
    title: "Desing System/Widgets/Favorite",
};

export const FAVORITE = () => {
    return (
        <div>
            <Title variant="h2">Favorite</Title>
            <Favorite />
        </div>
    );
};
