import styled, { css } from "styled-components";
import { Box, Image, Info, Text, Counter, Button, Icons } from "../../accessories";

const GalleryOpenItemStyles = styled(Box)(
    ({ theme }) => css`
        width: 100%;
        display: block;
        position: relative;
        margin: ${theme.space.xl2} auto;
        min-height: 185px;
        border-bottom: 1px solid #46474e;
        @media (min-width: ${theme.breakpoints.xl}) {
            max-width: 1024px;
            display: grid;
            grid-template-areas: "Body Aside";
            grid-template-columns: minmax(70%, 716px) minmax(30%, 303px);
            gap: 10px 10px;
            border-bottom: none;
        }
    `,
);

const GalleryOpenItemImageContainer = styled(Box)(
    ({ theme }) => css`
        display: flex;
        position: relative;
        height: 100%;
        @media (min-width: ${theme.breakpoints.xxl}) {
            grid-area: Body;
            max-width: 716px;
        }

        &:hover button[aria-label="pinterest"] {
            display: flex;
        }
    `,
);

const GalleryOpenItemButton = styled(Button)(
    ({ theme }) => css`
        display: none;
        position: absolute;
        z-index: 5;
        background: ${theme.colors.pinterest};
        color: ${theme.colors.gray};
        align-items: center;
        height: 20px;
        font-size: ${theme.fontSizes.fxs};
        margin: ${theme.space.xs};
        padding-left: ${theme.space.xs};
        padding-right: ${theme.space.sm};
        border-radius: 3px;
        font-family: ${theme.fonts[2]};
        @media (min-width: ${theme.breakpoints.lg}) {
            border-radius: 9px;
            height: 30px;
            padding-left: ${theme.space.sm};
            padding-right: ${theme.space.sm};
            cursor: pointer;
            margin: ${theme.space.md};
            font-size: ${theme.fontSizes.fsm};
        }
    `,
);

const GalleryOpenItemPinterest = styled(Icons)(
    ({ theme }) => css`
        display: none;
        height: 20px;
        width: 20px;
        @media (min-width: ${theme.breakpoints.xl}) {
            height: 25px;
            width: 25px;
        }
    `,
);

const GalleryOpenItemImage = styled(Image)`
    height: 100%;
`;

const GalleryOpenItemCaption = styled(Box)(
    ({ theme }) => css`
        display: block;
        width: 100%;
        margin: ${theme.space.zero};
        height: auto;
        padding: ${theme.space.xxl} ${theme.space.xl} ${theme.space.xl2};
        color: ${theme.colors.gray2};
        background: ${props => (props.bg ? theme.colors[props.bg] : theme.colors.Secondary)};
        font-family: ${theme.fonts[2]};
        @media (min-width: ${theme.breakpoints.xl}) {
            grid-area: Aside;
            margin: ${theme.space.zero};
            justify-self: center;
            padding: ${theme.space.xl};
            height: 100%;
        }
    `,
);

const GalleryOpenItemCounter = styled(Counter)(
    ({ theme }) =>
        css`
            padding-right: ${theme.space.sm};
            letter-spacing: 2px;
            font-weight: ${theme.fontWeights.bold};
            color: ${theme.colors.gray};
            opacity: 0.9;
            font-family: ${theme.fonts[2]};
        `,
);

const GalleryOpenItemInfo = styled(Info)(
    ({ theme }) => css`
        letter-spacing: 1px;
        line-height: ${theme.lineHeights.lxs};
        font-size: ${theme.fontSizes.fxs};
        width: 100%;
        color: #b3b3b3;
        opacity: 0.9;
        font-family: ${theme.fonts[2]};
        justify-content: flex-end;
        display: flex;
        margin: ${theme.space.zero};

        @media (min-width: ${theme.breakpoints.xl}) {
            justify-content: flex-start;
            margin: ${theme.space.lg} ${theme.space.zero};
        }
    `,
);

const GalleryOpenItemData = styled(Box)(
    ({ theme }) => css`
        display: flex;
        position: relative;
        width: 100%;
        @media (min-width: ${theme.breakpoints.xl}) {
            display: inline-block;
        }
    `,
);

const GalleryOpenItemDescription = styled(Text)(
    ({ theme }) => css`
        letter-spacing: 1px;
        line-height: 22px;
        font-size: ${theme.fontSizes.fmd};
        font-weight: ${theme.fontWeights.normal};
        width: 100%;
        margin-top: ${theme.space.xl};
        max-height: 200px;
        overflow: hidden;
        color: ${theme.colors.gray};
        @media (min-width: ${theme.breakpoints.xl}) {
            max-height: 330px;
            width: 85%;
        }
    `,
);

const SkeletonStyleImage = styled.div(
    ({ theme }) => css`
        width: 100%;
        @media (min-width: ${theme.breakpoints.xl}) {
            grid-area: Body;
            max-width: 716px;
        }
    `,
);

const SkeletonStyleAside = styled.div(
    ({ theme }) => css`
        background: ${theme.colors.Secondary};
        height: 200px;
        @media (min-width: ${theme.breakpoints.xl}) {
            grid-area: Aside;
            height: 100%;
        }
    `,
);

export {
    GalleryOpenItemStyles,
    GalleryOpenItemImageContainer,
    GalleryOpenItemImage,
    GalleryOpenItemCaption,
    GalleryOpenItemCounter,
    GalleryOpenItemInfo,
    GalleryOpenItemDescription,
    GalleryOpenItemButton,
    GalleryOpenItemPinterest,
    SkeletonStyleImage,
    SkeletonStyleAside,
    GalleryOpenItemData,
};
