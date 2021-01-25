import styled, { css } from "styled-components";
import Box from "../../accessories/Box";
import Title from "../../accessories/Title";
import Time from "../../accessories/Time";
import Button from "../../accessories/Button";
import Anchor from "../../accessories/Anchor";
import Info from "../../accessories/Info";

const TickerItemStyles = styled(Box)(
    ({ theme }) => css`
        background: ${theme.colors.Light};
        border-radius: 5px 5px 0px 0px;
        position: relative;
        display: block;
        height: auto;
        width: 255px;
        margin: ${theme.space.auto} ${theme.space.sm};
    `,
);

const TickerItemTimeBoxStyles = styled(Box)(
    ({ theme }) => css`
        align-items: center;
        padding: ${theme.space.sm};
        justify-content: space-between;
    `,
);

const TickerItemTimeStyles = styled(Time)(
    ({ theme }) => css`
        color: ${theme.colors.gray3};
        display: flex;
        font-size: ${theme.fontSizes.fxs};
        justify-content: center;
        position: relative;
    `,
);

const TickerItemDateStyles = styled(Time)(
    ({ theme }) => css`
        color: ${theme.colors.gray3};
        display: flex;
        font-size: ${theme.fontSizes.fxs};
        justify-content: center;
    `,
);

const TickerItemContainer = styled(Box)(
    () => css`
        border-radius: 5px 5px 0px 0px;
        display: flex;
        height: 77px;
        width: 255px;
    `,
);

const ItemCalienteBoxStyles = styled(Anchor)(
    ({ theme }) => css`
        background: ${theme.colors.youtube};
        border-radius: 5px 5px 0px 0px;
        position: relative;
        display: flex;
        height: 48px;
        width: 255px;
        justify-content: center;
    `,
);

const ItemCalienteImageStyles = styled(Box)(
    () => css`
        height: 48px;
        max-width: 115px;
        width: 100%;
        align-items: center;
        display: flex;
    `,
);

const TickerItemTeamStyles = styled(Anchor)`
    max-width: 216px;
`;

const TickerItemImageStyles = styled(Box)(
    ({ theme }) => css`
        height: auto;
        margin-left: ${theme.space.sm};
        margin-bottom: ${theme.space.xs};
        max-width: 30px;
        width: 100%;
    `,
);

const TickerItemBoxStyles = styled(Box)(
    ({ theme }) => css`
        position: relative;
        padding-bottom: ${theme.space.sm};
    `,
);

const TickerItemTitleStyles = styled(Title)(
    ({ theme }) => css`
        align-items: center;
        color: ${theme.colors.Dark};
        display: flex;
        font-size: ${theme.fontSizes.fsm};
        font-weight: normal;
        line-height: ${theme.lineHeights.lxs};
        margin-left: ${theme.space.sm};
    `,
);

const TickerItemScoreStyles = styled(Info)(
    ({ theme }) => css`
        align-items: center;
        color: ${theme.colors.gray3};
        display: flex;
        font-size: ${theme.fontSizes.fsm};
        font-weight: normal;
        line-height: ${theme.lineHeights.lxs};
        padding-left: ${theme.space.sm};
    `,
);

const TickerMomiosBoxStyles = styled(Box)(
    ({ theme }) => css`
        height: 100%;
        width: 60px;
        padding: ${theme.space.zero} ${theme.space.sm} ${theme.space.sm} ${theme.space.sm};
    `,
);

const MomiosBoxStyles = styled(Anchor)(
    ({ theme }) => css`
        font-size: ${theme.fontSizes.fxs};
        display: flex;
        position: relative;
        text-align: center;
        width: 48px;
        height: 20px;
        align-items: center;
        justify-content: flex-end;
        margin-bottom: 6px;
    `,
);

const MomioStyles = styled(Info)(
    ({ theme }) => css`
        font-size: ${theme.fontSizes.fxs};
        background: ${theme.colors.youtube};
        border-radius: 9px;
        padding: 3px 9px;
        color: ${theme.colors.Light};
        font-weight: bold;
    `,
);

export {
    TickerItemStyles,
    TickerItemTeamStyles,
    TickerItemBoxStyles,
    TickerItemImageStyles,
    TickerItemTimeStyles,
    TickerItemDateStyles,
    MomioStyles,
    MomiosBoxStyles,
    TickerItemTitleStyles,
    TickerMomiosBoxStyles,
    ItemCalienteBoxStyles,
    ItemCalienteImageStyles,
    TickerItemContainer,
    TickerItemScoreStyles,
    TickerItemTimeBoxStyles,
};
