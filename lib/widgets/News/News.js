import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { NewsStyles, NewsTitleStyles } from "./styles";
import { Box } from "../../accessories";
import {
    NewsItemStyles,
    NewsItemBoxStyles,
    NewsItemImageStyles,
    NewsItemTitleStyles,
    NewsItemLabelStyles,
    NewsItemSectionStyles,
    NewsItemBoxLabelActive,
    NewsItemCaption,
} from "../../items/NewsItem/styles";

const News = ({ src, ratio,datas }) => {
    return (
        <NewsStyles>
            <NewsTitleStyles variant="h3">In the News</NewsTitleStyles>
            {datas.map(data=> {
                return (
                    <Fragment key={data.id}>
            <Box variant="Transparent">
            <NewsItemStyles href="./">
            <NewsItemBoxStyles variant="Transparent" >
                <NewsItemBoxLabelActive  variant="Transparent">
            <NewsItemLabelStyles>{data.label}</NewsItemLabelStyles>
            </ NewsItemBoxLabelActive >
                <NewsItemImageStyles ratio={ratio} src={src} />
            </NewsItemBoxStyles>
            <NewsItemCaption variant="Transparent">
                <NewsItemSectionStyles>{data.label}</NewsItemSectionStyles>
                <NewsItemTitleStyles variant="h3">{data.title}</NewsItemTitleStyles>
            </NewsItemCaption>
        </NewsItemStyles>
            </Box>
            </Fragment >
            );
        })}
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
