import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import Utils from "@televisadigital/nxtv-utilities";

import GridGalleryOpen from "../../lib/widgets/GridGalleryOpen";
import Mock from "./imageMock-le.json";

export default {
    decorators: [withKnobs],
    title: "Desing System/enhancement/GridGalleryOpen",
};

export const GRIDGALLERYOPEN = args => {
    const { aspect = "aspect4x3", bsp = "medium" } = args;
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
    return <GridGalleryOpen slides={SRC} active handlePics={() => alert("funcionvacia")} />;
};
