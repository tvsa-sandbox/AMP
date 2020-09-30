import React, { Fragment } from "react";
import { withKnobs, text } from "@storybook/addon-knobs";
import { Title, Box, Text, Info, Time, Counter } from "accessories";
import { IconDuration } from "../../lib/accessories";

export default {
    decorators: [withKnobs],
    title: "Desing System/Atoms/Text",
};

export const LABEL = () => {
    const name = text("Etiqueta", "Label");
    return (
        <div>
            <Title variant="h2">Label</Title>

            <Box variant="Space">
                <Text variant="Label">{name}</Text>
            </Box>
        </div>
    );
};

export const TEXT = () => {
    const name = text(
        "Texto",
        "Lorem ipsum Similique eligendi sit dicta in quo aliquid. Aut rerum reprehenderit tempore mollitia ratione eum est nam. Quis aliquid et itaque deserunt ut esse illum dignissimo",
    );
    return (
        <div>
            <Title variant="h2">Text</Title>

            <Box variant="Space">
                <Text>{name}</Text>
            </Box>
        </div>
    );
};

export const INFO = () => {
    const name = text("Texto", "Autor: José de Jesus");
    return (
        <div>
            <Title variant="h2">Info</Title>

            <Box variant="Space">
                <Info>{name}</Info>
            </Box>
        </div>
    );
};

export const AIRTIME = () => {
    const name = text("Fecha", "julio 21, 2020");
    return (
        <div>
            <Title variant="h2">Airtime</Title>

            <Box variant="Space">
                <Time variant="Airtime">{name}</Time>
            </Box>
        </div>
    );
};

export const DURATION = () => {
    const name = text("Duracion", "24:00");
    return (
        <div>
            <Title variant="h2">Duration</Title>

            <Box variant="Space">
                <Time variant="Duration">{name}</Time>
            </Box>
            <Box variant="Space">
                <Time variant="DurationLight">{name}</Time>
            </Box>
        </div>
    );
};

export const ICONDURATION = () => {
    const name = text("Duracion", "24:00");
    return (
        <div>
            <Title variant="h2">Duration</Title>
            <Box variant="Transparent" style={{ height: "50px" }}>
                <Box variant="Space">
                    <IconDuration variant="Solid">{name}</IconDuration>
                </Box>
            </Box>
        </div>
    );
};

export const COUNTER = () => {
    const name = text("Number", "10/10");
    return (
        <>
            <Title variant="h2">Counter</Title>

            <Box variant="Space">
                <Time>{name}</Time>
            </Box>
        </>
    );
};
