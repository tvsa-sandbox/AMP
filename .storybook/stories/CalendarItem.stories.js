import React from "react";
import Utils from "@televisadigital/nxtv-utilities";
import { Title } from "accessories";
import CalendarItem from "../../lib/items/CalendarItem";
import Mock from "./imageMock.json";

export default {
    title: "Desing System/Items/CalendarItem",
};

export const CALENDARITEM = args => {
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
            <Title variant="h2">CalendarItem</Title>
            <CalendarItem ratio={aspect} src={SRC} {...props} />
        </div>
    );
};
