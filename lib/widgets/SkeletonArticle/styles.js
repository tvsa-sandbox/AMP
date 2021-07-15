import styled, { css } from "styled-components";
import { Box, Placeholder } from "../../accessories";

const SkeletonArticleStyles = styled.section(
    ({ theme }) => css`
        width: 100%;
        height: auto;
        @media (min-width: ${theme.breakpoints.xl}) {
            max-width: 650px;
            margin: ${theme.space.zero} ${theme.space.auto};
        }
    `,
);


const SkeletonArticleBox = styled(Box)(
    ({}) => css`
    width: 100%;
    display: block;
    position: relative;
    `,
);

const SkeletonArticleLabel = styled(Box)(
    ({ theme }) => css`
        display:block;
        width: 200px;
        height: 18px;
        background: #e7e5e5;
        margin: ${theme.space.xl} ${theme.space.xl2};
    `,
);

const SkeletonArticleTitle = styled(Box)(
    ({ theme }) => css`
        display:block;
        width: 270px;
        height: 40px;
        background: #e7e5e5;
        margin: ${theme.space.zero} ${theme.space.xl2}  ${theme.space.md};

        @media (min-width: ${theme.breakpoints.xl}) {
            width: 650px;
        }
    `,
);

const SkeletonArticleDescription = styled(SkeletonArticleTitle)(
    ({ theme }) => css`
        width: 250px;
        height: 26px;
        margin: ${theme.space.zero} ${theme.space.xl2} ${theme.space.sm};

        @media (min-width: ${theme.breakpoints.xl}) {
            width: 620px;
        }
    `,
);

const SkeletonArticleAuthor= styled(SkeletonArticleTitle)(
    ({ }) => css`
        width: 110px;
        height:10px;
    `,
);

const SkeletonArticlePlaceholder = styled(Placeholder)(
    ({ theme}) => css`
        width: auto;
        margin: ${theme.space.xl} ${theme.space.md};

        @media (min-width: ${theme.breakpoints.xl}) {
            margin: ${theme.space.lg} ${theme.space.xl2} ;
        }
    `,
);

const SkeletonArticleBody= styled(SkeletonArticleTitle)(
    ({ theme}) => css`
         height: 26px;
        margin: ${theme.space.sm} ${theme.space.xl2} ${theme.space.sm};
        
    `,
);



export {SkeletonArticleStyles,SkeletonArticleBox, SkeletonArticleLabel, SkeletonArticleTitle, SkeletonArticleDescription, SkeletonArticleAuthor, SkeletonArticlePlaceholder , SkeletonArticleBody};
