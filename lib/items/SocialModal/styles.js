import styled, { css } from "styled-components";
import { Box, Button } from "../../accessories";

const SocialBox = styled(Box)(
    ({ theme }) => css`
        align-items: center;
        justify-content: center;
        padding: 1em 0;
        background: transparent;
        border-bottom: ${theme.colors.gray} 1px solid;
    `,
);

const SocialContainer = styled(Box)(
    ({ theme }) => css`
        position: absolute;
        flex-direction: column;
        justify-content: center;
        padding: ${theme.space.zero} ${theme.space.lg};
        bottom: ${theme.space.zero};
    `,
);

const ButtonSocial = styled(Button)(
    ({ theme }) => css`
        width: 50px;
        height: 50px;
        padding: 0;
        justify-content: center;
        margin: ${theme.space.zero} ${theme.space.base};
    `,
);

export { SocialBox, SocialContainer, ButtonSocial };
