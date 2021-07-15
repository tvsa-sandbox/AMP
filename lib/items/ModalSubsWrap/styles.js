import styled, { css } from "styled-components";
import { Modal, Box, Text } from "../../accessories";

const ModalSubsWrapStyles = styled(Modal)(
    ({ theme }) => css`
        background: ${theme.colors.gray2};
        opacity: 0.97;
        max-width: 1024px;
        margin: ${theme.space.zero} ${theme.space.auto};
    `,
);

const ModalGrid = styled(Box)(
    ({ theme }) => css`
        margin: ${theme.space.zero} ${theme.space.zero} ${theme.space.xl2};
        display: grid;
        grid-template-columns: repeat(3, 0.3fr);
        grid-template-rows: repeat(3, 1fr);
        grid-column-gap: 10px;
        grid-row-gap: 20px;
        justify-content: center;
    `,
);

const ModalBoxStyles = styled(Box)(
    () => css`
        box-shadow: 0px 6px 10px #d6d6d6;
    `,
);

const ModalBoxHead = styled(Box)(
    ({ theme }) => css`
        margin-bottom: ${theme.space.xxl};
        padding: ${theme.space.zero} ${theme.space.xxl};
    `,
);

const ModalBoxInfo = styled(Box)(
    () => css`
        height: 82px;
    `,
);

const ModalSubsNumber = styled(Text)(
    ({ theme }) => css`
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${theme.colors.Light};
        font-size: ${theme.fontSizes.flg};
        font-weight: bold;
        background: ${theme.colors.Interaction};
        width: 40px;
        height: 40px;
        border-radius: 50%;

        @media (min-width: ${theme.breakpoints.lg}) {
            font-size: ${theme.fontSizes.fxl};
        }
    `,
);

const ModalSubsStatics = styled(ModalSubsNumber)(
    ({ theme }) => css`
        margin: ${theme.space.zero} ${theme.space.auto} ${theme.space.sm};
        background: none;
        color: ${theme.colors.Interaction};
        font-size: ${theme.fontSizes.fxxl};
    `,
);

const ModalSubsText = styled(Text)(
    ({ theme }) => css`
        font-weight: bold;
        margin: ${theme.space.zero} ${theme.space.base};
        font-size: ${theme.fontSizes.fmd};

        @media (min-width: ${theme.breakpoints.lg}) {
            font-size: ${theme.fontSizes.fsm}
        }
    `,
);

const ModalSubsStatus = styled(Text)(
    ({ theme }) => css`
        margin: ${theme.space.zero} ${theme.space.base};
        font-size: ${theme.fontSizes.fxs};

        @media (min-width: ${theme.breakpoints.lg}) {
            font-size: ${theme.fontSizes.fsm}
        }
    `,
);

const ModalSubsSection = styled(Text)(
    ({ theme }) => css`
         font-weight: 600;
        font-size: ${theme.fontSizes.fsm};
        text-align: center;
`,
);

export { ModalSubsWrapStyles, ModalGrid, ModalSubsNumber, ModalBoxStyles, ModalSubsText, ModalSubsStatus, ModalBoxHead, ModalSubsSection, ModalSubsStatics, ModalBoxInfo };
