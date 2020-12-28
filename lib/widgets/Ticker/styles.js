import styled, { css } from "styled-components";
import { Box, Anchor } from "../../accessories";

const TickerStyles = styled.section(
    ({ theme }) => css`
        cursor: pointer;
        width: 100%;
        height: auto;
        max-width: 1280px;
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
const SponsorCaliente = styled(Anchor)(
    ({ theme }) => css`
        align-items: center;
        display: flex;
        height: 48px;
        margin-left: ${theme.space.xxl};
    `,
);

const SponsorCalienteImageStyles = styled(Box)(
    ({ theme }) => css`
        height: 25px;
        max-width: 65px;
        width: 100%;
        align-items: center;
        display: flex;
        margin-left: ${theme.space.sm};
    `,
);

export { TickerStyles, TickerThumb, SponsorCaliente, SponsorCalienteImageStyles };
