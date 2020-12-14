import React from "react";
import PropTypes from "prop-types";

import {
    Tag,
    Tags,
    PosterCardTitleStyles,
    PosterCardDescription,
    PosterCardIconsStyles,
    PosterBox,
} from "./styles";

const PosterCard = props => {
    const { showtitle, showdescription, tagitems } = props;
    return (
        <PosterBox variant="Transparent" {...props}>
            <PosterCardIconsStyles name="LasEstrellas" variant="Inactive" color="white" />
            <PosterCardTitleStyles variant="h2">{showtitle}</PosterCardTitleStyles>
            {Tags ? (
                <Tags>
                    {tagitems.map((item, index) => {
                        const KEY = `${tagitems.name}-${index}`;
                        return (
                            <Tag {...item} key={KEY}>
                                {item.name}
                            </Tag>
                        );
                    })}
                </Tags>
            ) : null}

            <PosterCardDescription>{showdescription}</PosterCardDescription>
        </PosterBox>
    );
};

PosterCard.propTypes = {
    showtitle: PropTypes.string,
    showdescription: PropTypes.string,
    Tags: PropTypes.bool,
    tagitems: PropTypes.arrayOf(PropTypes.shape({})),
};

PosterCard.defaultProps = {
    showtitle: "EL Dragón",
    showdescription:
        "Es ambicioso, pero no en términos de riquezas. Sus metas y sus objetivos están siempre ligados a un desafío consigo mismo. Miguel siempre está redoblando la apuesta, empuja el límite.",
    tagitems: [],
    Tags: true,
};

export default PosterCard;
