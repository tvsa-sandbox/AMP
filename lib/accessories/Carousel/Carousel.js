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
    const { children, arrow, arrowcolor } = props;
    return (
        <CarouselStyles {...props}>
            <ButtonStylesLeft variant="Transparent" aria-label="boton">
                {arrow === "Transparent" ? (
                    <IconStylesLeft name="ArrowLeft" variant="Inactive" />
                ) : (
                        <IconStylesLeft name="ArrowLeft" variant="Solid" color={arrowcolor} />
                    )}
            </ButtonStylesLeft>
            <Track>
                <Thumbnails aria-label="Carousel" tabIndex="0">
                    {children}
                </Thumbnails>
            </Track>
            <ButtonStylesRight variant="Transparent" aria-label="boton">
                {arrow === "Transparent" ? (
                    <IconStylesRight name="ArrowRight" variant="Inactive" />
                ) : (
                        <IconStylesRight name="ArrowRight" variant="Solid" color={arrowcolor} />
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
