import React from "react";
import PropTypes from "prop-types";
import { Image } from "../../accessories";

import {
    GridHomePWAStyles,
    GridHomePWAAnchorStyles,
    GridHomePWACaptionStyles,
    GridHomePWABoxStyles,
    GridHomePWABoxThumb,
    GridHomePWALabel,
} from "./styles";

const GridHomePWA = props => {
    const { src, ratio } = props;
    return (
        <GridHomePWABoxStyles variant="Transparent">
            <GridHomePWAStyles {...props}>
                <GridHomePWAAnchorStyles href="./" aria-label="gallery">
                    <GridHomePWABoxThumb variant="Transparent">
                        <Image ratio={ratio} src={src} />
                    </GridHomePWABoxThumb>
                    <GridHomePWACaptionStyles>Natália Subtil viaja con su hija a pesar de la cuarentena por coronavirus</GridHomePWACaptionStyles>
                </GridHomePWAAnchorStyles>
                <GridHomePWAAnchorStyles href="./" aria-label="gallery">
                    <GridHomePWABoxThumb variant="Transparent">
                        <Image ratio={ratio} src={src} />
                        <GridHomePWALabel variant="Transparent">
                            Galería
                        </GridHomePWALabel>
                    </GridHomePWABoxThumb>
                    <GridHomePWACaptionStyles>Natália Subtil viaja con su hija a pesar de la cuarentena por coronavirus</GridHomePWACaptionStyles>
                </GridHomePWAAnchorStyles>
                <GridHomePWAAnchorStyles href="./" aria-label="gallery">
                    <GridHomePWABoxThumb variant="Transparent">
                        <Image ratio={ratio} src={src} />
                        <GridHomePWALabel variant="Transparent">
                            Galería
                        </GridHomePWALabel>
                    </GridHomePWABoxThumb>
                    <GridHomePWACaptionStyles>Natália Subtil viaja con su hija a pesar de la cuarentena por coronavirus</GridHomePWACaptionStyles>
                </GridHomePWAAnchorStyles>
                <GridHomePWAAnchorStyles href="./" aria-label="gallery">
                    <GridHomePWABoxThumb variant="Transparent">
                        <Image ratio={ratio} src={src} />
                    </GridHomePWABoxThumb>
                    <GridHomePWACaptionStyles>Natália Subtil viaja con su hija a pesar de la cuarentena por coronavirus</GridHomePWACaptionStyles>
                </GridHomePWAAnchorStyles>
                <GridHomePWAAnchorStyles href="./" aria-label="gallery">
                    <GridHomePWABoxThumb variant="Transparent">
                        <Image ratio={ratio} src={src} />
                    </GridHomePWABoxThumb>
                    <GridHomePWACaptionStyles>Natália Subtil viaja con su hija a pesar de la cuarentena por coronavirus</GridHomePWACaptionStyles>
                </GridHomePWAAnchorStyles>
                <GridHomePWAAnchorStyles href="./" aria-label="gallery">
                    <GridHomePWABoxThumb variant="Transparent">
                        <Image ratio={ratio} src={src} />
                        <GridHomePWALabel variant="Transparent">
                            Galería
                        </GridHomePWALabel>
                    </GridHomePWABoxThumb>
                    <GridHomePWACaptionStyles>Natália Subtil viaja con su hija a pesar de la cuarentena por coronavirus</GridHomePWACaptionStyles>
                </GridHomePWAAnchorStyles>
                <GridHomePWAAnchorStyles href="./" aria-label="gallery">
                    <GridHomePWABoxThumb variant="Transparent">
                        <Image ratio={ratio} src={src} />
                    </GridHomePWABoxThumb>
                    <GridHomePWACaptionStyles>Natália Subtil viaja con su hija a pesar de la cuarentena por coronavirus</GridHomePWACaptionStyles>
                </GridHomePWAAnchorStyles>
                <GridHomePWAAnchorStyles href="./" aria-label="gallery">
                    <GridHomePWABoxThumb variant="Transparent">
                        <Image ratio={ratio} src={src} />
                    </GridHomePWABoxThumb>
                    <GridHomePWACaptionStyles>Natália Subtil viaja con su hija a pesar de la cuarentena por coronavirus</GridHomePWACaptionStyles>
                </GridHomePWAAnchorStyles>
                <GridHomePWAAnchorStyles href="./" aria-label="gallery">
                    <GridHomePWABoxThumb variant="Transparent">
                        <Image ratio={ratio} src={src} />
                        <GridHomePWALabel variant="Transparent">
                            Galería
                        </GridHomePWALabel>
                    </GridHomePWABoxThumb>
                    <GridHomePWACaptionStyles>Natália Subtil viaja con su hija a pesar de la cuarentena por coronavirus</GridHomePWACaptionStyles>
                </GridHomePWAAnchorStyles>
                <GridHomePWAAnchorStyles href="./" aria-label="gallery">
                    <GridHomePWABoxThumb variant="Transparent">
                        <Image ratio={ratio} src={src} />
                        <GridHomePWALabel variant="Transparent">
                            Galería
                        </GridHomePWALabel>
                    </GridHomePWABoxThumb>
                    <GridHomePWACaptionStyles>Natália Subtil viaja con su hija a pesar de la cuarentena por coronavirus</GridHomePWACaptionStyles>
                </GridHomePWAAnchorStyles>
            </GridHomePWAStyles>
        </GridHomePWABoxStyles>
    );
};

GridHomePWA.propTypes = {
    ratio: PropTypes.string,
};

GridHomePWA.defaultProps = {
    ratio: "aspect16x9",
};

export default GridHomePWA;
