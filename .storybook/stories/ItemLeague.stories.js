import React, { Fragment } from "react";
import { withKnobs, text } from "@storybook/addon-knobs";
import Utils from "@televisadigital/nxtv-utilities";

import ItemLeague from "../../lib/items/ItemLeague";

import Mock from "./imageMock.json";

export default {
    decorators: [withKnobs],
    title: "Desing System/Items/ItemLeague",
};

export const ITEMLEAGUE = args => {
    const { aspect = "aspect16x1", bsp = "medium" } = args;
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
    return <ItemLeague ratio={aspect} image={SRC} />;
};

