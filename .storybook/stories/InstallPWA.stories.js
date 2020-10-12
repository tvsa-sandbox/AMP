import React, { Fragment } from "react";
import { withKnobs } from "@storybook/addon-knobs";
import Title from "accessories/Title";
import { InstallPWA } from "widgets";

export default {
    decorators: [withKnobs],
    title: "Desing System/TemplatePWA/InstallPWA",
};

export const INSTALLPWA = () => {
    return (
        <div>
            <Title variant="h2">Install PWA</Title>
            <InstallPWA />
        </div>
    );
};
