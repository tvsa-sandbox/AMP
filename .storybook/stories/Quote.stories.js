import React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";
import { Title } from "accessories";

import Quote from "../../lib/widgets/Quote";

export default {
    decorators: [withKnobs],
    title: "Desing System/enhancement/Quote",
};

export const QUOTE = () => {
    const props = () => ({
        title: text("Titulo", "Titulo de test"),
    });
    return (
        <div>
            <Title variant="h2">Enhancement Quote</Title>
            <Quote {...props} />;
        </div>
    );
};
