import styled, { css } from "styled-components";
import { Box } from "../../accessories";

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

const TickerThumb = styled(Box)(
    () => css`
        width: auto;
        height: 100%;
        display: flex;
    `,
);

export { TickerStyles, TickerThumb };
