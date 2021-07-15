import React from "react";
import Utils from "@televisadigital/nxtv-utilities";
import { Title, Box, Image } from "accessories";

import EndCard from "../../lib/widgets/EndCard";

import Mock from "./imageMock.json";

export default {
    title: "Desing System/widgets/EndCard",
};

export const ENDCARD = args => {
    const { aspect = "aspect16x9", bsp = "thumbnail" } = args;
    const SOURCES = [
        {
            aspect,
            query: "(min-width: 0px)",
            size: bsp,
        },
    ];
    const IMG = Utils.getSources(Mock.renditions, SOURCES);
    const SRC = {
        desktop: {},
        mobile: IMG[0],
    };
    const rel = [
        {
            id: 0,
            src: SRC,
        },
        {
            id: 1,
            src: SRC,
        },
        {
            id: 2,
            src: SRC,
        },
    ];
    return (
        <div>
            <Title variant="h2">End Card</Title>
            <Box
                style={{
                    position: "relative",
                    maxWidth: "768px",
                    margin: "2em auto",
                }}
                color="Danger"
            >
                <Image src={SRC} />
                <EndCard ratio={aspect} src={SRC} related={rel} {...args} />
            </Box>
        </div>
    );
};
ENDCARD.args = {
    btntext: "Detener",
    title: "“¡Me enamoré, mamá!”: Clara le cuenta la verdad a Nieves",
    progress: 90,
};
ENDCARD.argTypes = {
    btntext: { control: "text" },
    title: { control: "text" },
    progress: {
        control: {
            type: "range",
            min: 0,
            max: 100,
        },
        description: "Input size",
        defaultValue: 0,
        table: {
            defaultValue: { summary: 0 },
        },
    },
};
