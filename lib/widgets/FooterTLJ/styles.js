import styled, { css } from "styled-components";
import { Anchor, Text, Icons, Box } from "../../accessories";

const FooterTLJStyles = styled.footer(
    ({ theme }) => css`
        background: ${theme.colors.darkfooter};
        display: block;
        height: 310px;
        position: relative;
        width: 100%;

        @media (min-width: ${theme.breakpoints.xl}) {
            display: flex;
            height: 110px;
        }
    `,
);

const CopyRightTljStyles = styled(Box)(
    ({ theme }) => css`
        color: ${theme.colors.Light};
        font-size: ${theme.fontSizes.fxs};
        width: 100%;
        display: block;
        text-align: center;

        @media (min-width: ${theme.breakpoints.xl}) {
            display: flex;
            width: auto;
            height: 110px;
            position: relative;
            text-align: right;
        }
    `,
);

const IconBoxStyles = styled(Box)(
    ({ theme }) => css`
        color: ${theme.colors.Light};
        height: 100px;
        margin: ${theme.space.auto};
        width: 120px;
        display: block;
        text-align: center;
        @media (min-width: ${theme.breakpoints.xl}) {
            margin-right: ${theme.space.base};
        }
    `,
);

const BoxTextTljStyles = styled(Box)(
    ({ theme }) => css`
        color: ${theme.colors.Light};
        padding: ${theme.space.xs};
        display: block;
        text-align: center;
    `,
);

const TextTljStyles = styled(Text)(
    ({ theme }) => css`
        color: ${theme.colors.Interaction};
        font-size: ${theme.fontSizes.fsm};
        margin-top: ${theme.space.sm};
        width: 100%;
        display: block;
        text-align: center;
        @media (min-width: ${theme.breakpoints.xl}) {
            font-size: ${theme.fontSizes.fsm};
            text-align: left;
        }
    `,
);

const SectionStyles = styled(Box)(
    ({ theme }) => css`
        background: ${theme.colors.darkfooter};
        display: block;
        @media (min-width: ${theme.breakpoints.xl}) {
            padding: ${theme.space.xl};
        }
    `,
);

const AboutBoxStyles = styled(Box)(
    ({ theme }) => css`
        display: block;
        top: 20px;
        @media (min-width: ${theme.breakpoints.xl}) {
            display: flex;
        }
    `,
);

const AboutStyles = styled(Anchor)(
    ({ theme }) => css`
        color: ${theme.colors.gray};
        font-size: ${theme.fontSizes.fsm};
        margin-top: ${theme.space.base};
        margin-bottom: ${theme.space.base};
        width: 100%;
        display: block;
        text-align: center;
        @media (min-width: ${theme.breakpoints.xl}) {
            margin-top: ${theme.space.xs};
            margin-bottom: ${theme.space.sm};
        }
    `,
);

export {
    FooterTLJStyles,
    AboutBoxStyles,
    CopyRightTljStyles,
    BoxTextTljStyles,
    IconBoxStyles,
    TextTljStyles,
    SectionStyles,
    AboutStyles,
};
