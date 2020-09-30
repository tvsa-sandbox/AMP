import React, { Fragment } from "react";
import { withKnobs } from "@storybook/addon-knobs";
import Utils from "@televisadigital/nxtv-utilities";

import { Title, Anchor, Box, Image, Carousel } from "accessories";

export default {
    decorators: [withKnobs],
    title: "Desing System/Atoms/Carousel",
};

import Mock from "./imageMock.json";

export const CAROUSEL = args => {
    const { aspect = "aspect16x9", bsp = "medium" } = args;
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
    return (
        <>
            <Title variant="h2">Carousel</Title>

            <Box my="lg">
                <Carousel>
                    <Anchor
                        href="http://google.com"
                        style={{ width: "258px", marginRight: "4px", flex: "0 0 auto" }}
                        aria-label="link"
                    >
                        <Image ratio={aspect} src={SRC} key="ejemplo" />
                    </Anchor>
                    <Anchor
                        href="http://google.com"
                        style={{ width: "258px", marginRight: "4px", flex: "0 0 auto" }}
                        aria-label="link"
                    >
                        <Image ratio={aspect} src={SRC} key="ejemplo" />
                    </Anchor>
                    <Anchor
                        href="http://google.com"
                        style={{ width: "258px", marginRight: "4px", flex: "0 0 auto" }}
                        aria-label="link"
                    >
                        <Image ratio={aspect} src={SRC} key="ejemplo" />
                    </Anchor>
                    <Anchor
                        href="http://google.com"
                        style={{ width: "258px", marginRight: "4px", flex: "0 0 auto" }}
                        aria-label="link"
                    >
                        <Image ratio={aspect} src={SRC} key="ejemplo" />
                    </Anchor>
                    <Anchor
                        href="http://google.com"
                        style={{ width: "258px", marginRight: "4px", flex: "0 0 auto" }}
                        aria-label="link"
                    >
                        <Image ratio={aspect} src={SRC} key="ejemplo" />
                    </Anchor>
                </Carousel>
            </Box>
        </>
    );
};
