import styled, { css } from "styled-components";
import Box from "../Box";
import Button from "../Button";

const ModalStyles = styled(Box)(
    ({ theme }) => css`
        opacity: 1;
        background: ${theme.colors.darkfooter};
        display: ${props => (props.active ? "flex" : "none")};
        align-items: center;
        bottom: 0;
        flex-direction: column;
        height: 100vh;
        justify-content: flex-start;
        left: 0;
        position: fixed;
        right: 0;
        top: 0;
        width: 100%;
        z-index: 25;
    `,
);

const ModalClose = styled(Button)(
    ({ theme }) => css`
        margin: 60px ${theme.space.zero};
    `,
);

export { ModalStyles, ModalClose };
