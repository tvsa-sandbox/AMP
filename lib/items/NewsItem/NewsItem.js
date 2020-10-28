import React from "react";
import {
    NewsItemStyles,
    NewsItemBoxStyles,
    NewsItemImageStyles,
    NewsItemTitleStyles,
    IconDurationStyles,
} from "./styles";
import { Box } from "../../accessories";

const NewsItem = props => {
    return (
        <NewsItemStyles {...props}>
            <NewsItemBoxStyles variant="Transparent">
                <NewsItemImageStyles ratio="aspect16x9" iconwidth={["50px", "50px"]} />
            </NewsItemBoxStyles>
            <Box variant="Transparent">
                <NewsItemTitleStyles variant="h3">
                    Borussia Dortmund vs FC Barcelona Highlights Borussia Dortmund vs FC Barcelona
                    Highlights
                </NewsItemTitleStyles>
                <IconDurationStyles />
            </Box>
        </NewsItemStyles>
    );
};

export default NewsItem;
