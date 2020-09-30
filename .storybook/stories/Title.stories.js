import React, { Fragment } from "react";
import { withKnobs, text } from "@storybook/addon-knobs";
import { Title, Box } from "accessories";

export default {
    decorators: [withKnobs],
    title: "Desing System/Atoms/Title",
};

export const TITLE = () => {
    const name = text("Titulo", "Titulo de");
    return (
        <div>
            <Title variant="h2">Title</Title>

            <Box variant="Space">
                <Title variant="h1">{name} H1</Title>
            </Box>
            <Box variant="Space">
                <Title variant="h2">{name} H2</Title>
            </Box>
            <Box variant="Space">
                <Title variant="h3">{name} H3</Title>
            </Box>
            <Box variant="Space">
                <Title variant="h4">{name} H4</Title>
            </Box>
            <Box variant="Space">
                <Title variant="h5">{name} H5</Title>
            </Box>
            <Box variant="Space">
                <Title variant="h6">{name} H6</Title>
            </Box>
        </div>
    );
};
