import styled, { css } from "styled-components";
import { Box, Title, Text, Time, Anchor} from "accessories";

const HighImpactItemStyles = styled(Anchor)(
    ({ theme }) => css`
        display: block;
        height: auto;
        width: 100%;
        margin-bottom: ${theme.space.zero};
        grid-area: hero;
        align-items: flex-start;

        @media (min-width: ${theme.breakpoints.xxl}) {
            margin-bottom: ${theme.space.lg};
            width: 796px;
        }
    `,
);

const HighImpactItemBox = styled(Box)(
    ({ theme }) => css`
        max-width: 100%;
        margin: ${theme.space.auto};
        align-items: inherit;
    `,
);

const HighImpactItemImageContent = styled(Box)(
    ({theme}) => css`
        margin: auto;
        width: 100%;
        border-radius: 10px 10px 0px 0px;
        overflow: hidden;
        height: auto;

        @media (min-width: ${theme.breakpoints.xxl}){
            height: 321px;
        }

        @media (min-width: ${theme.breakpoints.xxl}) {
            border-radius: 10px;
            height: 439px;
        }
    `,
);

const HighImpactItemCaption = styled(Box)(
    ({ theme }) => css`
        max-height: 190px;
        overflow: hidden;
        padding: ${theme.space.zero} ${theme.space.lg};
        
        &::after {
            content: "";
            height: 1px;
            width: 100%;
            background: ${theme.colors.gray2};
            display: block;
        }

        @media (min-width: ${theme.breakpoints.xl}) {
            max-height: 206px;
            padding: ${theme.space.zero} ${theme.space.xl2};

            &::after {
            background: none;
        }
        }
    `,
);

const HighImpactItemTimeBox = styled(Box)(
    ({ theme }) => css`
        margin: ${theme.space.zero} ${theme.space.auto};
        position: absolute;
        bottom: 0;
        width: auto;
        justify-content: center;
        height: 20px;
        align-items: center;
        z-index: 2;
        right: 0px;
        background: rgba(0, 0, 0, 0.5);
        min-height: 25px;
        display: flex;
        border-radius: 5px 0px 0px 0px;
    `,
);

const HighImpactItemLiveBox = styled(HighImpactItemTimeBox)(
    () => css`
        background: rgba(167, 10,11, 0.8);
    `,
);

const HighImpactItemTimeStyles = styled(Time)(
    ({ theme }) => css`
        font-size: ${theme.fontSizes.fxs};
        font-weight: bold;
        color: ${theme.colors.Light};
        padding: ${theme.space.sm};

        @media (min-width: ${theme.breakpoints.md}) {
            font-size: ${theme.fontSizes.fbase};
            padding: ${theme.space.base};
        }
    `,
);

const HighImpactItemLabelStyles = styled(Text)(
    ({ theme }) => css`
        font-size: ${theme.fontSizes.fxs};
        width: 80px;
        color: ${theme.colors.Interaction};
        margin: ${theme.space.base} ${theme.space.zero};
        text-transform: uppercase;
        font-weight: bold;

        @media (min-width: ${theme.breakpoints.md}) {
            font-size: ${theme.fontSizes.fsm};
            margin: ${theme.space.lg} ${theme.space.zero};
        }
    `,
);

const HighImpactItemTitleStyles = styled(Title)(
    ({ theme }) => css`
        color: ${theme.colors.Dark};
        font-size: ${theme.fontSizes.fmd};
        line-height: ${theme.lineHeights.lmd};

        @media (min-width: ${theme.breakpoints.md}) {
            font-size: ${theme.fontSizes.fxxl};
            line-height: ${theme.lineHeights.lxxl};
        }
    `,
);

const HighImpactItemTextStyles = styled(Text)(
    ({ theme }) => css`
        font-size: ${theme.fontSizes.fsm};
        line-height: ${theme.lineHeights.lmd};
        color: ${theme.colors.Dark};
        width: 100%;
        height: auto;
        margin: ${theme.space.base} ${theme.space.zero};

        @media (min-width: ${theme.breakpoints.md}) {
            font-size: ${theme.fontSizes.fxl};
            line-height: ${theme.lineHeights.lxl};
            letter-spacing: 1px;
        }
    `,
);

export {
    HighImpactItemBox,
    HighImpactItemStyles,
    HighImpactItemTimeStyles,
    HighImpactItemLabelStyles,
    HighImpactItemTitleStyles,
    HighImpactItemTextStyles,
    HighImpactItemImageContent,
    HighImpactItemCaption,
    HighImpactItemTimeBox,
    HighImpactItemLiveBox,
};
