import styled, { css } from "styled-components";
import { Box, Inputs, Label } from "../../accessories";

const DeleteAccountItemStyles = styled(Box)(
    ({ theme }) => css`
        width: 100%;
        max-width: 340px;
        margin: ${theme.space.auto};
        @media (min-width: ${theme.breakpoints.lg}) {
            max-width: 450px;
        }
    `,
);

const CommentInputStyles = styled(Inputs)(
    ({ theme }) => css`
        width: 100%;
        max-width: 300px;
        height: 100px;
        margin: ${theme.space.md} ${theme.space.auto};
        padding: ${theme.space.md};
        ::placeholder {
            font-size: ${theme.fontSizes.fxs};
        }
    `,
);

const CommentLabelStyles = styled(Label)(
    ({ theme }) => css`
        font-size: ${theme.fontSizes.fxs};
        margin: ${theme.space.md} ${theme.space.auto};
        text-align: left;
        width: 300px;
        position: relative;
        line-height: ${theme.lineHeights.lbase};
    `,
);

export { DeleteAccountItemStyles, CommentInputStyles, CommentLabelStyles };
