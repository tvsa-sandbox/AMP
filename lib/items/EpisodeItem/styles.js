import styled, { css } from "styled-components";
import { Box, Image, Text, Time, Icons } from "../../accessories";

const EpisodeItemStyles = styled.a(
    ({ theme }) => css`
        border-radius: 6px;
        width: 100%;
        overflow: hidden;
        position: relative;
        display: flex;
        width: 240px;
        margin: ${theme.space.sm};
        height: 306px;
    `,
);

const EpisodeCaptionStyles = styled(Box)(
    ({ theme }) => css`
        border-radius: 0px 0px 6px 6px;
        background: ${theme.colors.gray4};
        height: 171px;
        padding: ${theme.space.zero} ${theme.space.md};
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

const EpisodeLabelStyles = styled(Text)(
    ({ theme }) => css`
        font-size: ${theme.fontSizes.fxs};
        line-height: ${theme.lineHeights.lbase};
        color: ${theme.colors.gray3};
        width: 100%;
    `,
);

const EpisodeDurationStyles = styled(Time)(
    ({ theme }) => css`
        margin-right: ${theme.space.md};
        position: absolute;
        z-index: 3;
        right: 0;
        bottom: 5%;
        padding: 6px;
        background: rgba(0, 0, 0, 0.5);
        font-weight: bold;
    `,
);

const EpisodeSectionStyles = styled(Text)(
    ({ theme }) => css`
        position: absolute;
        left: 0;
        bottom: 8px;
        font-size: ${theme.fontSizes.fxs};
        line-height: ${theme.lineHeights.lsm};
        margin: ${theme.space.xs} ${theme.space.base};
        text-align: right;
        display: block;

        @media (min-width: ${theme.breakpoints.xl}) {
            bottom: 12px;
        }
    `,
);

const EpisodeBoxIconStyles = styled(Box)(
    ({ theme }) => css`
        justify-content: flex-end;
        display: flex;
        width: auto;
        margin: ${theme.space.zero} ${theme.space.auto};
        position: absolute;
        right: 12px;
        bottom: 0px;
        @media (min-width: ${theme.breakpoints.xl}) {
            bottom: 5px;
        }
    `,
);

const EpisodeIconStyles = styled(Icons)(
    ({ theme }) => css`
        width: 35px;
        height: 35px;
        fill: ${theme.colors.gray3};
    `,
);

const EpisodeBoxStyles = styled(Box)(
    ({ theme }) => css`
        height: 25px;
        padding: ${theme.space.md} ${theme.space.md} ${theme.space.zero};

        @media (min-width: ${theme.breakpoints.xl}) {
            height: 40px;
            padding: ${theme.space.base} ${theme.space.md} ${theme.space.zero};
        }
    `,
);

const EpisodeBoxInfoStyles = styled(Box)(
    ({ theme }) => css`
        height: 48px;

        &::after {
            background: ${theme.colors.gray2};
            top: 0px;
            content: "";
            height: 1px;
            position: absolute;
            width: 100%;
        }
    `,
);

export {
    EpisodeItemStyles,
    EpisodeImageStyles,
    EpisodeCaptionStyles,
    EpisodeLabelStyles,
    EpisodeSectionStyles,
    EpisodeDurationStyles,
    EpisodeBoxIconStyles,
    EpisodeIconStyles,
    EpisodeBoxStyles,
    EpisodeBoxInfoStyles,
};
