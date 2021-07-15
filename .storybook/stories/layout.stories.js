import React, { Fragment } from "react";

import Layout from "../../lib/layout";
import socialmedia from "../../lib/widgets/Header/social.json";

export default {
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
