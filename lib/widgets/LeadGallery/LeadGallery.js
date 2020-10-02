import React from "react";
import PropTypes from "prop-types";
import { Carousel, Title } from "../../accessories";
import LeadGalleryItem from "../../items/LeadGalleryItem";
import { LeadGalleryStyles, LeadGalleryThumbsStyles } from "./styles";

const LeadGallery = props => {
    const { items, isAMP, src, ratio, galTitle } = props;
    return (
        <LeadGalleryStyles variant="Trasparent">
            <Title variant="h3">{galTitle}</Title>
            <Carousel aria-label="LeadGallery">
                {items.map((item, index) => {
                    const KEY = `${items.title}-${index}`;
                    return (
                        <LeadGalleryThumbsStyles variant="Transparent" key={KEY}>
                            <LeadGalleryItem {...item} src={src} ratio={ratio} />
                        </LeadGalleryThumbsStyles>
                    );
                })}
            </Carousel>
        </LeadGalleryStyles>
    );
};

LeadGallery.propTypes = {
    src: PropTypes.shape({}),
    ratio: PropTypes.string,
    galTitle: PropTypes.string,
    isAmp: PropTypes.bool,
    items: PropTypes.arrayOf(PropTypes.shape({})),
};

LeadGallery.defaultProps = {
    src: {},
    ratio: "aspect4x3",
    galTitle: "Titulo de Galería",
    isAmp: false,
    items: [],
};

export default LeadGallery;
