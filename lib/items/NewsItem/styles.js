import styled, { css } from "styled-components";
import {Text, Image, Box, Title, Anchor} from "../../accessories";

const NewsItemStyles = styled(Anchor)(
    ({ theme }) => css`
        display: flex;
        height: 100%;
        width: 100%;
        position: relative;
        min-height: 121px;
        grid-area: news;
        margin: ${theme.space.zero};
        align-items: center;

        @media (min-width: ${theme.breakpoints.xl}) {
            width: 454px;
            height: 151px;
            min-height: 150px;
            margin: ${theme.space.lg} ${theme.space.zero};
            align-items: flex-start;
        }

        &::after {
            background: #212121;
            bottom: 0;
            opacity: 0.2;
            content: "";
            display: flex;
            position: absolute;
            justify-content: center;
            align-items: center;
            height: 1px;
            width: 93%;

            @media (min-width: ${theme.breakpoints.xl}) {
                width: 95%;
         }
        }

        &:first-child {
            @media (min-width: ${theme.breakpoints.xl}) {
                margin: ${theme.space.zero};
         }
        }

        &:last-child {
            &::after {
            background: none;
        }
             }
        `,
);

const NewsItemBoxStyles = styled(Box)(
    ({ theme }) => css`
        position: relative;
        height: 86px;
        width: 47%;
        overflow: hidden;
        border-radius: 8px;

        @media (min-width: ${theme.breakpoints.xl}) {
            height: 140px;
            width: 283px;
        }
        `,
);

const NewsItemImageStyles = styled(Image)(
    ({ }) => css`
        border-radius: 10px;
        `,
);

const NewsItemCaption = styled(Box)(
    ({theme }) => css`
        width: 53%;
        height: 86px;

        @media (min-width: ${theme.breakpoints.xl}) {
            height: 135px;
            width: 240px;
        }
        `,
);

const NewsItemTitleStyles = styled(Title)(
    ({ theme }) => css`
    font-size: ${theme.fontSizes.fsm};
    height: auto;
    max-height: 100px;
    line-height: ${theme.lineHeights.lmd};
    text-overflow: ellipsis;
    overflow: hidden;
    width: 100%;
    padding: ${theme.space.zero} ${theme.space.md};
    font-weight: 400;

    @media (min-width: ${theme.breakpoints.xl}) {
            font-size: ${theme.fontSizes.fmd};
            line-height: ${theme.lineHeights.lbase};
            width: 171px;
        }
   `,
);

const NewsItemLabelStyles = styled(Text)(
    ({theme}) => css`   
    color: ${theme.colors.gray};
    padding: ${theme.space.xs};
    font-weight: bold;
    `,
);

const NewsItemBoxLabel = styled(Box)(
    ({theme}) => css`
        position: absolute;
        bottom: 0px;
        width: auto;
        min-width: 50px;
        justify-content: center;
        height: 20px;
        align-items: center;
        z-index: 2;
        right: 0;
        background: rgba(0, 0, 0, 0.5);
        min-height: 25px;
        display: flex;
        border-radius: 5px 0px 5px 0px;
        
        @media (min-width: ${theme.breakpoints.xl}) {
            bottom: 1px;
        }
    `,
);

const NewsItemBoxLabelActive = styled(NewsItemBoxLabel)(
    () => css`
        background: rgba(167, 10,11, 0.8);
    `,
);

const NewsItemSectionStyles = styled(Text)(
    ({theme}) => css`
        font-size: ${theme.fontSizes.fxs};
        width: 100%;
        color: ${theme.colors.Interaction};
        padding-left: ${theme.space.md};
        text-transform: uppercase;
        font-weight: bold;
        margin-bottom: ${theme.space.base};
        margin-top: ${theme.space.zero};
        
        @media (min-width: ${theme.breakpoints.xl}) {
            margin-bottom: ${theme.space.xxl};
            margin-top: ${theme.space.zero};
            font-size: ${theme.fontSizes.fsm};
        }
    `,
);

export {
    NewsItemStyles,
    NewsItemBoxStyles,
    NewsItemImageStyles,
    NewsItemTitleStyles,
    NewsItemLabelStyles,
    NewsItemBoxLabel,
    NewsItemSectionStyles,
    NewsItemBoxLabelActive,
    NewsItemCaption,
};
