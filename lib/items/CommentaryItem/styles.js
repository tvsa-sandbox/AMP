import styled, { css } from "styled-components";
import { Text, Image, Box, Title } from "../../accessories";

const CommentaryStyles = styled(Box)(
    ({ theme }) => css`
        width: 100%;
        max-width: 576px;
        margin: ${theme.space.xl2} ${theme.space.auto};
    `,
);

const CommentaryTitleStyles = styled(Title)(
    ({ theme }) => css`
        text-transform: uppercase;
        padding: ${theme.space.base};
        font-size: ${theme.fontSizes.fmd};
        font-weight: bold;
        line-height: ${theme.lineHeights.lmd};
        width: 100%;
        color: ${theme.colors.Interaction};
    `,
);

const CommentaryPlaceStyles = styled(Image)(
    () => css`
        height: 35px;
        width: 35px;
    `,
);

const CommentaryBoxStyles = styled(Box)(
    ({ theme }) => css`
        border-radius: 10px 10px 0px 0px;
        background: ${theme.colors.gray2};
        padding: ${theme.space.zero} ${theme.space.md};
    `,
);

const CommentaryBoxIcon = styled(Box)(
    () => css`
        width: 40px;
        height: 40px;
    `,
);

const CommentaryBoxImage = styled(Box)(
    () => css`
        width: 43px;
        height: 43px;
        align-items: center;
        display: flex;
    `,
);

const CommentaryBoxCaption = styled(Box)(
    ({ theme }) => css`
        padding: ${theme.space.xl};
    `,
);

const CommentaryTextStyles = styled(Text)(
    ({ theme }) => css`
        font-size: ${theme.fontSizes.fmd};
        font-weight: bold;
        margin-bottom: ${theme.space.base};
        @media (min-width: ${theme.breakpoints.lg}) {
            font-size: ${theme.fontSizes.fbase};
        }
    `,
);

const CommentaryDescriptionStyles = styled(Text)(
    ({ theme }) => css`
        font-size: ${theme.fontSizes.fsm};
        line-height: ${theme.lineHeights.lbase};
        @media (min-width: ${theme.breakpoints.lg}) {
            font-size: ${theme.fontSizes.fmd};
            line-height: ${theme.lineHeights.llg};
        }
    `,
);

export {
    CommentaryStyles,
    CommentaryTitleStyles,
    CommentaryPlaceStyles,
    CommentaryBoxStyles,
    CommentaryBoxIcon,
    CommentaryBoxImage,
    CommentaryBoxCaption,
    CommentaryTextStyles,
    CommentaryDescriptionStyles,
};
