import styled, { css } from "styled-components";
import Icons from "../Icons";
import Button from "../Button";

const CarouselStyles = styled.div(
    ({ theme }) => css`
        height: 100%;
        max-width: 1440px;
        margin: ${theme.space.zero} ${theme.space.auto} ${theme.space.xl2};
        position: relative;
        width: 100%;
        display: flex;
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
        width: 100%;
        overflow-y: hidden;
        overflow-x: scroll;
        @media (min-width: ${theme.breakpoints.xl}) {
            overflow: hidden;
        }
    `,
);

const ButtonStylesLeft = styled(Button)(
    ({ theme }) => css`
        display: none;
        margin: ${theme.space.zero};
        box-sizing: content-box;
        justify-content: center;
    `,
);

const ButtonStylesRight = styled(ButtonStylesLeft)(
    () => css`
        left: initial;
    `,
);

const IconStylesRight = styled(Icons)(
    ({ theme }) => css`
        position: absolute;
        height: 100%;
        fill: ${theme.colors.Interaction};
    `,
);

const IconStylesLeft = styled(IconStylesRight)`
    height: 100%;
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
