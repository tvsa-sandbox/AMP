import React from "react";
import Utils from "@televisadigital/nxtv-utilities";
import { Title } from "accessories";
import HighImpact from "../../lib/widgets/HighImpact";
import highimpact from "../../lib/widgets/HighImpact/highimpact.json";
import news from "../../lib/widgets/HighImpact/news.json";
import Mock from "./imageMock.json";

export default {
    title: "Desing System/TUDN/HighImpact",
    component: HighImpact,
};

export const HIGHIMPACT = args => {
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
            <Title variant="h2">HighImpact</Title>
            <HighImpact ratio={aspect} src={SRC} datas={highimpact} news={news} />
        </div>
    );
};
