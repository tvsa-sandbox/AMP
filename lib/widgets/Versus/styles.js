import styled, { css } from "styled-components";
import Box from "../../accessories/Box";

import {
    TabsMatchButtonStyles,
    TabsMatchButtonActiveStyles,
} from "../TabsMatch/styles";

const VersusStyles = styled.section(
    ({ theme }) => css`
        max-width: 700px;
        margin: ${theme.space.zero} ${theme.space.auto};
        background: ${theme.colors.Light};
    `,
);

const VersusBoxPorcent = styled(Box)(
    () => css`
        display: grid;
        grid-template-columns: 50% 50%;
    `,
);

const VersusBoxSection = styled(Box)(
    ({ theme }) => css`
        width: 100%;
        display: flex;
        padding: ${theme.space.sm};
        align-items: flex-start;
        border-top: 2px solid  ${theme.colors.Interaction};
    `,
);

const VersusBoxFactColumn = styled(Box)(
    ({ theme }) => css`
        width: 100%;
      
    `,
);

const VersusFactButton = styled(Box)(
    () => css`
        height: 60px;
        width: 100%;
        justify-content: flex-end;

    `,
);

const VersusFact = styled(Box)(
    ({ theme }) => css`
        display: flex;
        height: 50px;
        font-size: ${theme.fontSizes.fxs};
        font-weight: bold;

        @media (min-width: ${theme.breakpoints.xl}) {
            font-size: ${theme.fontSizes.fsm};
        }
    `,
);

const VersusBoxEstadisticColumn = styled(Box)(
    () => css`
        width: 100%;
    `,
);

const VersusBoxImage = styled(Box)(
    ({ theme }) => css`
        display: flex;
        height: 40px;
        max-width: 40px;
        margin: ${theme.space.md} 7%;
        border-radius: 20px;
        overflow: hidden;

        @media (min-width: ${theme.breakpoints.xl}) {
            margin: ${theme.space.md} 10%;
        }
    `,
);

const VersusNumbers = styled(Box)(
    ({ theme }) => css`
        display: flex;
        height: 50px;
        font-size: ${theme.fontSizes.fxs};
        justify-content: center;

        @media (min-width: ${theme.breakpoints.xl}) {
            font-size: ${theme.fontSizes.fsm};
        }
    `,
);

const VersusTabsActive = styled(TabsMatchButtonActiveStyles)(
    ({ theme }) => css`

    color: ${theme.colors.Interaction};

            &::after{
            content:"";
            display: flex;
            width: 20%;
            height: 2px;
            background: ${theme.colors.Interaction};
            position: absolute;
            bottom: 15px;
        }
        
    `,
);

const VersusTabs = styled(TabsMatchButtonStyles)(
    ({ theme }) => css`
    color: ${theme.colors.gray3};
    `,
);

export {
    VersusStyles,
    VersusBoxSection,
    VersusBoxFactColumn,
    VersusFactButton,
    VersusFact,
    VersusBoxEstadisticColumn,
    VersusBoxImage,
    VersusNumbers,
    VersusBoxPorcent,
    VersusTabsActive,
    VersusTabs,
};
