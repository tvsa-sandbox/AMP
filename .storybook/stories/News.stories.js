import React from "react";
import Utils from "@televisadigital/nxtv-utilities";
import { Title } from "accessories";
import News from "../../lib/widgets/News";
import Mock from "./imageMock.json";
import news from "../../lib/widgets/News/news.json";

export default {
    title: "Desing System/TUDN/News",
    component: News,
};

export const NEWS = args => {
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

    return (
        <div>
            <Title variant="h2">News</Title>
            <News ratio={aspect} src={SRC} datas={news} />
        </div>
    );
};
