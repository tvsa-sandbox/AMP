import React, { useContext } from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "styled-components";
import { EnhancementImageStyles, BoxTextStyles, EnhancementImageText, EnhancementImageInfo } from "./styles";
import Image from "../../accessories/Image";

const EnhancementImage = ({ attribution, src, ratio, title }) => {
    const themeContext = useContext(ThemeContext);
    const ui = themeContext.ui.name;

    return (
        <EnhancementImageStyles variant="Transparent">
            <Image alt="Enhancement" src={src} ratio={ratio} />
            <BoxTextStyles variant="Transparent">
                {attribution && (
                    <EnhancementImageInfo color={ui === "tudn" ? "Dark" : null}>
                        {attribution}
                    </EnhancementImageInfo>
                )}
                <EnhancementImageText>{title}</EnhancementImageText>
            </BoxTextStyles>
        </EnhancementImageStyles>
    );
};

EnhancementImage.propTypes = {
    title: PropTypes.string,
    attribution: PropTypes.string,
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

    attribution: "Maddie Meyer/Getty Images",
    title: "Angelique Boyer con toda la mejor actitud en su regreso triunfal a Tik Tok por segunda vez",
    children: null,
    ratio: "aspect16x9",
    src: {
        desktop: {},
        mobile: {},
    },
};

export default EnhancementImage;
