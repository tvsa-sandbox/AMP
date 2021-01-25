import React from "react";
import PropTypes from "prop-types";

import {
    EpisodeItemStyles,
    EpisodeImageStyles,
    EpisodeCaptionStyles,
    EpisodeLabelStyles,
    EpisodeSectionStyles,
    EpisodeDurationStyles,
    EpisodeBoxIconStyles,
    EpisodeIconStyles,
    EpisodeBoxInfoStyles,
    EpisodeBoxStyles,
} from "./styles";
import { ChapterItemTextStyles } from "../ChapterItem/styles";
import { Box } from "../../accessories";

const EpisodeItem = props => {
    const { channel, duration, ratio, thumbnail, title, season, show } = props;
    return (
        <EpisodeItemStyles {...props} href="/">
            <Box variant="Transparent">
                <Box variant="Transparent">
                    <EpisodeDurationStyles variant="Duration">{duration}</EpisodeDurationStyles>
                    <EpisodeImageStyles ratio={ratio} width={289} height={162} src={thumbnail} />
                </Box>
                <EpisodeCaptionStyles>
                    <EpisodeBoxStyles variant="Transparent">
                        <EpisodeLabelStyles variant="Label">{season}</EpisodeLabelStyles>
                    </EpisodeBoxStyles>
                    <ChapterItemTextStyles variant="h3">{title}</ChapterItemTextStyles>
                    <EpisodeBoxInfoStyles variant="Transparent">
                        <EpisodeSectionStyles>{show}</EpisodeSectionStyles>
                        <EpisodeBoxIconStyles variant="Transparent">
                            <EpisodeIconStyles name={channel} variant="Inactive" />
                        </EpisodeBoxIconStyles>
                    </EpisodeBoxInfoStyles>
                </EpisodeCaptionStyles>
            </Box>
        </EpisodeItemStyles>
    );
};

EpisodeItem.propTypes = {
    channel: PropTypes.string,
    duration: PropTypes.string,
    ratio: PropTypes.string,
    season: PropTypes.string,
    show: PropTypes.string,
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
