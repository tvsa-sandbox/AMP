import React from "react";
import PropTypes from "prop-types";
import ImageStyles from "./styles";
import Placeholder from "../Placeholder";

const Image = props => {
    const { alt, isAmp, ratio, size, src } = props;
    return isAmp ? (
        <amp-img
            alt={alt}
            src={src.mobile.srcSet}
            width={src.mobile.width}
            height={src.mobile.height}
            layout="responsive"
        />
    ) : (
        <Placeholder ratio={ratio} size={size}>
            <picture>
                <source {...src.mobile} />
                <source {...src.desktop} />
                <ImageStyles
                    alt={alt}
                    src={src.mobile.srcSet}
                    width={src.mobile.width}
                    height={src.mobile.height}
                />
            </picture>
        </Placeholder>
    );
};

Image.propTypes = {
    alt: PropTypes.string,
    size: PropTypes.number,
    isAmp: PropTypes.bool,
    ratio: PropTypes.string,
    src: PropTypes.shape({
        desktop: PropTypes.shape({}),
        mobile: PropTypes.shape({
            srcSet: PropTypes.string.isRequired,
            width: PropTypes.number.isRequired,
            height: PropTypes.number.isRequired,
        }),
    }),
    variant: PropTypes.string,
};

Image.defaultProps = {
    alt: "",
    size: 40,
    isAmp: false,
    ratio: "aspect16x9",
    src: {
        desktop: {},
        mobile: {},
    },
    variant: "Solid",
};

export default Image;
