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
    const { title, src, ratio, gal, galimg, credit, itemsgal } = props;
    const [pics, handlePics] = useState(false);

    useEffect(() => {
        const BODY = document.querySelector("body");
        if (BODY) {
            BODY.style.overflow = pics ? "hidden" : "visible";
        }
    });
    const items = itemsgal.slice(0, 5);
    return (
        <GridGalleryBoxStyles variant="Transparent">
            <GridGalleryStyles>
                {items.map((item, index) => {
                    const KEY = `${item.index}-${index}`;
                    const num = itemsgal.length - 5;
                    return (
                        <GridGalleryAnchorStyles
                            onClick={() => handlePics(true)}
                            aria-label="gallery"
                            key={KEY}
                        >
                            <Image ratio={ratio} src={src} />
                            <GridGalleryCaptionStyles>+{num}</GridGalleryCaptionStyles>
                        </GridGalleryAnchorStyles>
                    );
                })}
            </GridGalleryStyles>
            <GridGalleryBoxData variant="Transparent">
                <GridGalleryInfoStyles color="gray3">{credit}</GridGalleryInfoStyles>
                <GridGalleryTitleStyles variant="h3">{title}</GridGalleryTitleStyles>
            </GridGalleryBoxData>
            <GridGalleryOpen
                slides={gal}
                slidesimg={galimg}
                active={pics}
                handlePics={() => handlePics(!pics)}
            />
        </GridGalleryBoxStyles>
    );
};

GridGallery.propTypes = {
    title: PropTypes.string,
    gal: PropTypes.shape({}),
    galimg: PropTypes.shape({}),
    ratio: PropTypes.string,
    credit: PropTypes.string,
    itemsgal: PropTypes.arrayOf(PropTypes.shape({})),
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
    galimg: {},
    ratio: "aspect1x1",
    credit: "Por: Instagram de Televisa",
    itemsgal: [
        {
            id: 0,
        },
        {
            id: 1,
        },
        {
            id: 2,
        },
        {
            id: 3,
        },
        {
            id: 4,
        },
        {
            id: 5,
        },
        {
            id: 6,
        },
    ],
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
