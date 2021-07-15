import React from "react";
import { Title } from "accessories";

import RankingTeam from "../../lib/widgets/RankingTeam";
import rankingSection from "../../lib/widgets/RankingTeam/rankingSection.json";
import rankingTeam from "../../lib/widgets/RankingTeam/rankingTeam.json";


export default {
    title: "Desing System/TUDN/RankingTeam",
    component: RankingTeam,
};

export const RANKINGTEAM = args => {
    return (
        <div>
            <Title variant="h2">RankingTeam</Title>
            <RankingTeam sections={rankingSection} teams={rankingTeam}  {...args} />
        </div>
    );
};
