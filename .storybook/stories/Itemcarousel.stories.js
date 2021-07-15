import React, { Fragment } from "react";
import Utils from "@televisadigital/nxtv-utilities";

import ItemCarousel from "../../lib/items/ItemCarousel";
import SkeletonCarousel from "../../lib/items/ItemCarousel/SkeletonCarousel";

import Mock from "./imageMock.json";

export default {
    title: "Desing System/Items/Carousel",
};

export const ITEMCAROUSEL = args => {
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
    return <ItemCarousel ratio={aspect} image={SRC} />;
};

export const CAROUSELITEMSKELETON = () => {
    return <SkeletonCarousel />;
};
