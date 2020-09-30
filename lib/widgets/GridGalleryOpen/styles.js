import styled, { css } from "styled-components";

import Icons from "../../accessories/Icons";
import Box from "../../accessories/Box";
import Text from "../../accessories/Text";
import Title from "../../accessories/Title";
import Time from "../../accessories/Time";
import Info from "../../accessories/Info";
import Anchor from "../../accessories/Anchor";
import Ads from "../../accessories/Ads";

const PageStyles = styled.section(
    ({ theme }) => css`
        min-height: 185px;
        display: ${props => (props.active ? "grid" : "none")};
        grid-area: main;
        grid-template-areas:
            "Lead Aside"
            "Body Aside"
            "BodyFull BodyFull";
        grid-template-columns: 70% 30%;
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        margin: ${theme.space.auto};
        background: #1d1d27;
        overflow: scroll;
        z-index: 10;
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
        padding-left: ${theme.space.xl2};
        padding-right: ${theme.space.xl2};
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
        position: relative;
        padding-left: ${theme.space.xl2};
        margin-bottom: ${theme.space.xl};
        @media (min-width: ${theme.breakpoints.xl}) {
            margin: ${theme.space.lg} ${theme.space.auto};
            width: 593px;
            display: flex;
            padding-left: ${theme.space.zero};
        }
    `,
);

const BoxClose = styled(Box)(
    ({ theme }) => css`
        display: flex;
        justify-content: flex-end;
        height: 48px;
        margin: ${theme.space.base} ${theme.space.zero};
        padding: ${theme.space.zero} ${theme.space.base};
        width: 100%;
        position: fixed;
        top: 5px;
        z-index: 10;

        @media (min-width: ${theme.breakpoints.xl}) {
            width: 90%;
        }
    `,
);

const IconClose = styled(Icons)(
    ({ theme }) => css`
        width: 30px;
        height: 30px;
        fill: ${theme.colors.gray4};
        @media (min-width: ${theme.breakpoints.xl}) {
            width: 35px;
            height: 35px;
        }
    `,
);

const TitleStyles = styled(Title)(
    ({ theme }) => css`
        font-family: ${theme.fonts[1]};
        font-size: ${theme.fontSizes.fxxl};
        line-height: ${theme.fontSizes.lxxl};
        font-weight: ${theme.fontWeights.bold};
        color: ${theme.colors.gray};
        width: 100%;
        @media (min-width: ${theme.breakpoints.xl}) {
            min-height: 0px;
            font-size: ${theme.fontSizes.fxl3};
            line-height: 48px;
            margin: ${theme.space.lg} ${theme.space.auto};
            width: 593px;
        }
    `,
);

const AuthorStyles = styled(Info)(
    ({ theme }) => css`
        width: 100%;
        margin: ${theme.space.base};
        margin-top: ${theme.space.zero};
        margin-left: ${theme.space.zero};
        color: #b3b3b3;
        font-family: ${theme.fonts[1]};
        font-size: ${theme.fontSizes.fxs};
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
        color: ${props => (props.color ? theme.colors[props.color] : theme.colors.gray)};
        font-family: ${theme.fonts[1]};
        font-size: ${theme.fontSizes.fxs};
    `,
);

const TextDescription = styled(Text)(
    ({ theme }) => css`
        font-size: ${theme.fontSizes.fbase};
        line-height: ${theme.lineHeights.lxl};
        font-family: ${theme.fonts[1]};
        width: 100%;
        color: #b3b3b3;

        @media (min-width: ${theme.breakpoints.xl}) {
            min-height: 0px;
            font-size: ${theme.lineHeights.llg};
            line-height: ${theme.lineHeights.lxxl};
            margin-bottom: ${theme.space.xl};
            margin: ${theme.space.lg} ${theme.space.auto};
            width: 593px;
        }
    `,
);

const AnchorIcon = styled(Anchor)(
    ({ theme }) => css`
        height: 48px;
        align-items: center;
        display: flex;
        background: rgba(85, 85, 85, 0.57);
        border-radius: 50%;
        width: 48px;
        justify-content: center;
    `,
);

const AdsImageStyles = styled.img(
    ({ theme }) => css`
        display: flex;
        width: 80%;
        margin: ${theme.space.xl} auto;
        @media (min-width: ${theme.breakpoints.xl}) {
            width: 50%;
            height: 50px;
        }
    `,
);

const AdsOpenStyles = styled(Ads)(
    ({ theme }) => css`
        border: solid 1px #8582822e;

        @media (min-width: ${theme.breakpoints.xl}) {
            border: none;
        }
    `,
);

export {
    PageStyles,
    BoxBodyFull,
    BoxData,
    BoxTitle,
    BoxClose,
    TitleStyles,
    TimeStyles,
    BoxAuthor,
    AuthorStyles,
    AnchorIcon,
    TextDescription,
    BoxContainer,
    AdsImageStyles,
    AdsOpenStyles,
    IconClose,
};
