import styled, { css } from "styled-components";
import { Box, Button, Icons } from "accessories";

const FavoriteStyles = styled.section(
    ({ theme }) => css`
        height: auto;
        max-width: 1280px;
        margin: ${theme.space.xs} ${theme.space.auto};
        position: relative;
        width: 100%;

        @media (min-width: ${theme.breakpoints.xl}) {
            margin: ${theme.space.xl2} ${theme.space.auto};
        }
    `,
);

const FavoriteBoxStyles = styled(Box)(
    ({ theme }) => css`
        display: flex;
        justify-content: flex-start;
        overflow-x: scroll;
        height: 90px;

        @media (min-width: ${theme.breakpoints.xl}) {
            justify-content: center;
            overflow-x: inherit;
        }
    `,
);

const FavoriteButtonStyles = styled(Button)(
    ({ theme }) => css`
        align-items: center;
        border-radius: 100%;
        min-width: 65px;
        overflow: hidden;
        margin: ${theme.space.zero} ${theme.space.sm};
        padding: ${theme.space.zero};
        height: 65px;
        width: 65px;
        background: transparent;
        border: solid 2px;
        border-color: ${theme.colors.gray2};

        @media (min-width: ${theme.breakpoints.xl}) {
            padding: ${theme.space.zero};
            margin: ${theme.space.zero} ${theme.space.xl};
            height: 85px;
            width: 85px;
        }
    `,
);

const FavoriteButtonActiveStyles = styled(Button)(
    ({ theme }) => css`
        align-items: center;
        border-radius: 100%;
        min-width: 65px;
        overflow: hidden;
        margin: ${theme.space.zero} ${theme.space.sm};
        padding: ${theme.space.zero};
        height: 65px;
        width: 65px;
        background: ${theme.colors.Interaction};

        @media (min-width: ${theme.breakpoints.xl}) {
            padding: ${theme.space.zero};
            height: 85px;
            width: 85px;
        }
    `,
);

const FavoriteIconsStyles = styled(Icons)(
    ({ theme }) => css`
        position: relative;
        min-width: 65px;
        height: 65px;
        width: 65px;
        padding: ${theme.space.md};
        fill: ${theme.colors.Dark};

        &:hover {
            opacity: 0.8;
        }

        @media (min-width: ${theme.breakpoints.xl}) {
            height: 85px;
            width: 85px;
        }
    `,
);

export {
    FavoriteStyles,
    FavoriteBoxStyles,
    FavoriteButtonStyles,
    FavoriteIconsStyles,
    FavoriteButtonActiveStyles,
};
