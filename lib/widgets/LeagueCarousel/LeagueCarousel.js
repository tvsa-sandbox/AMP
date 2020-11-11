import React from "react";
import PropTypes from "prop-types";
import { Track, ButtonStylesLeft, ButtonStylesRight } from "../../accessories/Carousel/styles";
import {
    LeagueCarouselStyles,
    LeaguesIconStylesLeft,
    LeaguesIconStylesRight,
    LeagueCarouselThumb,
    ThumbnailsLeagueStyles,
} from "./styles";
import { ItemLeague } from "../../items";

const LeagueCarousel = props => {
    return (
        <LeagueCarouselStyles {...props}>
            <ButtonStylesLeft variant="Transparent" aria-label="boton">
                <LeaguesIconStylesLeft name="ArrowLeft" color="#212121" />
            </ButtonStylesLeft>
            <Track>
                <ThumbnailsLeagueStyles aria-label="Carousel" tabIndex="0">
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
                </ThumbnailsLeagueStyles>
            </Track>
            <ButtonStylesRight variant="Transparent" aria-label="boton">
                <LeaguesIconStylesRight name="ArrowRight" color="#212121" />
            </ButtonStylesRight>
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
