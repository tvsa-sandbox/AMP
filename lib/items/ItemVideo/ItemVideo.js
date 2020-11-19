import React from "react";
import PropTypes from "prop-types";
import { ItemVideoStyles, ItemVideoIcon, BoxVideoIcon, BoxVideoPlayer } from "./styles";
import Image from "../../accessories/Image";

const ItemVideo = props => {
    const { src, ratio, size } = props;
    return (
        <ItemVideoStyles variant="Transparent">
            <BoxVideoIcon variant="Transparent">
                <ItemVideoIcon name="Video" size={size} />
            </BoxVideoIcon>
            <Image alt="Lead" ratio={ratio} src={src} />
            <BoxVideoPlayer>Ver video</BoxVideoPlayer>
        </ItemVideoStyles>
    );
};

ItemVideo.propTypes = {
    src: PropTypes.shape({}),
    ratio: PropTypes.string,
    size: PropTypes.string,
};

ItemVideo.defaultProps = {
    src: {},
    ratio: "aspect16x9",
    size: "10px",
};

export default ItemVideo;
