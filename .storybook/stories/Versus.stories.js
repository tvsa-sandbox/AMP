import React from "react";
import Utils from "@televisadigital/nxtv-utilities";
import { Title } from "accessories";

import Versus from "../../lib/widgets/Versus";
import versus from "../../lib/widgets/Versus/versus.json";
import versusnumber from "../../lib/widgets/Versus/versusnumber.json";

import Mock from "./imageMock.json";

export default {
    title: "Desing System/TUDN/Versus",
    component: Versus,
};

export const VERSUS = args => {
    const { aspect = "aspect1x1", bsp = "thumbnail" } = args;
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
            <Title variant="h2">Versus</Title>
            <Versus ratio={aspect} src={SRC} sections={versus} numbers={versusnumber} />
        </div>
    );
};
