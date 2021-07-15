import React from "react";
import Utils from "@televisadigital/nxtv-utilities";
import { Title } from "accessories";

import PosterCard from "../../lib/widgets/PosterCard";
import tags from "../../lib/widgets/PosterCard/tags.json";

import Mock from "./imageMock.json";

export default {
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
    return (
        <div>
            <Title variant="h2">PosterCard</Title>
            <PosterCard ratio={aspect} src={SRC} tagitems={tags} {...args} />
        </div>
    );
};
POSTERCARD.args = {
    showtitle: "El Dragón",
    showdescription:
        "Es ambicioso, pero no en términos de riquezas. Sus metas y sus objetivos están siempre ligados a un desafío consigo mismo. Miguel siempre está redoblando la apuesta, empuja el límite.",
};
POSTERCARD.argTypes = {
    showtitle: { control: "text" },
    showdescription: { control: "text" },
};
