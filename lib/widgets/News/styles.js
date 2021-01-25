import styled, { css } from "styled-components";
import Title from "../../accessories/Title";

const NewsStyles = styled.section(
    ({ theme }) => css`
        width: 100%;
        max-width: 320px;
        margin: ${theme.space.zero} ${theme.space.auto};
        background: ${theme.colors.Light};
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
