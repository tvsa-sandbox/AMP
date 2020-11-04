import React from "react";
import PropTypes from "prop-types";

import {
    EpisodeItemStyles,
    EpisodeImageStyles,
    EpisodeTitleStyles,
    EpisodeCaptionStyles,
    EpisodeLabelStyles,
    EpisodeTimeStyles,
    EpisodeThumbnailStyles,
    EpisodeDurationStyles,
} from "./styles";
import { Box } from "accessories";

const EpisodeItem = props => {
    const { ratio, image } = props;
    return (
        <EpisodeItemStyles {...props} href="/">
            <Box variant="Transparent">
                <EpisodeThumbnailStyles>
                    <EpisodeImageStyles ratio={ratio} src={image} />
                    <EpisodeDurationStyles>11:20</EpisodeDurationStyles>
                </EpisodeThumbnailStyles>
                <EpisodeCaptionStyles>
                    <EpisodeLabelStyles>Episodio 20</EpisodeLabelStyles>
                    <EpisodeTitleStyles variant="h3">
                        ¿Cuál Fue el final de la malvada Gloria?
                    </EpisodeTitleStyles>
                    <EpisodeTimeStyles>21 Abr 2020</EpisodeTimeStyles>
                </EpisodeCaptionStyles>
            </Box >
        </EpisodeItemStyles>
    );
};

EpisodeItem.propTypes = {
    ratio: PropTypes.string,
    src: PropTypes.shape({}),
    image: PropTypes.shape({
        desktop: PropTypes.shape({
            srcSet: PropTypes.string,
        }),
        mobile: PropTypes.shape({
            srcSet: PropTypes.string,
        }),
    })
};

EpisodeItem.defaultProps = {
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

export default EpisodeItem;
