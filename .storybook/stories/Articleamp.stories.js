import React from "react";
import Utils from "@televisadigital/nxtv-utilities";

import ArticleAMP from "../../lib/contentTypes/AMP/ArticleAMP";

export default {
    title: "Desing System/TemplateAMP/ArticleAMP",
    component: ArticleAMP
};

import Mock from "./imageMock.json";

export const ARTICLEAMP = args => {
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
        <ArticleAMP
            grid={SRC.gridgallery[0]}
            imgs={SRC.imgenhancement[0]}
            carrousel={SRC.carousel[0]}
            rel={SRC.imgenhancement[0]}
            gal={SRC.gridgal[0]}
            items={SRC.carousel[0]}
        />
    );
};
