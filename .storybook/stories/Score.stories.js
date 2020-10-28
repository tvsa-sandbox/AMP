import React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";
import Utils from "@televisadigital/nxtv-utilities";
import { Title } from "accessories";

import Score from "../../lib/widgets/Score";

import Mock from "./imageMock.json";

export default {
    decorators: [withKnobs],
    title: "Desing System/Widgets/Score",
};

export const SCORE = args => {
    const { aspect = "aspect1x1", bsp = "medium" } = args;
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
            <Title variant="h2">Score</Title>
            <Score ratio={aspect} src={SRC} {...props} />
        </div>
    );
};
