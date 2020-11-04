import styled, { css } from "styled-components";
import { Box, Title, Text, Icons, Image } from "../../accessories";

const PosterCardStyles = styled.a(
    ({ theme }) => css`
        height: 100%;
        width: 100%;
        overflow: hidden;
        display: flex;
        `,
);

const PosterCardBoxStyles = styled(Box)(
    ({ theme }) => css`
    position: relative;
    display: flex;
    text-transform: uppercase;
    width: auto;
    margin: auto;
    align-items: center;
    `,
);

const PosterCardImageStyles = styled(Image)(
    ({ theme }) => css`
    height:152.57px;

@media (min-width: ${theme.breakpoints.xl}) {
    height:544px;
        }
     `,
);

const PosterCardSubtitleStyles = styled(Text)(
    ({ theme }) => css`
    text-transform: uppercase;
    align-items: center;
    justify-content: center;
    display: flex;
    height: 60px;
    text-align: center;
    color: ${theme.colors.Secondary};
    font-size: ${theme.fontSizes.fbase};
    line-height: ${theme.lineHeights.lmd};
    padding: ${theme.space.sm} ${theme.space.md};

    @media (min-width: ${theme.breakpoints.xl}) {
        font-size: ${theme.fontSizes.flg};
        line-height: ${theme.lineHeights.llg};
        }
     `,
);

const PosterCardTitleStyles = styled(Title)(
    ({ theme }) => css`

    font-size: ${theme.fontSizes.fbase};
    text-align: center;
    text-transform: uppercase;
    padding: ${theme.space.base} ${theme.space.md};
    color: ${theme.colors.Secondary};

         @media (min-width: ${theme.breakpoints.xl}) {
            font-size: ${theme.fontSizes.flg};
        }
     `,
);

const PosterCardIconsStyles = styled(Icons)(
    ({ theme }) => css`
        border-radius: 100%;
        position: absolute;
        min-width: 70px;
        bottom: 25px;
        height: 70px;
        width: 70px;
        padding: ${theme.space.md} ;
        background: ${theme.colors.Dark};
        margin: ${theme.space.zero} ${theme.space.base} ;

        &:hover {
        opacity: 0.9;
    }

        @media (min-width: ${theme.breakpoints.xl}) {
                height: 90px;
                width: 90px;
        }
     `,
);

export {
    PosterCardStyles,
    PosterCardBoxStyles,
    PosterCardImageStyles,
    PosterCardTitleStyles,
    PosterCardSubtitleStyles,
    PosterCardIconsStyles,
};
