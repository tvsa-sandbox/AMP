import styled, { css } from "styled-components";
import Title from "../../accessories/Title";
import Button from "../../accessories/Button";
import Box from "../../accessories/Box";
import Icons from "../../accessories/Icons";

const CarouselSportsStyles = styled.section(
    ({ theme }) => css`
        margin: ${theme.space.auto};
        background: ${theme.colors.Light};
        display: flex;
        align-items: center;
    `,
);

const CarouselSportsBox = styled(Box)(
    ({ theme }) => css`
        width: auto;
        min-width: 143px;
        height: 72px;
        background: ${theme.colors.Interaction};
        display: flex;
        padding: ${theme.space.base};
    `,
);

const CarouselSportsTitleStyles = styled(Title)(
    ({ theme }) => css`
        justify-content: center;
        text-transform: uppercase;
        font-size: ${theme.fontSizes.fmd};
        color: ${theme.colors.gray};
    `,
);

const CarouselSportsThumb = styled(Box)(
    () => css`
        width: auto;
        height: 100%;
        display: flex;
    `,
);

const CarouselSportsItems = styled(Button)(
    ({ theme }) => css`
        cursor: pointer;
        height: 72px;
        display: flex;
        align-items: center;
        width: auto;
        border-right: 2px solid ${theme.colors.gray2};
        padding: ${theme.space.zero} ${theme.space.lg};
        white-space: nowrap;
    `,
);

const CarouselSportsIcon = styled(Icons)(
    ({ theme }) => css`
        padding: ${theme.space.zero};
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
