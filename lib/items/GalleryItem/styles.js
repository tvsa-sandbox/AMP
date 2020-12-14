import styled, { css } from "styled-components";
import Box from "../../accessories/Box";
import Image from "../../accessories/Image";
import Info from "../../accessories/Info";
import Text from "../../accessories/Text";
import Counter from "../../accessories/Counter";
import Button from "../../accessories/Button";
import Icons from "../../accessories/Icons";

const GalleryItemStyles = styled(Box)(
    ({ theme }) => css`
        width: 100%;
        display: block;
        position: relative;
        background: ${props => (props.bg ? theme.colors[props.bg] : null)};
        margin: ${props => (props.m ? `${props.m} auto` : `${theme.space.md} auto`)};
        min-height: 185px;
        @media (min-width: ${theme.breakpoints.xl}) {
            max-width: 1024px;
            display: grid;
            grid-template-areas: "Body Aside";
            grid-template-columns: minmax(70%, 716px) minmax(30%, 303px);
            gap: 10px 10px;
        }
    `,
);

const GalleryItemImageContainer = styled(Box)(
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

const GalleryItemButton = styled(Button)(
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

const GalleryItemPinterest = styled(Icons)(
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

const GalleryItemImage = styled(Image)`
    height: 100%;
`;

const GalleryItemCaption = styled(Box)(
    ({ theme }) => css`
        display: block;
        width: 100%;
        margin: ${theme.space.zero};
        background: ${props => (props.bg ? theme.colors[props.bg] : theme.colors.Secondary)};
        height: auto;
        padding: ${theme.space.xxl} ${theme.space.xl} ${theme.space.xl2};
        color: ${theme.colors.gray2};
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

const GalleryItemCounter = styled(Counter)(
    ({ theme }) =>
        css`
            padding-right: ${theme.space.sm};
            letter-spacing: 2px;
            font-weight: ${theme.fontWeights.bold};
            color: ${props => (props.color ? theme.colors[props.color] : theme.colors.gray)};
            opacity: 0.9;
            font-family: ${theme.fonts[2]};
        `,
);

const GalleryItemInfo = styled(Info)(
    ({ theme }) => css`
        letter-spacing: 1px;
        line-height: ${theme.lineHeights.lxs};
        font-size: ${theme.fontSizes.fxs};
        width: 100%;
        color: ${props => (props.color ? theme.colors[props.color] : theme.colors.gray)};
        opacity: 0.9;
        font-family: ${theme.fonts[2]};
    `,
);

const GalleryItemData = styled(Box)(
    ({ theme }) => css`
        display: contents;
        position: relative;
        @media (min-width: ${theme.breakpoints.xl}) {
            display: inline-block;
        }
    `,
);

const GalleryItemDescription = styled(Text)(
    ({ theme }) => css`
        letter-spacing: 1px;
        line-height: 22px;
        font-size: ${theme.fontSizes.fmd};
        font-weight: ${theme.fontWeights.normal};
        width: 100%;
        margin-top: ${theme.space.xl};
        max-height: 200px;
        overflow: hidden;
        color: ${props => (props.color ? theme.colors[props.color] : theme.colors.gray)};
        @media (min-width: ${theme.breakpoints.xl}) {
            max-height: 330px;
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
    GalleryItemStyles,
    GalleryItemImageContainer,
    GalleryItemImage,
    GalleryItemCaption,
    GalleryItemCounter,
    GalleryItemInfo,
    GalleryItemDescription,
    GalleryItemButton,
    GalleryItemPinterest,
    SkeletonStyleImage,
    SkeletonStyleAside,
    GalleryItemData,
};
