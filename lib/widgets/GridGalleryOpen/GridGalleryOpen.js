import React, { useContext } from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "styled-components";
import GalleryOpenItem from "../../items/GalleryOpenItem";
import {
    PageStyles,
    BoxBodyFull,
    BoxData,
    BoxTitle,
    BoxClose,
    TitleStyles,
    BoxAuthor,
    BoxContainer,
    AuthorStyles,
    TextDescription,
    AdsImageStyles,
    IconClose,
    AnchorIcon,
    AdsOpenStyles,
} from "./styles";

const GridGalleryOpen = props => {
    const { slides, handlePics, active } = props;
    const themeContext = useContext(ThemeContext);
    const ui = themeContext.ui.name;
    return (
        <PageStyles active={active} handlePics={handlePics} tabIndex="0">
            <BoxBodyFull variant="Transparent">
                <BoxContainer variant="Transparent">
                    <BoxClose variant="Transparent">
                        <AnchorIcon aria-label="Close" onClick={handlePics}>
                            <IconClose name="Close" variant="Inactive" />
                        </AnchorIcon>
                    </BoxClose>
                    <BoxTitle variant="Transparent">
                        <TitleStyles variant="h2">
                            Angelique Boyer presume músculos de impacto y revela el secreto para
                            mantenerse en forma
                        </TitleStyles>
                    </BoxTitle>
                    <BoxData variant="Transparent">
                        <TextDescription>
                            Los fieles admiradores de la actriz no solo destacaron su habilidad para
                            la aplicación, también lo bonita que luce
                        </TextDescription>
                    </BoxData>
                    <BoxAuthor variant="Transparent">
                        {ui === "tudn" ? (
                            <AuthorStyles color="gray3">Por: Erik Solís</AuthorStyles>
                        ) : (
                            <AuthorStyles color="gray3">Por: Valeria Contreras N.</AuthorStyles>
                        )}
                    </BoxAuthor>
                </BoxContainer>
                <GalleryOpenItem
                    image={slides}
                    domain="https://tvsa-sandbox.github.io/widgets-beta"
                    isAmp={false}
                    index="1/12"
                    uri="https://tvsa-sandbox.github.io/widgets-beta"
                />
                <AdsOpenStyles>
                    <AdsImageStyles
                        src="https://dummyimage.com/250/cccccc/cccccc.png"
                        alt="ads"
                        width="345"
                        height="50"
                    />
                </AdsOpenStyles>
                <GalleryOpenItem
                    image={slides}
                    domain="https://tvsa-sandbox.github.io/widgets-beta"
                    isAmp={false}
                    index="1/12"
                    uri="https://tvsa-sandbox.github.io/widgets-beta"
                />
                <GalleryOpenItem
                    image={slides}
                    domain="https://tvsa-sandbox.github.io/widgets-beta"
                    isAmp={false}
                    index="1/12"
                    uri="https://tvsa-sandbox.github.io/widgets-beta"
                />
                <GalleryOpenItem
                    image={slides}
                    domain="https://tvsa-sandbox.github.io/widgets-beta"
                    isAmp={false}
                    index="1/12"
                    uri="https://tvsa-sandbox.github.io/widgets-beta"
                />
                <AdsOpenStyles>
                    <AdsImageStyles
                        src="https://dummyimage.com/250/cccccc/cccccc.png"
                        alt="ads"
                        width="345"
                        height="250"
                    />
                </AdsOpenStyles>
                <GalleryOpenItem
                    image={slides}
                    domain="https://tvsa-sandbox.github.io/widgets-beta"
                    isAmp={false}
                    index="1/12"
                    uri="https://tvsa-sandbox.github.io/widgets-beta"
                />
            </BoxBodyFull>
        </PageStyles>
    );
};

GridGalleryOpen.propTypes = {
    slides: PropTypes.shape({}),
    active: PropTypes.bool.isRequired,
    handlePics: PropTypes.func,
};

GridGalleryOpen.defaultProps = {
    slides: {},
    handlePics: () => alert("[func] Función tap por defecto"),
};

export default GridGalleryOpen;
