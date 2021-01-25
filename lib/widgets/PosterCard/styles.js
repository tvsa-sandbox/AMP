import styled, { css } from "styled-components";
import { Box, Title, Text, Icons } from "../../accessories";

const Tags = styled.ul(
    ({ theme }) => css`
        width: 100%;
        display: flex;
        list-style: none;
        margin: ${theme.space.base} ${theme.space.auto};
        overflow-x: auto;
        position: relative;

        &::before {
            display: block;
            position: absolute;
            content: "";
            width: 5px;
            min-height: 100%;
            background: ${theme.colors.Interaction};
        }
    `,
);

const Tag = styled.li(
    ({ theme }) => css`
        display: inline-flex;
        margin: ${theme.space.zero} ${theme.space.base};
        flex: 0 0 auto;
    `,
);
const PosterCardBoxStyles = styled(Box)(
    () => css`
        position: relative;
        display: flex;
        text-transform: uppercase;
        width: auto;
        margin: auto;
        align-items: center;
    `,
);

const PosterCardDescription = styled(Text)(
    ({ theme }) => css`
        max-height: 100px;
        overflow: hidden;
        color: ${theme.colors.grey};
        font-size: ${theme.fontSizes.fmd};
    `,
);

const PosterBox = styled(Box)(
    ({ theme }) => css`
        padding: 22.5% ${theme.space.base} ${theme.space.base};

        @media (min-width: ${theme.breakpoints.xl}) {
            width: 50%;
            padding: 15% ${theme.space.base} ${theme.space.base};
        }
    `,
);

const PosterCardTitleStyles = styled(Title)(
    ({ theme }) => css`
        display: inline-flex;
        font-size: ${theme.fontSizes.fbase};
        text-transform: uppercase;
        color: ${theme.colors.grey};
        margin: ${theme.space.base};

        @media (min-width: ${theme.breakpoints.xl}) {
            font-size: ${theme.fontSizes.flg};
        }
    `,
);

const PosterCardIconsStyles = styled(Icons)(
    ({ theme }) => css`
        border-radius: 100%;
        height: 50px;
        width: 50px;
        padding: ${theme.space.md};
        background: transparent;
        margin: ${theme.space.base} ${theme.space.zero};
        border: solid 1px ${theme.colors.grey};

        &:hover {
            opacity: 0.9;
        }

        @media (min-width: ${theme.breakpoints.xl}) {
            height: 70px;
            width: 70px;
        }
    `,
);

export {
    Tags,
    Tag,
    PosterCardBoxStyles,
    PosterCardTitleStyles,
    PosterCardDescription,
    PosterCardIconsStyles,
    PosterBox,
};
