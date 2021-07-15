import styled, { css } from "styled-components";
import Box from "../../accessories/Box";
import Text from "../../accessories/Text";
import Button from "../../accessories/Button";
import Title from "../../accessories/Title";
import Anchor from "../../accessories/Anchor";

const RelatedContentBox  = styled(Anchor)(
    ({ theme }) => css`
        cursor: pointer;
        display: block;
        width: 100%;
        margin: ${theme.space.md} auto;
        padding: ${theme.space.sm};
        
        &:hover {
            opacity: 0.8;
        }

        @media (min-width: ${theme.breakpoints.xl}) {
            display: grid;
            grid-template-columns: 54% 46%;
            max-width: 650px;
            padding: ${theme.space.zero};
        }
    `,
);
const RelatedContentStyles= styled(Box)(
    ({ theme }) => css`
    height: auto;
    width: 100%;

    &::after {
            content: "";
            display: flex;
            background: ${theme.colors.gray3};
            width: 50px;
            height: 1px;
            margin: ${theme.space.xl2} ${theme.space.auto} ;
            margin-bottom: ${theme.space.zero};
    }

    &::before {
            content: "";
            display: flex;
            background: ${theme.colors.gray3};
            width: 50px;
            height: 1px;
            margin: ${theme.space.xl2} ${theme.space.auto} ;
    }
            `,
);

const RelatedContentTitleBox = styled(Box)`
    position: relative;
    height: 100%;
`;

const RelatedContentTitleStyles = styled(Title)(
    ({ theme }) => css`
        font-family: ${theme.fonts[2]};
        font-size: ${theme.fontSizes.fmd};
        line-height: ${theme.lineHeights.llg};
        padding: ${theme.space.zero} ${theme.space.xl2} ${theme.space.xl};
        display: flex;
        position: relative;
        height: 100%;
        @media (min-width: ${theme.breakpoints.xl}) {
            grid-column: 1;
            grid-row: 2;
            padding: ${theme.space.zero} ${theme.space.sm} ${theme.space.base};
            font-size: 17px;
        }
    `,
);

const RelatedContentImageContainer = styled(Box)(
    ({ theme }) => css`
        display: flex;
        height: 100%;
        position: relative;
        margin: ${theme.space.auto};
        width: 100%;
        min-height: 162px;
        max-width: 300px;

        @media (min-width: ${theme.breakpoints.xl}) {
            align-items: center;
            grid-column: 2;
            grid-row: 1/4;
            justify-content: center;
            margin: ${theme.space.zero};
        }
    `,
);

const RelatedContentTextStyles = styled(Text)(
    ({ theme }) => css`
        font-size: ${theme.fontSizes.fsm};
        font-family: ${theme.fonts[2]};
        padding-left: ${theme.space.xl2};
        padding-top: ${theme.space.xl};
        padding-bottom: ${theme.space.xl};

        @media (min-width: ${theme.breakpoints.xl}) {
            grid-column: 1;
            grid-row: 1;
            padding-left: ${theme.space.sm};
            padding-top: ${theme.space.xl2};
        }
    `,
);

const RelatedContentBoxButtonStyles = styled(Box)(
    ({ theme }) => css`
        margin-top: ${theme.space.xl};
        margin-bottom: ${theme.space.xl};
        @media (min-width: ${theme.breakpoints.xl}) {
            grid-column: 1;
            grid-row: 3;
            margin-top: ${theme.space.sm};
            margin-bottom: ${theme.space.xl};
            margin-left: ${theme.space.sm};
        }
    `,
);

const RelatedContentButtonStyles = styled(Button)(
    ({ theme }) => css`
        align-items: center;
        background: ${theme.colors.Interaction};
        color: ${theme.colors.Light};
        height: 20px;
        font-size: ${theme.fontSizes.fsm};
        margin: ${theme.space.auto};
        border-radius: 3px;
        padding: ${theme.space.zero} ${theme.space.xxl};

        @media (min-width: ${theme.breakpoints.xl}) {
            margin-left: ${theme.space.zero};
        }
    `,
);

export {
    RelatedContentStyles,
    RelatedContentTextStyles,
    RelatedContentTitleBox,
    RelatedContentTitleStyles,
    RelatedContentImageContainer,
    RelatedContentBoxButtonStyles,
    RelatedContentButtonStyles,
    RelatedContentBox,
};
