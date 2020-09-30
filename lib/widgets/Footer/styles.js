import styled, { css } from "styled-components";
import { Anchor, Text, Icons, Box } from "../../accessories";

const FooterStyles = styled.footer(
    ({ theme }) => css`
        width: 100%;
        height: auto;
        margin-top: ${theme.space.base};
        padding-bottom: 65px;
        background: ${theme.colors.darkfooter};
        color: ${theme.colors.gray};
        grid-area: footer;
    `,
);

const ComboStyles = styled.form(
    `
        justify-content: center;
        display: flex;
    `,
);

const SelectStyles = styled.select(
    ({ theme }) => css`
        height: 40px;
        width: 95%;
        background: ${theme.colors.grayfooter};
        color: ${theme.colors.gray};
        margin-top: ${theme.space.sm};
    `,
);

const LabelStyles = styled.label(
    ({ theme }) => css`
        color: ${theme.colors.gray};
        font-size: ${theme.fontSizes.fxs};
        width: 100%;
        display: block;
        text-align: center;
    `,
);

const SectionStyles = styled.section(
    ({ theme }) => css`
        display: grid;
        grid-gap: 40px;
        grid-template-columns: repeat(10, 60px);
        grid-template-rows: repeat(1, 60px);
        justify-content: center;
        width: 100%;
        background: ${theme.colors.grayfooter};
        align-items: center;

        @media (max-width: ${theme.breakpoints.md}) {
            display: none;
        }
    `,
);

const SectionMobileStyles = styled.section(
    ({ theme }) => css`
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(1, 70px);
        justify-content: center;
        width: 100%;
        background: ${theme.colors.grayfooter};
        align-items: center;
        justify-content: center;

        @media (min-width: ${theme.breakpoints.lg}) {
            display: none;
        }
    `,
);

const NetworksStyles = styled(Anchor)(
    ({ theme }) => css`
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        height: 48px;
        width: 100%;
        min-width: 48px;
        padding: ${theme.space.zero};
    `,
);

const AboutStyles = styled(Anchor)(
    ({ theme }) => css`
        display: flex;
        width: auto;
        min-width: 48px;
        height: 48px;
        color: ${theme.colors.textfooter};
        opacity: 0.5;
        text-transform: uppercase;
        font-size: ${theme.fontSizes.fsm};
        padding-left: ${theme.space.lg};
        padding-right: ${theme.space.lg};
        padding-top: ${theme.space.md};
        padding-bottom: ${theme.space.md};
    `,
);

const SectionTextStyles = styled.section(
    ({ theme }) => css`
        align-items: center;
        display: inline-flex;
        flex-flow: wrap;
        justify-content: center;
        padding-top: ${theme.space.xl};
        padding-bottom: ${theme.space.xl};
        width: 100%;

        &:after {
            border-color: ${theme.colors.grayfooter};
            width: 90%;
            content: "";
            border-bottom: 1px solid;
            margin-top: ${theme.space.xl};
        }
    `,
);

const SectionInfoStyles = styled.section(
    ({ theme }) => css`
        display: inline-flex;
        flex-wrap: wrap;
        position: relative;
        justify-content: center;
        width: 100%;
        align-items: center;
        padding-top: ${theme.space.md};
        padding-bottom: ${theme.space.md};
    `,
);

const ContactStyles = styled(Anchor)(
    ({ theme }) => css`
        display: flex;
        width: auto;
        color: ${theme.colors.textfooter};
        opacity: 0.5;
        min-width: 48px;
        height: 48px;
        text-transform: uppercase;
        font-size: ${theme.fontSizes.fxs};
        padding-left: ${theme.space.lg};
        padding-right: ${theme.space.lg};
        padding-bottom: ${theme.space.lg};
    `,
);

const CopyRightStyles = styled.div(
    ({ theme }) => css`
        display: grid;
        grid-template-columns: 70px 333px;
        grid-template-rows: repeat(1, 50px);
        justify-content: center;
        align-items: center;

        @media (max-width: ${theme.breakpoints.md}) {
            grid-template-columns: repeat(1, 1fr);
            grid-template-rows: repeat(2, 70px);
        }
    `,
);

const TextCopyStyles = styled(Text)(
    ({ theme }) => css`
        display: flex;
        text-align: center;
        width: auto;
        color: ${theme.colors.textfooter};
        opacity: 0.5;
        text-transform: uppercase;
        font-size: ${theme.fontSizes.fxs};
        font-family: ${theme.fonts[1]};
        line-height: ${theme.lineHeights.lbase};
        margin-left: ${theme.space.sm};
        margin-right: ${theme.space.sm};
        margin-top: ${theme.space.sm};

        @media (max-width: ${theme.breakpoints.md}) {
            margin: auto;
        }
    `,
);

const CopyIconStyles = styled(Icons)(
    ({ theme }) => css`
        width: 70px;
        height: 70px;
        fill: ${theme.colors.gray};

        @media (max-width: ${theme.breakpoints.lg}) {
            margin: auto;
        }
    `,
);

const NetworkIconStyles = styled(Icons)(
    ({ theme }) => css`
        width: 60px;
        height: 60px;
        fill: ${theme.colors.gray};
    `,
);

const MobileIconStyles = styled(Icons)(
    ({ theme }) => css`
        width: 100%;
        height: 70px;
        fill: ${theme.colors.gray};

        @media (min-width: ${theme.breakpoints.lg}) {
            height: 115px;
        }
    `,
);

const FooterStylesAMP = styled.footer(
    ({ theme }) => css`
        display: flex;
        min-height: 65px;
        justify-content: center;
        margin: 0 auto;
        align-items: center;
        padding-bottom: ${theme.space.xl3};
        background-color: ${theme.colors.darkfooter};
        width: 100%;
        grid-area: footer;
    `,
);

const CopyRightStylesAMP = styled(Box)(
    ({ theme }) => css`
        display: flex;
        margin-left: auto;
        margin-right: auto;
        flex-direction: column;
        background-color: ${theme.colors.darkfooter};
    `,
);

const TextCopyStylesAMP = styled(Text)(
    ({ theme }) => css`
        text-align: center;
        color: ${theme.colors.gray};
        font-size: ${theme.fontSizes.fxs};
        font-family: ${theme.fonts[1]};
        padding-bottom: ${theme.space.md};
        @media (max-width: ${theme.breakpoints.lg}) {
            margin: auto;
        }
    `,
);

export {
    FooterStyles,
    NetworksStyles,
    SectionMobileStyles,
    AboutStyles,
    SectionStyles,
    SectionTextStyles,
    ContactStyles,
    SectionInfoStyles,
    CopyRightStyles,
    TextCopyStyles,
    CopyIconStyles,
    NetworkIconStyles,
    MobileIconStyles,
    ComboStyles,
    SelectStyles,
    FooterStylesAMP,
    TextCopyStylesAMP,
    CopyRightStylesAMP,
    LabelStyles,
};
