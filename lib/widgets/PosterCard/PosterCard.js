import React from "react";
import PropTypes from "prop-types";

import {
    PosterCardStyles,
    PosterCardTitleStyles,
    PosterCardDescription,
    PosterCardIconsStyles,
    PosterBox,
} from "./styles";

const PosterCard = props => {
    const { showtitle, showdescription } = props;
    return (
        <PosterBox variant="Transparent" {...props}>
            <PosterCardIconsStyles name="LasEstrellas" variant="Inactive" color="white" />
            <PosterCardTitleStyles variant="h2">{showtitle}</PosterCardTitleStyles>
            <PosterCardDescription>{showdescription}</PosterCardDescription>
        </PosterBox>
    );
};

PosterCard.propTypes = {
    showtitle: PropTypes.string,
};

PosterCard.defaultProps = {
    showtitle: "EL Dragón",
    showdescription:
        "Es ambicioso, pero no en términos de riquezas. Sus metas y sus objetivos están siempre ligados a un desafío consigo mismo. Miguel siempre está redoblando la apuesta, empuja el límite.",
};

export default PosterCard;
