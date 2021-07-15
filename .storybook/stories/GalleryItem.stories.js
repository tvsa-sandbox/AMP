import React from "react";
import Utils from "@televisadigital/nxtv-utilities";

import GalleryItem from "../../lib/items/GalleryItem";
import Skeleton from "../../lib/items/GalleryItem/Skeleton";

import Mock from "./imageMock.json";

export default {
    title: "Desing System/Items/Gallery",
};

export const GALLERYITEM = args => {
    const { aspect = "aspect4x3", bsp = "medium" } = args;
    const SOURCES = [
        {
            aspect: aspect,
            query: "(min-width: 415px)",
            size: bsp,
        },
        {
            aspect: "aspect3x4",
            query: "(min-width: 0px) and (max-width: 414px)",
            size: "mobile-large",
        },
    ];
    const IMG = Utils.getSources(Mock.renditions, SOURCES);
    const SRC = {
        desktop: IMG[0],
        mobile: IMG[1],
    };
    return (
        <GalleryItem
            image={SRC}
            domain="https://tvsa-sandbox.github.io/widgets-beta"
            isAmp={false}
            index="1/12"
            uri="https://tvsa-sandbox.github.io/widgets-beta"
        />
    );
};

export const GALLERYITEMSKELETON = () => {
    return <Skeleton />;
};
