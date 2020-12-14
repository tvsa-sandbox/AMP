import React from "react";
import PropTypes from "prop-types";
import {
    NewsItemStyles,
    NewsItemBoxStyles,
    NewsItemImageStyles,
    NewsItemTitleStyles,
} from "./styles";
import { Box, IconDuration } from "../../accessories";

const NewsItem = props => {
    const { title, ratio, src, time } = props;
    return (
        <NewsItemStyles {...props}>
            <NewsItemBoxStyles variant="Transparent">
                <NewsItemImageStyles ratio={ratio} src={src} />
            </NewsItemBoxStyles>
            <Box variant="Transparent">
                <NewsItemTitleStyles variant="h3">{title}</NewsItemTitleStyles>
                <IconDuration variant="Transparent" >{time}</IconDuration>
            </Box>
        </NewsItemStyles>
    );
};

NewsItem.propTypes = {
    src: PropTypes.shape({}),
    ratio: PropTypes.string,
    title: PropTypes.string,
    time: PropTypes.string,
};

NewsItem.defaultProps = {
    ratio: "aspect16x9",
    src: {},
    title: "Borussia Dortmund vs FC Barcelona Highlights Highlights",
    time: "32:14",
};


export default NewsItem;
