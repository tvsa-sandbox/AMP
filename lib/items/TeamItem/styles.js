import styled, { css } from "styled-components";
import { Box, Title, Text } from "../../accessories";

const TeamItemStyles = styled(Box)(
    ({ theme }) => css`
        border-radius: 6px;
        max-width: 342px;
        position: relative;
        display: flex;
        justify-content: space-around;
        padding: ${theme.space.md};
        margin: ${theme.space.md} ${theme.space.auto};

        @media (min-width: ${theme.breakpoints.xl}) {
            max-width: 500px;
            padding: ${theme.space.xl};
            height: auto;
        }
    `,
);

const TeamThumbnailStyles = styled(Box)(
    ({ theme }) => css`
        width: 40%;
        height: auto;

        @media (min-width: ${theme.breakpoints.xl}) {
            height: 180px;
            width: 180px;
        }
    `,
);

const TeamCaptionStyles = styled(Box)(
    ({ theme }) => css`
        height: auto;
        width: 60%;
        margin-left: ${theme.space.xl};
        @media (min-width: ${theme.breakpoints.xl}) {
            height: auto;
            margin-left: ${theme.space.xl};
        }
    `,
);

const TeamTitleStyles = styled(Title)(
    ({ theme }) => css`
            font-size: ${theme.fontSizes.fmd};
            line-height: ${theme.lineHeights.lbase};
            display: flex;
            align-items: center;
            font-weight: bold;
            margin-bottom: ${theme.space.base};

            @media (min-width: ${theme.breakpoints.xl}) {
                font-size: ${theme.fontSizes.flg};
                padding-bottom: ${theme.space.sm};
            }
        }
    `,
);

const TeamInfoStyles = styled(Text)(
    ({ theme }) => css`
            color: ${theme.colors.gray3};
            display: flex;
            align-items: center;
            font-weight: bold;
            padding-bottom: base;
            width: 50%;
            margin-bottom: ${theme.space.sm};

            @media (min-width: ${theme.breakpoints.xl}) {
                font-size: ${theme.fontSizes.fsm};
                margin-bottom: ${theme.space.base};
            }
        }
    `,
);

const TeamTextStyles = styled(Text)(
    ({ theme }) => css`
            color: ${theme.colors.Dark};
            align-items: center;
            font-weight: normal;
            width: 50%;
            margin-bottom: ${theme.space.sm};

            @media (min-width: ${theme.breakpoints.xl}) {
                font-size: ${theme.fontSizes.fsm};
                margin-bottom: ${theme.space.base};
            }
        }
    `,
);

export {
    TeamItemStyles,
    TeamCaptionStyles,
    TeamThumbnailStyles,
    TeamTitleStyles,
    TeamInfoStyles,
    TeamTextStyles,
};
