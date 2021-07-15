import React from "react";
import Utils from "@televisadigital/nxtv-utilities";
import { Title } from "accessories";

import ItemVideo from "../../lib/items/ItemVideo";

import Mock from "./imageMock.json";

export default {
    title: "Desing System/items/ItemVideo",
};

export const ITEMVIDEO = args => {
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
        <div>
            <Title variant="h2">Item Video</Title>
            <ItemVideo ratio={aspect} src={SRC} />
        </div>
    );
};
