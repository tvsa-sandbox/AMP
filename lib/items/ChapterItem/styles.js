import styled, { css } from "styled-components";
import { Box, Title, Icons, Text, Time, Anchor } from "accessories";

const ChapterCardStyles = styled.section(
    ({ theme }) => css`
    width: 100%;

    `,
);

const ChapterItemStyles = styled.div(
    ({ theme }) => css`
        display: block;
        padding-bottom: md;
        height:auto;
        width:  100%;
        border-bottom: 2px solid ${theme.colors.gray2};
        margin-bottom: ${theme.space.lg} ;
        

        @media (min-width: ${theme.breakpoints.xl}) {
        margin-bottom: ${theme.space.lg} ;  
        max-width: 289px;
        }
        `,
);

const ChapterItemBox = styled(Box)(
    ({ theme }) => css`
                display: block;
                position: relative;
                max-width: 100%;
                margin: ${theme.space.auto};

        `,
);

const ChapterItemImageContent = styled(Box)(
    ({ theme }) => css`
    margin: auto;
    display: block;
    height: auto;
    width: 100%;

        `,
);

const ChapterItemCaption = styled(Box)(
    ({ theme }) => css`
    width: 100%;
    height: auto;
    min-height: 155px;
    margin: ${theme.space.base} ${theme.space.auto} ${theme.space.zero};
    display: block;
    overflow: hidden;

        `,
);

const ChapterItemIconStyles = styled(Icons)(
    ({ theme }) => css`
                border-radius: 100%;
                border: 1px solid  ${theme.colors.gray};
                width: 48px;
                height: 48px;
                grid-area: icono;
                margin:${theme.space.auto};
                fill: ${theme.colors.gray};

        `,
);

const ChapterItemTimeStyles = styled(Time)(
    ({ theme }) => css`
        color: ${theme.colors.gray3};
        margin:  ${theme.space.zero} ${theme.space.auto};
        font-size: ${theme.fontSizes.fxs};
        grid-area: duration;

        `,
);

const ChapterItemDateStyles = styled(Time)(
    ({ theme }) => css`
                color: ${theme.colors.gray3};
                font-size: ${theme.fontSizes.fxs};
                grid-area: date;
    `,
);

const ChapterItemLabelStyles = styled(Text)(
    ({ theme }) => css`
                display: none;
                align-items: center;
                color: ${theme.colors.gray3};
                font-size: ${theme.fontSizes.fxs};
                grid-area: icono;

    `,
);

const ChapterItemTitleStyles = styled(Title)(
    ({ theme }) => css`
                color: ${theme.colors.gray3};
                font-size: ${theme.fontSizes.fsm};
                line-height: ${theme.lineHeights.lbase};
                display: block;
                font-weight: bold;
                grid-area: título;

    `,
);

const ChapterItemTextStyles = styled(Text)(
    ({ theme }) => css`
    font-size: ${theme.fontSizes.fsm};
    line-height: ${theme.lineHeights.lbase};
    color: ${theme.colors.gray3};
    display: block;
    margin:${theme.space.zero} ${theme.space.lg} ${theme.space.base};

    @media (min-width: ${theme.breakpoints.xl}) {

        margin:${theme.space.zero} ${theme.space.md} ${theme.space.sm} ${theme.space.base};
                    
                }

    `,
);

const ChapterItemBoxTop = styled(Box)(
    ({ theme }) => css`
                margin: ${theme.space.md} ${theme.space.zero} ${theme.space.xl};
                display: grid;
                grid-gap: 5px;
  grid-template-columns: 0.5fr 1fr 0.5fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    "icono título duration"
    "icono date duration";
                
                `,
);

const ChapterItemAnchor = styled(Anchor)`
    grid-area: icono;
    display: flex;
                
                `;

export {
    ChapterCardStyles,
    ChapterItemBox,
    ChapterItemStyles,
    ChapterItemIconStyles,
    ChapterItemTimeStyles,
    ChapterItemDateStyles,
    ChapterItemLabelStyles,
    ChapterItemTitleStyles,
    ChapterItemTextStyles,
    ChapterItemImageContent,
    ChapterItemCaption,
    ChapterItemBoxTop,
    ChapterItemAnchor,
};
