import React from "react";
import Utils from "@televisadigital/nxtv-utilities";
import { Title } from "accessories";
import Mock from "./imageMock.json";
import TeamItem from "../../lib/items/TeamItem";

export default {
    title: "Desing System/items/TeamItem",
    component: TeamItem,
};

export const TEAMITEM = args => {
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
            <Title variant="h2">Team Item</Title>
            <TeamItem ratio={aspect} src={SRC}  {...args} />
        </div>
    );
};

TEAMITEM.argTypes = {
    Team: { control: "text" },
    Date: { control: "number" },
    Stadium: { control: "text" },
    Capacity: { control: "number" },
    Coach: { control: "text" },
    Position: { control: "number" },
};