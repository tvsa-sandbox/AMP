import React from "react";
import PropTypes from "prop-types";
import LeadImageStyles from "./styles";
import Image from "../../accessories/Image";

const LeadImage = props => {
    const { src, ratio } = props;
    return (
        <LeadImageStyles variant="Transparent">
            <Image alt="Lead" ratio={ratio} src={src} />
        </LeadImageStyles>
    );
};

LeadImage.propTypes = {
    src: PropTypes.shape({}),
    ratio: PropTypes.string,
};

LeadImage.defaultProps = {
    src: {},
    ratio: "aspect16x9",
};

export default LeadImage;
