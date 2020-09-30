import React, { Fragment } from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { Footer } from "widgets";
import { Title, Box } from "accessories";

import FooterAMP from "../../lib/widgets/Footer/FooterAMP";

export default {
    decorators: [withKnobs],
    title: "Desing System/Widgets/Footer",
};

export const FOOTER = () => {
    return (
        <div>
            <Title variant="h2">Footer</Title>
            <Footer />
        </div>
    );
};

export const FOOTERAMP = () => {
    return (
        <div>
            <Title variant="h2">Footer AMP</Title>
            <FooterAMP />
        </div>
    );
};
