import styled, { css } from "styled-components";
import { Box, Title, Image, Anchor } from "../../accessories";

const ShowCardItemStyles = styled(Anchor)(
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

const ShowCardCaptionStyles = styled(Box)(
    ({ theme }) => css`
        height: 50px;
        border-radius: 0px 0px 5px 5px;
        @media (min-width: ${theme.breakpoints.lg}) {
            height: 75px;
        }
    `,
);

const ShowCardImageStyles = styled(Image)(
    () => css`
        border-radius: 5px 5px 0px 0px;
    `,
);

const ShowCardTitleStyles = styled(Title)(
    ({ theme }) => css`
        width: 100%;
        height: auto;
        font-size: ${theme.fontSizes.fxs};
        line-height: ${theme.lineHeights.lxs};
        padding: ${theme.space.base};
        overflow: hidden;

        @media (min-width: ${theme.breakpoints.lg}) {
            font-size: ${theme.fontSizes.fmd};
            line-height: ${theme.lineHeights.lbase};
        }
    `,
);

export { ShowCardItemStyles, ShowCardImageStyles, ShowCardTitleStyles, ShowCardCaptionStyles };
