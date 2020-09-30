import styled, { css } from "styled-components";

import Box from "../../../accessories/Box";

const PageStyles = styled.section(
    ({ theme }) => css`
        min-height: 185px;
        display: grid;
        grid-area: main;
        grid-template-areas:
            "Lead Aside"
            "Body Aside"
            "BodyFull BodyFull";
        grid-template-columns: 70% 30%;
        position: relative;
        max-width: 1081px;
        margin: ${theme.space.auto};
    `,
);

const BoxBodyFull = styled.section`
    grid-area: BodyFull;
`;

const BoxContainer = styled(Box)(
    ({ theme }) => css`
        max-width: 1024px;
        margin: 0 ${theme.space.auto};
        @media (min-width: ${theme.breakpoints.xl}) {
            margin-bottom: ${theme.space.xl};
        }
    `,
);

export {
    PageStyles,
    BoxBodyFull,
    BoxContainer,
};
