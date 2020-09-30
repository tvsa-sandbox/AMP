import React from "react";
import PropTypes from "prop-types";
import { QuoteStyles, QuoteAuthor, QuoteText, BoxQuoteText, BoxQuoteAuthor } from "./styles";

const Quote = props => {
    const { children } = props;
    return (
        <QuoteStyles variant="Transparent">
            <BoxQuoteText variant="Transparent">
                <QuoteText>
                    "Victoria tu luz siempre birllará con nosotros. Aunque tu puerta hoy esté más
                    allá, te puedo escuchar"
                </QuoteText>
            </BoxQuoteText>
            <BoxQuoteAuthor variant="Transparent">
                <QuoteAuthor>Angelique Boyer</QuoteAuthor>
            </BoxQuoteAuthor>
        </QuoteStyles>
    );
};

Quote.propTypes = {
    children: PropTypes.node,
};

Quote.defaultProps = {
    children: null,
};

export default Quote;
