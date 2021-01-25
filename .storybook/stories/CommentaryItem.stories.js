import React from "react";
import Utils from "@televisadigital/nxtv-utilities";
import { Title } from "accessories";

import CommentaryItem from "../../lib/items/CommentaryItem";

import Mock from "./imageMock.json";

export default {
    title: "Desing System/items/CommentaryItem",
    component: CommentaryItem,
};

export const COMMENTARYITEM = args => {
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
            <Title variant="h2">Commentary Item</Title>
            <CommentaryItem ratio={aspect} src={SRC} {...args} />
        </div>
    );
};

COMMENTARYITEM.argTypes = {
    icon: { control: "text" },
    status: { control: "text" },
    title: { control: "text" },
    description: { control: "text" },
};