import styled, { css } from "styled-components";
import { Box, Text } from "../../accessories";

const EmailItemStyles = styled(Box)(
    ({ theme }) => css`
        width: 100%;
        max-width: 340px;
        margin: ${theme.space.auto};
        @media (min-width: ${theme.breakpoints.lg}) {
            max-width: 450px;
        }
    `,
);

const EmailItemText = styled(Text)(
    ({ theme }) => css`
        font-size: ${theme.fontSizes.fmd};
        margin: ${theme.space.md} ${theme.space.auto};
        text-align: left;
        width: 300px;
        position: relative;
        line-height: ${theme.lineHeights.lbase};
    `,
);

export { EmailItemStyles, EmailItemText };
