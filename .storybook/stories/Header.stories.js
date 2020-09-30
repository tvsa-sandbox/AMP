import React, { Fragment } from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { Title } from "accessories";

import HeaderAMP from "../../lib/widgets/Header/HeaderAMP";
import Layout from "../../lib/layout";
import socialmedia from "../../lib/widgets/Header/social.json";

export default {
    decorators: [withKnobs],
    title: "Desing System/Widgets/Header",
};

export const HEADERAMP = () => {
    return (
        <div>
            <Title variant="h2">Header AMP</Title>
            <HeaderAMP />
        </div>
    );
};

export const HEADER = () => {
    return (
        <div>
            <Layout
                foot={false}
                breadcrumbs={[]}
                social={socialmedia}
                uri="https://tvsa-sandbox.github.io/widgets-beta/"
                filter=""
            />
        </div>
    );
};
