import styled, { css } from "styled-components";
import Title from "../../accessories/Title";
import Text from "../../accessories/Text";
import Box from "../../accessories/Box";
import Anchor from "../../accessories/Anchor";

const ItemMostStyles = styled(Anchor)(
    ({ theme }) => css`
        background: ${theme.colors.Dark};
        display: block;
        height: 100%;
        margin: ${theme.space.auto};
        padding: ${theme.space.base};
        position: relative;

        &::before {
            content: "";
            height: 1px;
            width: 90%;
            background: ${theme.colors.gray};
            display: block;
            position: absolute;
            bottom: 0px;
            margin: ${theme.space.auto};
        }

        &:last-child::before {
            display: none;
        }
    `,
);

const ItemMostTitleContainer = styled(Box)(
    () => css`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
    `,
);

const ItemMostTitleStyles = styled(Title)(
    ({ theme }) => css`
        color: ${theme.colors.Light};
        padding: ${theme.space.base};
        font-size: ${theme.fontSizes.fmd};
        position: relative;
        line-height: ${theme.lineHeights.lbase};
        text-align: left;
        max-height: 92px;
        overflow: hidden;
        width: 90%;
    `,
);

const ItemMostNumberStyles = styled(Text)(
    ({ theme }) => css`
        color: ${theme.colors.gray4};
        font-size: ${theme.fontSizes.fxl3};
        font-weight: ${theme.fontWeights.bold};
        height: 100%;
        width: 10%;
    `,
);
const TextSmall = styled(Text)(
    ({ theme }) => css`
        color: ${theme.colors.Interaction};
        margin-left: ${theme.space.base};
        display: none;
    `,
);

export {
    ItemMostStyles,
    ItemMostTitleContainer,
    ItemMostTitleStyles,
    ItemMostNumberStyles,
    TextSmall,
};
