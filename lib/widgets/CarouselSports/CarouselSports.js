import React from "react";
import PropTypes from "prop-types";
import Carousel from "../../accessories/Carousel";
import {
    CarouselSportsStyles,
    CarouselSportsTitleStyles,
    CarouselSportsThumb,
    CarouselSportsItems,
    CarouselSportsBox,
    CarouselSportsIcon,
} from "./styles";

const CarouselSports = props => {
    return (
        <CarouselSportsStyles {...props}>
            <Carousel arrow="Back">
                <CarouselSportsBox variant="Transparent">
                    <CarouselSportsTitleStyles variant="h2">All Sports</CarouselSportsTitleStyles>
                </CarouselSportsBox>
                <CarouselSportsThumb>
                    <CarouselSportsItems href="/" variant="Outline">
                        <CarouselSportsIcon name="Link" variant="Outline" />
                        Futbol
                    </CarouselSportsItems>
                    <CarouselSportsItems href="/" variant="Outline">
                        <CarouselSportsIcon name="Link" variant="Outline" />
                        Box
                    </CarouselSportsItems>
                    <CarouselSportsItems href="/" variant="Outline">
                        <CarouselSportsIcon name="Link" variant="Outline" />
                        NFL
                    </CarouselSportsItems>
                    <CarouselSportsItems href="/" variant="Outline">
                        <CarouselSportsIcon name="Link" variant="Outline" />
                        NBA
                    </CarouselSportsItems>
                    <CarouselSportsItems href="/" variant="Outline">
                        <CarouselSportsIcon name="Link" variant="Outline" />
                        MLB
                    </CarouselSportsItems>
                    <CarouselSportsItems href="/" variant="Outline">
                        <CarouselSportsIcon name="Link" variant="Outline" />
                        Fórmula 1
                    </CarouselSportsItems>
                    <CarouselSportsItems href="/" variant="Outline">
                        <CarouselSportsIcon name="Link" variant="Outline" />
                        Tenis
                    </CarouselSportsItems>
                    <CarouselSportsItems href="/" variant="Outline">
                        <CarouselSportsIcon name="Link" variant="Outline" />
                        Beisbol
                    </CarouselSportsItems>
                    <CarouselSportsItems href="/" variant="Outline">
                        <CarouselSportsIcon name="Link" variant="Outline" />
                        Lucha Libre
                    </CarouselSportsItems>
                    <CarouselSportsItems href="/" variant="Outline">
                        <CarouselSportsIcon name="Link" variant="Outline" />
                        Golf
                    </CarouselSportsItems>
                </CarouselSportsThumb>
            </Carousel>
        </CarouselSportsStyles>
    );
};

export default CarouselSports;

