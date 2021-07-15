import styled, { css } from "styled-components";
import { Anchor, Text } from "../../accessories";

const EndCardItemStyles = styled(Anchor)(
    ({ theme }) => css`
        display: block;
        width: 100%;
        margin-right: ${theme.space.lg};

        @media (min-width: ${theme.breakpoints.lg}) {
            max-width: 258px;
        }
    `,
);

const EndCardItemTitle = styled(Text)(
    ({ theme }) => css`
        font-size: ${theme.fontSizes.fxs};
        line-height: ${theme.lineHeights.lsm};
        width: 100%;
        margin-left: ${theme.space.sm};
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;

        @media (min-width: ${theme.breakpoints.lg}) {
            min-width: 130px;
            font-size: ${theme.fontSizes.fmd};
            line-height: ${theme.lineHeights.llg};
        }
    `,
);

export { EndCardItemStyles, EndCardItemTitle };
