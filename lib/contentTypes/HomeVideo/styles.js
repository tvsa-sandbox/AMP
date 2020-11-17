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
            margin: ${theme.space.xl2} ${theme.space.auto};
        }
    `,
);
const PageStyles = styled.section(
    ({ theme }) => css`
        min-height: 100vh;
        position: relative;
        max-width: 1280px;
        margin: ${theme.space.auto};
    `,
);
const TitleHome = styled(Title)(
    ({ theme }) => css`
        color: ${theme.colors.gray};
        position: relative;
        font-family: ${theme.fonts[1]};
        margin-left: ${theme.space.xxl};
        padding-left: ${theme.space.sm};

        &::after {
            content: "";
            bottom: 3px;
            height: 70%;
            width: 4px;
            background: ${theme.colors.Interaction};
            display: block;
            position: absolute;
            right: 100%;
        }

        @media (min-width: ${theme.breakpoints.xl}) {
            left: 20px;
        }
    `,
);

export { HomeVideoGrid, PageStyles, TitleHome };
