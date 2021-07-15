import React from "react";
import PropTypes from "prop-types";
import  LeadVideoStyles from "./styles";
import {BoxVideoIcon, BoxVideoPlayer, VideoPlayer, VideoIconsStyles ,VideoButton} from "../EnhancementVideo/styles";
import {Image,Box }from "../../accessories";

const LeadVideo = props => {
    const { src, ratio, size, icon } = props;
    return (
        <LeadVideoStyles variant="Transparent">
            <BoxVideoPlayer>
                    <VideoPlayer>
                        player
                    </VideoPlayer>
                </BoxVideoPlayer>
                <Box>
                <VideoButton variant="Transparent" onClick={() => onClickPlay()}>
            <BoxVideoIcon variant="Transparent">
                <VideoIconsStyles name={icon} size={size} />
            </BoxVideoIcon>
            <Image alt="Lead" ratio={ratio} src={src} />
            </VideoButton>
            </Box>
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
