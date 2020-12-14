import React from "react";
import PropTypes from "prop-types";
import { ShowCardStyles, ShowCardGridStyles } from "./styles";
import { ShowCardItem } from "../../items";

const ShowCard = props => {
    const { ratio, src, items } = props;
    return (
        <ShowCardStyles {...props}>
            <ShowCardGridStyles>
                {items.map(item => {
                    return <ShowCardItem ratio={ratio} src={src} key={item.id} />;
                })}
            </ShowCardGridStyles>
        </ShowCardStyles>
    );
};

ShowCard.propTypes = {
    src: PropTypes.shape({}),
    ratio: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({})),
};

ShowCard.defaultProps = {
    ratio: "aspect3x4",
    src: {},
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

export default ShowCard;
