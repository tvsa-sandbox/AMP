import React from "react";
import Utils from "@televisadigital/nxtv-utilities";
import { Title } from "accessories";

import ShowCard from "../../lib/widgets/ShowCard";

import Mock from "./imageMock.json";

export default {
    title: "Desing System/Widgets/ShowCard",
};

export const SHOWCARD = args => {
    const { aspect = "aspect3x4", bsp = "medium" } = args;
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
            <Title variant="h2">ShowCard</Title>
            <ShowCard ratio={aspect} src={SRC} />
        </div>
    );
};
