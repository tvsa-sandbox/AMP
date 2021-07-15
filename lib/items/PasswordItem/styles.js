import styled, { css } from "styled-components";
import { Box, Text } from "../../accessories";

const PasswordItemStyles = styled(Box)(
    ({ theme }) => css`
        width: 100%;
        max-width: 340px;
        margin: ${theme.space.auto};
        @media (min-width: ${theme.breakpoints.lg}) {
            max-width: 450px;
        }
    `,
);

export { PasswordItemStyles };
