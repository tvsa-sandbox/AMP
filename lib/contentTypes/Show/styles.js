import styled, { css } from "styled-components";
import { Image, Box } from "../../accessories";

const ShowGrid = styled.section(
    ({ theme }) => css`
        display: grid;
        grid-template-columns: 1fr;
        position: relative;
        max-width: 100%;
        margin: ${theme.space.sm} ${theme.space.auto};

        @media (min-width: ${theme.breakpoints.md}) {
            grid-template-columns: repeat(2, 1fr);
            grid-gap: 10px;
        }
        @media (min-width: ${theme.breakpoints.lg}) {
            grid-template-columns: repeat(4, 1fr);
            margin: ${theme.space.sm} ${theme.space.auto};
        }
    `,
);
const PosterCardImageStyles = styled(Box)(
    () => css`
        position: absolute;
        max-width: 1280px;
        left: 50%;
        transform: translateX(-50%);
        z-index: -1;
        top: 0;
    `,
);
export { ShowGrid, PosterCardImageStyles };
