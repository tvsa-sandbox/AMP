import React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";
import { Title } from "accessories";

import BrandTitle from "../../lib/widgets/BrandTitle";


export default {
    decorators: [withKnobs],
    title: "Desing System/Widgets/BrandTitle",
};

export const BRANDTITLE = () => {
    return (
        <div>
            <Title variant="h2">BrandTitle</Title>
            <BrandTitle />
        </div>
    );
};
