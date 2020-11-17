import styled, { css } from "styled-components";
import { Box } from "../../accessories";

export const SocialContainer = styled(Box)(
    ({ theme }) => css`
        position: absolute;
        flex-direction: column;
        justify-content: center;
        padding: ${theme.space.zero} ${theme.space.lg};
        bottom: ${theme.space.zero};
    `,
);
