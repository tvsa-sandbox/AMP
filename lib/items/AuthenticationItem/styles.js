import styled, { css } from "styled-components";
import { Box, Inputs, Anchor, Time } from "../../accessories";

const AuthenticationItemStyles = styled(Box)(
    ({ theme }) => css`
        width: 100%;
        max-width: 340px;
        margin: ${theme.space.auto};
        @media (min-width: ${theme.breakpoints.lg}) {
            max-width: 450px;
        }
    `,
);

const AuthenticationInputStyles = styled(Inputs)(
    ({ theme }) => css`
        width: 100%;
        max-width: 50px;
        height: 50px;
        padding: ${theme.space.zero} ${theme.space.xl};
        ::placeholder {
            font-size: ${theme.fontSizes.fsm};
        }
    `,
);

const AuthenticationTime = styled(Time)(
    ({ theme }) => css`
        font-size: ${theme.fontSizes.fsm};
        color: ${theme.colors.Dark};
    `,
);

const AuthenticationAnchorStyles = styled(Anchor)(
    ({ theme }) => css`
        cursor: pointer;
        font-size: ${theme.fontSizes.fxs};
        color: ${theme.colors.graycataloge};
        text-decoration: underline;
        margin: ${theme.space.md} ${theme.space.xl};
        width: 300px;
        display: block;
        @media (min-width: ${theme.breakpoints.lg}) {
            margin: ${theme.space.md} ${theme.space.auto};
        }
    `,
);

const AuthenticationInputsBox = styled(Box)(
    ({ theme }) => css`
        justify-content: space-between;
        max-width: 300px;
        margin: ${theme.space.md} ${theme.space.auto};
        @media (min-width: ${theme.breakpoints.lg}) {
            justify-content: space-evenly;
        }
    `,
);
export {
    AuthenticationItemStyles,
    AuthenticationInputStyles,
    AuthenticationAnchorStyles,
    AuthenticationInputsBox,
    AuthenticationTime,
};
