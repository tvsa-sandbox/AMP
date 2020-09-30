import React, { Fragment } from "react";
import { withKnobs, text } from "@storybook/addon-knobs";

import { Anchor, Title, Box } from "accessories";

export default {
    decorators: [withKnobs],
    title: "Desing System/Atoms/Anchor",
};

export const ANCHOR = () => {
    const name = text("Link", "Anchor");
    return (
        <div>
            <Title variant="h2">{name}</Title>

            <Box variant="Space">
                <Anchor variant="Active">{name}</Anchor>
            </Box>

            <Box variant="Space">
                <Anchor variant="Focus">{name}</Anchor>
            </Box>
        </div>
    );
};
