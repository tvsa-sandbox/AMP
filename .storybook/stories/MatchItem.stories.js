import React from "react";
import Utils from "@televisadigital/nxtv-utilities";
import { Title } from "accessories";

import MatchItem from "../../lib/items/MatchItem";

import Mock from "./imageMock.json";

export default {
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
    return (
        <div>
            <Title variant="h2">MatchItem</Title>
            <MatchItem src={SRC} {...args} />
        </div>
    );
};
MATCHITEM.args = {
    team1: "América",
    team2: "Guadalajara",
    time: "19:00",
};
MATCHITEM.argTypes = {
    team1: { control: "text" },
    team2: { control: "text" },
    time: { control: "text" },
};
