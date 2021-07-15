import React from "react";
import PropTypes from "prop-types";
import {SkeletonArticleStyles, SkeletonArticleBox, SkeletonArticleLabel, SkeletonArticleTitle, SkeletonArticleDescription, SkeletonArticleAuthor, SkeletonArticlePlaceholder , SkeletonArticleBody} from "./styles";

const SkeletonArticle = props => {
    const { ratio } = props;
    return (
        <SkeletonArticleStyles>
                <SkeletonArticleBox variant="Transparent">
                    <SkeletonArticleLabel variant="Transparent"/>
                </SkeletonArticleBox>
                <SkeletonArticleBox variant="Transparent">
                    <SkeletonArticleTitle variant="Transparent"/>
                    <SkeletonArticleTitle variant="Transparent"/>
                    <SkeletonArticleTitle variant="Transparent"/>
                    <SkeletonArticleTitle variant="Transparent"/>
                </SkeletonArticleBox>
                <SkeletonArticleBox variant="Transparent">
                    <SkeletonArticleDescription variant="Transparent"/>
                    <SkeletonArticleDescription variant="Transparent"/>
                    <SkeletonArticleDescription variant="Transparent"/>
                    <SkeletonArticleDescription variant="Transparent"/>
                </SkeletonArticleBox>
                <SkeletonArticleBox variant="Transparent">
                    <SkeletonArticleAuthor variant="Transparent"/>
                </SkeletonArticleBox>
                <SkeletonArticleBox variant="Transparent">
                    <SkeletonArticlePlaceholder ratio={ratio}/>
                </SkeletonArticleBox>
                <SkeletonArticleBox variant="Transparent">
                    <SkeletonArticleBody variant="Transparent"/>
                    <SkeletonArticleBody variant="Transparent"/>
                    <SkeletonArticleBody variant="Transparent"/>
                    <SkeletonArticleBody variant="Transparent"/>
                </SkeletonArticleBox>
        </SkeletonArticleStyles>
    );
};

SkeletonArticle.propTypes = {
    ratio: PropTypes.string,
};

SkeletonArticle.defaultProps = {
    ratio: "aspect16x9",
};

export default SkeletonArticle;
