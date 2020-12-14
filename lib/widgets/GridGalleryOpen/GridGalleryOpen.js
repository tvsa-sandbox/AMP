import React from "react";
import PropTypes from "prop-types";
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
    const {
        slides,
        slidesimg,
        handlePics,
        active,
        title,
        description,
        authors,
        lengthSlides,
    } = props;
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
                            {title && <TitleStyles variant="h1">{title}</TitleStyles>}
                        </TitleStyles>
                    </BoxTitle>
                    <BoxData variant="Transparent">
                        <TextDescription>
                            {description && <TextDescription>{description}</TextDescription>}
                        </TextDescription>
                    </BoxData>
                    <BoxAuthor variant="Transparent">
                        {authors && <AuthorStyles color="gray3">{`Por: ${authors}`}</AuthorStyles>}
                    </BoxAuthor>
                </BoxContainer>
                {slides.map((slide, index) => {
                    const KEY = `${slide.title}-${index}`;
                    return (
                        <GalleryOpenItem
                            {...slide}
                            domain="https://tvsa-sandbox.github.io/widgets-beta"
                            key={KEY}
                            index={`${index + 1}/${slides.length}`}
                            isAmp={false}
                            num={index + 1}
                            image={slidesimg}
                            uri="https://tvsa-sandbox.github.io/widgets-beta"
                        />
                    );
                })}
                <AdsOpenStyles>
                    <AdsImageStyles
                        src="https://dummyimage.com/250/cccccc/cccccc.png"
                        alt="ads"
                        width="345"
                        height="50"
                    />
                </AdsOpenStyles>
            </BoxBodyFull>
        </PageStyles>
    );
};

GridGalleryOpen.propTypes = {
    slides: PropTypes.arrayOf(PropTypes.shape({})),
    active: PropTypes.bool.isRequired,
    description: PropTypes.string,
    authors: PropTypes.string,
    title: PropTypes.string,
    lengthSlides: PropTypes.number,
    handlePics: PropTypes.func,
};

GridGalleryOpen.defaultProps = {
    slides: [],
    authors: "",
    description: "",
    title: "",
    lengthSlides: 0,
    handlePics: () => alert("[func] Función tap por defecto"),
};

export default GridGalleryOpen;
