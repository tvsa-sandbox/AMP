import React, { useContext } from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "styled-components";
import { Box, Multicontent } from "../../accessories";
import { ContentCarouselStyles, ContentCarouselTitleStyles } from "./styles";

const ContentCarousel = ({ children, isAmp }) => {
    const themeContext = useContext(ThemeContext);
    const ui = themeContext.ui.name;
    return (
        <ContentCarouselStyles>
            <ContentCarouselTitleStyles variant="h2" center={ui === "tudn"}>
                Para Ti
            </ContentCarouselTitleStyles>
            <Box variant="Transparent">
                <Multicontent>{children}</Multicontent>
            </Box>
        </ContentCarouselStyles>
    );
};

ContentCarousel.propTypes = {
    isAmp: PropTypes.bool,
};

ContentCarousel.defaultProps = {
    isAmp: false,
};

export default ContentCarousel;
