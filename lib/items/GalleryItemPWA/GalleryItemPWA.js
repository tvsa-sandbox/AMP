import React, { useEffect, useState, useContext } from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "styled-components";
import {
    GalleryItemStyles,
    GalleryItemImageContainer,
    GalleryItemImage,
    GalleryItemCaption,
    GalleryItemCounter,
    GalleryItemInfo,
    GalleryItemDescription,
    GalleryItemData,
} from "../GalleryItem/styles";

const GalleryItemPWA = ({ attribution, description, index, isAmp, image }) => {
    const themeContext = useContext(ThemeContext);
    const ui = themeContext.ui.name;
    const [ratio, setRatio] = useState("aspect3x4");

    useEffect(() => {
        themeContext.ui.name === "tudn"
            ? setRatio(window.innerWidth > 1024 ? "aspect16x9" : "aspect16x9")
            : setRatio(window.innerWidth > 1024 ? "aspect4x3" : "aspect3x4");
    });

    return (
        <GalleryItemStyles
            variant="transparent"
            shadow={ui === "tudn"}
            bg={ui === "tudn" ? "white" : null}
            m={ui === "tudn" ? "18px" : null}
        >
            <GalleryItemImageContainer variant="transparent">
                {isAmp ? (
                    <div style={{ paddingTop: "56.25%" }}>
                        <amp-img
                            alt={description}
                            on="tap:lightbox"
                            role="button"
                            tabindex="0"
                            src={image.mobile.srcSet}
                            width="414"
                            height="552"
                            layout="fill"
                        />
                    </div>
                ) : (
                    <>
                        <GalleryItemImage alt={description} src={image} ratio={ratio} />
                    </>
                )}
            </GalleryItemImageContainer>
            <GalleryItemCaption variant="transparent" bg={ui === "tudn" ? "white" : null}>
                <GalleryItemData variant="transparent">
                    <GalleryItemCounter color={ui === "tudn" ? "Dark" : null}>
                        {/* {index} */}
                        1/12
                    </GalleryItemCounter>
                    {attribution && (
                        <GalleryItemInfo color={ui === "tudn" ? "Dark" : null}>
                            {attribution}
                        </GalleryItemInfo>
                    )}
                </GalleryItemData>
                {description && (
                    <GalleryItemDescription color={ui === "tudn" ? "Dark" : null}>
                        {description}
                    </GalleryItemDescription>
                )}
            </GalleryItemCaption>
        </GalleryItemStyles>
    );
};

GalleryItemPWA.propTypes = {
    attribution: PropTypes.string,
    description: PropTypes.string,
    domain: PropTypes.string.isRequired,
    image: PropTypes.shape({
        desktop: PropTypes.shape({
            srcSet: PropTypes.string,
        }),
        mobile: PropTypes.shape({
            srcSet: PropTypes.string,
        }),
    }),
    index: PropTypes.string.isRequired,
    isAmp: PropTypes.bool.isRequired,
    uri: PropTypes.string.isRequired,
};

GalleryItemPWA.defaultProps = {
    attribution: "Maddie Meyer/Getty Images",
    description:
        "Así entrenan los New England Patriots para la campaña 2020 El calendario de partidos para los de Belichick y las imágenes de su preparación. ",
    image: {
        desktop: {
            srcSet: "",
        },
        mobie: {
            srcSet: "",
        },
    },
};

export default GalleryItemPWA;
