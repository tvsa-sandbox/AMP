import styled, { css } from "styled-components";
import Box from "../../accessories/Box";
import Anchor from "../../accessories/Anchor";

const MosaicItemStyles = styled(Anchor)(
    ({ theme }) => css`
        border-radius: 6px;
        display: block;
        position: relative;
        width: 165px;
        margin: ${theme.space.sm} ${theme.space.auto};

        @media (min-width: ${theme.breakpoints.lg}) {
            width: 277px;
        }
    `,
);

const MosaicItemImageStyles = styled(Box)(
    ({ theme }) => css`
        border-radius: 6px 6px 0px 0px;
        height: 46px;
        opacity: 0.5;
        width: 165px;
        @media (min-width: ${theme.breakpoints.lg}) {
            width: 277px;
            height: 78px;
        }
    `,
);

const CaptionBoxStyles = styled(Box)(
    ({ theme }) => css`
        border-radius: 0px 0px 6px 6px;
        box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.4);
        display: flex;
        height: 46px;
        width: 165px;
        background: ${theme.colors.Light};
        @media (min-width: ${theme.breakpoints.lg}) {
            width: 277px;
            height: 78px;
        }
    `,
);

const MosaicItemLogoStyles = styled(Box)(
    ({ theme }) => css`
        margin: ${theme.space.auto};
        width: 40px;
        @media (min-width: ${theme.breakpoints.lg}) {
            width: 50px;
        }
    `,
);

export { MosaicItemStyles, CaptionBoxStyles, MosaicItemImageStyles, MosaicItemLogoStyles };
