import React from "react";
import { withKnobs } from "@storybook/addon-knobs";

import { Title, Box, Text } from "accessories";

export default {
    decorators: [withKnobs],
    title: "Desing System/Atoms/Box",
};

export const BOX = () => {
    return (
        <div>
            <Title variant="h2">Box</Title>

            <Box variant="Solid">
                <Text>variant Solid</Text>
            </Box>

            <Box variant="Space" style={{ background: "red" }}>
                <Text>variant space</Text>
            </Box>

            <Box variant="Transparent">
                <Text>variant Transparent</Text>
            </Box>

            <Box variant="Flex">
                <Box variant="Space" style={{ background: "green" }}>
                    <Text>variant Flex</Text>
                </Box>
                <Box variant="Space" style={{ background: "blue" }}>
                    <Text>variant Flex</Text>
                </Box>
            </Box>
        </div>
    );
};
