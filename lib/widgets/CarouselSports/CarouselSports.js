import React, { Fragment } from "react";
import PropTypes from "prop-types";
import {
    CarouselSportsStyles,
    CarouselSportsTitleStyles,
    CarouselSportsThumb,
    CarouselSportsItems,
    CarouselSportsBox,
    CarouselSportsIcon,
} from "./styles";

const CarouselSports = props => {
    const { title, sports } = props;
    return (
        <CarouselSportsStyles {...props}>
            <CarouselSportsBox variant="Transparent">
                <CarouselSportsTitleStyles variant="h2"> {title}</CarouselSportsTitleStyles>
            </CarouselSportsBox>
            <CarouselSportsThumb>
                {sports.map(sport => {
                    return (
                        <Fragment key={sport.id}>
                            <CarouselSportsItems href="/" variant="Transparent">
                                <CarouselSportsIcon name={sport.icon} variant="Outline" />
                                {sport.name}
                            </CarouselSportsItems>
                        </Fragment>
                    );
                })}
            </CarouselSportsThumb>
        </CarouselSportsStyles>
    );
};

CarouselSports.propTypes = {
    sportname: PropTypes.string,
    title: PropTypes.string,
    icon: PropTypes.string,
    sports: PropTypes.arrayOf(PropTypes.shape({})),
};

CarouselSports.defaultProps = {
    sportname: "Deportes",
    title: "All Sports",
    icon: "Cloud",
    sports: [],
};

export default CarouselSports;
