import React from "react";
import { withKnobs, text, number, color } from "@storybook/addon-knobs";

import { ProgressRing, Title, Box } from "accessories";

export default {
    decorators: [withKnobs],
    title: "Desing System/Atoms/Progressring",
};

export const PROGRESSRING = () => {
    const progress = number("Progress", 10);
    const radius = number("Radious", 100);
    const stroke = number("Stroke", 15);
    const strokecolor = color("Color", "#ffffff");
    return (
        <div>
            <Title variant="h2">Progress Ring</Title>
            <Box
                variant="Flex"
                style={{
                    justifyContent: "center",
                    margin: "1em 0",
                    position: "relative",
                    minHeight: "300px",
                }}
            >
                <ProgressRing
                    progress={progress}
                    radius={radius}
                    stroke={stroke}
                    strokecolor={strokecolor}
                />
            </Box>
        </div>
    );
};
