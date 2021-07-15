import styled, { css } from "styled-components";
import { Box, Label } from "../../accessories";

const NewCodeItemStyles = styled(Box)(
    ({ theme }) => css`
        width: 100%;
        max-width: 340px;
        margin: ${theme.space.auto};
        @media (min-width: ${theme.breakpoints.lg}) {
            max-width: 450px;
        }
    `,
);

const NewCodeLabel = styled(Label)(
    ({ theme }) => css`
        font-size: ${theme.fontSizes.fxs};
        margin: ${theme.space.md} ${theme.space.auto};
        text-align: left;
        width: 300px;
    `,
);

const CheckInput = styled.input(
    ({ theme }) => css`
        margin-left: ${theme.space.zero};
        margin-right: ${theme.space.md};
        vertical-align: bottom;
    `,
);

export { NewCodeItemStyles, NewCodeLabel, CheckInput };
