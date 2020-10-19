import styled, { css } from "styled-components";
import Box from "../../accessories/Box";

const LeagueCarouselStyles = styled.section(
    ({ theme }) => css`
        height: 100%;
        max-width: 1440px;
        width: 100%;
        margin: ${theme.space.auto};
        margin-bottom: ${theme.space.base};
    `,
);

const LeagueCarouselThumb = styled(Box)(
    ({ theme }) => css`
        width: auto;
        height: 100%;
        display: flex;
    `,
);

export { LeagueCarouselStyles, LeagueCarouselThumb };
