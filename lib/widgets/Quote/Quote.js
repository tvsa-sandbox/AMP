import React from "react";
import PropTypes from "prop-types";
import { QuoteStyles, QuoteAuthor, QuoteText, BoxQuoteText, BoxQuoteAuthor } from "./styles";

const Quote = props => {
    const { text, author } = props;
    return (
        <QuoteStyles variant="Transparent">
            <BoxQuoteText variant="Transparent">
                <QuoteText>{text}</QuoteText>
            </BoxQuoteText>
            <BoxQuoteAuthor variant="Transparent">
                <QuoteAuthor>{author}</QuoteAuthor>
            </BoxQuoteAuthor>
        </QuoteStyles>
    );
};

Quote.propTypes = {
    children: PropTypes.node,
    text: PropTypes.string,
    author: PropTypes.string,
};

Quote.defaultProps = {
    children: null,
    author: "Angelique Boyer",
    text:
        "Victoria tu luz siempre birllará con nosotros. Aunque tu puerta hoy esté más allá, te puedo escuchar",
};

export default Quote;
