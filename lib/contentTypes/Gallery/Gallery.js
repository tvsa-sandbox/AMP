import React, { useContext } from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "styled-components";
import Layout from "../../layout";
import ItemCarouselPWA from "../../items/ItemCarouselPWA";
// import { Multicontent } from "../../accessories";
import {
    PageStyles,
    BoxBodyFull,
    BoxData,
    BoxTitle,
    TitleStyles,
    BoxAuthor,
    BoxContainer,
    AuthorStyles,
    TimeStyles,
    TextDescription,
    BoxIcons,
    BoxIconWhats,
    IconFacebook,
    IconWhatsApp,
    IconTwitter,
    IconEmail,
    LabelStyles,
    AnchorIcon,
} from "./styles";
import { ContentCarouselThumbStyles } from "../../widgets/ContentCarousel/styles";
import ContentCarousel from "../../widgets/ContentCarousel";
import GalleryItem from "../../items/GalleryItem";

const Gallery = props => {
    const { slides, items } = props;
    const themeContext = useContext(ThemeContext);
    const ui = themeContext.ui.name;
    return (
        <Layout breadcrumbs={[]}>
            <PageStyles>
                <BoxBodyFull variant="Transparent">
                    <BoxContainer variant="Transparent">
                        <LabelStyles href="./" aria-label="label">
                            Galería
                        </LabelStyles>
                        <BoxTitle variant="Transparent">
                            <TitleStyles variant="h2">
                                Este es el regalo ideal según su signo zodiacal
                            </TitleStyles>
                        </BoxTitle>
                        <BoxData variant="Transparent">
                            <TextDescription>
                                Cada signo zodiacal tiene una personalidad bien definida y gustos
                                también. Así que si no sabes qué regalarle a alguien ¡acá te decimos
                                cuál es el regalo ideal para cada signo zodiacal!
                            </TextDescription>
                        </BoxData>
                        <BoxIcons variant="Transparent">
                            <AnchorIcon href="./" aria-label="galleryface">
                                <IconFacebook name="Facebook" variant="Transparent" />
                            </AnchorIcon>
                            <AnchorIcon href="./" aria-label="gallerytwitter">
                                <IconTwitter name="Twitter" variant="Transparent" />
                            </AnchorIcon>
                            <BoxIconWhats variant="Transparent">
                                <AnchorIcon href="./" aria-label="gallerywhats">
                                    <IconWhatsApp name="WhatsApp" variant="Transparent" />
                                </AnchorIcon>
                            </BoxIconWhats>
                            <AnchorIcon href="./" aria-label="gallerymail">
                                <IconEmail name="Email" variant="Transparent" />
                            </AnchorIcon>
                        </BoxIcons>

                        <BoxAuthor variant="Transparent">
                            {ui === "tudn" ? (
                                <AuthorStyles color="gray3">Por: Erik Solís</AuthorStyles>
                            ) : (
                                <AuthorStyles>Por: Erik Solís</AuthorStyles>
                            )}

                            {ui === "tudn" ? (
                                <TimeStyles variant="Airtime" color="gray3">
                                    julio 27, 2020 - 15:15
                                </TimeStyles>
                            ) : (
                                <TimeStyles variant="Airtime">Agosto 27, 2020 - 15:15</TimeStyles>
                            )}
                        </BoxAuthor>
                    </BoxContainer>
                    <GalleryItem
                        image={slides}
                        domain="https://tvsa-sandbox.github.io/widgets-beta"
                        isAmp={false}
                        index="1/12"
                        uri="https://tvsa-sandbox.github.io/widgets-beta"
                    />
                    <GalleryItem
                        image={slides}
                        domain="https://tvsa-sandbox.github.io/widgets-beta"
                        isAmp={false}
                        index="1/12"
                        uri="https://tvsa-sandbox.github.io/widgets-beta"
                    />
                    <GalleryItem
                        image={slides}
                        domain="https://tvsa-sandbox.github.io/widgets-beta"
                        isAmp={false}
                        index="1/12"
                        uri="https://tvsa-sandbox.github.io/widgets-beta"
                    />
                    <GalleryItem
                        image={slides}
                        domain="https://tvsa-sandbox.github.io/widgets-beta"
                        isAmp={false}
                        index="1/12"
                        uri="https://tvsa-sandbox.github.io/widgets-beta"
                    />
                    <GalleryItem
                        image={slides}
                        domain="https://tvsa-sandbox.github.io/widgets-beta"
                        isAmp={false}
                        index="1/12"
                        uri="https://tvsa-sandbox.github.io/widgets-beta"
                    />
                    <GalleryItem
                        image={slides}
                        domain="https://tvsa-sandbox.github.io/widgets-beta"
                        isAmp={false}
                        index="1/12"
                        uri="https://tvsa-sandbox.github.io/widgets-beta"
                    />
                    <GalleryItem
                        image={slides}
                        domain="https://tvsa-sandbox.github.io/widgets-beta"
                        isAmp={false}
                        index="1/12"
                        uri="https://tvsa-sandbox.github.io/widgets-beta"
                    />
                    <GalleryItem
                        image={slides}
                        domain="https://tvsa-sandbox.github.io/widgets-beta"
                        isAmp={false}
                        index="1/12"
                        uri="https://tvsa-sandbox.github.io/widgets-beta"
                    />
                    <GalleryItem
                        image={slides}
                        domain="https://tvsa-sandbox.github.io/widgets-beta"
                        isAmp={false}
                        index="1/12"
                        uri="https://tvsa-sandbox.github.io/widgets-beta"
                    />
                    <ContentCarousel>
                        <ContentCarouselThumbStyles>
                            <ItemCarouselPWA ratio="aspect16x9" image={items} />
                        </ContentCarouselThumbStyles>
                        <ContentCarouselThumbStyles>
                            <ItemCarouselPWA ratio="aspect16x9" image={items} />
                        </ContentCarouselThumbStyles>
                        <ContentCarouselThumbStyles>
                            <ItemCarouselPWA ratio="aspect16x9" image={items} />
                        </ContentCarouselThumbStyles>
                        <ContentCarouselThumbStyles>
                            <ItemCarouselPWA ratio="aspect16x9" image={items} />
                        </ContentCarouselThumbStyles>
                        <ContentCarouselThumbStyles>
                            <ItemCarouselPWA ratio="aspect16x9" image={items} />
                        </ContentCarouselThumbStyles>
                    </ContentCarousel>
                </BoxBodyFull>
            </PageStyles>
        </Layout>
    );
};

Gallery.propTypes = {
    slides: PropTypes.shape({}),
    items: PropTypes.shape({}),
};

Gallery.defaultProps = {
    slides: [],
    items: [],
};

export default Gallery;
