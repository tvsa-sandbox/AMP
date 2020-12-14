import React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";
import Utils from "@televisadigital/nxtv-utilities";
import { Title } from "accessories";

import MatchItem from "../../lib/items/MatchItem";

import Mock from "./imageMock.json";

export default {
    decorators: [withKnobs],
    title: "Desing System/Items/MatchItem",
};

export const MATCHITEM = args => {
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
            size: "mobile-large",
        },
    ];

    const IMG = Utils.getSources(Mock.renditions, SOURCES);
    const SRC = {
        desktop: {},
        mobile: IMG[0],
    };
    const team1 = text("Team A", "América");
    const team2 = text("Team B", "Guadalajara");
    const time = text("Time", "19:00");
    return (
        <div>
            <Title variant="h2">MatchItem</Title>
            <MatchItem src={SRC} team1={team1} team2={team2} time={time} />
        </div>
    );
};
