import styled, { css } from "styled-components";

import Box from "../../../accessories/Box";
import Text from "../../../accessories/Text";
import Title from "../../../accessories/Title";
import Time from "../../../accessories/Time";
import Info from "../../../accessories/Info";
import Anchor from "../../../accessories/Anchor";

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
        padding: ${theme.space.xl};
        margin-bottom: ${theme.space.zero};
        flex-direction: column;
        height: auto;
        min-height: 40px;

        @media (min-width: ${theme.breakpoints.xl}) {
            flex-direction: row;
            padding: ${theme.space.zero};
            margin-bottom: ${theme.space.zero};
            min-height: 50px;
        }
    `,
);

const BoxContainer = styled(Box)(
    ({ theme }) => css`
        max-width: 1024px;
        margin: 0 ${theme.space.auto};
        @media (min-width: ${theme.breakpoints.xl}) {
            margin-bottom: ${theme.space.xl};
        }
    `,
);

const BoxTitle = styled(Box)(
    ({ theme }) => css`
        display: flex;
        padding: ${theme.space.xl};

        @media (min-width: ${theme.breakpoints.xl}) {
            padding-right: ${theme.space.zero};
            padding-left: ${theme.space.zero};
            padding-top: ${theme.space.xxl};
        }
    `,
);

const BoxAuthor = styled(Box)(
    ({ theme }) => css`
        min-width: 200px;
        width: 100%;
        display: block;
        flex-direction: column;
        min-height: 40px;
        position: relative;
        padding-left: ${theme.space.xl};

        @media (min-width: ${theme.breakpoints.xl}) {
            width: 100%;
            max-width: 414px;
            display: flex;
            padding-left: ${theme.space.zero};
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
        padding-top: ${theme.space.xxl};
        padding-bottom: ${theme.space.xxl};
        padding-left: ${theme.space.lg};
        padding-right: ${theme.space.lg};
        display: flex;
        @media (min-width: ${theme.breakpoints.xl}) {
            display: none;
        }
    `,
);

const AnchorIcon = styled(Anchor)`
    height: 48px;
    align-items: center;
    display: flex;
`;

export {
    PageStyles,
    BoxBodyFull,
    BoxData,
    BoxTitle,
    TitleStyles,
    TimeStyles,
    BoxAuthor,
    AuthorStyles,
    AnchorIcon,
    TextDescription,
    BoxContainer,
    LabelStyles,
};
