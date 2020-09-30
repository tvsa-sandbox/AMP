import React, { Fragment } from "react";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

import Layout from "../../lib/layout";
import socialmedia from "../../lib/widgets/Header/social.json";

export default {
    decorators: [withKnobs],
    title: "Desing System/Template/Layout",
};

export const LAYOUT = () => {
    return (
        <div>
            <Layout
                breadcrumbs={[]}
                social={socialmedia}
                uri="https://tvsa-sandbox.github.io/widgets-beta/"
                filter=""
            />
        </div>
    );
};
