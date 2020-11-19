import React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";
import Utils from "@televisadigital/nxtv-utilities";
import { Title } from "accessories";

import ItemVideo from "../../lib/items/ItemVideo";

import Mock from "./imageMock.json";

export default {
    decorators: [withKnobs],
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
    const props = () => ({
        title: text("Titulo", "Titulo de test"),
    });
    return (
        <div>
            <Title variant="h2">Item Video</Title>
            <ItemVideo ratio={aspect} src={SRC} {...props} />
        </div>
    );
};
