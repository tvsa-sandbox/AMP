import React from "react";
import PropTypes from "prop-types";
import {
    EnhancementVideoStyles,
    BoxTextStyles,
    EnhancementVideoText,
    BoxVideoIcon,
    VideoIconsStyles,
    BoxVideoPlayer,
    VideoPlayer,
    VideoButton,
} from "./styles";
import {Image, Box} from "../../accessories";

const EnhancementVideo = props => {
    const { src, ratio, size, title, icon } = props;
    return (
        <EnhancementVideoStyles variant="Transparent">
            <BoxVideoPlayer>
                    <VideoPlayer>
                       player
                    </VideoPlayer>
                </BoxVideoPlayer>
            <Box variant="Transparent">
                <VideoButton variant="Transparent" onClick={() => onClickPlay()}>
                <BoxVideoIcon variant="Transparent">
                    <VideoIconsStyles name={icon} size={size} />
                </BoxVideoIcon>
                <Image alt="Enhancement" src={src} ratio={ratio} />
                </VideoButton>
            </Box>
            <BoxTextStyles variant="Transparent">
                <EnhancementVideoText>{title}</EnhancementVideoText>
            </BoxTextStyles>
        </EnhancementVideoStyles>
    );
};

EnhancementVideo.propTypes = {
    title: PropTypes.string,
    icon: PropTypes.string,
    size: PropTypes.string,
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
    title: "Angelique Boyer con toda la mejor actitud en su regreso triunfal a Tik Tok por segunda vez",
    icon: "Video",
    size: "50",
    ratio: "aspect16x9",
    src: {
        desktop: {},
        mobile: {},
    },
};

export default EnhancementVideo;
