import styled, { css } from "styled-components";

const TickerStyles = styled.section(
    ({ theme }) => css`
        cursor: pointer;
        width: 100%;
        height: auto;
        max-width: 1440px;
        padding-top: ${theme.space.xl3};
        padding-bottom: ${theme.space.xl3};
    `,
);

export default TickerStyles;
