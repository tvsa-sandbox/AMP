import styled, { css } from "styled-components";
import { Box, Icons, Anchor } from "../../accessories";

const BrandTitleItemStyles = styled.section(
    ({ theme }) => css`
        border-radius: 6px;
        height: 60px;
        max-width: 1440px;
        width: auto;
        display: flex;
        margin: ${theme.space.sm};
        background: ${theme.colors.back};
        border: 1px solid ${theme.colors.Interaction};
        padding: ${theme.space.zero} ${theme.space.md};
        `,
);

const BrandTitleBoxStyles = styled(Box)(
    ({ theme }) => css`
        position: relative;
        display: flex;
        text-transform: uppercase;
        width: auto;
        margin: auto;
        align-items: center;
        `,
);

const BrandTitleIconStyles = styled(Icons)(
    ({ theme }) => css`
        display: flex;
        z-index: 3;
        margin: ${theme.space.zero} ${theme.space.md} ;
        `,
);

const BrandTitleAnchorStyles = styled(Anchor)(
    ({ theme }) => css`
        z-index: 3;
        font-weight: bold;
        font-size: ${theme.fontSizes.fsm};
        display: flex;
        align-items: center;

        @media (min-width: ${theme.breakpoints.xl}) {
            font-size: ${theme.fontSizes.flg};
        }
        `,
);

export { BrandTitleItemStyles, BrandTitleBoxStyles, BrandTitleAnchorStyles, BrandTitleIconStyles };
