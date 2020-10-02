import styled, { css } from "styled-components";
import Icons from "../../accessories/Icons";
import Button from "../../accessories/Button";
import Box from "../../accessories/Box";
import Text from "../../accessories/Text";
import Anchor from "../../accessories/Anchor";

const PrivacyStyles = styled.section(
    ({ theme }) => css`
        background: ${theme.colors.Light};
        position: fixed;
        bottom: 0;
        width: 100%;
        align-items: center;
        justify-content: center;
        margin: ${theme.space.auto};
        height: auto;
        z-index: 4;
        @media (min-width: ${theme.breakpoints.xl}) {
            height: 165px;
        }
    `,
);

const PrivacyBoxCaption = styled(Box)(
    ({ theme }) => css`
        display: flex;
        position: relative;
        margin: ${theme.space.sm};
        width: 100%;
        cursor: pointer;
    `,
);

const PrivacyBoxIcon = styled(Box)(
    ({ theme }) => css`
        display: flex;
        position: relative;
        margin: ${theme.space.md};
        width: auto;
    `,
);

const PrivacyBoxStyles = styled(Box)(
    ({ theme }) => css`
        display: block;
        position: relative;
        width: 90%;
        margin: ${theme.space.xl} auto;
        max-width: 1280px;
        @media (min-width: ${theme.breakpoints.xl}) {
            margin: ${theme.space.xl2} auto;
        }
    `,
);

const PrivacyIconStyles = styled(Icons)`
    display: block;
    position: absolute;
    right: 0;
`;

const PrivacyLabelStyles = styled(Text)(
    ({ theme }) => css`
        margin: ${theme.space.auto};
        position: relative;
        display: flex;
        color: ${theme.colors.Dark};
        font-weight: bold;
        @media (min-width: ${theme.breakpoints.xl}) {
            justify-content: start;
            margin: ${theme.space.zero};
        }
    `,
);

const PrivacyBoxDescription = styled(Box)(
    ({ theme }) => css`
        display: flex;
        position: relative;
        margin-top: ${theme.space.xl};
        color: ${theme.colors.Secondary};
        text-align: center;
        justify-content: center;
        margin: ${theme.space.auto};
        font-size: ${theme.fontSizes.fxs};
        @media (min-width: ${theme.breakpoints.xl}) {
            text-align: justify;
            font-size: ${theme.fontSizes.fsm};
        }
    `,
);

const PrivacyTextStyles = styled(Text)(
    ({ theme }) => css`
        color: ${theme.colors.Dark};
        line-height: ${theme.lineHeights.lmd};
        margin: ${theme.space.xs};
        @media (min-width: ${theme.breakpoints.xl}) {
            margin: ${theme.space.md};
        }
    `,
);

const PrivacyBoxButton = styled(Box)(
    ({ theme }) => css`
        justify-content: space-between;
        margin: ${theme.space.auto};
        position: relative;
        display: flex;
        align-items: center;
        margin-top: ${theme.space.xs};
        max-height: 30px;
        @media (min-width: ${theme.breakpoints.xl}) {
            justify-content: flex-end;
            margin-top: ${theme.space.zero};
        }
    `,
);

const PrivacyButtonStyles = styled(Button)(
    ({ theme }) => css`
        border-radius: 25px;
        font-size: ${theme.fontSizes.fsm};
        font-weight: bold;
        min-width: 80px;
        min-height: 30px;
        justify-content: center;
        border-radius: 5px;
        background-color: ${theme.colors.Interaction};
    `,
);

const PrivacyAnchorStyles = styled(Anchor)(
    ({ theme }) => css`
        display: flex;
        font-weight: bold;
        margin-right: ${theme.space.lg};
        width: auto;
        color: ${theme.colors.Interaction};
        align-items: center;
    `,
);

export {
    PrivacyStyles,
    PrivacyBoxStyles,
    PrivacyBoxCaption,
    PrivacyIconStyles,
    PrivacyLabelStyles,
    PrivacyBoxDescription,
    PrivacyTextStyles,
    PrivacyBoxButton,
    PrivacyButtonStyles,
    PrivacyAnchorStyles,
    PrivacyBoxIcon,
};
