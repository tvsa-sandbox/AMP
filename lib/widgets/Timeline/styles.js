import styled, { css } from "styled-components";
import Box from "../../accessories/Box";
import Title from "../../accessories/Title";
import Text from "../../accessories/Text";
import Time from "../../accessories/Time";
import Info from "../../accessories/Info";
import Button from "../../accessories/Button";
const TimelineStyles = styled(Box)(
    ({ theme }) => css`
        background: ${theme.colors.Light};
        border-radius: 6px;
        display: block;
        margin: ${theme.space.zero} ${theme.space.auto};
        padding: ${theme.space.xl};
        overflow-y: scroll;
        max-width: 1080px;

        @media (min-width: ${theme.breakpoints.xl}) {
            padding: ${theme.space.xl2};
            overflow-y: unset;
        }
    `,
);

const ContainerStyles = styled(Box)(({ theme }) => css``);

const TimelineLogoStyles = styled(Box)(
    ({ theme }) => css`
        display: block;
        width: 30px;
    `,
);

const BoxTeam = styled(Box)(
    ({ theme }) => css`
        width: 300px;
    `,
);

const BoxLine = styled(Box)(
    ({ theme }) => css`
        display: block;
        margin: ${theme.space.xxl} ${theme.space.sm};
        left: 0;
        width: 900px;
        padding: ${theme.space.xs};

        @media (min-width: ${theme.breakpoints.xl}) {
            margin: ${theme.space.xl3} ${theme.space.auto};
            width: 100%;
        }
    `,
);

const BoxChange = styled(Box)(
    ({ theme }) => css`
        left: 300px;
        width: auto;
    `,
);

const BoxTime = styled(Box)(
    ({ theme }) => css`
        display: flex;
        height: 15px;
        width: 100%;
    `,
);

const StartTime = styled(Time)(
    ({ theme }) => css`
        font-size: ${theme.fontSizes.fsm};
        position: absolute;
        display: flex;
        justify-content: flex-start;
    `,
);

const HalfTime = styled(StartTime)(
    ({ theme }) => css`
        left: 50%;
    `,
);

const EndTime = styled(StartTime)(
    ({ theme }) => css`
        left: 99%;
        width: 80px;
    `,
);
const ExtraTime = styled(StartTime)(
    ({ theme }) => css`
        color: ${theme.colors.Interaction};
    `,
);
const TimelineNameStyles = styled(Info)(
    ({ theme }) => css`
        border-bottom: ${theme.colors.Secondary} 1px solid;
        color: ${theme.colors.Dark};
        font-weight: bold;
        margin-left: ${theme.space.xxl};
        padding-bottom: ${theme.space.base};
        position: relative;
        width: 135px;

        &::before {
            bottom: 0px;
            content: "";
            height: 3px;
            width: 10%;
            background: ${theme.colors.Interaction};
            display: block;
            position: absolute;
        }
    `,
);
const IconBoxStyles = styled(Box)(
    ({ theme }) => css`
        width: 20px;
        position: absolute;
        left: ${props => (props.posX ? props.posX : 0)}%;
        bottom: 0;
    `,
);

export {
    TimelineStyles,
    BoxLine,
    BoxTeam,
    BoxTime,
    BoxChange,
    StartTime,
    HalfTime,
    EndTime,
    ExtraTime,
    ContainerStyles,
    TimelineLogoStyles,
    TimelineNameStyles,
    IconBoxStyles,
};
