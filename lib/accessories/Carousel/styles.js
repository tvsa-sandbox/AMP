import styled, { css } from "styled-components";
import Icons from "../Icons";
import Button from "../Button";

const CarouselStyles = styled.div(
    ({ theme }) => css`
        height: 100%;
        max-width: 1440px;
        margin: ${theme.space.auto};
        position: relative;
        width: 100%;
    `,
);

const Track = styled.div(
    ({ theme }) => css`
        display: flex;
        height: 100%;
        max-width: 1440px;
        overflow: hidden;
        margin: ${theme.space.auto};
    `,
);

const Thumbnails = styled.div(
    ({ theme }) => css`
        display: flex;
        margin: ${theme.space.auto};
        width: 100%;
        overflow-y: hidden;
        overflow-x: scroll;
    `,
);

const ButtonStylesLeft = styled(Button)(
    ({ theme }) => css`
        position: absolute;
        left: 0;
        display: flex;
        top: 0%;
        height: 100%;
        margin: ${theme.space.zero};
        z-index: 5;

        @media (max-width: ${theme.breakpoints.md}) {
            display: none;
        }
    `,
);

const ButtonStylesRight = styled(Button)(
    ({ theme }) => css`
        position: absolute;
        right: 0;
        top: 0%;
        height: 100%;
        z-index: 5;

        @media (max-width: ${theme.breakpoints.md}) {
            display: none;
        }
    `,
);

const IconStylesRight = styled(Icons)(
    ({ theme }) => css`
        position: absolute;
        right: 0;
        top: 0;
        height: 100%;
        fill: ${theme.colors.Interaction};
        width: 75px;
        right: 0px;
    `,
);

const IconStylesLeft = styled(IconStylesRight)`
    left: 0;
`;

export {
    CarouselStyles,
    Track,
    Thumbnails,
    ButtonStylesLeft,
    ButtonStylesRight,
    IconStylesRight,
    IconStylesLeft,
};
