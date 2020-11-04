import styled, { css } from "styled-components";
import Title from "../../accessories/Title";

const EpisodeCarouselStyles = styled.section(
    ({ theme }) => css`
    position: relative;
    overflow: hidden;
    max-width: 1440px;
    margin: ${theme.space.auto};
    width:100%;
    height: 305px;

    @media (min-width: ${theme.breakpoints.xl}) {
            height: 370px;
        }
    `,
);

const EpisodeCarouselTitleStyles = styled(Title)(
    ({ theme }) => css`
        text-transform: uppercase;
        display: flex;
        justify-content: cente;
        text-align: center;
        margin: ${theme.space.sm};
        font-size: ${theme.fontSizes.flg};
        color: ${theme.colors.Secondary};

        @media (min-width: ${theme.breakpoints.xl}) {
            font-size: ${theme.fontSizes.fxl};
        }
    `,
);

const EpisodeCarouselThumb = styled.div(
    ({ theme }) => css`
    height: 100%;
    width: auto;
    position: relative;
`,
);

export { EpisodeCarouselStyles, EpisodeCarouselTitleStyles, EpisodeCarouselThumb };
