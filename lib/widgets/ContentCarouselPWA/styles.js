import styled, { css } from "styled-components";
import Title from "../../accessories/Title";

const ContentCarouselPWAStyles = styled.section(
    ({ theme }) => css`
        width: 100%;
        height: auto;
        background: ${theme.colors.gray2};
        padding-top: ${theme.space.xl2};
        padding-bottom: ${theme.space.xl3};
        padding-left: ${theme.space.xl2};
        padding-right: ${theme.space.xs};
        margin: ${theme.space.xl2} ${theme.space.zero};
        @media (min-width: ${theme.breakpoints.xl}) {
            padding-left: ${theme.space.xs};
        }
    `,
);

const ContentCarouselTitleStyles = styled(Title)(
    ({ theme }) => css`
        margin-bottom: ${theme.space.xxl};
        max-width: 1024px;
        margin-left: ${theme.space.xs};
        margin-right: auto;
        text-align: left;
        text-transform: uppercase;
        font-weight: 700;
        color: ${theme.colors.dark};
        font-family: ${theme.fonts[2]};
        font-size: ${theme.fontSizes.fbase};

        @media (min-width: ${theme.breakpoints.xl}) {
            font-size: ${theme.fontSizes.fxl2};
            margin-left: auto;
            max-width: 650px;
            padding-top: ${theme.space.base};
            padding-bottom: ${theme.space.base};
        }
    `,
);

const ContentCarouselThumbStyles = styled.div(
    ({ theme }) => css`
        display: flex;
        margin-left: ${theme.space.xs};
        margin-right: ${theme.space.xs};
        padding-bottom: ${theme.space.md};
        width: auto;
    `,
);

export { ContentCarouselPWAStyles, ContentCarouselTitleStyles, ContentCarouselThumbStyles };
