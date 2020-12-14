import styled, { css } from "styled-components";
import { Box, Button } from "../../accessories";

const PromotionalBox = styled(Box)(
    ({ theme }) => css`
        position: absolute;
        bottom: 0;
        padding: ${theme.space.base};
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        height: 150px;

        @media (min-width: ${theme.breakpoints.lg}) {
            width: 35%;
            align-items: flex-start;
            top: 50%;
            left: 50px;
            transform: translateY(-50%);
        }
    `,
);

const PromotionalButton = styled(Button)(
    () => css`
        width: 100%;
        justify-content: center;
    `,
);

export { PromotionalBox, PromotionalButton };
