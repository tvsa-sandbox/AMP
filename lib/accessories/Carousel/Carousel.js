import React from "react";
import PropTypes from "prop-types";

import {
    CarouselStyles,
    Track,
    Thumbnails,
    IconStylesRight,
    IconStylesLeft,
    ButtonStylesRight,
    ButtonStylesLeft,
} from "./styles";

const Carousel = props => {
    const { children, arrow } = props;
    return (
        <CarouselStyles {...props}>
            <ButtonStylesLeft variant="Transparent" aria-label="boton">
                {arrow === "Transparent" ? (
                    <IconStylesLeft name="ArrowLeft" variant="Inactive" />
                ) : (
                    <IconStylesLeft name="ArrowLeft" variant="Solid" />
                )}
            </ButtonStylesLeft>
            <Track>
                <Thumbnails aria-label="Carrousel" tabIndex="0">
                    {children}
                </Thumbnails>
            </Track>
            <ButtonStylesRight variant="Transparent" aria-label="boton">
                {arrow === "Transparent" ? (
                    <IconStylesRight name="ArrowRight" variant="Inactive" />
                ) : (
                    <IconStylesRight name="ArrowRight" variant="Solid" />
                )}
            </ButtonStylesRight>
        </CarouselStyles>
    );
};

Carousel.propTypes = {
    arrow: PropTypes.string,
    children: PropTypes.node,
};

Carousel.defaultProps = {
    arrow: "Transparent",
    children: null,
};

export default Carousel;
