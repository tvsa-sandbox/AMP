import styled, { css } from "styled-components";
import { Box, Button } from "../../accessories";

const TabsMatchStyles = styled.section(
    ({ theme }) => css`
        justify-content: flex-start;
        overflow-x: scroll;
        margin: ${theme.space.zero};
        overflow-y: hidden;
        max-width: 1440px;
        margin: auto;
        min-height: 60px;
        display: flex;

        @media (min-width: ${theme.breakpoints.xl}) {
            overflow-x: hidden;
            margin: ${theme.space.zero} ${theme.space.xl2};
            justify-content: center;
            min-height: 80px;
        }
    `,
);

const TabsMatchBoxStyles = styled(Box)(
    ({ theme }) => css`
        display: flex;
        min-height: 27px;
        width: 100%;
        justify-content: flex-start;

        @media (min-width: ${theme.breakpoints.xl}) {
            justify-content: center;
        }
    `,
);

const TabsMatchButtonStyles = styled(Button)(
    ({ theme }) => css`
        cursor: pointer;
        text-transform: uppercase;
        justify-content: center;
        color: ${theme.colors.Dark};
        width: auto;
        min-width: 125px;
        font-weight: bold;
        min-height: 27px;
        align-items: center;
        padding: ${theme.space.sm};
        font-size: ${theme.fontSizes.fxs};
        line-height: ${theme.lineHeights.lsm};
        border-color: ${theme.colors.gray2};
        &:hover {
            opacity: 0.8;
        }
    `,
);

const TabsMatchButtonActiveStyles = styled(Button)(
    ({ theme }) => css`
        cursor: pointer;
        text-transform: uppercase;
        justify-content: center;
        color: ${theme.colors.Dark};
        width: auto;
        min-width: 125px;
        font-weight: bold;
        min-height: 27px;
        align-items: center;
        padding: ${theme.space.sm};
        font-size: ${theme.fontSizes.fxs};
        line-height: ${theme.lineHeights.lsm};
    `,
);

const TabsMatchButtonContainerStyles = styled.div(
    ({ theme }) => css`
        width: auto;
        min-width: 125px;
        display: inline-flex;
        max-width: 145px;
        flex: 0 0 100%;
        text-align: center;
        max-height: 60px;
        overflow: hidden;
        justify-content: center;
    `,
);

export {
    TabsMatchStyles,
    TabsMatchBoxStyles,
    TabsMatchButtonStyles,
    TabsMatchButtonContainerStyles,
    TabsMatchButtonActiveStyles,
};
