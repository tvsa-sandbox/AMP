import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Image } from "../../accessories";
import GridGalleryOpen from "../GridGalleryOpen";

import {
    GridGalleryStyles,
    GridGalleryTitleStyles,
    GridGalleryBoxData,
    GridGalleryInfoStyles,
    GridGalleryAnchorStyles,
    GridGalleryCaptionStyles,
    GridGalleryBoxStyles,
} from "./styles";

const GridGallery = props => {
    const { title, src, ratio, gal } = props;
    const [pics, handlePics] = useState(false);

    useEffect(() => {
        const BODY = document.querySelector("body");
        if (BODY) {
            BODY.style.overflow = pics ? "hidden" : "visible";
        }
    });
    return (
        <GridGalleryBoxStyles variant="Transparent">
            <GridGalleryStyles>
                <GridGalleryAnchorStyles onClick={() => handlePics(true)} aria-label="gallery">
                    <Image ratio={ratio} src={src} />
                    <GridGalleryCaptionStyles>Image Headline</GridGalleryCaptionStyles>
                </GridGalleryAnchorStyles>
                <GridGalleryAnchorStyles onClick={() => handlePics(true)} aria-label="gallery">
                    <Image ratio={ratio} src={src} />
                    <GridGalleryCaptionStyles>Image Headline</GridGalleryCaptionStyles>
                </GridGalleryAnchorStyles>
                <GridGalleryAnchorStyles onClick={() => handlePics(true)} aria-label="gallery">
                    <Image ratio={ratio} src={src} />
                    <GridGalleryCaptionStyles>Image Headline</GridGalleryCaptionStyles>
                </GridGalleryAnchorStyles>
                <GridGalleryAnchorStyles onClick={() => handlePics(true)} aria-label="gallery">
                    <Image ratio={ratio} src={src} />
                    <GridGalleryCaptionStyles>Image Headline</GridGalleryCaptionStyles>
                </GridGalleryAnchorStyles>
                <GridGalleryAnchorStyles onClick={() => handlePics(true)} aria-label="gallery">
                    <Image ratio={ratio} src={src} />
                    <GridGalleryCaptionStyles>+10</GridGalleryCaptionStyles>
                </GridGalleryAnchorStyles>
            </GridGalleryStyles>
            <GridGalleryBoxData variant="Transparent">
                <GridGalleryInfoStyles color="gray3">
                    Por: Instagram de Televisa
                </GridGalleryInfoStyles>
                <GridGalleryTitleStyles variant="h3">{title}</GridGalleryTitleStyles>
            </GridGalleryBoxData>
            <GridGalleryOpen slides={gal} active={pics} handlePics={() => handlePics(!pics)} />
        </GridGalleryBoxStyles>
    );
};

GridGallery.propTypes = {
    title: PropTypes.string,
    gal: PropTypes.shape({}),
    ratio: PropTypes.string,
    src: PropTypes.shape({
        desktop: PropTypes.shape({
            srcSet: PropTypes.string,
        }),
        mobile: PropTypes.shape({
            srcSet: PropTypes.string,
        }),
    }),
};

GridGallery.defaultProps = {
    title: "Angelique Boyer presume músculos de impacto y revela secreto para mantenerse en forma",
    gal: {},
    ratio: "aspect1x1",
    src: {
        desktop: {
            srcSet: "",
        },
        mobie: {
            srcSet: "",
        },
    },
};

export default GridGallery;
