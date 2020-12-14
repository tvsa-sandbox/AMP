import styled, { css } from "styled-components";
import { Box, Button, Icons } from "../../accessories";

const SocialBoxStyles = styled(Box)(
    ({ theme }) => css`
        align-items: center;
        justify-content: flex-end;
        padding: ${theme.space.base} 0;
        background: transparent;
    `,
);

const ButtonSocial = styled(Button)(
    ({ theme }) => css`
        width: 50px;
        height: 50px;
        padding: ${theme.space.zero};
        background: none;
        justify-content: center;
        margin: ${theme.space.zero} ${theme.space.xs};

        &:first-of-type {
            margin-left: ${theme.space.zero};
        }
        &:last-of-type {
            margin-right: ${theme.space.zero};
        }
        @media (min-width: ${theme.breakpoints.lg}) {
            margin: ${theme.space.zero} ;
        }
    `,
);

const IconsStyles = styled(Icons)(
    ({ theme }) => css`
       background: ${theme.colors.gray};
       border-radius: 50px;
    `,
);

export { SocialBoxStyles, ButtonSocial, IconsStyles };
