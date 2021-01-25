import React from "react";
import { TeamProfile } from "widgets";
import { Title } from "accessories";
import Utils from "@televisadigital/nxtv-utilities";

import Mock from "./imageMock.json";
import teamProfile from "../../lib/widgets/TeamProfile/teamProfile.json";


export default {
    title: "Desing System/TUDN/TeamProfile",
    component: TeamProfile,
};

export const TEAMPROFILE = args => {
    const { aspect = "aspect1x1", bsp = "thumbnail" } = args;
    const SOURCES = [
        {
            aspect,
            query: "(min-width: 415px)",
            size: "medium",
        },
        {
            aspect: "aspect1x1",
            query: "(min-width: 0px) and (max-width: 414px)",
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
            <Title variant="h2">TeamProfile</Title>
            <TeamProfile src={SRC} ratio={aspect} teams={teamProfile} />
        </div>
    );
};
