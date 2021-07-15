import React from "react";
import PropTypes from "prop-types";
import { Box, Multicontent } from "../../accessories";
import { ContentCarouselAMPStyles, ContentCarouselTitleStyles } from "./styles";

const ContentCarouselAMP = ({ children, isAmp }) => {
    return (
        <ContentCarouselAMPStyles>
            <ContentCarouselTitleStyles variant="h2">
                Te podría interesar
            </ContentCarouselTitleStyles>
            <Box variant="Transparent">
                <Multicontent>{children}</Multicontent>
            </Box>
        </ContentCarouselAMPStyles>
    );
};

ContentCarouselAMP.propTypes = {
    isAmp: PropTypes.bool,
    // items: PropTypes.arrayOf(PropTypes.shape({})),
};

ContentCarouselAMP.defaultProps = {
    isAmp: false,
    // items: [],
};

export default ContentCarouselAMP;
