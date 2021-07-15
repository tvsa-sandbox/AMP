import React from "react";
import Utils from "@televisadigital/nxtv-utilities";
import { Title } from "accessories";

import EndCardItem from "../../lib/items/EndCardItem";

import Mock from "./imageMock.json";

export default {
    title: "Desing System/items/EndCardItem",
};

export const ENDCARDITEM = args => {
    const { aspect = "aspect16x9", bsp = "thumbnail" } = args;
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
            <Title variant="h2">End Card Item</Title>
            <EndCardItem imgsrc={SRC} {...args} />
        </div>
    );
};
ENDCARDITEM.args = {
    title: "Una Familia de Diez",
};
ENDCARDITEM.argTypes = {
    title: { control: "text" },
};
