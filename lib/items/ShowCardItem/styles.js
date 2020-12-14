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
            width: 100%;
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
        height: 50px;
        background: ${theme.colors.gray4};
        border-radius: 0px 0px 5px 5px;
        @media (min-width: ${theme.breakpoints.lg}) {
            height: 65px;
        }
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
        font-size: ${theme.fontSizes.fsm};
        line-height: ${theme.lineHeights.lmd};
        padding: ${theme.space.sm};
        color: ${theme.colors.gray};
        overflow: hidden;

        @media (min-width: ${theme.breakpoints.lg}) {
            font-size: ${theme.fontSizes.fmd};
            line-height: ${theme.lineHeights.lbase};
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
