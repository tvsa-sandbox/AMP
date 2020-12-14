import styled, { css } from "styled-components";
import IconDuration from "../../accessories/IconDuration";
import Image from "../../accessories/Image";
import Box from "../../accessories/Box";
import Title from "../../accessories/Title";

const NewsItemStyles = styled.a(
    ({ theme }) => css`
        display: flex;
        width: 100%;
        height: auto;
        max-width: 320px;
        position: relative;
        padding: ${theme.space.md} ${theme.space.zero};
        max-height: 100px;
        min-height: 95px;
        justify-content: center;

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
            width: 100%;
        }
        `,
);

const NewsItemBoxStyles = styled(Box)(
    ({ theme }) => css`
        position: relative;
        height: auto;
        width: 230px;
        padding: ${theme.space.zero} ${theme.space.zero} ${theme.space.zero} ${theme.space.md};
        `,
);

const NewsItemImageStyles = styled(Image)(
    ({ }) => css`
        height: "100%";
        `,
);

const NewsItemTitleStyles = styled(Title)(
    ({ theme }) => css`
    font-size: ${theme.fontSizes.fxs};
    height: auto;
    line-height: ${theme.lineHeights.lsm};
    text-overflow: ellipsis;
    overflow: hidden;
    width: 100%;
    padding-left: ${theme.space.md};
   `,
);

export {
    NewsItemStyles,
    NewsItemBoxStyles,
    NewsItemImageStyles,
    NewsItemTitleStyles,
};
