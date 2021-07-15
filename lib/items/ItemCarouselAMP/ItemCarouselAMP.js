import React, { useContext } from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "styled-components";
import {
    ItemCarouselAMPStyles,
    ItemCarouselBoxStyles,
    ItemCarouselTextStyles,
    ItemCarouselSection,
    ItemCarouselIconsStyles,
} from "./styles";
import { Box, Image, Icons } from "../../accessories";

const ItemCarouselAMP = ({ isAmp, video, image, uri, title, gallery, size, section }) => {
    const themeContext = useContext(ThemeContext);
    return (
        <ItemCarouselAMPStyles href={uri}>
            <Box>
                <Image alt={title} ratio="aspect16x9" iconwidth="40" isAmp={isAmp} src={image} />
                {/* {video && (
                    <ItemCarouselIconDurationStyles name="Video">
                        {video}
                    </ItemCarouselIconDurationStyles>
                )} */}
            </Box>
            <ItemCarouselBoxStyles variant="Solid">
                {title && <ItemCarouselTextStyles>{title}</ItemCarouselTextStyles>}
            </ItemCarouselBoxStyles>
        </ItemCarouselAMPStyles>
    );
};

ItemCarouselAMP.propTypes = {
    gallery: PropTypes.string,
    image: PropTypes.shape({}),
    publishDate: PropTypes.string,
    uri: PropTypes.string,
    section: PropTypes.string,
    title: PropTypes.string,
    size: PropTypes.string,
    isAmp: PropTypes.bool,
    video: PropTypes.string,
};

ItemCarouselAMP.defaultProps = {
    gallery: "11 fotos",
    image: {
        desktop: {
            srcSet: "",
        },
        mobile: {
            srcSet: "",
        },
    },
    publishDate: "11 feb ",
    uri: "./",
    section: "espectáculos",
    title: "Consuelo Duval revela que recibió una millonaria propuesta para posar desnuda",
    size: "30",
    isAmp: false,
    video: "",
};

export default ItemCarouselAMP;
