import styled, { css } from "styled-components";
import { Box, Button, Text } from "../../accessories";

const EndCardBox = styled(Box)(
    ({ theme }) => css`
        width: 100%;
        max-width: 820px;
        height: 100%;
        flex-direction: column;
        position: absolute;
        z-index: 2;
        top: 0;
        background: rgba(0, 0, 0, 0.8);
        margin: ${theme.space.zero} ${theme.space.auto};
        padding: ${theme.space.sm};
        justify-content: space-between;

        @media (min-width: ${theme.breakpoints.lg}) {
            padding: ${theme.space.lg};
        }
    `,
);

const EndCardImageBox = styled(Box)(
    ({ theme }) => css`
        position: relative;
        height: 100%;
        min-width: 85px;
        border-radius: 5px;
        border: solid 1px rgba(255, 255, 255, 0.3);
        overflow: hidden;
        margin: ${theme.space.zero} ${theme.space.sm};
    `,
);
const EndCardBoxControls = styled(Box)(
    ({ theme }) => css`
        margin-top: ${theme.space.auto};
        justify-content: flex-start;
    `,
);

const ButtonText = styled(Text)(
    ({ theme }) => css`
        font-size: ${theme.fontSizes.fxs};
    `,
);

const EndCardBoxThumbs = styled(Box)(
    () => css`
        justify-content: space-between;
    `,
);

const EndCardButton = styled(Button)(
    ({ theme }) => css`
        padding: ${theme.space.zero};
        margin: ${theme.space.zero};
        position: absolute;
        z-index: 2;
        left: 0%;
        top: 50%;
        transform: translateY(-50%);

        &:hover {
            opacity: 0.5;
        }

        @media (min-width: ${theme.breakpoints.lg}) {
            display: block;
            left: 10%;
        }
    `,
);
const EndCardControls = styled(Box)(
    ({ theme }) => css`
        background: rgba(0, 0, 0, 0.5);
        position: absolute;
        z-index: 1;
        height: 100%;
    `,
);

const EndCardPlay = styled(Button)(
    ({ theme }) => css`
        position: absolute;
        z-index: 2;
        right: 0%;
        top: 50%;
        transform: translateY(-50%);

        &:hover {
            opacity: 0.5;
        }

        @media (min-width: ${theme.breakpoints.lg}) {
            display: block;
            right: 10%;
        }
    `,
);
const EndCardPause = styled(Button)(
    ({ theme }) => css`
        z-index: 3;

        &:hover {
            opacity: 0.5;
        }
    `,
);
const EndCardIcon = styled.div(
    () => css`
        border-radius: 50px;
        border: solid 2px rgba(255, 255, 255, 0.5);
        width: 50px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(0, 0, 0, 0.5);
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: 5;
    `,
);
const EndCardTitleBox = styled(Box)(
    ({ theme }) => css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        height: 100%;
        padding: ${theme.space.zero} ${theme.space.sm};

        @media (min-width: ${theme.breakpoints.lg}) {
            padding: ${theme.space.zero} ${theme.space.lg};
        }
    `,
);
const EndCardTitle = styled(Text)(
    ({ theme }) => css`
        font-size: ${theme.fontSizes.fsm};
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;

        @media (min-width: ${theme.breakpoints.lg}) {
            font-size: ${theme.fontSizes.fxl};
            line-height: ${theme.lineHeights.lxxl};
        }
    `,
);
const EndCardCopy = styled(Text)(
    ({ theme }) => css`
        font-size: ${theme.fontSizes.fxs};

        @media (min-width: ${theme.breakpoints.lg}) {
            font-size: ${theme.fontSizes.flg};
            line-height: ${theme.lineHeights.lxl};
        }
    `,
);

export {
    EndCardBox,
    EndCardImageBox,
    EndCardBoxThumbs,
    EndCardButton,
    EndCardControls,
    EndCardIcon,
    EndCardTitleBox,
    EndCardTitle,
    EndCardCopy,
    EndCardBoxControls,
    EndCardPause,
    EndCardPlay,
    ButtonText,
};
