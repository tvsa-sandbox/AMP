import styled, { css } from "styled-components";
import Icons from "../../accessories/Icons";
import Button from "../../accessories/Button";
import Box from "../../accessories/Box";
import Text from "../../accessories/Text";
import Anchor from "../../accessories/Anchor";

const PrivacyStyles = styled.section(
    ({ theme }) => css`
        background-color: ${props => (props.color ? theme.colors[props.color] : theme.colors.gray)};
        position: fixed;
        bottom: 0;
        width: 100%;
        align-items: center;
        justify-content: center;
        margin: ${theme.space.auto};
        height: auto;
        z-index: 4;
        box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 4px;
        @media (min-width: ${theme.breakpoints.xl}) {
            border-radius: 5px 5px 5px 5px;
            right: 0;
            margin-right: ${theme.space.lg};
            margin-bottom: ${theme.space.lg};
            height: 135px;
            width: 450px;
        }
    `,
);

const PrivacyBoxStyles = styled(Box)(
    ({ theme }) => css`
        display: block;
        position: relative;
        width: 95%;
        margin: ${theme.space.base} auto;
        @media (min-width: ${theme.breakpoints.xl}) {
            margin: ${theme.space.base} auto;
        }
    `,
);

const PrivacyIconStyles = styled(Icons)(
    ({ theme }) => css`
        display: block;
        position: absolute;
        right: 0;
        top: 2%;
        fill: ${props => (props.color ? theme.colors[props.color] : theme.colors.darkfooter)};
        width: 30px;
        height: 30px;
        cursor: pointer;
        @media (min-width: ${theme.breakpoints.xl}) {
            top: 5%;
        }
    `,
);

const PrivacyBoxDescription = styled(Box)(
    ({ theme }) => css`
        display: flex;
        position: relative;
        margin: ${theme.space.zero};
        color: ${theme.colors.Secondary};
        text-align: left;
        font-size: ${theme.fontSizes.fxs};
        @media (min-width: ${theme.breakpoints.xl}) {
            text-align: left;
            font-size: ${theme.fontSizes.fsm};
        }
    `,
);

const PrivacyTextStyles = styled(Text)(
    ({ theme }) => css`
        color: ${props => (props.color ? theme.colors[props.color] : theme.colors.darkfooter)};
        line-height: ${theme.lineHeights.lmd};
        margin: ${theme.space.xs};
        text-align: left;
        width: 88%;
        @media (min-width: ${theme.breakpoints.xl}) {
            margin: ${theme.space.md};
            width: 90%;
        }
    `,
);

const PrivacyBoxButton = styled(Box)(
    ({ theme }) => css`
        justify-content: center;
        padding-left: ${theme.space.xs};
        padding-right: ${theme.space.xs};
        position: relative;
        display: flex;
        align-items: center;
        margin-top: ${theme.space.xs};
        max-height: 30px;
        @media (min-width: ${theme.breakpoints.xl}) {
            justify-content: flex-start;
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
        color: ${props => (props.color ? theme.colors[props.color] : theme.colors.gray)};
        margin-left: ${theme.space.xxl};
        @media (min-width: ${theme.breakpoints.xl}) {
            margin-left: ${theme.space.xxl};
        }
    `,
);

const PrivacyAnchorStyles = styled(Anchor)(
    ({ theme }) => css`
        display: flex;
        width: auto;
        font-size: ${theme.fontSizes.fmd};
        color: ${theme.colors.Interaction};
        align-items: center;
        text-decoration: underline;
        @media (min-width: ${theme.breakpoints.xl}) {
            left: 2%;
            position: relative;
        }
    `,
);

export {
    PrivacyStyles,
    PrivacyBoxStyles,
    PrivacyIconStyles,
    PrivacyBoxDescription,
    PrivacyTextStyles,
    PrivacyBoxButton,
    PrivacyButtonStyles,
    PrivacyAnchorStyles,
};
