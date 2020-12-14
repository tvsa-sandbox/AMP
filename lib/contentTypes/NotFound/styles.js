import styled, { css } from "styled-components";

import Box from "accessories/Box";
import Title from "accessories/Title";
import Text from "accessories/Text";
import Icons from "accessories/Icons";
import Anchor from "accessories/Anchor";

const NotFoundItemStyles = styled.section(
    ({ theme }) => css`
        width: 100%;
        position: relative;
        height: 100vh;
        display: flex;

        `,
);

const NotFoundBoxStyles = styled(Box)(
    ({ theme }) => css`
    position: relative;
    width: 100%;
    margin: ${theme.space.auto};
    align-items: center;
    text-align: center;
    justify-content: center;
    `,
);

const NotFoundBoxTextStyles = styled(Box)(
    ({ theme }) => css`
    margin: ${theme.space.xl} ${theme.space.zero}; 

    `,
);

const NotFoundIconStyles = styled(Icons)(
    ({ theme }) => css`
        display: block;
        z-index: 3;
        margin: ${theme.space.zero} ${theme.space.auto};
        width:130px;
        height:150px;

        @media (min-width: ${theme.breakpoints.xl}) {
            width:150px;
            height:150px;
        }
        `,
);

const NotFoundTitleStyles = styled(Title)(
    ({ theme }) => css`
    z-index: 3;
    font-weight: bold;
    width: 100%;
    text-align: center;
    text-shadow: 2px 2px 5px #000000;
    font-size: 60px;
    line-height: 64px;
    color: ${theme.colors.gray};

    @media (min-width: ${theme.breakpoints.xl}) {
        font-size: 80px;
        line-height: 84px;
        }
    `,
);

const NotFoundTextStyles = styled(Text)(
    ({ theme }) => css`
    z-index: 3;
    font-weight: bold;
    width: 100%;
    text-align: center;
    text-transform: uppercase;
    text-shadow: 2px 2px 5px #000000;
    font-size: ${theme.fontSizes.fmd};
    line-height: 20px;
    color: ${theme.colors.gray};

    @media (min-width: ${theme.breakpoints.xl}) {
        font-size: ${theme.fontSizes.fxxl};
        line-height: 32px;

        }
    `,
);

const NotFoundButtonStyles = styled(Anchor)(
    ({ theme }) => css`
        border-radius: 25px;
        background: transparent;
        margin: ${theme.space.zero} ${theme.space.auto} ${theme.space.base} ${theme.space.auto};
        font-size:  ${theme.fontSizes.fsm};
        font-weight: bold;
        min-width: 126px;
        justify-content: center;
        align-items: center;
        border: 2px solid ${theme.colors.Interaction};
        display: flex;
        width: 40px;
        height: 40px;

        &:hover {
        opacity: 0.7;
    }

        `,
);

export {
    NotFoundItemStyles,
    NotFoundBoxStyles,
    NotFoundTitleStyles,
    NotFoundTextStyles,
    NotFoundIconStyles,
    NotFoundButtonStyles,
    NotFoundBoxTextStyles,
};
