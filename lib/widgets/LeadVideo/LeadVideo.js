import React from "react";
import PropTypes from "prop-types";
import { LeadVideoStyles, LeadVideoIcon, BoxVideoIcon, BoxVideoPlayer } from "./styles";
import Image from "../../accessories/Image";

const LeadVideo = props => {
    const { src, ratio, size } = props;
    return (
        <LeadVideoStyles variant="Transparent">
            <BoxVideoIcon variant="Transparent">
                <LeadVideoIcon name="Video" size={size} />
            </BoxVideoIcon>
            <Image alt="Lead" ratio={ratio} src={src} />
            <BoxVideoPlayer>Ver video</BoxVideoPlayer>
        </LeadVideoStyles>
    );
};

LeadVideo.propTypes = {
    src: PropTypes.shape({}),
    ratio: PropTypes.string,
    size: PropTypes.string,
};

LeadVideo.defaultProps = {
    src: {},
    ratio: "aspect16x9",
    size: "10px",
};

export default LeadVideo;
