import React from "react";
import PropTypes from "prop-types";
import { Box } from "../../accessories";

import {
    PosterCardStyles,
    PosterCardImageStyles,
    PosterCardTitleStyles,
    PosterCardSubtitleStyles,
    PosterCardIconsStyles,
} from "./styles";

const PosterCard = props => {
    const { ratio, src } = props;
    return (
        <PosterCardStyles {...props} href="/">
            <Box variant="Transparent">
                <PosterCardTitleStyles variant="h2">Los pecados de Bárbara</PosterCardTitleStyles>
                <PosterCardImageStyles ratio={ratio} src={src} />
                <PosterCardIconsStyles name="LasEstrellas" variant="Inactive" />
                <PosterCardSubtitleStyles>Episodios</PosterCardSubtitleStyles>
            </Box>
        </PosterCardStyles>
    );
};

PosterCard.propTypes = {
    src: PropTypes.shape({}),
    ratio: PropTypes.string,
};

PosterCard.defaultProps = {
    ratio: "aspectpanoramic",
    src: {},
};

export default PosterCard;