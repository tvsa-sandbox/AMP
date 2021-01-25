import styled, { css } from "styled-components";
import Box from "../../accessories/Box";
import Button from "../../accessories/Button";
import Text from "../../accessories/Text";
import Title from "../../accessories/Title";

const CalendarStyles = styled(Box)(
    ({ theme }) => css`
        max-width: 1280px;
        display: grid;
        margin: ${theme.space.auto};
    `,
);

const CalendarLeagueBox = styled(Box)(
    ({ theme }) => css`
        border-radius: 10px 10px 0px 0px;
        display: flex;
        height: 50px;
        width: 90%;
        background: linear-gradient(40deg, #01044e, #01044e 81%, #ffffff 60px);
        @media (min-width: ${theme.breakpoints.xl}) {
            width: 35%;
            height: 60px;
        }
    `,
);
const BoxLeagueStyles = styled(Box)(
    ({ theme }) => css`
        height: 50px;
        width: auto;
        margin: ${theme.space.xs};
        @media (min-width: ${theme.breakpoints.xl}) {
            max-width: 1280px;
            height: 60px;
        }
    `,
);

const BoxLine = styled(Box)(
    ({ theme }) => css`
        transform: skewX(50deg);
        left: 75%;
        width: 6px;
        background-color: #01044e;
        height: 50px;

        @media (min-width: ${theme.breakpoints.xl}) {
            height: 60px;
        }
    `,
);

const TitleCalendar = styled(Title)(
    ({ theme }) => css`
        color: ${theme.colors.Light};
        font-size: ${theme.fontSizes.fmd};
        font-family: ${theme.fonts[3]};
        font-weight: bold;
        text-transform: uppercase;
        margin-left: ${theme.space.lg};
        @media (min-width: ${theme.breakpoints.xl}) {
            font-size: ${theme.fontSizes.fbase};
        }
    `,
);

const BoxButtonStyles = styled(Box)(
    ({ theme }) => css`
        background: ${theme.colors.back};
    `,
);

const BeforeStyles = styled(Button)(
    ({ theme }) => css`
        color: ${theme.colors.Dark};
        font-family: ${theme.fonts[3]};
        font-weight: bold;
        width: 100%;
    `,
);
const NextStyles = styled(BeforeStyles)(
    () => css`
        justify-content: flex-end;
    `,
);
const RoundLeagueTextStyles = styled(Text)(
    ({ theme }) => css`
        color: ${theme.colors.gray3};
        display: flex;
        justify-content: center;
        font-size: ${theme.fontSizes.fmd};
        font-family: ${theme.fonts[3]};
        font-weight: bold;
        margin: ${theme.space.auto};
        @media (min-width: ${theme.breakpoints.xl}) {
            grid-column: 1/3;
        }
    `,
);
const ContainerItemsStyles = styled(Box)(
    ({ theme }) => css`
        max-width: 1280px;
        display: block;
        margin: ${theme.space.xs};

        @media (min-width: ${theme.breakpoints.xl}) {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: auto;
            grid-gap: 12px;
        }
    `,
);

export {
    CalendarStyles,
    BoxLine,
    BoxLeagueStyles,
    CalendarLeagueBox,
    TitleCalendar,
    BoxButtonStyles,
    BeforeStyles,
    NextStyles,
    RoundLeagueTextStyles,
    ContainerItemsStyles,
};
