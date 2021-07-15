import React from "react";
import Utils from "@televisadigital/nxtv-utilities";
import { Title } from "accessories";
import HighImpactItem from "../../lib/items/HighImpactItem";
import highimpactitem from "../../lib/items/HighImpactItem/highimpactitem.json";
import Mock from "./imageMock.json";

export default {
    title: "Desing System/items/HighImpactItem",
    component: HighImpactItem,
};

export const HIGHIMPACTITEM = args => {
    const { aspect = "aspect16x9", bsp = "mobile-large" } = args;
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
            <Title variant="h2">HighImpactItem</Title>
            <HighImpactItem ratio={aspect} src={SRC} datas={highimpactitem}  />
        </div>
    );
};
