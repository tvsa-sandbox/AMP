import styled, { css } from "styled-components";
import { Box, Button, Title, Icons, Text, Time } from "accessories";

const ChapterCardStyles = styled.section(
    ({ theme }) => css`
    width: 100%;
    max-width: 1440px;

    `,
);

const ChapterItemStyles = styled.div(
    ({ theme }) => css`
        display: block;
        justify-content: center;
        margin-left: auto;
        margin-right: auto;
        padding-bottom: md;
        height: 430px;
        width:  100%;

        @media (min-width: ${theme.breakpoints.xl}) {
        height: 700px;
        width:  1024px;
        }
        `,
);

const ChapterItemBox = styled(Box)(
    ({ theme }) => css`
                display: block;
                position: relative;
                overflow: none; /*cambia a hidden en ui*/
                max-width: 95%;
                margin: ${theme.space.auto};

                @media (min-width: ${theme.breakpoints.xl}) {
                    max-width: 80%;
        }
        `,
);

const ChapterItemImageContent = styled(Box)(
    ({ theme }) => css`
    margin: auto;
    display: block;
    width: 340px;
    height: 190px;
    background: red;

                @media (min-width: ${theme.breakpoints.xl}) {
                    width: 768px;
                     height: 433px;
        }
        `,
);

const ChapterItemCaption = styled(Box)(
    ({ theme }) => css`
    width: 95%;
    margin: ${theme.space.base} ${theme.space.auto} ${theme.space.zero};
    display: block;


@media (min-width: ${theme.breakpoints.xl}) {
                    width: 93%;
        }
        `,
);

const ChapterItemBoxIcon = styled(Box)(
    ({ theme }) => css`
    height: 40px;
    position: relative;

        `,
);

const ChapterItemIconStyles = styled(Icons)(
    ({ theme }) => css`
                display: block;
                position: absolute;
                top: 0px;
                right: 0;
                @media (min-width: ${theme.breakpoints.xl}) {
                    top: 2px;

        }
        `,
);

const ChapterItemTimeStyles = styled(Time)(
    ({ theme }) => css`
        color: ${theme.colors.gray3};
        margin-top:  ${theme.space.xl};
        font-size: ${theme.fontSizes.fxs};

                    @media (min-width: ${theme.breakpoints.xl}) {
                        margin-top:  ${theme.space.xl2};
                        font-size: ${theme.fontSizes.fsm};

        }
        `,
);

const ChapterItemDateStyles = styled(Time)(
    ({ theme }) => css`
                color: ${theme.colors.Secondary};
                padding-left: ${theme.space.lg};
                font-size: ${theme.fontSizes.fxs};

                @media (min-width: ${theme.breakpoints.lg}) {
                    padding-left: ${theme.space.xl};
        }
    `,
);

const ChapterItemLabelStyles = styled(Text)(
    ({ theme }) => css`
                display: flex;
                align-items: center;
                color: ${theme.colors.gray3};
                font-size: ${theme.fontSizes.fxs};
                max-width: 200px;
                margin-bottom: ${theme.space.sm};

                @media (min-width: ${theme.breakpoints.lg}) {
                    font-size: ${theme.fontSizes.fsm};

        }
    `,
);

const ChapterItemTitleStyles = styled(Title)(
    ({ theme }) => css`
                height: 25px;
                color: ${theme.colors.gray3};
                font-size: ${theme.fontSizes.fsm};
                line-height: ${theme.lineHeights.lbase};
                display: block;

                @media (min-width: ${theme.breakpoints.lg}) {
                    font-size: ${theme.fontSizes.fmd};

        }
    `,
);

const ChapterItemTextStyles = styled(Text)(
    ({ theme }) => css`
    font-size: ${theme.fontSizes.fsm};
    color: ${theme.colors.Secondary};
    height: 50px;
    display: block;
    margin-bottom: ${theme.space.sm};

@media (min-width: ${theme.breakpoints.lg}) {
                    font-size: ${theme.fontSizes.fmd};

        }
    `,
);

const ChapterItemButtonStyles = styled(Button)(
    ({ theme }) => css`
                border-radius: 25px;
                background: transparent;
                margin: ${theme.space.auto};
                font-size: ${theme.fontSizes.fsm};
                font-weight: bold;
                min-width: 126px;
                justify-content: center;
                `,
);

const ChapterItemBoxTime = styled(Box)(
    ({ theme }) => css`
                margin-bottom: ${theme.space.sm};
                `,
);

export {
    ChapterCardStyles,
    ChapterItemBox,
    ChapterItemStyles,
    ChapterItemIconStyles,
    ChapterItemTimeStyles,
    ChapterItemDateStyles,
    ChapterItemLabelStyles,
    ChapterItemButtonStyles,
    ChapterItemTitleStyles,
    ChapterItemTextStyles,
    ChapterItemImageContent,
    ChapterItemCaption,
    ChapterItemBoxIcon,
    ChapterItemBoxTime,
};
