import styled, { css } from "styled-components";
import Box from "../../accessories/Box";
import Title from "../../accessories/Title";
import Icons from "../../accessories/Icons";

const ItemLeagueStyles = styled.a(
    ({ theme }) => css`
        align-items: center;
        background: ${theme.colors.gray2};
        border-radius: 4px;
        display: flex;
        filter: grayscale(95%);
        height: 40px;
        cursor: pointer;
        min-width: 140px;
        margin-right: ${theme.space.sm};
        position: relative;
        width: 140px;

        &:active {
            color: ${theme.colors.Interaction};
            filter: none;
            border: solid 1px ${theme.colors.Interaction};
        }

        &:hover {
            filter: none;
        }
    `,
);

const ItemLeagueIcon = styled(Icons)(
    ({ theme }) => css`
        margin-left: ${theme.space.base};
        font-size: ${theme.fontSizes.flg};
        width: 30px;
        height: 30px;
    `,
);

const ItemLeagueTitleStyles = styled(Title)(
    ({ theme }) => css`
        justify-content: center;
        display: flex;
        text-transform: uppercase;
        font-size: 9px;
        color: ${theme.colors.Dark};
        text-align: center;
        line-height: 1.3;
        font-weight: normal;
        margin-right: ${theme.space.sm};
        width: 100%;

        &:active {
            color: ${theme.colors.Interaction};
        }
    `,
);

export { ItemLeagueStyles, ItemLeagueIcon, ItemLeagueTitleStyles };
