import React, { Fragment } from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { Privacy } from "widgets";
import { Title, Box } from "accessories";

export default {
    decorators: [withKnobs],
    title: "Desing System/Widgets/Privacy",
};

export const PRIVACY = () => {
    return (
        <div>
            <Title variant="h2">Privacy</Title>
            <Privacy />
        </div>
    );
};
