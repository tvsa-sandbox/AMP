import React from "react";
import PropTypes from "prop-types";
import { EnhancementImageStyles, BoxTextStyles, EnhancementImageText } from "./styles";
import Image from "../../accessories/Image";

const EnhancementImage = props => {
    const { children, src, ratio } = props;
    return (
        <EnhancementImageStyles variant="Transparent">
            <Image alt="Enhancement" src={src} ratio={ratio} />
            <BoxTextStyles variant="Transparent">
                <EnhancementImageText>
                    Angelique Boyer con toda la mejor actitud en su regreso triunfal a Tik Tok por
                    segunda vez
                </EnhancementImageText>
            </BoxTextStyles>
        </EnhancementImageStyles>
    );
};

EnhancementImage.propTypes = {
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

EnhancementImage.defaultProps = {
    children: null,
    ratio: "aspect16x9",
    src: {
        desktop: {},
        mobile: {},
    },
};

export default EnhancementImage;
