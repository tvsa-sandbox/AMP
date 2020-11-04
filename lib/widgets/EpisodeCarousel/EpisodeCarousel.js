import React from "react";
import PropTypes from "prop-types";
import { Box, Multicontent } from "../../accessories";
import { EpisodeCarouselStyles, EpisodeCarouselTitleStyles, EpisodeCarouselThumb } from "./styles";


const EpisodeCarousel = props => {
    const { ratio, image, children } = props;
    return (
        <EpisodeCarouselStyles {...props} >
            <EpisodeCarouselTitleStyles variant="h2">Episodios</EpisodeCarouselTitleStyles>
            <Box variant="Transparent">
                <Multicontent>{children}</Multicontent>
            </Box>
        </EpisodeCarouselStyles>
    );
};

EpisodeCarousel.propTypes = {
    isAmp: PropTypes.bool,
    src: PropTypes.shape({}),
    ratio: PropTypes.string,
    image: PropTypes.shape({
        desktop: PropTypes.shape({
            srcSet: PropTypes.string,
        }),
        mobile: PropTypes.shape({
            srcSet: PropTypes.string,
        }),
    })
};

EpisodeCarousel.defaultProps = {
    isAmp: false,
    ratio: "aspect16x9",
    src: {},
    image: {
        desktop: {
            srcSet: "",
        },
        mobie: {
            srcSet: "",
        },
    },
};

export default EpisodeCarousel;
