import React from "react";
import PropTypes from "prop-types";
import { LeagueCarouselStyles, LeagueCarouselThumb } from "./styles";
import { ItemLeague } from "../../items";
import { Carousel } from "../../accessories";

const LeagueCarousel = props => {
    const { src, ratio, items } = props;
    return (
        <LeagueCarouselStyles {...props}>
            <Carousel arrow="Back" arrowcolor="green" arrowsize="40">
                {items.map(item => {
                    return <ItemLeague ratio={ratio} src={src} key={item.id} />;
                })}
            </Carousel>
        </LeagueCarouselStyles>
    );
};

LeagueCarousel.propTypes = {
    isAmp: PropTypes.bool,
    src: PropTypes.shape({}),
    ratio: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({})),
};

LeagueCarousel.defaultProps = {
    isAmp: false,
    src: {},
    ratio: "aspect1x1",
    items: [
        {
            id: 0,
        },
        {
            id: 1,
        },
        {
            id: 2,
        },
        {
            id: 3,
        },
        {
            id: 4,
        },
        {
            id: 5,
        },
        {
            id: 6,
        },
        {
            id: 7,
        },
        {
            id: 8,
        },
        {
            id: 9,
        },
    ],
};

export default LeagueCarousel;
