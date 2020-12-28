import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import Utils from "@televisadigital/nxtv-utilities";
import { Title } from "accessories";
import TickerItem from "../../lib/items/TickerItem";
import Mock from "./imageMock.json";

export default {
    decorators: [withKnobs],
    title: "Desing System/Items/TickerItem",
};

export const TICKERITEM = args => {
    const { aspect = "aspect1x1", bsp = "medium" } = args;
    const SOURCES = [
        {
            aspect: aspect,
            query: "(min-width: 415px)",
            size: bsp,
        },
        {
            aspect: "aspect1x1",
            query: "(min-width: 0px) and (max-width: 414px)",
            size: "medium",
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
            <Title variant="h2">TickerItem</Title>
            <TickerItem ratio={aspect} src={SRC} {...props} />
        </div>
    );
};
