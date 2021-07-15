import React from "react";
import Utils from "@televisadigital/nxtv-utilities";

import GridGalleryOpen from "../../lib/widgets/GridGalleryOpen";
import Mock from "./imageMock-le.json";
import slides from "../../lib/mocks/Mockup.json";

export default {
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
    return (
        <GridGalleryOpen
            slides={slides.slides}
            slidesimg={SRC}
            active
            handlePics={() => alert("funcionvacia")}
        />
    );
};
