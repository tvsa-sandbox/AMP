import styled, { css } from "styled-components";
import { Box, Inputs } from "../../accessories";

const ModalSearchBox = styled(Box)(
    ({ theme }) => css`
        align-items: center;
        display: flex;
        flex-direction: row-reverse;
        justify-content: center;
        max-width: 500px;
        margin: 0.75rem 0;
        background: ${theme.colors.Interaction};
        border-radius: 20px;
        padding-left: 20px;
    `,
);

const ModalSearchInput = styled(Inputs)(
    ({ theme }) => css`
        align-self: stretch;
        background: transparent;
        border: 0;
        box-sizing: content-box;
        flex-grow: 1;
        width: 90%;
        padding: ${theme.space.zero} 0.75rem;
        color: ${theme.colors.gray};
    `,
);

export { ModalSearchBox, ModalSearchInput };
