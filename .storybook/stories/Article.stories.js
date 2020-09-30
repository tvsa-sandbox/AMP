import React from "react";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import Utils from "@televisadigital/nxtv-utilities";

import Article from "../../lib/contentTypes/Article";

export default {
    decorators: [withKnobs],
    title: "Desing System/Template/Article",
};

import Mock from "./imageMock-le.json";

export const ARTICLE = args => {
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
            aspect: "aspect1x1",
            query: "(min-width: 0px)",
            size: "medium",
        },
        {
            aspect: "aspect4x3",
            query: "(min-width: 0px)",
            size: "medium",
        },
        {
            aspect: "aspect3x4",
            query: "(min-width: 0px) and (max-width: 414px)",
            size: "mobile-large",
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
        gridgal: [
            {
                desktop: IMG[3],
                mobile: IMG[4],
            },
        ],
    };
    return (
        <Article
            grid={SRC.gridgallery[0]}
            imgs={SRC.imgenhancement[0]}
            carrousel={SRC.carousel[0]}
            rel={SRC.imgenhancement[0]}
            gal={SRC.gridgal[0]}
        />
    );
};
