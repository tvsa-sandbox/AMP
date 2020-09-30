import React from "react";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import Utils from "@televisadigital/nxtv-utilities";

import HomePWA from "../../lib/contentTypes/PWA/HomePWA";

export default {
    decorators: [withKnobs],
    title: "Desing System/TemplatePWA/HomePWA",
};

import Mock from "./imageMock.json";

export const HOMEPWA = args => {
    const { aspect = "aspect16x9", bsp = "medium" } = args;
    const SOURCES = [
        {
            aspect: aspect,
            query: "(min-width: 415px)",
            size: bsp,
        },
        {
            aspect: aspect,
            query: "(min-width: 415px)",
            size: "thumbnail",
        },
        {
            aspect: aspect,
            query: "(min-width: 0px)",
            size: "medium",
        },
    ];
    const IMG = Utils.getSources(Mock.renditions, SOURCES);
    const SRC = {
        imgenhancement: [
            {
                desktop: {},
                mobile: IMG[0],
            },
        ],
        gridgallery: [
            {
                desktop: {},
                mobile: IMG[2],
            },
        ],
        carousel: [
            {
                desktop: {},
                mobile: IMG[1],
            },
        ],
    };
    return (
        <HomePWA
            grid={SRC.gridgallery[0]}
            imgs={SRC.imgenhancement[0]}
            carrousel={SRC.carousel[0]}
            rel={SRC.imgenhancement[0]}
        />
    );
};
