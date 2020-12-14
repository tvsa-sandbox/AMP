import styled, { css } from "styled-components";
import { Box, Info, Title, Counter } from "../../accessories";
import { BoxData } from "../../contentTypes/PWA/ArticlePWA/styles";

const LeadGalleryItemStyles = styled(Box)(
    ({ theme }) => css`
        padding-bottom: ${theme.space.xl};
        padding-top: ${theme.space.xl};
    `,
);

const LeadGalleryItemTitle = styled(Title)(
    ({ theme }) => css`
        margin: ${theme.space.lg} ${theme.space.zero};
        font-size: ${theme.fontSizes.fmd};
        line-height: ${theme.lineHeights.llg};

        &::after {
            content: "";
            height: 1px;
            width: 60px;
            background: ${theme.colors.Dark};
            display: block;
            margin: ${theme.space.xl2} ${theme.space.auto} ${theme.space.zero};
        }

        @media (min-width: ${theme.breakpoints.lg}) {
            font-size: 17px;
        }
    `,
);

const LeadGalleryItemInfo = styled(Info)(
    ({ theme }) => css`
        align-self: flex-start;
        color: ${props => (props.color ? theme.colors[props.color] : theme.colors.Dark)};
    `,
);

const LeadGalleryItemCounter = styled(Counter)(
    ({ theme }) => css`
        align-self: flex-start;
        margin-bottom: ${theme.space.lg};
        color: ${props => (props.color ? theme.colors[props.color] : theme.colors.Dark)};
    `,
);

const LeadGalleryItemBoxData = styled(BoxData)(
    ({ theme }) => css`
        max-width: 650px;
        margin: ${theme.space.zero} ${theme.space.auto};

        @media (min-width: ${theme.breakpoints.lg}) {
            flex-direction: column;
            padding: ${theme.space.xl} ${theme.space.zero};
            margin-bottom: ${theme.space.zero};
            max-width: 650px;
        }
    `,
);

export {
    LeadGalleryItemStyles,
    LeadGalleryItemInfo,
    LeadGalleryItemTitle,
    LeadGalleryItemCounter,
    LeadGalleryItemBoxData,
};
