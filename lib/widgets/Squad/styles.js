import styled, { css } from "styled-components";
import { Title, Box, Button } from "../../accessories";

const SquadStyles = styled.section(
    ({ theme }) => css`
        max-width: 418px;
        box-shadow: #d6d6d6 2px 2px 6px;
        height: auto;
        min-height: 500px;
        background: ${theme.colors.Light};
    `,
);

const SquadBoxButtons = styled(Box)(
    () => css`
        box-shadow: 0px 6px 10px #d6d6d6;
        background: none;
        cursor: pointer;
    `,
);

const SquadBoxButtonActive = styled(Box)(
    ({ theme }) => css`
        border-radius: 0px 20px 0px 0px;
        background: ${theme.colors.Interaction};
    `,
);

const SquadBoxSection = styled(Box)(
    ({ theme }) => css`
        width: 100%;
        display: flex;
        padding: ${theme.space.sm} ${theme.space.xl};
        border-bottom: 2px solid ${theme.colors.Interaction};
    `,
);

const SquadTitle = styled(Title)(
    ({ theme }) => css`
        font-size: ${theme.fontSizes.fxl};
        width: 73%;
    `,
);

const ButtonActive = styled(Button)(
    () => css`
        font-weight: bold;
    `,
);

export {
    SquadStyles,
    SquadBoxSection,
    SquadTitle,
    SquadBoxButtonActive,
    SquadBoxButtons,
    ButtonActive,
};
