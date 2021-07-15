import React from "react";
import Utils from "@televisadigital/nxtv-utilities";

import Show from "../../lib/contentTypes/Show";

import Mock from "./imageMock-le.json";
import tags from "../../lib/widgets/PosterCard/tags.json";
import Poster from "../../assets/Poster.jpg";

export default {
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
            aspect: "aspect4x3",
            query: "(min-width: 0px)",
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
                desktop: {
                    height: "544px",
                    query: "(min-width: 0px)",
                    width: "1280px",
                    srcSet: Poster,
                },
                mobile: {
                    height: "544px",
                    query: "(min-width: 0px)",
                    width: "1280px",
                    srcSet: Poster,
                },
            },
        ],
        items: [
            {
                desktop: {},
                mobile: IMG[2],
            },
        ],
    };
    return <Show imgposter={SRC.poster[0]} imgitems={SRC.items[0]} tags={tags} />;
};
