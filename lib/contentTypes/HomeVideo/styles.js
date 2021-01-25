import styled, { css } from "styled-components";
import { Title } from "../../accessories";

const HomeVideoGrid = styled.section(
    ({ theme }) => css`
        display: grid;
        grid-template-columns: 1fr;
        position: relative;
        max-width: 100%;
        margin: ${theme.space.lg} ${theme.space.auto};

        @media (min-width: ${theme.breakpoints.md}) {
            grid-template-columns: repeat(2, 1fr);
            grid-gap: 10px;
        }
        @media (min-width: ${theme.breakpoints.lg}) {
            grid-template-columns: repeat(4, 1fr);
            margin: ${theme.space.xl} ${theme.space.auto};
        }
    `,
);
const PageStyles = styled.section(
    ({ theme }) => css`
        min-height: 100vh;
        position: relative;
        max-width: 1280px;
        margin: ${theme.space.auto};
        padding-bottom: ${theme.space.xl3};
    `,
);

const BoxContent = styled.div(
    ({ theme }) => css`
        max-width: 1280px;
        padding-bottom: ${theme.space.xl};
    `,
);
const TitleHome = styled(Title)(
    ({ theme }) => css`
        color: ${theme.colors.gray};
        position: relative;

        margin-bottom: ${theme.space.xl};
        padding-left: ${theme.space.sm};

        &::before {
            content: "";
            height: 100%;
            width: 4px;
            height: 19px;
            background: ${theme.colors.Interaction};
            display: inline-block;
            margin-right: ${theme.space.sm};
        }
    `,
);

export { HomeVideoGrid, PageStyles, BoxContent, TitleHome };
