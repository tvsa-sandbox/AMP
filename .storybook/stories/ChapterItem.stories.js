import React from "react";
import Utils from "@televisadigital/nxtv-utilities";
import { Title } from "accessories";

import ChapterItem from "../../lib/items/ChapterItem";

import Mock from "./imageMock.json";

export default {
    title: "Desing System/items/ChapterItem",
    component: ChapterItem,
};

export const CHAPTERITEM = args => {
    const { aspect = "aspect16x9", bsp = "mobile-large" } = args;
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
        <div>
            <Title variant="h2">ChapterItem</Title>
            <ChapterItem ratio={aspect} src={SRC} />
        </div>
    );
};
