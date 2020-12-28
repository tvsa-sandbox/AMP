import React from "react";

import { ProgressRing } from "accessories";

export default {
    title: "Desing System/Atoms/Progressring",
};

export const PROGRESSRING = args => <ProgressRing {...args} />;
PROGRESSRING.args = {
    progress: 10,
    radius: 100,
    stroke: 15,
    strokecolor: "gray",
};
PROGRESSRING.argTypes = {
    progress: {
        control: {
            type: "range",
            min: 0,
            max: 100,
        },
        description: "Progress number",
        defaultValue: 0,
        table: {
            defaultValue: { summary: 0 },
        },
    },
    radius: {
        control: "number",
        description: "Radious number",
    },
    stroke: {
        control: "number",
        description: "Stroke number",
    },
    strokecolor: {
        control: "color",
        description: "Color stroke",
    },
};
