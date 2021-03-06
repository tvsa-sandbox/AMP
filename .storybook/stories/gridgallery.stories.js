import React from "react";
import Utils from "@televisadigital/nxtv-utilities";

import GridGallery from "../../lib/widgets/GridGallery";
import Mock from "./imageMock.json";
import slides from "../../lib/mocks/Mockup.json";

export default {
    title: "Desing System/enhancement/GridGallery",
};

export const GRIDGALLERY = args => {
    const { aspect = "aspect1x1", bsp = "medium" } = args;
    const SOURCES = [
        {
            aspect,
            query: "(min-width: 0px)",
            size: bsp,
        },
        {
            aspect: "aspect4x3",
            query: "(min-width: 0px)",
            size: "medium",
        },
        {
            aspect: "aspect3x4",
            query: "(min-width: 0px) and (max-width: 414px)",
            size: "mobile-large",
        },
    ];
    const IMG = Utils.getSources(Mock.renditions, SOURCES);
    const SRC = {
        gridgallery: [
            {
                desktop: {},
                mobile: IMG[0],
            },
        ],
        gridgal: [
            {
                desktop: IMG[1],
                mobile: IMG[2],
            },
        ],
    };
    return (
        <GridGallery
            ratio={aspect}
            src={SRC.gridgallery[0]}
            galimg={SRC.gridgal[0]}
            gal={slides.slides}
        />
    );
};
