import styled, { css } from "styled-components";
import {Title, Box} from "../../accessories";

const NewsStyles = styled(Box)(
    ({ theme }) => css`
        width: 100%;
        background: ${theme.colors.Light};
        min-height: 446px;
        margin-left: 12px;
        @media (min-width: ${theme.breakpoints.xl}) {
            min-height: 629px;
            margin-left: 0px;
        }
    `,
);

const NewsTitleStyles = styled(Title)(
    ({ theme }) => css`
        color: ${theme.colors.Dark};
        margin-top: ${theme.space.zero};
        text-transform: uppercase;
        padding: ${theme.space.base};
    `,
);

export { NewsStyles, NewsTitleStyles };
