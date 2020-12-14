import React from "react";
import PropTypes from "prop-types";
import {
    RelatedContentStyles,
    RelatedContentTextStyles,
    RelatedContentTitleBox,
    RelatedContentTitleStyles,
    RelatedContentImageContainer,
    RelatedContentBoxButtonStyles,
    RelatedContentButtonStyles,
} from "./styles";
import { Image } from "../../accessories";

const RelatedContent = props => {
    const { src, ratio, uri, label, title, more } = props;
    return (
        <RelatedContentStyles variant="transparent" href={uri}>
            <RelatedContentTextStyles>{label}</RelatedContentTextStyles>
            <RelatedContentTitleBox variant="Transparent">
                <RelatedContentTitleStyles variant="h2">{title}</RelatedContentTitleStyles>
            </RelatedContentTitleBox>
            <RelatedContentImageContainer variant="transparent">
                <Image ratio={ratio} src={src} />
            </RelatedContentImageContainer>
            <RelatedContentBoxButtonStyles variant="Transparent">
                <RelatedContentButtonStyles variant="Active">{more}</RelatedContentButtonStyles>
            </RelatedContentBoxButtonStyles>
        </RelatedContentStyles>
    );
};
RelatedContent.propTypes = {
    src: PropTypes.shape({}),
    label: PropTypes.string,
    title: PropTypes.string,
    ratio: PropTypes.string,
    more: PropTypes.string,
    uri: PropTypes.string,
};

RelatedContent.defaultProps = {
    src: [],
    ratio: "aspect16x9",
    label: "Relacionado",
    title:
        "Andrea Legarreta revela qué síntomas de coronavirus padece y si su familia también se contagió",
    more: "Leer más",
    uri: "./",
};

export default RelatedContent;
