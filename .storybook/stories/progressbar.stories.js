import React from "react";

import { ProgressBar } from "accessories";

export default {
    title: "Desing System/Atoms/Progressbar",
    decorators: [
        Story => (
            <div
                style={{
                    display: "flex",
                    height: "100vh",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Story />
            </div>
        ),
    ],
};

export const PROGRESSBAR = args => <ProgressBar {...args} />;
PROGRESSBAR.args = {
    progress: 10,
    stroke: 15,
    strokecolor: "gray",
};
PROGRESSBAR.argTypes = {
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

    stroke: {
        control: "number",
        description: "Stroke number",
    },
    strokecolor: {
        control: "color",
        description: "Color stroke",
    },
};
