import React, { Fragment } from "react";
import PropTypes from "prop-types";
import {
    NewsItemStyles,
    NewsItemBoxStyles,
    NewsItemImageStyles,
    NewsItemTitleStyles,
    NewsItemLabelStyles,
    NewsItemSectionStyles,
    NewsItemBoxLabelActive,
    NewsItemCaption,
} from "./styles";

const NewsItem = props => {
    const { ratio, src, news } = props;
    return (
        <NewsItemStyles href="./" {...props}>
             {news.map(data=> {
                return (
                    <Fragment key={data.id}>
                    <NewsItemBoxStyles variant="Transparent">
                        <NewsItemBoxLabelActive  variant="Transparent">
                    <NewsItemLabelStyles>{data.label}</NewsItemLabelStyles>
                    </ NewsItemBoxLabelActive >
                        <NewsItemImageStyles ratio={ratio} src={src} />
                    </NewsItemBoxStyles>
                    <NewsItemCaption variant="Transparent">
                        <NewsItemSectionStyles>{data.label}</NewsItemSectionStyles>
                        <NewsItemTitleStyles variant="h3">{data.title}</NewsItemTitleStyles>
                    </NewsItemCaption>
            </Fragment >
            );
        })}
        </NewsItemStyles>
    );
};

NewsItem.propTypes = {
    src: PropTypes.shape({}),
    ratio: PropTypes.string,
};

NewsItem.defaultProps = {
    ratio: "aspect16x9",
    src: {},
};


export default NewsItem;
