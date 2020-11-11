import React, { Fragment } from "react";
import { withKnobs, text } from "@storybook/addon-knobs";
import Utils from "@televisadigital/nxtv-utilities";
import { Title, Box } from "accessories";
import { LeagueCarousel } from "widgets";

export default {
    decorators: [withKnobs],
    title: "Desing System/Widgets/LeagueCarousel",
};
import Mock from "./imageMock.json";

export const LEAGUECAROUSEL = args => {
    const { aspect = "aspect16x9", bsp = "medium" } = args;
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
            <Title variant="h2">LeagueCarousel</Title>
            <Box my="lg" variant="Transparent">
                <LeagueCarousel />
            </Box>
        </div>
    );
};
