import styled, { css } from "styled-components";
import Title from "../../accessories/Title";
import Button from "../../accessories/Button";
import Box from "../../accessories/Box";
import Icons from "../../accessories/Icons";

const CarouselSportsStyles = styled.section(
    ({ theme }) => css`
        height: 100%;
max-width:1440px;
        margin: ${theme.space.auto};
        background: ${theme.colors.Light};
    `,
);

const CarouselSportsBox = styled(Box)`
        width: 143px;
    `;

const CarouselSportsTitleStyles = styled(Title)(
    ({ theme }) => css`
        min-width: 143px;
       justify-content: center;
        display: flex;
        text-transform: uppercase;
        font-size: ${theme.fontSizes.fmd};
    `,
);

const CarouselSportsThumb = styled(Box)(
    ({ theme }) => css`
        width: auto;
      height: 100%;
      margin-left: ${theme.space.md};
      margin-right: ${theme.space.sm};
      display: flex;
    `,
);

const CarouselSportsItems = styled(Button)(
    ({ theme }) => css`
        cursor: pointer;
        height: 60px;
        display: flex;
        align-items: center;
        margin: ${theme.space.sm};
        width: auto;
    `,
);

const CarouselSportsIcon = styled(Icons)(
    ({ theme }) => css`
        margin-right: ${theme.space.sm};
    `,
);

export {
    CarouselSportsStyles,
    CarouselSportsTitleStyles,
    CarouselSportsThumb,
    CarouselSportsItems,
    CarouselSportsBox,
    CarouselSportsIcon,
};
