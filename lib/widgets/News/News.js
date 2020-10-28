import React from "react";
import { NewsStyles, NewsTitleStyles } from "./styles";
import { Box } from "../../accessories";
import { NewsItem } from "../../items";

const News = props => {
    return (
        <NewsStyles {...props}>
            <NewsTitleStyles variant="h3">
                In the News
            </NewsTitleStyles>
            <Box variant="Transparent">
                <NewsItem />
                <NewsItem />
                <NewsItem />
                <NewsItem />
            </Box>
        </NewsStyles>
    );
};

export default News;
