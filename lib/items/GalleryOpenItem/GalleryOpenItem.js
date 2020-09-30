import React, { useEffect, useState, useContext } from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "styled-components";
import {
    GalleryOpenItemStyles,
    GalleryOpenItemImageContainer,
    GalleryOpenItemImage,
    GalleryOpenItemCaption,
    GalleryOpenItemCounter,
    GalleryOpenItemInfo,
    GalleryOpenItemDescription,
    GalleryOpenItemButton,
    GalleryOpenItemPinterest,
    GalleryOpenItemData,
} from "./styles";

const GalleryOpenItem = ({ attribution, description, domain, isAmp, image, uri, index }) => {
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
        ui.name === "tudn"
            ? setRatio(window.innerWidth > 1024 ? "aspect16x9" : "aspect16x9")
            : setRatio(window.innerWidth > 1024 ? "aspect4x3" : "aspect3x4");
    });

    return (
        <GalleryOpenItemStyles variant="transparent">
            <GalleryOpenItemImageContainer variant="transparent">
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
                        <GalleryOpenItemButton
                            aria-label="pinterest"
                            onClick={() => setPinterestButton()}
                            variant="solid"
                        >
                            <GalleryOpenItemPinterest
                                color="#fff"
                                name="Pinterest"
                                variant="Transparent"
                            />
                            Guardar
                        </GalleryOpenItemButton>
                        <GalleryOpenItemImage alt={description} src={image} ratio={ratio} />
                    </>
                )}
            </GalleryOpenItemImageContainer>
            <GalleryOpenItemCaption variant="transparent" bg={ui === "tudn" ? "Light" : null}>
                <GalleryOpenItemData variant="transparent">
                    <GalleryOpenItemCounter>{index}</GalleryOpenItemCounter>
                    {attribution && <GalleryOpenItemInfo>{attribution}</GalleryOpenItemInfo>}
                </GalleryOpenItemData>
                {description && (
                    <GalleryOpenItemDescription>{description}</GalleryOpenItemDescription>
                )}
            </GalleryOpenItemCaption>
        </GalleryOpenItemStyles>
    );
};

GalleryOpenItem.propTypes = {
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

GalleryOpenItem.defaultProps = {
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

export default GalleryOpenItem;
