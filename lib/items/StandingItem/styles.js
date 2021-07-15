import styled, { css } from "styled-components";
import { Box, Text } from "../../accessories";

const StandingItemStyles = styled(Box)(
    ({ theme }) => css`
        width: 50%;
        height: 100%;
        padding-left: ${theme.space.md};

        @media (min-width: ${theme.breakpoints.md}), (max-width: ${theme.breakpoints.xl}){
            padding-left: ${theme.space.xl};
            width: 50%;
        }

        @media (min-width: ${theme.breakpoints.xl}) {
            width: 35%;
            padding:${theme.space.zero};
        }
    `,
);

const StandingItemTeam = styled(Box)(
    ({ theme }) => css`
        align-items: center;
        display: flex;
        font-size: ${theme.fontSizes.fxs};
        font-weight: bold;
        min-height: 52px;
        width: 300px;
        left: 0px;
        z-index: 1;
        border-bottom: 2px solid ${theme.colors.gray};
        padding-bottom: ${theme.space.zero};
        margin-top: ${theme.space.zero};

        @media (min-width: ${theme.breakpoints.xl}) {
            position: relative;
            width: 100%;
            padding-bottom: ${theme.space.base};
            margin-top: ${theme.space.base};
        }
    `,
);

const StandingItemName = styled(Text)(
    ({ theme }) => css`
        font-size: ${theme.fontSizes.fxs};  
        padding-left: ${theme.space.md};
        color: ${theme.colors.gray3};
        
    `,
);

const StandingItemLogo = styled(Box)(
    ({ theme }) => css`
        display: flex;
        height: 20px;
        max-width: 20px;
        border-radius: 20px;
        overflow: hidden;

        @media (min-width: ${theme.breakpoints.xl}) {
            height: 40px;
            max-width: 40px;
        }
    `,
);

const StandingItemPosition = styled(Text)(
    ({ theme }) => css`
        align-items: center;
        display: flex;
        height: 50px;
        font-size: ${theme.fontSizes.fxs};
        width: 30px;
        justify-content: center;
        color: ${theme.colors.gray3};
        padding-right: ${theme.space.md};

    `,
);

const StandingItemBoxTop = styled(Box)(
    ({ theme }) => css`
        border-bottom: 2px solid ${theme.colors.Interaction};
        display: flex;
        width: auto;
        height: 82px;
    `,
);

const StandingItemTopTeam = styled(Text)(
    ({ theme }) => css`
        align-items: center;
        display: flex;
        font-size: ${theme.fontSizes.fxs};
        font-weight: bold;
        height: 50px;
        padding: ${theme.space.md};
        width: auto;
        left: 0px;
        z-index: 1;
        background: ${theme.colors.Light};
        text-transform: uppercase;
        min-width: 160px;

        @media (min-width: ${theme.breakpoints.lg}) {
            position: relative;
            font-size: ${theme.fontSizes.fmd};
            width: 450px;
        }
    `,
);

export {
    StandingItemStyles,
    StandingItemTeam,
    StandingItemLogo,
    StandingItemName,
    StandingItemPosition,
    StandingItemTopTeam,
    StandingItemBoxTop,
};
