import styled, { css } from "styled-components";
import Box from "../../accessories/Box";
import Text from "../../accessories/Text";
import Info from "../../accessories/Info";

const LeadImageStyles = styled(Box)(
    ({ theme }) => css`
        margin-bottom: ${theme.space.xl2};
        margin-top: ${theme.space.xl2};
    `,
);

const BoxTextStyles = styled(Box)(
    ({ theme }) => css`
        max-width: 290px;
        justify-content: center;
        margin: ${theme.space.lg} auto;

        @media (min-width: ${theme.breakpoints.xl}) {
            max-width: 650px;
        }

        &::after {
            content: "";
            display: flex;
            background: ${theme.colors.Dark};
            width: 60px;
            height: 1px;
            margin: ${theme.space.xl2} auto;
            margin-bottom: ${theme.space.zero};
        }
    `,
);

const LeadImageText = styled(Text)(
    ({ theme }) => css`
        width: 100%;
        height: auto;
        color: ${theme.colors.Dark};
        font-size: ${theme.fontSizes.fmd};
        font-weight: 700;
        line-height: 20px;
        margin: ${theme.space.lg} ${theme.space.zero};

        @media (min-width: ${theme.breakpoints.xl}) {
            font-size: 18px;
            line-height: 24px;
        }
    `,
);

const LeadImageInfo = styled(Info)(
    ({ theme }) => css`
        letter-spacing: 1px;
        line-height: ${theme.lineHeights.lxs};
        font-size: ${theme.fontSizes.fxs};
        width: 100%;
        color: ${props => (props.color ? theme.colors[props.color] : theme.colors.Dark)};
        opacity: 0.7;
        font-family: ${theme.fonts[2]};
        
    `,
);

export { LeadImageStyles, LeadImageInfo, LeadImageText, BoxTextStyles };
