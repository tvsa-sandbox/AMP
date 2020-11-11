import styled, { css } from "styled-components";
import { Box, Icons } from "../../accessories";

const LeagueCarouselStyles = styled.section(
    ({ theme }) => css`
        height: 100%;
        max-width: 1440px;
        width: 100%;
        margin: ${theme.space.auto};
        margin-bottom: ${theme.space.base};
    `,
);

const ThumbnailsLeagueStyles = styled.div(
    ({ theme }) => css`
        display: flex;
        margin: ${theme.space.auto};
        width: 100%;
        overflow-y: hidden;
        overflow-x: scroll;
        @media (min-width: ${theme.breakpoints.xl}) {
            max-width: 1160px;
            min-width: 1024px;
        }
    `,
);

const LeaguesIconStylesLeft = styled(Icons)(
    ({ theme }) => css`
        display: none;
        @media (min-width: ${theme.breakpoints.xl}) {
            width: 30px;
        }
    `,
);

const LeaguesIconStylesRight = styled(Icons)(
    ({ theme }) => css`
        display: none;
        @media (min-width: ${theme.breakpoints.xl}) {
            width: 30px;
        }
    `,
);

const LeagueCarouselThumb = styled(Box)(
    () => css`
        width: auto;
        height: 100%;
        display: flex;
    `,
);

const BoxStyles = styled(Box)(
    () => css`
        width: auto;
        height: 100%;
        display: flex;
    `,
);

export {
    LeagueCarouselStyles,
    ThumbnailsLeagueStyles,
    LeaguesIconStylesLeft,
    LeaguesIconStylesRight,
    LeagueCarouselThumb,
    BoxStyles,
};
