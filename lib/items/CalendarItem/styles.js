import styled, { css } from "styled-components";
import Box from "../../accessories/Box";
import Title from "../../accessories/Title";
import Time from "../../accessories/Time";
import Button from "../../accessories/Button";
import Anchor from "../../accessories/Anchor";
import Info from "../../accessories/Info";

const CalendarItemStyles = styled(Anchor)(
    ({ theme }) => css`
        display: flex;
        position: relative;
        height: auto;
        width: 340px;
        margin: ${theme.space.xl} ${theme.space.auto};
    `,
);

const CalendarItemTimeBoxStyles = styled(Box)(
    ({ theme }) => css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 30%;
        padding: ${theme.space.sm};
    `,
);

const CalendarItemTimeStyles = styled(Time)(
    ({ theme }) => css`
        color: ${theme.colors.Dark};
        display: flex;
        font-weight: bold;
        font-size: ${theme.fontSizes.fxs};
        justify-content: center;
        margin: ${theme.space.xs};
        position: relative;
    `,
);

const CalendarItemDateStyles = styled(Time)(
    ({ theme }) => css`
        color: ${theme.colors.gray3};
        display: flex;
        font-size: ${theme.fontSizes.fxs};
        justify-content: center;
    `,
);

const CalendarItemContainer = styled(Box)(
    () => css`
        display: flex;
        height: 77px;
        width: 255px;
    `,
);

const CalendarItemTeamStyles = styled(Box)(
    ({ theme }) => css`
        position: relative;
        width: 70%;
        margin-right: ${theme.space.sm};
        &::after {
            content: "";
            height: 80%;
            width: 1px;
            background: ${theme.colors.Secondary};
            margin-left: ${theme.space.lg};
            display: block;
            position: absolute;
            left: 100%;
            top: 5px;
        }
    `,
);

const CalendarItemImageStyles = styled(Box)(
    ({ theme }) => css`
        height: auto;
        margin-left: ${theme.space.sm};
        margin-bottom: ${theme.space.xs};
        max-width: 30px;
        width: 100%;
    `,
);

const CalendarItemBoxStyles = styled(Box)(
    ({ theme }) => css`
        position: relative;
        padding-bottom: ${theme.space.sm};
    `,
);

const CalendarItemTitleStyles = styled(Title)(
    ({ theme }) => css`
        align-items: center;
        color: ${theme.colors.Dark};
        display: flex;
        font-size: ${theme.fontSizes.fsm};
        font-weight: bold;
        line-height: ${theme.lineHeights.lxs};
        margin-left: ${theme.space.sm};
    `,
);

const CalendarItemScoreStyles = styled(Info)(
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

export {
    CalendarItemStyles,
    CalendarItemTeamStyles,
    CalendarItemBoxStyles,
    CalendarItemImageStyles,
    CalendarItemTimeStyles,
    CalendarItemDateStyles,
    CalendarItemTitleStyles,
    CalendarItemContainer,
    CalendarItemScoreStyles,
    CalendarItemTimeBoxStyles,
};
