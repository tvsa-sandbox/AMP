import styled, { css } from "styled-components";

import {
    StatisticsBoxSpace,
} from "../../items/StatisticsItem/styles";

import {
    StandingBoxHeader,
} from "../Standing/styles";

const RankingTeamBoxHeader = styled(StandingBoxHeader)(
    () => css`
        display: block;
    `,
);

const RankingPlayerBoxSpace = styled(StatisticsBoxSpace)(
    ({ theme }) => css`
       border-bottom: none;
       width: 35%;

       @media (min-width: ${theme.breakpoints.md}) {
            width: 11%;
        }

       @media (min-width: ${theme.breakpoints.xl}) {
            width: 21%;
        }
    `,
);

export {
    RankingPlayerBoxSpace,
    RankingTeamBoxHeader,

};
