import styled, { css } from "styled-components";
import { Box, Title, Text, Icons, Anchor, Placeholder, Image } from "../../accessories";

const ItemVideoStyles = styled(Box)(
    ({ theme }) => css`
        width: 100%;
        margin: ${theme.space.auto};
        max-width: 1024px;
        margin: ${theme.space.base} ${theme.space.zero};
        @media (min-width: ${theme.breakpoints.lg}) {
            margin: ${theme.space.base};
        }
    `,
);

const CaptionBoxStyles = styled(Box)(
    ({ theme }) => css`
        padding: ${theme.space.lg} ${theme.space.lg} ${theme.space.zero};

        @media (min-width: ${theme.breakpoints.lg}) {
            padding: ${theme.space.zero};
        }
    `,
);
const BoxTimeStyles = styled(Box)(
    ({ theme }) => css`
        display: flex;
        margin: ${theme.space.xl2} ${theme.space.zero} ${theme.space.xl};
    `,
);

const ItemVideoText = styled(Text)(
    ({ theme }) => css`
        font-size: ${theme.fontSizes.fsm};
        margin-right: ${theme.space.lg};
    `,
);

const ItemVideoTitleStyles = styled(Title)(
    ({ theme }) => css`
        margin: ${theme.space.zero} ${theme.space.zero} ${theme.space.base};
        font-size: ${theme.fontSizes.flg};
        line-height: ${theme.lineHeights.lxl};
        font-weight: bold;
        @media (min-width: ${theme.breakpoints.lg}) {
            margin: ${theme.space.xl} ${theme.space.zero};
        }
    `,
);

const ItemVideoTitleStylesAMP = styled(Title)(
    ({ theme }) => css`
        position: relative;
        margin: ${theme.space.base} ${theme.space.lg} ${theme.space.zero};
        font-size: ${theme.fontSizes.fbase};
        line-height: ${theme.lineHeights.lxl};
        font-weight: bold;
        left: 10px;
        @media (min-width: ${theme.breakpoints.lg}) {
            margin: ${theme.space.xl} ${theme.space.zero} ${theme.space.zero};
            left: 10px;
        }

        &::before {
            content: "";
            bottom: 3px;
            height: 20px;
            width: 4px;
            background: ${theme.colors.Interaction};
            display: block;
            position: absolute;
            right: 100%;
            margin-right: ${theme.space.sm};
        }
    `,
);

const DescriptionTextStyles = styled(Text)(
    ({ theme }) => css`
        font-size: ${theme.fontSizes.fbase};
        line-height: ${theme.lineHeights.llg};
        margin: ${theme.space.md} ${theme.space.zero};
    `,
);

const ItemVideoImageBox = styled(Box)(
    ({ theme }) => css`
        max-width: 820px;
        margin: ${theme.space.zero} ${theme.space.auto};
    `,
);

const ItemVideoBoxVideoPlayer = styled(Placeholder)(
    ({ theme }) => css`
        max-width: 820px;
        margin: ${theme.space.zero} ${theme.space.auto};
        display: none; /*quitar en la ui*/
    `,
);

const BoxVideoPlayer = styled(Box)(
    ({ theme }) => css`
        width: 100%;
        max-width: 820px;
        margin: ${theme.space.zero} ${theme.space.auto};
    `,
);

const BoxIconsStyles = styled(Anchor)(
    ({ theme }) => css`
        margin-top: ${theme.space.lg};
        border-radius: 5px;
        background: #191919;
        margin-bottom: ${theme.space.xl2};
        display: flex;
        align-items: center;
        width: 200px;
        height: 60px;

        @media (min-width: ${theme.breakpoints.lg}) {
            margin: ${theme.space.zero} ${theme.space.base};
            display: flex;
        }
    `,
);

const ItemIconAnchor = styled(Anchor)(
    ({ theme }) => css`
        width: 48px;
        height: 48px;
        fill: ${theme.colors.gray};
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;

        &::after {
            content: "";
            height: 70%;
            width: 1px;
            background: ${theme.colors.gray};
            margin-left: ${theme.space.lg};
            display: block;
            position: absolute;
            left: 100%;
            top: 5px;
        }
    `,
);

const ItemIconStyles = styled(Icons)(
    ({ theme }) => css`
        fill: ${theme.colors.gray};
    `,
);

const IconTextStyles = styled.span(
    ({ theme }) => css`
        font-size: ${theme.fontSizes.fsm};
        font-weight: ${theme.fontWeights.bold};
        line-height: ${theme.lineHeights.lbase};
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: ${theme.space.sm};
    `,
);

const BoxSocial = styled(Box)(
    ({ theme }) => css`
        margin-left: ${theme.space.auto};
        min-width: 218px;
    `,
);

const BoxDate = styled(Box)(
    ({ theme }) => css`
        width: auto;
        min-width: 100px;

        @media (min-width: ${theme.breakpoints.lg}) {
            display: inline-flex;
        }
    `,
);

const BoxText = styled(Box)(
    ({ theme }) => css`
        width: 100%;

        @media (min-width: ${theme.breakpoints.lg}) {
            width: 75%;
        }
    `,
);

const BoxC = styled(Box)(
    ({ theme }) => css`
        display: block;
        width: 100%;
        margin-bottom: ${theme.space.xl2};

        @media (min-width: ${theme.breakpoints.lg}) {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
        }
    `,
);

export {
    ItemVideoStyles,
    ItemVideoTitleStyles,
    DescriptionTextStyles,
    CaptionBoxStyles,
    ItemVideoText,
    BoxIconsStyles,
    ItemIconAnchor,
    ItemIconStyles,
    BoxTimeStyles,
    IconTextStyles,
    ItemVideoBoxVideoPlayer,
    BoxSocial,
    BoxText,
    BoxDate,
    BoxC,
    ItemVideoTitleStylesAMP,
    BoxVideoPlayer,
    ItemVideoImageBox,
};
