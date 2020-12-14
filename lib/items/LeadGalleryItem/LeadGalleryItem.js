import React from "react";
import PropTypes from "prop-types";
import {
    LeadGalleryItemStyles,
    LeadGalleryItemInfo,
    LeadGalleryItemTitle,
    LeadGalleryItemCounter,
    LeadGalleryItemBoxData,
} from "./styles";
import { Image, Dots } from "../../accessories";

const LeadGalleryItem = props => {
    const { src, ratio, imgtitle, imgcredit, imgcounter, isAmp } = props;
    return (
        <LeadGalleryItemStyles variant="Transparent">
            <Image alt="LeadGallery" ratio={ratio} src={src} />
            <LeadGalleryItemBoxData variant="Transparent">
                <Dots />
                <LeadGalleryItemCounter color="gray3">{imgcounter}</LeadGalleryItemCounter>
                <LeadGalleryItemInfo color="gray3">Fuente:{imgcredit}</LeadGalleryItemInfo>
                <LeadGalleryItemTitle variant="h3">{imgtitle}</LeadGalleryItemTitle>
            </LeadGalleryItemBoxData>
        </LeadGalleryItemStyles>
    );
};

LeadGalleryItem.propTypes = {
    src: PropTypes.shape({}),
    ratio: PropTypes.string,
    imgcredit: PropTypes.string,
    imgtitle: PropTypes.string,
    imgcounter: PropTypes.string,
    isAmp: PropTypes.bool,
};

LeadGalleryItem.defaultProps = {
    src: {},
    ratio: "aspect16x9",
    imgcredit: "Televisa Archivo",
    imgtitle: "Titulo de la fotografía",
    imgcounter: "1/12",
    isAmp: false,
};

export default LeadGalleryItem;
