import React from "react";
import PropTypes from "prop-types";
import { ShowCardStyles, ShowCardGridStyles } from "./styles";
import { ShowCardItem } from "../../items";

const ShowCard = props => {
    const { ratio, src } = props;
    return (
        <ShowCardStyles {...props}>
            <ShowCardGridStyles>
                <ShowCardItem ratio={ratio} src={src} />
                <ShowCardItem ratio={ratio} src={src} />
                <ShowCardItem ratio={ratio} src={src} />
                <ShowCardItem ratio={ratio} src={src} />
                <ShowCardItem ratio={ratio} src={src} />
                <ShowCardItem ratio={ratio} src={src} />
                <ShowCardItem ratio={ratio} src={src} />
                <ShowCardItem ratio={ratio} src={src} />
            </ShowCardGridStyles>
        </ShowCardStyles>
    );
};

ShowCard.propTypes = {
    src: PropTypes.shape({}),
    ratio: PropTypes.string,
};

ShowCard.defaultProps = {
    ratio: "aspect3x4",
    src: {},
};

export default ShowCard;
