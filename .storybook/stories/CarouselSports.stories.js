import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import Utils from "@televisadigital/nxtv-utilities";
import { Title } from "accessories";

import MatchItem from "../../lib/widgets/CarouselSports";

import Mock from "./imageMock.json";
import CarouselSports from "../../lib/widgets/CarouselSports";

export default {
    decorators: [withKnobs],
    title: "Desing System/widgets/CarouselSports",
};

export const CAROSUELSPORTS = args => {
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
        desktop: {},
        mobile: IMG[0],
    };
    const props = () => ({
        title: text("Titulo", "Titulo de test"),
    });
    return (
        <div>
            <Title variant="h2">CarouselSports</Title>
            <CarouselSports ratio={aspect} src={SRC} {...props} />
        </div>
    );
};
