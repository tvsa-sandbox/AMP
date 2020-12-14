import React from "react";
import PropTypes from "prop-types";
import { LeadVideoStyles, LeadVideoIcon, BoxVideoIcon, BoxVideoPlayer } from "./styles";
import Image from "../../accessories/Image";

const LeadVideo = props => {
    const { src, ratio, size, icon } = props;
    return (
        <LeadVideoStyles variant="Transparent">
            <BoxVideoIcon variant="Transparent">
                <LeadVideoIcon name={icon} size={size} />
            </BoxVideoIcon>
            <Image alt="Lead" ratio={ratio} src={src} />
            <BoxVideoPlayer>player</BoxVideoPlayer>
        </LeadVideoStyles>
    );
};

LeadVideo.propTypes = {
    src: PropTypes.shape({}),
    ratio: PropTypes.string,
    size: PropTypes.string,
    icon: PropTypes.string,
};

LeadVideo.defaultProps = {
    src: {},
    ratio: "aspect16x9",
    size: "10px",
    icon: "Video",
};

export default LeadVideo;
