import styled, { css } from "styled-components";
import { Box, Button, Text, Title } from "../../accessories";
import {
    StandingItemName,
    StandingItemPosition,
    StandingItemTeam,
} from "../../items/StandingItem/styles";

import {
    StatisticsItemNumber,
    StatisticsBoxSpace,
} from "../../items/StatisticsItem/styles";

import {
    StandingHeaderTitle,
    StandingHeaderSwitch,
    StandingBoxData,
} from "../Standing/styles";

const RankingPlayerHeaderTitle = styled(StandingHeaderTitle)(
    ({ theme }) => css`
        height: auto;

        @media (min-width: ${theme.breakpoints.xl}) {
            font-size: ${theme.fontSizes.fbase};
            margin: ${theme.space.xs} ${theme.space.xl3};
        }
    `,
);

const RankingPlayerHeaderSwitch = styled(StandingHeaderSwitch)(
    ({ theme }) => css`
        height: auto;
        margin: ${theme.space.zero};
    `,
);

const RankingPlayerBoxData = styled(StandingBoxData)(
    ({ theme }) => css`
       justify-content: flex-end;
       border-bottom: 2px solid ${theme.colors.gray2};
       padding: ${theme.space.zero} ${theme.space.md};

       @media (min-width: ${theme.breakpoints.xl}) {
        width: 84%;
        }
    `,
);

const RankingPlayerBoxContent = styled(RankingPlayerBoxData)(
    ({ theme }) => css`
       padding: ${theme.space.md};
    `,
);

const RankingPlayerTopCaption = styled(Text)(
    ({ theme }) => css`
        align-items: center;
        display: flex;
        font-size: ${theme.fontSizes.fxs};
        height: 50px;
        justify-content: center;
        width: 50px;

        @media (min-width: ${theme.breakpoints.xl}) {
            width: 80px;
        }
    `,
);

const RankingPlayerBox = styled(Box)(
    ({ theme }) => css`
        border-bottom: 2px solid ${theme.colors.Interaction};
        display: flex;
        width: auto;
        justify-content: center;
        margin: ${theme.space.zero} ${theme.space.md};

    `,
);

const RankingPlayerPoints = styled(Box)(
    () => css`
        justify-content:  flex-end;
    `,
);

const RankingPlayerItemName = styled(StandingItemName)(
    ({ theme }) => css`
       font-size: ${theme.fontSizes.fxs};

       @media (min-width: ${theme.breakpoints.xl}) {
        font-size: ${theme.fontSizes.fbase};
        }
    `,
);

const RankingPlayerItemNumber = styled(StandingItemPosition)(
    ({ theme }) => css`
       font-size: ${theme.fontSizes.fsm};

       @media (min-width: ${theme.breakpoints.xl}) {
        font-size: ${theme.fontSizes.fbase};
        }
    `,
);

const RankingPlayerItemTeam = styled(RankingPlayerItemName)(
    ({ theme }) => css`
       font-size: ${theme.fontSizes.fxs};
       color:${theme.colors.Secondary};
       margin-top: ${theme.space.sm};
    `,
);

const RankingPlayerItemData = styled(StatisticsItemNumber)(
    ({ theme }) => css`
       font-size: ${theme.fontSizes.fxs};

       @media (min-width: ${theme.breakpoints.xl}) {
        font-size: ${theme.fontSizes.fmd};
        }
    `,
);

const RankingPlayerContainer = styled(StandingItemTeam)(
    () => css`
       border-bottom: none;
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
    RankingPlayerHeaderTitle,
    RankingPlayerHeaderSwitch,
    RankingPlayerTopCaption,
    RankingPlayerBoxData,
    RankingPlayerBox,
    RankingPlayerPoints,
    RankingPlayerItemName,
    RankingPlayerItemNumber,
    RankingPlayerItemTeam,
    RankingPlayerItemData,
    RankingPlayerBoxSpace,
    RankingPlayerBoxContent,
    RankingPlayerContainer,
};
