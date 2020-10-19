import styled, { css } from "styled-components";
import Box from "../../accessories/Box";
import Title from "../../accessories/Title";
import Time from "../../accessories/Time";
import Button from "../../accessories/Button";

const TickerItemStyles = styled.a(
    ({ theme }) => css`
        background: ${theme.colors.Light};
        border-radius: 5px 0px 0px 5px;
        position: relative;
        display: flex;
        height: 70px;
        width: 300px;
        margin: ${theme.space.auto};
    `,
);

const TickerItemTeamStyles = styled(Box)`
    width: 100%;
    max-width: 210px;
`;

const TickerItemIconStyles = styled(Box)(
    ({ theme }) => css`
        height: auto;
        margin-left: ${theme.space.sm};
        max-width: 20px;
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
        top: 6px;
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
        margin-left: ${theme.space.lg};
    `,
);

const TickerItemMoreStyles = styled(Button)(
    ({ theme }) => css`
        bottom: 6px;
        font-size: ${theme.fontSizes.fxs};
        display: flex;
        margin: ${theme.space.auto};
        position: relative;
    `,
);

export {
    TickerItemStyles,
    TickerItemTeamStyles,
    TickerItemBoxStyles,
    TickerItemIconStyles,
    TickerItemTimeStyles,
    TickerItemDateStyles,
    TickerItemMoreStyles,
    TickerItemTitleStyles,
    TimeBoxStyles,
};
