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
    const { img } = props;
    return (
        <RelatedContentStyles variant="transparent">
            <RelatedContentTextStyles>Relacionado</RelatedContentTextStyles>
            <RelatedContentTitleBox variant="Transparent">
                <RelatedContentTitleStyles variant="h2">
                    Andrea Legarreta revela qué síntomas de coronavirus padece y si su familia
                    también se contagió
                </RelatedContentTitleStyles>
            </RelatedContentTitleBox>
            <RelatedContentImageContainer variant="transparent">
                <Image ratio="aspect16x9" src={img} />
            </RelatedContentImageContainer>
            <RelatedContentBoxButtonStyles variant="Transparent">
                <RelatedContentButtonStyles variant="Active">Leer más</RelatedContentButtonStyles>
            </RelatedContentBoxButtonStyles>
        </RelatedContentStyles>
    );
};
RelatedContent.propTypes = {
    img: PropTypes.shape({}),
};

RelatedContent.defaultProps = {
    img: [],
};

export default RelatedContent;
