import styled, { css } from "styled-components";
import { Box, Title, Image, Icons, Button } from "../../accessories";

const ShowCardItemStyles = styled(Button)(
    ({ theme }) => css`
        border-radius: 6px;
        height: 100%;
        width: 100%;
        overflow: hidden;
        display: flex;
    height: 305px;
    width: 165px;
    margin: ${theme.space.zero};
    padding: ${theme.space.zero};

    @media (min-width: ${theme.breakpoints.xl}) {
        height: 433px;
    width:  246px;
        }
        `,
);

const ShowCardBoxStyles = styled(Box)(
    ({ theme }) => css`
    position: relative;
    display: flex;
    text-transform: uppercase;
    width: auto;
    margin: auto;
    align-items: center;
    `,
);

const ShowCardCaptionStyles = styled(Box)(
    ({ theme }) => css`
        position: relative;
        margin-bottom: 15px;
        height: 74px;
        background: ${theme.colors.grayfooter};
        border-radius: 0px 0px 5px 5px;

        @media (min-width: ${theme.breakpoints.xl}) {
            height: 91px;
        }
        `,
);

const ShowCardImageStyles = styled(Image)(
    ({ theme }) => css`
width: 165px;
height: 220px;

@media (min-width: ${theme.breakpoints.lg}) {
    width: 246px;
    height: 328px;
        }
    `,
);

const ShowCardTitleStyles = styled(Title)(
    ({ theme }) => css`
                text-transform: uppercase;
                width: 80%;
                height: 91px;
                font-size: ${theme.fontSizes.fxs};
                line-height: ${theme.lineHeights.lxs};
                padding: ${theme.space.lg};
                color: ${theme.colors.gray} ;

                @media (min-width: ${theme.breakpoints.lg}) {
                    font-size: ${theme.fontSizes.fmd};
                    line-height: ${theme.lineHeights.lmd};
        }
    `,
);

const ShowCardBoxIconStyles = styled(Box)(
    ({ theme }) => css`
        position: absolute;
        justify-content: flex-end;
        display: flex;
        width: 100%;
        bottom: 8px; 
        padding-top: ${theme.space.md};
        padding-right: ${theme.space.zero};

                @media (min-width: ${theme.breakpoints.lg}) {
                    bottom: 2px;
                    padding-right: ${theme.space.md};
        }
    `,
);

const ShowCardIconStyles = styled(Icons)(
    ({ theme }) => css`
    background: transparent;
    width: 55px;
    height: 40px;

    @media (min-width: ${theme.breakpoints.lg}) {
        width: 50px;
        height: 50px;
        }
    `,
);

export {
    ShowCardItemStyles,
    ShowCardBoxStyles,
    ShowCardImageStyles,
    ShowCardTitleStyles,
    ShowCardCaptionStyles,
    ShowCardIconStyles,
    ShowCardBoxIconStyles,
};
