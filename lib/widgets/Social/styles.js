import styled, { css } from "styled-components";
import Box from "../../accessories/Box";

const SocialStyles = styled(Box)(
    ({ theme }) => css`
        width: 100%;
        height: auto;
        justify-content: center;
        align-items: center;
        margin: ${theme.space.xl2} ${theme.space.zero};
    `,
);

export default SocialStyles;
