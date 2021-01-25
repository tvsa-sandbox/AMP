import React from "react";
import Utils from "@televisadigital/nxtv-utilities";
import { Title } from "accessories";
import MosaicItem from "../../lib/items/MosaicItem";
import Mock from "./imageMock.json";

export default {
    title: "Desing System/Items/MosaicItem",
};

export const MOSAICITEM = args => {
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
            <Title variant="h2">MosaicItem</Title>
            <MosaicItem ratio={aspect} src={SRC} />
        </div>
    );
};
