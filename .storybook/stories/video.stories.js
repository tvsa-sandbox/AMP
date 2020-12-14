import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import Utils from "@televisadigital/nxtv-utilities";
import { Video } from "../../lib/contentTypes";

import Mock from "./imageMock.json";
import social from "../../lib/items/SocialBox/social.json";

export default {
    decorators: [withKnobs],
    title: "Desing System/Template/Video",
};

const tabsl = [
    {
        tabid: "episodios",
        name: "EPISODIOS",
    },
    {
        tabid: "clips",
        name: "CLIPS",
    },
    {
        tabid: "comentarios",
        name: "COMENTA",
    },
];

export const VIDEO = args => {
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
    return <Video vidimg={SRC} tabs={tabsl} social={social} />;
};
