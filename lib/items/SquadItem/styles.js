import styled, { css } from "styled-components";
import Box from "../../accessories/Box";
import Title from "../../accessories/Title";
import Text from "../../accessories/Text";

const SquadItemStyles = styled(Box)(
    ({ theme }) => css`
        position: relative;
        display: flex;
        width: 100%;
        max-width: 420px;
        height: 55px;
        padding: ${theme.space.sm} ${theme.space.lg};
        border-bottom: 2px solid ${theme.colors.gray2};
        background: ${theme.colors.Light};
        margin: ${theme.space.sm} ${theme.space.zero};
    `,
);

const SquadNumberBox = styled(Box)(
    () => css`
        display: flex;
        width: 20%;
        height: 45px;
    `,
);

const SquadTitleBox = styled(Box)(
    ({ theme }) => css`
        width: 100%;
        align-items: center;
        display: flex;
        height: 45px;
        margin: ${theme.space.zero} ${theme.space.lg};
    `,
);

const SquadNationBox = styled(Box)(
    () => css`
        width: 60%;
        align-items: center;
        display: flex;
        height: 45px;
        justify-content: center;
    `,
);

const SquadNumberStyles = styled(Text)(
    ({ theme }) => css`
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${theme.colors.Light};
        font-size: ${theme.fontSizes.fbase};
        margin: ${theme.space.zero} ${theme.space.auto};
        font-weight: bold;
        background: ${theme.colors.Interaction};
        width: 35px;
        height: 35px;
        border-radius: 50%;
    `,
);

const SquadNationStyles = styled(Text)(
    ({ theme }) => css`
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: ${theme.fontSizes.fsm};
    `,
);

const SquadTitleStyles = styled(Title)(
    ({ theme }) => css`
        align-items: center;
        display: flex;
        font-size: ${theme.fontSizes.fbase};
    `,
);

export {
    SquadItemStyles,
    SquadNumberBox,
    SquadNumberStyles,
    SquadTitleStyles,
    SquadTitleBox,
    SquadNationStyles,
    SquadNationBox,
};
