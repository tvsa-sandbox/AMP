import styled, { css } from "styled-components";
import { Title, Info, Anchor, Box } from "../../accessories";
import { BoxData } from "../../contentTypes/PWA/ArticlePWA/styles";

const GridGalleryBoxStyles = styled(Box)(
    ({ theme }) => css`
        margin: ${theme.space.lg} ${theme.space.zero};
    `,
);

const GridGalleryStyles = styled.div(
    ({ theme }) => css`
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        grid-template-areas:
            "large large large large2 large2 large2"
            "min1 min1 min2 min2 min3 min3";
        grid-template-rows: auto auto;
        grid-gap: 2px;

        @media (min-width: ${theme.breakpoints.lg}) {
            grid-template-columns: repeat(4, 1fr);
            grid-template-areas:
                "large large large2 min1"
                "large large min2 min3";
        }
    `,
);

const GridGalleryAnchorStyles = styled(Anchor)(
    ({ theme }) => css`
        &:hover {
            opacity: 0.8;
        }
        &:first-of-type {
            grid-area: large;
        }
        &:nth-of-type(2) {
            grid-area: large2;
        }
        &:nth-of-type(3) {
            grid-area: min1;
        }
        &:nth-of-type(4) {
            grid-area: min2;
        }

        &:nth-of-type(5) {
            grid-area: min3;
            position: relative;
        }

        &:nth-of-type(5) figcaption {
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;
            position: absolute;
            font-size: ${theme.fontSizes.fmd};
            font-weight: 700;
            width: 100%;
            height: 100%;
            top: 0%;
            background: rgba(0, 0, 0, 0.5);

            @media (min-width: ${theme.breakpoints.lg}) {
                font-size: ${theme.fontSizes.fxl3};
            }
        }
    `,
);

const GridGalleryInfoStyles = styled(Info)(
    ({ theme }) => css`
        align-self: flex-start;
        color: ${props => (props.color ? theme.colors[props.color] : theme.colors.Dark)};
    `,
);

const GridGalleryCaptionStyles = styled("figcaption")`
    display: none;
`;

const GridGalleryTitleStyles = styled(Title)(
    ({ theme }) => css`
        margin: ${theme.space.lg} ${theme.space.zero};
        font-size: ${theme.fontSizes.fmd};
        line-height: ${theme.lineHeights.llg};

        &::after {
            content: "";
            height: 1px;
            width: 60px;
            background: ${theme.colors.Dark};
            display: block;
            margin: ${theme.space.xl2} ${theme.space.auto} ${theme.space.zero};
        }

        @media (min-width: ${theme.breakpoints.lg}) {
            font-size: 17px;
        }
    `,
);
const GridGalleryBoxData = styled(BoxData)(
    ({ theme }) => css`
        max-width: 650px;
        margin: ${theme.space.zero} ${theme.space.auto};

        @media (min-width: ${theme.breakpoints.lg}) {
            flex-direction: column;
            padding: ${theme.space.xl} ${theme.space.zero};
            margin-bottom: ${theme.space.zero};
            max-width: 650px;
        }
    `,
);
export {
    GridGalleryStyles,
    GridGalleryTitleStyles,
    GridGalleryBoxData,
    GridGalleryInfoStyles,
    GridGalleryAnchorStyles,
    GridGalleryCaptionStyles,
    GridGalleryBoxStyles,
};
