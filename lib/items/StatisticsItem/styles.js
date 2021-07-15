import styled, { css } from "styled-components";
import { Box, Text } from "../../accessories";

const StatisticsItemStyles = styled(Box)(
    ({ theme }) => css`
        width: 45%;
        height: 100%;
        padding: ${theme.space.md} ${theme.space.zero};
        display: block;
        background:${theme.colors.Light};
        overflow: hidden;

        @media (min-width: ${theme.breakpoints.md}), (max-width: ${theme.breakpoints.xl}){
            padding: ${theme.space.zero};
            width: 45%;
        }

        @media (min-width: ${theme.breakpoints.xl}) {
            padding: ${theme.space.zero};
            width: 100%;
        }

    `,
);

const StatisticsItemNumber = styled(Text)(
    ({ theme }) => css`
        align-items: center;
        display: flex;
        height: 50px;
        font-size: ${theme.fontSizes.fxs};
        width: 50px;
        justify-content: center;
        color: ${theme.colors.gray3};

        @media (min-width: ${theme.breakpoints.lg}) {
            width: 75px;
        }
    `,
);

const StatisticsBoxSpace = styled(Box)(
    ({ theme }) => css`
       width: 50px;
       min-height:52px;
       border-bottom: 2px solid ${theme.colors.gray};
       padding-bottom: ${theme.space.zero};
        margin-top: ${theme.space.zero};

       @media (min-width: ${theme.breakpoints.lg}) {
        width: 84px;
        padding-bottom: ${theme.space.base};
         margin-top: ${theme.space.base};
        }
    `,
);

const StatisticsItemTopTeam = styled(Text)(
    ({ theme }) => css`
        align-items: center;
        display: flex;
        font-size: ${theme.fontSizes.fxs};
        height: 50px;
        padding: ${theme.space.md};
        width:50px;
        left: 0px;
        z-index: 1;
        text-transform: uppercase;
        color: ${theme.colors.gray3};
        justify-content: center;

        @media (min-width: ${theme.breakpoints.lg}) {
            position: relative;
            font-size: ${theme.fontSizes.fmd};
            width:74px;
            padding: ${theme.space.zero};
        }
    `,
);

const StatisticsItemBoxTop = styled(Box)(
    ({ theme }) => css`
        border-bottom: 2px solid ${theme.colors.Interaction};
        display: flex;
        width: auto;
        height: 82px;
    `,
);

export {
    StatisticsItemStyles,
    StatisticsItemNumber,
    StatisticsBoxSpace,
    StatisticsItemTopTeam,
    StatisticsItemBoxTop,
};
