import styled, { css } from "styled-components";

const PageStyles = styled.section(
    ({ theme }) => css`
        min-height: 100vh;
        position: relative;
        max-width: 1024px;
        margin: ${theme.space.auto};
        padding-bottom: ${theme.space.xl3};
    `,
);

export { PageStyles };
