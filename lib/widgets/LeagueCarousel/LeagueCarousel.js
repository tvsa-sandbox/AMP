import React from "react";
import PropTypes from "prop-types";
import Carousel from "../../accessories/Carousel";
import { LeagueCarouselStyles, LeagueCarouselThumb } from "./styles";
import { ItemLeague } from "../../items";

const LeagueCarousel = props => {
    return (
        <LeagueCarouselStyles {...props}>
            <Carousel>
                <LeagueCarouselThumb variant="Transparent">
                    <ItemLeague />
                </LeagueCarouselThumb>
                <LeagueCarouselThumb variant="Transparent">
                    <ItemLeague />
                </LeagueCarouselThumb>
                <LeagueCarouselThumb variant="Transparent">
                    <ItemLeague />
                </LeagueCarouselThumb>
                <LeagueCarouselThumb variant="Transparent">
                    <ItemLeague />
                </LeagueCarouselThumb>
                <LeagueCarouselThumb variant="Transparent">
                    <ItemLeague />
                </LeagueCarouselThumb>
                <LeagueCarouselThumb variant="Transparent">
                    <ItemLeague />
                </LeagueCarouselThumb>
                <LeagueCarouselThumb variant="Transparent">
                    <ItemLeague />
                </LeagueCarouselThumb>
                <LeagueCarouselThumb variant="Transparent">
                    <ItemLeague />
                </LeagueCarouselThumb>
                <LeagueCarouselThumb variant="Transparent">
                    <ItemLeague />
                </LeagueCarouselThumb>
                <LeagueCarouselThumb variant="Transparent">
                    <ItemLeague />
                </LeagueCarouselThumb>
            </Carousel>
        </LeagueCarouselStyles>
    );
};

LeagueCarousel.propTypes = {
    isAmp: PropTypes.bool,
};

LeagueCarousel.defaultProps = {
    isAmp: false,
};

export default LeagueCarousel;
