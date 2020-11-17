import styled, { css } from "styled-components";
import { Box } from "../../accessories";

const ShowCardStyles = styled.section(
    ({ theme }) => css`
        max-width: 1440px;
        display: grid;
        margin-bottom: ${theme.space.xl2};
    `,
);

const ShowCardGridStyles = styled(Box)(
    ({ theme }) => css`
        border-radius: 6px;
        position: relative;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: auto;
        grid-gap: 0.5rem;
        margin: ${theme.space.auto};
        padding: ${theme.space.sm};
        max-width: 1280px;

        @media (min-width: ${theme.breakpoints.xl}) {
            grid-template-columns: repeat(5, 1fr);
            grid-gap: 1rem;
        }
    `,
);

export { ShowCardStyles, ShowCardGridStyles };
