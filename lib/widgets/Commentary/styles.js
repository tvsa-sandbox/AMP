import styled, { css } from "styled-components";
import { Box, Title } from "../../accessories";

const CommentaryContainerStyles = styled.section(
    ({ theme }) => css`
        width: 100%;
        max-width: 820px;
        margin: ${theme.space.auto};
    `,
);

const CommentaryTitle = styled(Title)(
    ({ theme }) => css`
        text-transform: uppercase;
        text-align: center;
        font-weight: bold;
        width: 100%;
        font-size: ${theme.fontSizes.flg};
        line-height: ${theme.lineHeights.llg};

        @media (min-width: ${theme.breakpoints.lg}) {
            font-size: ${theme.fontSizes.fxl2};
            line-height: ${theme.lineHeights.lxl2};
        }
    `,
);

const BoxTitle = styled(Box)(
    ({ theme }) => css`
        margin: ${theme.space.xl2} ${theme.space.zero};
    `,
);

export { CommentaryContainerStyles, CommentaryTitle, BoxTitle };
