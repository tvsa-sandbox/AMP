import React from "react";
import PropTypes from "prop-types";

import {
    EpisodeItemStyles,
    EpisodeImageStyles,
    EpisodeTitleStyles,
    EpisodeCaptionStyles,
    EpisodeLabelStyles,
    EpisodeSectionStyles,
    EpisodeThumbnailStyles,
    EpisodeDurationStyles,
    EpisodeBoxIconStyles,
    EpisodeIconStyles,
    EpisodeBoxStyles,
} from "./styles";
import { Box } from "accessories";

const EpisodeItem = props => {
    const { image, channel, duration, ratio, thumbnail, title, season, show } = props;
    return (
        <EpisodeItemStyles {...props} href="/">
            <Box variant="Transparent">
                <EpisodeThumbnailStyles>
                    <EpisodeImageStyles ratio={ratio} src={image} />
                </EpisodeThumbnailStyles>
                <EpisodeCaptionStyles>
                    <EpisodeBoxStyles variant="Transparent">
                        <EpisodeLabelStyles>{season}</EpisodeLabelStyles>
                        <EpisodeDurationStyles>{duration}</EpisodeDurationStyles>
                    </EpisodeBoxStyles>
                    <EpisodeTitleStyles variant="h3"> {title}</EpisodeTitleStyles>
                    <EpisodeSectionStyles>{show}</EpisodeSectionStyles>
                    <EpisodeBoxIconStyles variant="Transparent">
                        <EpisodeIconStyles name={channel} variant="Inactive" />
                    </EpisodeBoxIconStyles>
                </EpisodeCaptionStyles>
            </Box>
        </EpisodeItemStyles>
    );
};

EpisodeItem.propTypes = {
    title: PropTypes.string,
    channel: PropTypes.string,
    duration: PropTypes.string,
    ratio: PropTypes.string,
    season: PropTypes.string,
    show: PropTypes.string,
    ratio: PropTypes.string,
    image: PropTypes.shape({
        desktop: PropTypes.shape({
            srcSet: PropTypes.string,
        }),
        mobile: PropTypes.shape({
            srcSet: PropTypes.string,
        }),
    }),
};

EpisodeItem.defaultProps = {
    channel: "LasEstrellas",
    duration: "34:12",
    ratio: "aspect16x9",
    season: "Episodio 8, T 8",
    show: "Una Familia de Diez",
    title: "Una Martina de diez ... semanas",
    ratio: "aspect16x9",
    image: {
        desktop: {
            srcSet: "",
        },
        mobie: {
            srcSet: "",
        },
    },
};

export default EpisodeItem;
