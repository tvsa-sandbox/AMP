import React from "react";
import Grid from "../../lib/grid";
import heroMockup from "../mockups/hero";
import multiCardMockup from "../mockups/multiCard";
import newsMockup from "../mockups/news";
import promotionalMockup from "../mockups/promotional";

const WIDGETS = [
    {
        mock: heroMockup,
        name: "Hero",
        size: 14,
        widget: Hero,
    },
    {
        mock: newsMockup,
        name: "News",
        size: 4,
        widget: News,
    },
    {
        mock: multiCardMockup,
        name: "Multi",
        size: 4,
        widget: MultiCard,
    },
    {
        mock: multiCardMockup,
        name: "Multi",
        size: 4,
        widget: MultiCard,
    },
    {
        mock: promotionalMockup,
        name: "Promotional",
        size: 8,
        widget: Promotional,
    },
    {
        mock: multiCardMockup,
        name: "Multi",
        size: 4,
        widget: MultiCard,
    },
    {
        mock: heroMockup,
        name: "Hero",
        size: 14,
        widget: Hero,
    },
];

export default {
    title: "Grid",
};

export const GRID = () => <Grid widgets={WIDGETS} />;
