import styled, { css } from "styled-components";
import { Anchor, Box } from "../../accessories";

const GridHomePWABoxStyles = styled(Box)(
    ({ theme }) => css`
        margin: ${theme.space.lg} ${theme.space.zero};
        padding: ${theme.space.zero} ${theme.space.base};
    `,
);

const GridHomePWAStyles = styled.div(
    ({ theme }) => css`
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 12px;
        margin: ${theme.space.lg} ${theme.space.auto};
        max-width: 650px;
    `,
);

const GridHomePWAAnchorStyles = styled(Anchor)(
    ({ theme }) => css`
        border-radius: 3px;
        box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.4);

        &:hover {
            opacity: 0.5;
        }
        &:first-of-type {
            grid-column: 1;
            grid-row: 1;
        }
        &:nth-of-type(2) {
            grid-column: 2;
            grid-row: 1;
        }
        &:nth-of-type(3) {
            grid-column: 1;
            grid-row: 2;
        }
        &:nth-of-type(4) {
            grid-column: 2;
            grid-row: 2;
        }
        &:nth-of-type(5) {
            grid-column: 1 / 3;
            grid-row: 3;
        }
        &:nth-of-type(6) {
            grid-column: 1;
            grid-row: 4;
        }
        &:nth-of-type(7) {
            grid-column: 2;
            grid-row: 4;
        }
        &:nth-of-type(8) {
            grid-column: 1;
            grid-row: 5;
        }
        &:nth-of-type(9) {
            grid-column: 2;
            grid-row: 5;
        }
        &:nth-of-type(10) {
            grid-column: 1 / 3;
            grid-row: 6;
        }
    `,
);

const GridHomePWACaptionStyles = styled("figcaption")(
    ({ theme }) => css`
        padding: ${theme.space.zero} ${theme.space.base};
        margin: ${theme.space.base} ${theme.space.zero} ${theme.space.xl};
        font-size: ${theme.fontSizes.fsm};
        font-weight: bold;
        line-height: ${theme.lineHeights.lbase};
        color: ${theme.colors.Dark};
        text-overflow: ellipsis;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        align-items: flex-start;
        display: -webkit-box;
        overflow: hidden;
    `,
);

const GridHomePWABoxThumb = styled(Box)(
    ({ theme }) => css`
        min-width: 150px;
        width: 100%;
        display: block;
        position: relative;
    `,
);

const GridHomePWALabel = styled(Box)(
    ({ theme }) => css`
        width: 60px;
        display: block;
        position: absolute;
        bottom: 12px;
        height: 20px;
        color: ${theme.colors.gray};
        font-size: ${theme.fontSizes.fsm};
        background: ${theme.colors.Interaction};
        display: flex;
        align-items: center;
        justify-content: center;
    `,
);

export {
    GridHomePWAStyles,
    GridHomePWAAnchorStyles,
    GridHomePWACaptionStyles,
    GridHomePWABoxStyles,
    GridHomePWABoxThumb,
    GridHomePWALabel,
};
