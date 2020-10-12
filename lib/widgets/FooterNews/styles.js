import styled, { css } from "styled-components";
import { Anchor, Text, Icons, Box } from "../../accessories";

const FooterNewsStyles = styled.footer(
    ({ theme }) => css`
        background: ${theme.colors.gray2};
        display: block;
        height: 400px;
        position: relative;
        width: 100%;

        @media (min-width: ${theme.breakpoints.xl}) {
            display: flex;
            height: 270px;
        }
    `,
);

const CopyyBoxStyles = styled(Box)(
    ({ theme }) => css`
        width: 100%;
        display: block;
        @media (min-width: ${theme.breakpoints.xl}) {
            width: 80%;
        }
    `,
);

const SocialBoxStyles = styled(Box)(
    ({ theme }) => css`
        color: ${theme.colors.Light};
        display: block;
        padding: ${theme.space.lg};
        width: 50%;
        @media (min-width: ${theme.breakpoints.xl}) {
            text-align: center;
            display: grid;
            grid-template-columns: 1fr 1fr;
            margin: ${theme.space.auto};
        }
    `,
);

const SocialTextStyles = styled(Text)(
    ({ theme }) => css`
        color: ${theme.colors.Light};
        display: block;
        font-size: ${theme.fontSizes.fxs};
        font-weight: bold;
        padding: ${theme.space.xs};
        text-transform: uppercase;
        text-align: left;
        @media (min-width: ${theme.breakpoints.xl}) {
            grid-column: 1/3;
            grid-row: 1;
        }
    `,
);

const AnchorNewsIcon = styled(Anchor)(
    ({ theme }) => css`
        height: 48px;
        align-items: center;
        display: flex;
        justify-content: center;
        padding-top: ${theme.space.xl2};
        padding-bottom: ${theme.space.xl};
        @media (min-width: ${theme.breakpoints.xl}) {
            justify-content: flex-start;
            margin-top: ${theme.space.xl3};
        }
    `,
);

const BoxTextNewsStyles = styled(Box)(
    ({ theme }) => css`
        color: ${theme.colors.Light};
        padding-top: ${theme.space.lg};
        padding-bottom: ${theme.space.lg};
        display: block;
        text-align: center;
        @media (min-width: ${theme.breakpoints.xl}) {
            padding-left: ${theme.space.lg};
            padding-top: ${theme.space.sm};
        }
    `,
);

const TextNewsStyles = styled(Text)(
    ({ theme }) => css`
        color: ${theme.colors.gray7};
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

const SocialStyles = styled(Text)(
    ({ theme }) => css`
        color: ${theme.colors.gray7};
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
        display: flex;
        padding: ${theme.space.xl};
        width: 100%;
        @media (min-width: ${theme.breakpoints.xl}) {
            padding: ${theme.space.xl};
        }
    `,
);

const AnchorIcon = styled(Anchor)(
    ({ theme }) => css`
        color: ${theme.colors.gray7};
        display: block;
        font-size: ${theme.fontSizes.fsm};
        @media (min-width: ${theme.breakpoints.xl}) {
            font-size: ${theme.fontSizes.fxs};
            margin-right: ${theme.space.base};
            text-align: left;
        }
    `,
);

const AboutBoxStyles = styled(Box)(
    ({ theme }) => css`
        bottom: 15px;
        color: ${theme.colors.Light};
        display: block;
        padding: ${theme.space.lg};
        text-align: left;
        width: 50%;
        @media (min-width: ${theme.breakpoints.xl}) {
            bottom: 5px;

            margin: ${theme.space.auto};
            display: grid;
            grid-gap: 16px;
            grid-template-columns: 1fr 1fr;
        }
    `,
);

const AboutStyles = styled(Anchor)(
    ({ theme }) => css`
        color: ${theme.colors.gray7};
        font-size: ${theme.fontSizes.fsm};
        margin-top: ${theme.space.base};
        margin-bottom: ${theme.space.base};
        width: 100%;
        display: block;
        text-align: left;
        @media (min-width: ${theme.breakpoints.xl}) {
            font-size: ${theme.fontSizes.fxs};
            margin-top: ${theme.space.xs};
            margin-bottom: ${theme.space.sm};
        }
    `,
);

const AboutTextStyles = styled(Text)(
    ({ theme }) => css`
        color: ${theme.colors.Light};
        display: block;
        font-size: ${theme.fontSizes.fxs};
        font-weight: bold;
        padding: ${theme.space.xs};
        text-transform: uppercase;
        text-align: left;
        @media (min-width: ${theme.breakpoints.xl}) {
            grid-column: 1/3;
            grid-row: 1;
        }
    `,
);

export {
    FooterNewsStyles,
    AnchorNewsIcon,
    AboutBoxStyles,
    CopyyBoxStyles,
    BoxTextNewsStyles,
    SocialBoxStyles,
    SocialStyles,
    SocialTextStyles,
    AnchorIcon,
    TextNewsStyles,
    SectionStyles,
    AboutStyles,
    AboutTextStyles,
};
