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
    const { ratio, image } = props;
    return (
        <EpisodeItemStyles {...props} href="/">
            <Box variant="Transparent">
                <EpisodeThumbnailStyles>
                    <EpisodeImageStyles ratio={ratio} src={image} />
                </EpisodeThumbnailStyles>
                <EpisodeCaptionStyles>
                    <EpisodeBoxStyles variant="Transparent">
                        <EpisodeLabelStyles>Episodio 8, T 8</EpisodeLabelStyles>
                        <EpisodeDurationStyles>11:20</EpisodeDurationStyles>
                    </EpisodeBoxStyles>
                    <EpisodeTitleStyles variant="h3">
                        Una Martina de diez ... semanas
                    </EpisodeTitleStyles>
                    <EpisodeSectionStyles>Una Familia de Diez</EpisodeSectionStyles>
                    <EpisodeBoxIconStyles variant="Transparent">
                        <EpisodeIconStyles name="LasEstrellas" variant="Inactive" />
                    </EpisodeBoxIconStyles>
                </EpisodeCaptionStyles>
            </Box>
        </EpisodeItemStyles>
    );
};

EpisodeItem.propTypes = {
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
