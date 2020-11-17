import React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";
import Utils from "@televisadigital/nxtv-utilities";

import HomeCategory from "../../lib/contentTypes/HomeCategory";

import Mock from "./imageMock.json";

export default {
    decorators: [withKnobs],
    title: "Desing System/Template/Homecategory",
};

export const HOMECATEGORY = args => {
    const { aspect = "aspect4x3", bsp = "medium" } = args;
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
        slides: [
            {
                desktop: IMG[1],
                mobile: IMG[1],
            },
        ],
        carousel: [
            {
                desktop: {},
                mobile: IMG[2],
            },
        ],
    };
    return <HomeCategory imgshowcard={SRC.slides[0]} />;
};
