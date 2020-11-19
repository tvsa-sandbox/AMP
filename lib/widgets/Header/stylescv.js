import styled, { css } from "styled-components";

const HeaderStylesCv = styled.header(
    ({ theme }) => css`
        display: flex;
        grid-area: nav;
        width: 100%;
        max-width: 1280px;
        height: 50px;
        justify-content: flex-start;
        margin: ${theme.space.zero} ${theme.space.auto};
        padding: ${theme.space.xxl} ${theme.space.sm};
        align-items: center;
        background-color: ${theme.colors.back};

        @media (min-width: ${theme.breakpoints.xl}) {
            height: 80px;
            padding: ${theme.space.xl2} ${theme.space.zero};
        }
    `,
);

export { HeaderStylesCv };
