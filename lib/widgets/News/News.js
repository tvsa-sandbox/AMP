import React from "react";
import PropTypes from "prop-types";
import { NewsStyles, NewsTitleStyles } from "./styles";
import { Box } from "../../accessories";
import { NewsItem } from "../../items";

const News = ({ src, ratio }) => {
    return (
        <NewsStyles>
            <NewsTitleStyles variant="h3">In the News</NewsTitleStyles>
            <Box variant="Transparent">
                <NewsItem ratio={ratio} src={src} />
                <NewsItem ratio={ratio} src={src} />
                <NewsItem ratio={ratio} src={src} />
                <NewsItem ratio={ratio} src={src} />
            </Box>
        </NewsStyles>
    );
};

News.propTypes = {
    src: PropTypes.shape({}),
    ratio: PropTypes.string,
};

News.defaultProps = {
    src: {},
    ratio: "aspect16x9",
};

export default News;
