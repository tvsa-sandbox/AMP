import React from "react";
import PropTypes from "prop-types";
import VideoEndCardStyles from "./styles";

const VideoEndCard = props => {
    const { children } = props;
    return <VideoEndCardStyles {...props}>{children}</VideoEndCardStyles>;
};

VideoEndCard.propTypes = {
    children: PropTypes.node.isRequired,
};

export default VideoEndCard;
