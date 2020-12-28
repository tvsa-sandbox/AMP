import React from "react";
import PropTypes from "prop-types";
import {
    ItemMostStyles,
    ItemMostTitleContainer,
    ItemMostTitleStyles,
    ItemMostNumberStyles,
    TextSmall,
} from "./styles";

const ItemMost = props => {
    const { title, text, uri, counter } = props;
    return (
        <ItemMostStyles href={uri} {...props}>
            <ItemMostTitleContainer variant="Transparent">
                <ItemMostNumberStyles>{counter}</ItemMostNumberStyles>
                <ItemMostTitleStyles variant="h5">{title}</ItemMostTitleStyles>
            </ItemMostTitleContainer>
            <TextSmall>{text}</TextSmall>
        </ItemMostStyles>
    );
};

ItemMost.propTypes = {
    title: PropTypes.string,
    uri: PropTypes.string,
    counter: PropTypes.number,
    text: PropTypes.string,
};

ItemMost.defaultProps = {
    title: "‘Vencer el Desamor’ se consolida como una de las telenovelas más exitosas del año",
    text: "Ver Más",
    uri: "./",
    counter: "1",
};

export default ItemMost;
