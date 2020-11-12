import React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";
import Utils from "@televisadigital/nxtv-utilities";

import Show from "../../lib/contentTypes/Show";

import Mock from "./imageMock.json";

export default {
    decorators: [withKnobs],
    title: "Desing System/Template/Show",
};

export const SHOW = args => {
    const { aspect = "aspectpanoramic", bsp = "medium" } = args;
    const SOURCES = [
        {
            aspect: aspect,
            query: "(min-width: 415px)",
            size: bsp,
        },
        {
            aspect: "aspect3x4",
            query: "(min-width: 0px) and (max-width: 414px)",
            size: "mobile-large",
        },
        {
            aspect: "aspect16x9",
            query: "(min-width: 0px)",
            size: "medium",
        },
    ];
    const IMG = Utils.getSources(Mock.renditions, SOURCES);
    const SRC = {
        poster: [
            {
                desktop: IMG[0],
                mobile: IMG[0],
            },
        ],
        carousel: [
            {
                desktop: {},
                mobile: IMG[2],
            },
        ],
    };
    return <Show imgposter={SRC.poster[0]} items={SRC.carousel[0]} />;
};
