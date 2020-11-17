import styled, { css } from "styled-components";

const ShowGrid = styled.section(
    ({ theme }) => css`
        display: grid;
        grid-template-columns: 1fr;
        position: relative;
        max-width: 100%;
        margin: ${theme.space.lg} ${theme.space.auto};

        @media (min-width: ${theme.breakpoints.md}) {
            grid-template-columns: repeat(2, 1fr);
            grid-gap: 10px;
        }
        @media (min-width: ${theme.breakpoints.lg}) {
            grid-template-columns: repeat(4, 1fr);
            margin: ${theme.space.xl2} ${theme.space.auto};
        }
    `,
);

export { ShowGrid };
