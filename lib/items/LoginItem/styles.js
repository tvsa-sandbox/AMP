import styled, { css } from "styled-components";
import { Box, Inputs, Button, Anchor, Text, Title, Modal } from "../../accessories";

const LoginItemStyles = styled(Box)(
    ({ theme }) => css`
        width: 100%;
        max-width: 340px;
        margin: ${theme.space.auto};
        @media (min-width: ${theme.breakpoints.lg}) {
            max-width: 450px;
        }
    `,
);

const LoginFormContent = styled(Box)(
    ({ theme }) => css`
        width: 100%;
        max-width: 340px;
        height: auto;
        margin: ${theme.space.xxl} ${theme.space.auto};
        padding: ${theme.space.xl2} ${theme.space.zero};
        border-radius: 5px;
        display: grid;
        @media (min-width: ${theme.breakpoints.lg}) {
            max-width: 450px;
            margin: ${theme.space.xl3} ${theme.space.auto};
            padding: ${theme.space.xl3} ${theme.space.zero};
        }
    `,
);

const LoginModalStyles = styled(Modal)(
    ({ theme }) => css`
        display: block;
        width: 100%;
        margin: ${theme.space.auto};
        background: rgba(18, 18, 18, 0.8);
    `,
);

const LoginItemContent = styled(Box)(
    ({ theme }) => css`
        width: 100%;
        max-width: 300px;
        justify-content: space-between;
        margin: ${theme.space.md} ${theme.space.auto};
    `,
);

const LoginInputStyles = styled(Inputs)(
    ({ theme }) => css`
        width: 100%;
        max-width: 300px;
        height: 50px;
        margin: ${theme.space.md} ${theme.space.auto};
        padding: ${theme.space.zero} ${theme.space.xl};
        ::placeholder {
            font-size: ${theme.fontSizes.fsm};
        }
    `,
);

const LoginButtonStyles = styled(Button)(
    ({ theme }) => css`
        width: 100%;
        max-width: 300px;
        margin: ${theme.space.md} ${theme.space.auto};
        height: 50px;
        justify-content: space-evenly;
        font-size: ${theme.fontSizes.fxs};
        padding: ${theme.space.zero} ${theme.space.xxl};
    `,
);

const LoginItemText = styled(Text)(
    ({ theme }) => css`
        font-size: ${theme.fontSizes.fmd};
        margin: ${theme.space.md} ${theme.space.auto};
        text-align: center;
        max-width: 300px;
        position: relative;
        ::before {
            content: "";
            display: block;
            width: 130px;
            height: 1px;
            background: ${theme.colors.gray};
            right: 25px;
            top: 50%;
            position: absolute;
        }
        ::after {
            content: "";
            display: block;
            width: 130px;
            height: 1px;
            background: ${theme.colors.gray};
            left: 25px;
            top: 50%;
            position: absolute;
        }
        @media (min-width: ${theme.breakpoints.lg}) {
            ::before {
                width: 130px;
            }
            ::after {
                width: 130px;
            }
        }
    `,
);

const LoginItemTitle = styled(Title)(
    ({ theme }) => css`
        font-size: ${theme.fontSizes.fmd};
        margin: ${theme.space.md} ${theme.space.auto};
        text-align: left;
        width: 300px;
        position: relative;
        line-height: ${theme.lineHeights.lbase};
        @media (min-width: ${theme.breakpoints.lg}) {
            margin: ${theme.space.md} ${theme.space.auto} ${theme.space.xxl};
            font-size: ${theme.fontSizes.fbase};
        }
    `,
);

const LoginAnchorStyles = styled(Anchor)(
    ({ theme }) => css`
        cursor: pointer;
        font-size: ${theme.fontSizes.fsm};
        color: ${theme.colors.Interaction};
    `,
);

export {
    LoginItemStyles,
    LoginInputStyles,
    LoginButtonStyles,
    LoginItemText,
    LoginItemTitle,
    LoginAnchorStyles,
    LoginFormContent,
    LoginItemContent,
    LoginModalStyles,
};
