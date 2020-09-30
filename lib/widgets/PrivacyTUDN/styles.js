import styled, { css } from "styled-components";
import Icons from "../../accessories/Icons";
import Button from "../../accessories/Button";
import Box from "../../accessories/Box";
import Text from "../../accessories/Text";
import Anchor from "../../accessories/Anchor";

const PrivacyStyles = styled.section(
    ({ theme }) => css`
        background: ${theme.colors.Dark};
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
            border-radius: 5px 5px 0 5px;
            right: 0;
            height: 227px;
            width: 500px;
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
    fill: #0acba4;
`;

const PrivacyLabelStyles = styled(Text)(
    ({ theme }) => css`
        margin: ${theme.space.auto};
        position: relative;
        display: flex;
        color: ${theme.colors.Light};
        font-weight: bold;
        @media (min-width: ${theme.breakpoints.xl}) {
            justify-content: start;
            margin: ${theme.space.zero};
            font-size: ${theme.fontSizes.fbase};
        }
    `,
);

const PrivacyBoxDescription = styled(Box)(
    ({ theme }) => css`
        display: flex;
        position: relative;
        margin-top: ${theme.space.xl};
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
        color: ${theme.colors.Light};
        line-height: ${theme.lineHeights.lmd};
        margin: ${theme.space.xs};
        text-align: center;
        @media (min-width: ${theme.breakpoints.xl}) {
            margin: ${theme.space.md};
            text-align: left;
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
        background-color: #0acba4;
        color: ${theme.colors.Dark};
    `,
);

const PrivacyAnchorStyles = styled(Anchor)(
    ({ theme }) => css`
        display: flex;
        font-weight: bold;
        margin-right: ${theme.space.lg};
        width: auto;
        color: #0acba4;
        align-items: center;
        @media (min-width: ${theme.breakpoints.xl}) {
            display: flex;
            left: 2%;
            position: absolute;
        }
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
