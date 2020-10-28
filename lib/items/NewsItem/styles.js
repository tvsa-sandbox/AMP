import styled, { css } from "styled-components";
import IconDuration from "../../accessories/IconDuration";
import Image from "../../accessories/Image";
import Box from "../../accessories/Box";
import Title from "../../accessories/Title";

const NewsItemStyles = styled.a(
    ({ theme }) => css`
        display: flex;
        width: 100%;
        height: 95px;
        max-width: 320px;
        position: relative;
        margin: ${theme.space.auto};
        padding: ${theme.space.sm};

        &::before {
            background: #212121;
            bottom: 0;
            opacity: 0.2;
            content: '"';
            display: flex;
            position: absolute;
            justify-content: center;
            align-items: center;
            height: 1px;
            width: 100%;
        }
        `,
);

const NewsItemBoxStyles = styled(Box)`
        position: relative;
        height: auto;
        width: 230px;
`;

const NewsItemImageStyles = styled(Image)`
        height: "100%";
`;

const IconDurationStyles = styled(IconDuration)(
    ({ theme }) => css`
        display: flex;
        position: absolute;
        bottom: 8px;
        left: 3px;
        height: 20px;
        color: ${theme.colors.Dark};
        background:transparent;
        `,
);

const NewsItemTitleStyles = styled(Title)(
    ({ theme }) => css`
    margin: ${theme.space.xxs}${theme.space.md}${theme.space.md}${theme.space.md};
    font-size: ${theme.fontSizes.fxs};
    height: 57px;
    line-height: ${theme.lineHeights.lxl3};
    text-overflow: ellipsis;
    overflow: hidden;
    width: 98%;
   `,
);

export {
    NewsItemStyles,
    IconDurationStyles,
    NewsItemBoxStyles,
    NewsItemImageStyles,
    NewsItemTitleStyles,
};
