import React from "react";
import Utils from "@televisadigital/nxtv-utilities";
import { Title } from "accessories";

import Mosaic from "../../lib/widgets/Mosaic";

import Mock from "./imageMock.json";

export default {
    title: "Desing System/Widgets/Mosaic",
};

export const MOSAIC = args => {
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
            <Title variant="h2">Mosaic</Title>
            <Mosaic ratio={aspect} src={SRC} />
        </div>
    );
};
