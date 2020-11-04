import React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";
import Utils from "@televisadigital/nxtv-utilities";
import { Title } from "accessories";

import PosterCard from "../../lib/widgets/PosterCard";

import Mock from "./imageMock.json";

export default {
    decorators: [withKnobs],
    title: "Desing System/Widgets/PosterCard",
};

export const POSTERCARD = args => {
    const { aspect = "aspectpanoramic", bsp = "medium" } = args;
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
            <Title variant="h2">PosterCard</Title>
            <PosterCard ratio={aspect} src={SRC} {...props} />
        </div>
    );
};
