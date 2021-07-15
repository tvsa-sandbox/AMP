import React, { Fragment } from "react";
import Title from "accessories/Title";
import { ConnectionPWA } from "widgets";

export default {
    title: "Desing System/TemplatePWA/ConnectionPWA",
};

export const CONNECTIONPWA = () => {
    return (
        <div>
            <Title variant="h2">Connection PWA</Title>
            <ConnectionPWA />
        </div>
    );
};
