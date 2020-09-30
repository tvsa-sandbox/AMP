import styled, { css } from "styled-components";
import { Box, Inputs } from "../../accessories";

const ModalSearchBox = styled(Box)(
    ({ theme }) => css`
        align-items: center;
        display: flex;
        justify-content: center;
        max-width: 500px;
        margin: 0.75rem 0;
        border-bottom: ${theme.colors.Dark} 2px solid;
    `,
);

const ModalSearchInput = styled(Inputs)(
    ({ theme }) => css`
        align-self: stretch;
        background: transparent;
        border: 0;
        box-sizing: content-box;
        flex-grow: 1;
        width: 100%;
        padding: ${theme.space.zero} 0.75rem;
        color: ${theme.colors.Dark};
    `,
);

export { ModalSearchBox, ModalSearchInput };
