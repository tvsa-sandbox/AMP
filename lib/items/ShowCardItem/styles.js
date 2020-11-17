import styled, { css } from "styled-components";
import { Box, Title, Image, Button } from "../../accessories";

const ShowCardItemStyles = styled(Button)(
    ({ theme }) => css`
        border-radius: 6px;
        height: 100%;
        width: 100%;
        overflow: hidden;
        display: flex;
        height: 100%;
        width: 100%;
        padding: ${theme.space.zero};
        margin: ${theme.space.auto};

        @media (min-width: ${theme.breakpoints.xl}) {
            height: auto;
            width: auto;
        }
    `,
);

const ShowCardBoxStyles = styled(Box)(
    ({ theme }) => css`
        position: relative;
        display: flex;
        text-transform: uppercase;
        width: auto;
        margin: auto;
        align-items: center;
    `,
);

const ShowCardCaptionStyles = styled(Box)(
    ({ theme }) => css`
        position: relative;
        height: 100px;
        background: ${theme.colors.gray4};
        border-radius: 0px 0px 5px 5px;
    `,
);

const ShowCardImageStyles = styled(Image)(
    ({ theme }) => css`
        border-radius: 5px 5px 0px 0px;
    `,
);

const ShowCardTitleStyles = styled(Title)(
    ({ theme }) => css`
        width: 100%;
        height: auto;
        font-size: ${theme.fontSizes.fxs};
        line-height: ${theme.lineHeights.lxs};
        padding: ${theme.space.md};
        color: ${theme.colors.gray};
        overflow: hidden;

        @media (min-width: ${theme.breakpoints.lg}) {
            font-size: ${theme.fontSizes.fsm};
            line-height: ${theme.lineHeights.lmd};
        }
    `,
);

export {
    ShowCardItemStyles,
    ShowCardBoxStyles,
    ShowCardImageStyles,
    ShowCardTitleStyles,
    ShowCardCaptionStyles,
};
