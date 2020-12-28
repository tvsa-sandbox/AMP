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
        border-radius: 5px 0px 0px 5px;
        position: relative;
        display: block;
        height: auto;
        width: 306px;
        margin: ${theme.space.auto} ${theme.space.sm};
    `,
);

const TickerItemContainer = styled(Anchor)(
    () => css`
        border-radius: 5px 0px 0px 5px;
        display: flex;
        height: auto;
        width: 306px;
    `,
);

const ItemCalienteBoxStyles = styled(Anchor)(
    ({ theme }) => css`
        background: ${theme.colors.youtube};
        border-radius: 5px 5px 0px 0px;
        position: relative;
        display: flex;
        height: 48px;
        width: 306px;
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

const TickerItemTeamStyles = styled(Box)`
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

const TickerItemTimeStyles = styled(Time)(
    ({ theme }) => css`
        color: ${theme.colors.Dark};
        display: flex;
        font-size: ${theme.fontSizes.fxs};
        justify-content: center;
        position: relative;
        margin-top: ${theme.space.base};
    `,
);

const TimeBoxStyles = styled(Box)(
    ({ theme }) => css`
        background: ${theme.colors.gray2};
        border-radius: 0px 5px 5px 0px;
        height: 100%;
        width: 90px;
    `,
);

const TickerItemDateStyles = styled(Time)(
    ({ theme }) => css`
        color: ${theme.colors.Dark};
        display: flex;
        font-size: ${theme.fontSizes.fxs};
        justify-content: center;
        margin-top: ${theme.space.xs};
    `,
);

const TickerItemBoxStyles = styled(Box)(
    () => css`
        position: relative;
        top: 9px;
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
        margin-left: ${theme.space.base};
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
        padding: ${theme.space.zero} ${theme.space.sm};
    `,
);

const TickerItemMoreStyles = styled(Button)(
    ({ theme }) => css`
        bottom: 3px;
        font-size: ${theme.fontSizes.fxs};
        display: flex;
        margin: ${theme.space.auto};
        padding: 0px;
        position: relative;
    `,
);

export {
    TickerItemStyles,
    TickerItemTeamStyles,
    TickerItemBoxStyles,
    TickerItemImageStyles,
    TickerItemTimeStyles,
    TickerItemDateStyles,
    TickerItemMoreStyles,
    TickerItemTitleStyles,
    TimeBoxStyles,
    ItemCalienteBoxStyles,
    ItemCalienteImageStyles,
    TickerItemContainer,
    TickerItemScoreStyles,
};
