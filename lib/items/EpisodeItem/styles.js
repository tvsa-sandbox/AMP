import styled, { css } from "styled-components";
import { Box, Title, Image, Text, Time, IconDuration } from "../../accessories";

const EpisodeItemStyles = styled.a(
    ({ theme }) => css`
        border-radius: 6px;
        width: 100%;
        overflow: hidden;
        position: relative;
        display: flex;
        width:  240px;
        margin: ${theme.space.sm};

        @media (min-width: ${theme.breakpoints.xl}) {
        height: 306px;
        }
        `,
);

const EpisodeCaptionStyles = styled(Box)(
    ({ theme }) => css`
    border-radius: 6px;
    height: 125px;

    @media (min-width: ${theme.breakpoints.xl}) {
            height: 171px;
        }
        `,
);

const EpisodeImageStyles = styled(Image)(
    ({ theme }) => css`
    width: 165px;
    height: 220px;

@media (min-width: ${theme.breakpoints.xl}) {
            height: 328px;
            width: 246px;
        }
        `,
);

const EpisodeThumbnailStyles = styled(Box)(
    ({ theme }) => css`
 text-transform: uppercase;
 background: transparent;
`,
);

const EpisodeLabelStyles = styled(Text)(
    ({ theme }) => css`
    text-transform: uppercase;
    height: 33px;
    padding: ${theme.space.base} ${theme.space.md} ${theme.space.zero};
    font-size: ${theme.fontSizes.fsm};
    line-height: ${theme.lineHeights.lbase};
    color: ${theme.colors.Secondary};
    display: block;

    @media (min-width: ${theme.breakpoints.xl}) {
        padding: ${theme.space.xl} ${theme.space.md} ${theme.space.zero};
        font-size: ${theme.fontSizes.fbase};
        line-height: ${theme.lineHeights.lxl};
        }
        `,
);

const EpisodeDurationStyles = styled(IconDuration)(
    ({ theme }) => css`
    text-transform: uppercase;
    bottom: 0px;
    height: 34px;
    background: Transparent;
    display: flex;
    position: absolute;
    `,
);;

const EpisodeTitleStyles = styled(Title)(
    ({ theme }) => css`
                color: ${theme.colors.gray3};
                font-size: ${theme.fontSizes.fmd};
                line-height: ${theme.lineHeights.lbase};
                margin: ${theme.space.xs} ${theme.space.md};
                overflow: hidden;
                max-height: 55px;

                @media (min-width: ${theme.breakpoints.lg}) {
                    font-size: ${theme.fontSizes.fmd};
                    line-height: ${theme.lineHeights.lxl};
                    margin: ${theme.space.lg} ${theme.space.md};
                    max-height: 80px;
        }
    `,
);

const EpisodeTimeStyles = styled(Time)(
    ({ theme }) => css`
        text-transform: uppercase;
        position: absolute;
        right: 0;
        bottom: 5px;
        font-size: ${theme.fontSizes.fsm};
        line-height: ${theme.lineHeights.lbase};
        margin:${theme.space.xs} ${theme.space.md};
        color: ${theme.colors.Secondary};
        text-align: right;
        display: block;

                @media (min-width: ${theme.breakpoints.xl}) {
                    bottom: 10px;
                    font-size: ${theme.fontSizes.fbase};
                    line-height: ${theme.lineHeights.lmd};
        }
        `,
);

export {
    EpisodeItemStyles,
    EpisodeImageStyles,
    EpisodeTitleStyles,
    EpisodeCaptionStyles,
    EpisodeLabelStyles,
    EpisodeTimeStyles,
    EpisodeThumbnailStyles,
    EpisodeDurationStyles,
};
