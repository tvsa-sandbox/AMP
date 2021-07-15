import styled, { css } from "styled-components";
import Box from "../../accessories/Box";
import Anchor from "../../accessories/Anchor";

const BoxItemStyles = styled(Box)(
    ({ theme }) => css`
        width: ${props => (props.width ? props.width : 100)}%;
        position: relative;
        margin: 0 6px;
    `,
);

export { BoxItemStyles };
