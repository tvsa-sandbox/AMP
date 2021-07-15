import React from "react";
import { Title } from "accessories";

import RankingPlayer from "../../lib/widgets/RankingPlayer";
import rankingTitle from "../../lib/widgets/RankingPlayer/rankingTitle.json"
import rankingPlayer from "../../lib/widgets/RankingPlayer/rankingPlayer.json"



export default {
    title: "Desing System/TUDN/RankingPlayer",
    component: RankingPlayer,
};

export const RANKINGPLAYER = args => {
    return (
        <div>
            <Title variant="h2">RankingPlayer</Title>
            <RankingPlayer sections={rankingTitle} players={rankingPlayer}  {...args} />
        </div>
    );
};
