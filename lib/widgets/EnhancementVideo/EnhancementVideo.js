import React from "react";
import PropTypes from "prop-types";
import {
    EnhancementVideoStyles,
    BoxTextStyles,
    EnhancementVideoText,
    BoxVideoIcon,
    VideoIconsStyles,
    BoxVideoPlayer,
} from "./styles";
import Image from "../../accessories/Image";
import Box from "../../accessories/Box";

const EnhancementVideo = props => {
    const { children, src, ratio, size } = props;
    return (
        <EnhancementVideoStyles variant="Transparent">
            <Box variant="Transparent">
                <BoxVideoIcon variant="Transparent">
                    <VideoIconsStyles name="Video" size={size} />
                </BoxVideoIcon>
                <Image alt="Enhancement" src={src} ratio={ratio} />
                <BoxVideoPlayer>Ver video</BoxVideoPlayer>
            </Box>
            <BoxTextStyles variant="Transparent">
                <EnhancementVideoText>
                    Angelique Boyer con toda la mejor actitud en su regreso triunfal a Tik Tok por
                    segunda vez
                </EnhancementVideoText>
            </BoxTextStyles>
        </EnhancementVideoStyles>
    );
};

EnhancementVideo.propTypes = {
    size: PropTypes.string,
    children: PropTypes.node,
    ratio: PropTypes.string,
    src: PropTypes.shape({
        desktop: PropTypes.shape({}),
        mobile: PropTypes.shape({
            srcSet: PropTypes.string.isRequired,
            width: PropTypes.number.isRequired,
            height: PropTypes.number.isRequired,
        }),
    }),
};

EnhancementVideo.defaultProps = {
    size: "50",
    children: null,
    ratio: "aspect16x9",
    src: {
        desktop: {},
        mobile: {},
    },
};

export default EnhancementVideo;
