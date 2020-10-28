import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import Utils from "@televisadigital/nxtv-utilities";

import { Image, Placeholder, Title, Box } from "accessories";

export default {
    decorators: [withKnobs],
    title: "Desing System/Atoms/Images",
};

import Mock from "./imageMock.json";

export const PLACEHOLDER = args => {
    return (
        <>
            <Title variant="h2">Placeholders</Title>

            <Box my="lg">
                <Placeholder ratio="aspect1x1" />
                <Image ratio="aspect16x9" />
            </Box>

            <Box my="lg">
                <Placeholder ratio="aspect3x4" />
            </Box>

            <Box my="lg">
                <Placeholder ratio="aspect4x3" />
            </Box>

            <Box my="lg">
                <Placeholder ratio="aspect9x16" />
            </Box>

            <Box my="lg">
                <Placeholder ratio="aspect16x9" />
            </Box>

            <Box my="lg">
                <Placeholder ratio="aspect40x17" />
            </Box>

            <Box my="lg">
                <Placeholder ratio="aspect1x1" variant="Transparent" />
            </Box>

            <Box my="lg">
                <Placeholder ratio="aspect3x4" variant="Absolut" />
            </Box>
        </>
    );
};

export const IMAGE = args => {
    const { aspect = "aspect16x9", bsp = "medium" } = args;
    const SOURCES = [
        {
            aspect,
            query: "(min-width: 0px)",
            size: bsp,
        },
    ];
    console.log("SOURCES", SOURCES);
    const IMG = Utils.getSources(Mock.renditions, SOURCES);
    const SRC = {
        desktop: {},
        mobile: IMG[0],
    };
    return (
        <>
            <Title variant="h2">Aspect Images</Title>
            <Image ratio={aspect} src={SRC} key="ejemplo" />
        </>
    );
};

IMAGE.args = { count: 3 };
IMAGE.argTypes = {
    aspect: {
        control: {
            type: "select",
            options: [
                "aspect16x9",
                "aspect4x3",
                "aspect3x4",
                "aspect9x16",
                "aspect1x1",
                "aspectpanoramic",
            ],
        },
    },
    bsp: {
        control: {
            type: "select",
            options: ["large", "medium", "mobile-large", "thumbnail", "small", "x-large"],
        },
    },
};
