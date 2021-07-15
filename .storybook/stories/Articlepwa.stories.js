import React from "react";
import Utils from "@televisadigital/nxtv-utilities";

import ArticlePWA from "../../lib/contentTypes/PWA/ArticlePWA";

export default {
    title: "Desing System/TemplatePWA/ArticlePWA",
};

import Mock from "./imageMock-le.json";
import slides from "../../lib/mocks/Mockup.json";

export const ARTICLEPWA = args => {
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
        <ArticlePWA
            grid={SRC.gridgallery[0]}
            imgs={SRC.imgenhancement[0]}
            carrousel={SRC.carousel[0]}
            rel={SRC.imgenhancement[0]}
            gal={slides.slides}
            galimg={SRC.gridgal[0]}
        />
    );
};
