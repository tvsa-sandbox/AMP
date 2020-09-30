import styled, { css } from "styled-components";
import Text from "../../accessories/Text";
import Box from "../../accessories/Box";

const QuoteStyles = styled.div(
    ({ theme }) => css`
        width: 100%;
        height: auto;
        padding: ${theme.space.zero} ${theme.space.xl2};

        @media (min-width: ${theme.breakpoints.xl}) {
            padding: ${theme.space.zero};
        }
    `,
);

const BoxQuoteText = styled(Box)(
    ({ theme }) => css`
        max-width: 340px;
        justify-content: center;
        margin: ${theme.space.xl2} auto;
        max-width: 768px;
        @media (min-width: ${theme.breakpoints.xl}) {
            max-width: 848px;
        }
    `,
);

const BoxQuoteAuthor = styled(Box)(
    ({ theme }) => css`
        justify-content: flex-end;
        display: flex;
        width: 100%;
        @media (min-width: ${theme.breakpoints.xl}) {
            width: 80%;
        }
    `,
);

const QuoteText = styled(Text)(
    ({ theme }) => css`
        width: 100%;
        height: auto;
        color: ${theme.colors.Dark};
        font-weight: normal;
        font-size: ${theme.fontSizes.fxl};
        line-height: 30px;
        @media (min-width: ${theme.breakpoints.xl}) {
            font-size: ${theme.fontSizes.fxl3};
            line-height: 52px;
        }
    `,
);

const QuoteAuthor = styled(Text)(
    ({ theme }) => css`
        width: auto;
        max-width: 250px;
        height: auto;
        color: ${theme.colors.Dark};
        font-size: ${theme.fontSizes.fbase};
        text-align: right;
        padding-right: ${theme.space.base};

        @media (min-width: ${theme.breakpoints.xl}) {
            font-size: ${theme.fontSizes.fbase};
        }

        &::after {
            content: "";
            display: flex;
            background: ${theme.colors.Dark};
            width: 25%;
            height: 1px;
            margin-top: 23px;
            margin-left: 100px;
        }
    `,
);

export { QuoteStyles, QuoteAuthor, QuoteText, BoxQuoteText, BoxQuoteAuthor };
