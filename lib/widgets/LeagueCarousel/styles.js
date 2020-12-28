import styled, { css } from "styled-components";
import { Box } from "../../accessories";

const LeagueCarouselStyles = styled.section(
    ({ theme }) => css`
        height: 100%;
        max-width: 1280px;
        width: 100%;
        margin: ${theme.space.auto};
        margin-bottom: ${theme.space.base};
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

export { LeagueCarouselStyles, LeagueCarouselThumb, BoxStyles };
