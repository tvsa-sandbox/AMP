import styled, { css } from "styled-components";

import Box from "../../../accessories/Box";
import Text from "../../../accessories/Text";
import Title from "../../../accessories/Title";
import Time from "../../../accessories/Time";
import Info from "../../../accessories/Info";
import Anchor from "../../../accessories/Anchor";
import Image from "../../../accessories/Image";

const PageStyles = styled.section(
    ({ theme }) => css`
        min-height: 185px;
        display: grid;
        grid-area: main;
        grid-template-areas:
            "Lead Aside"
            "Body Aside"
            "BodyFull BodyFull";
        grid-template-columns: 70% 30%;
        position: relative;
        max-width: 1081px;
        margin: ${theme.space.auto};
    `,
);

const BoxBodyFull = styled.section`
    grid-area: BodyFull;
`;

const BoxData = styled(Box)(
    ({ theme }) => css`
        display: flex;
        padding: ${theme.space.base} ${theme.space.xl2};
        margin-bottom: ${theme.space.zero};
        flex-direction: column;
        height: auto;
        max-width: 650px;
        @media (min-width: ${theme.breakpoints.xl}) {
            flex-direction: row;
            padding: ${theme.space.zero};
            margin-bottom: ${theme.space.zero};
            min-height: 50px;
            margin-left: auto;
            margin-right: auto;
        }
    `,
);

const BoxContainer = styled(Box)(
    ({ theme }) => css`
        max-width: 1024px;
        margin: 0 ${theme.space.auto};
        @media (min-width: ${theme.breakpoints.xl}) {
            margin-bottom: ${theme.space.xl};
            max-width: 650px;
        }
    `,
);
const BoxShare = styled(Box)(
    ({ theme }) => css`
        max-width: 650px;
        margin: 0 ${theme.space.auto};
        @media (min-width: ${theme.breakpoints.xl}) {
            margin-bottom: ${theme.space.xl};
            margin-left: ${theme.space.auto};
            margin-right: ${theme.space.auto};
            max-width: 650px;
        }
    `,
);

const BoxTitle = styled(Box)(
    ({ theme }) => css`
        display: flex;
        padding-left: ${theme.space.xl2};
        padding-right: ${theme.space.xl2};
        @media (min-width: ${theme.breakpoints.xl}) {
            padding-right: ${theme.space.zero};
            padding-left: ${theme.space.zero};
            margin-bottom: ${theme.space.xxl};
            margin-left: auto;
            margin-right: auto;
        }
    `,
);

const BoxAuthor = styled(Box)(
    ({ theme }) => css`
        min-width: 200px;
        width: 100%;
        display: block;
        position: relative;
        padding-left: ${theme.space.xl2};
        min-height: 40px;
        @media (min-width: ${theme.breakpoints.xl}) {
            display: flex;
            max-width: 650px;
            padding-left: ${theme.space.zero};
            margin-left: auto;
            margin-right: auto;
        }
    `,
);

const BoxTime = styled(Box)(
    ({ theme }) => css`
        min-width: 200px;
        width: 100%;
        display: block;
        position: relative;
        padding-left: ${theme.space.xl2};
        min-height: 40px;
        @media (min-width: ${theme.breakpoints.xl}) {
            display: flex;
            max-width: 650px;
            padding-left: ${theme.space.zero};
            margin-left: auto;
            margin-right: auto;
            text-align: right;
        }
    `,
);

const BoxLabel = styled(Box)(
    ({ theme }) => css`
        min-width: 200px;
        width: 100%;
        display: block;
        position: relative;
        margin-bottom: ${theme.space.xl};
        @media (min-width: ${theme.breakpoints.xl}) {
            display: flex;
            padding-left: ${theme.space.zero};
            margin-bottom: ${theme.space.base};
        }
    `,
);

const TitleStyles = styled(Title)(
    ({ theme }) => css`
        font-family: ${theme.fonts[2]};
        font-size: 34px;
        line-height: 40px;
        min-height: 80px;
        @media (min-width: ${theme.breakpoints.xl}) {
            min-height: 0px;
            font-size: ${theme.fontSizes.fxl3};
            line-height: 48px;
        }
    `,
);

const AuthorStyles = styled(Info)(
    ({ theme }) => css`
        width: 100%;
        margin: ${theme.space.base};
        margin-top: ${theme.space.zero};
        margin-left: ${theme.space.zero};
        color: ${props => (props.color ? theme.colors[props.color] : theme.colors.Dark)};
        font-family: ${theme.fonts[2]};
        font-size: ${theme.fontSizes.fsm};

        @media (min-width: ${theme.breakpoints.xl}) {
            margin: ${theme.space.auto};
            margin-bottom: ${theme.space.xs};
            margin-top: ${theme.space.zero};
        }
    `,
);

const TimeStyles = styled(Time)(
    ({ theme }) => css`
        width: 100%;
        color: ${props => (props.color ? theme.colors[props.color] : theme.colors.Dark)};
        font-family: ${theme.fonts[2]};
        font-size: ${theme.fontSizes.fxs};
    `,
);

const TextDescription = styled(Text)(
    ({ theme }) => css`
        font-size: 20px;
        line-height: ${theme.lineHeights.lxl};
        font-family: ${theme.fonts[2]};
        min-height: 70px;
        width: 100%;

        @media (min-width: ${theme.breakpoints.xl}) {
            min-height: 0px;
            font-size: ${theme.lineHeights.llg};
            line-height: ${theme.lineHeights.lxxl};
            margin-bottom: ${theme.space.xl};
        }
    `,
);

const LabelStyles = styled(Anchor)(
    ({ theme }) => css`
        font-family: ${theme.fonts[2]};
        font-size: ${theme.fontSizes.fbase};
        color: ${theme.colors.Interaction};
        padding-bottom: ${theme.space.xl};
        padding-top: ${theme.space.xl2};
        padding-left: ${theme.space.xl2};
        padding-right: ${theme.space.xl2};
        display: flex;
        @media (min-width: ${theme.breakpoints.xl}) {
            padding-left: ${theme.space.zero};
        }
    `,
);

const ArticleText = styled(Text)(
    ({ theme }) => css`
        color: ${theme.colors.Dark};
        padding-left: ${theme.space.xl2};
        padding-right: ${theme.space.xl2};
        margin-bottom: ${theme.space.xxl};
        margin-top: ${theme.space.xxl};
        font-size: ${theme.fontSizes.fmd};
        line-height: ${theme.lineHeights.llg};
        max-width: 650px;

        @media (min-width: ${theme.breakpoints.lg}) {
            margin-left: auto;
            margin-right: auto;
            padding: 0;
            max-width: 650px;
        }
        a {
            color: ${theme.colors.Interaction};
        }
        b {
            font-weight: 700;
        }
    `,
);

const ArticleImage = styled(Image)(
    ({ theme }) => css`
        div {
            margin-bottom: ${theme.space.xl2};
            margin-top: ${theme.space.xl2};
        }
    `,
);

export {
    PageStyles,
    BoxBodyFull,
    BoxData,
    BoxTitle,
    TitleStyles,
    TimeStyles,
    BoxAuthor,
    BoxLabel,
    AuthorStyles,
    TextDescription,
    BoxShare,
    BoxTime,
    BoxContainer,
    LabelStyles,
    ArticleText,
    ArticleImage,
};
