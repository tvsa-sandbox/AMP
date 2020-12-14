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
    GalleryItemButton,
    GalleryItemPinterest,
    GalleryItemData,
} from "./styles";

const GalleryItem = ({ attribution, description, domain, index, isAmp, image, uri }) => {
    const themeContext = useContext(ThemeContext);
    const ui = themeContext.ui.name;
    const [ratio, setRatio] = useState("aspect3x4");
    const setPinterestButton = () => {
        window.PinUtils.pinOne({
            description,
            media: image.desktop.srcSet,
            url: `${domain}${uri}`,
        });
    };

    useEffect(() => {
        themeContext.ui.name === "tudn"
            ? setRatio(window.innerWidth > 1024 ? "aspect16x9" : "aspect16x9")
            : setRatio(window.innerWidth > 1024 ? "aspect4x3" : "aspect3x4");
    });

    return (
        <GalleryItemStyles
            variant="transparent"
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
                        {description && (
                            <amp-pinterest
                                height="48"
                                width="88"
                                data-do="buttonPin"
                                data-url={`${domain}${uri}`}
                                data-media={image.mobile.srcSet}
                                data-description={description}
                                data-tall="true"
                                style={{
                                    position: "absolute",
                                    top: "10px",
                                    left: "10px",
                                }}
                            />
                        )}
                    </div>
                ) : (
                        <>
                            <GalleryItemButton
                                aria-label="pinterest"
                                onClick={() => setPinterestButton()}
                                variant="solid"
                            >
                                <GalleryItemPinterest
                                    color="#fff"
                                    name="Pinterest"
                                    variant="Transparent"
                                />
                            Guardar
                        </GalleryItemButton>
                            <GalleryItemImage alt={description} src={image} ratio={ratio} />
                        </>
                    )}
            </GalleryItemImageContainer>
            <GalleryItemCaption variant="transparent" bg={ui === "tudn" ? "Light" : null}>
                <GalleryItemData variant="transparent">
                    <GalleryItemCounter color={ui === "tudn" ? "Dark" : null}>
                        {index}
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

GalleryItem.propTypes = {
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

GalleryItem.defaultProps = {
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

export default GalleryItem;
