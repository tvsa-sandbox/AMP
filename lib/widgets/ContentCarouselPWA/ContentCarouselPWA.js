import React from "react";
import PropTypes from "prop-types";
import { Box, Multicontent } from "../../accessories";
import { ContentCarouselPWAStyles, ContentCarouselTitleStyles } from "./styles";

const ContentCarouselPWA = ({ children, isAmp }) => {
    return (
        <ContentCarouselPWAStyles>
            <ContentCarouselTitleStyles variant="h2">
                Te podría interesar
            </ContentCarouselTitleStyles>
            <Box variant="Transparent">
                <Multicontent>{children}</Multicontent>
            </Box>
        </ContentCarouselPWAStyles>
    );
};

ContentCarouselPWA.propTypes = {
    isAmp: PropTypes.bool,
    // items: PropTypes.arrayOf(PropTypes.shape({})),
};

ContentCarouselPWA.defaultProps = {
    isAmp: false,
    // items: [],
};

export default ContentCarouselPWA;
