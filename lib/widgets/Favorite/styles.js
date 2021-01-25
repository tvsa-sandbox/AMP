import styled, { css } from "styled-components";
import { Box, Button, Icons } from "accessories";

const FavoriteStyles = styled.section(
    ({ theme }) => css`
        height: auto;
        max-width: 1280px;
        margin: ${theme.space.zero} ${theme.space.auto};
        position: relative;
        width: 100%;

        @media (min-width: ${theme.breakpoints.xl}) {
            margin: ${theme.space.lg} ${theme.space.auto};
            margin-bottom: ${theme.space.zero};
        }
    `,
);

const FavoriteBoxStyles = styled(Box)(
    ({ theme }) => css`
        display: flex;
        justify-content: flex-start;
        overflow-x: scroll;
        height: 75px;

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
        min-width: 60px;
        overflow: hidden;
        margin: ${theme.space.zero} ${theme.space.md};
        padding: ${theme.space.zero};
        height: 60px;
        width: 60px;
        border: solid 2px ${theme.colors.Secondary};
        display: flex;
        justify-content: center;

        @media (min-width: ${theme.breakpoints.xl}) {
            padding: ${theme.space.zero};
            margin: ${theme.space.zero} ${theme.space.lg};
            height: 75px;
            width: 75px;
        }
    `,
);

const FavoriteButtonActiveStyles = styled(Button)(
    ({ theme }) => css`
        align-items: center;
        border-radius: 100%;
        min-width: 60px;
        overflow: hidden;
        margin: ${theme.space.zero} ${theme.space.md};
        padding: ${theme.space.zero};
        height: 60px;
        width: 60px;
        background: ${theme.colors.Interaction};
        display: flex;
        justify-content: center;

        @media (min-width: ${theme.breakpoints.xl}) {
            padding: ${theme.space.zero};
            margin: ${theme.space.zero} ${theme.space.lg};
            height: 75px;
            width: 75px;
        }
    `,
);

const FavoriteIconsStyles = styled(Icons)(
    ({ theme }) => css`
        position: relative;
        min-width: 60px;
        height: 60px;
        width: 60px;
        padding: ${theme.space.md};
        fill: ${theme.colors.Dark};

        &:hover {
            opacity: 0.8;
        }

        @media (min-width: ${theme.breakpoints.xl}) {
            height: 75px;
            width: 75px;
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
