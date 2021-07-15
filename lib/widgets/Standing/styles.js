import styled, { css } from "styled-components";
import { Box, Button, Text, Title } from "../../accessories";

const StandingStyles = styled.section(
    ({ theme }) => css`
        margin: ${theme.space.zero} ${theme.space.auto};
        background: ${theme.colors.Light};
        max-width: 1024px;

    `,
);

const StandingBoxHeader = styled(Box)(
    ({ theme }) => css`
        display: flex;
        width: 100%;
        max-width:1024px;
        background: ${theme.colors.gray2};
        height: auto;   
        flex-direction: column;

        @media (min-width: ${theme.breakpoints.xl}) {
            flex-direction: inherit;
        }
    `,
);

const StandingHeaderTitle = styled(Title)(
    ({ theme }) => css`
        font-size: ${theme.fontSizes.fbase};
        font-weight: bold;
        width: 100%;
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: center;

        @media (min-width: ${theme.breakpoints.xl}) {
            justify-content: start;
            padding-left: ${theme.space.md};
            font-size: ${theme.fontSizes.flg};
        }
    `,
);

const StandingHeaderSwitch = styled(Box)(
    ({ theme }) => css`
        display: flex;
        width: 100%;
        margin: ${theme.space.zero} ${theme.space.auto};
        height: 40px;

    `,
);

const StandingBoxData = styled(Box)(
    () => css`
       display: flex;
       width: 100%;
       align-items: flex-start;
    `,
);

const StandingSwitchButtonActive = styled(Button)(
    ({ theme }) => css`
        font-weight: bold;
        width: 100%;
        justify-content: center;
        font-size: ${theme.fontSizes.fbase};
        color: ${theme.colors.Interaction};

        &:hover{
            opacity: .5;
        }

        &::after{
            content:"";
            display: flex;
            width: 30%;
            height: 2px;
            background: ${theme.colors.Interaction};
            position: absolute;
            bottom: 0;
        }
    `,
);

const StandingSwitchButtonInactive = styled(StandingSwitchButtonActive)(
    ({ theme }) => css`
        color: ${theme.colors.gray3};
        opacity: .5;
        &::after{
            content:"";
            display: none;
        }
    `,
);

export {
    StandingStyles,
    StandingBoxHeader,
    StandingHeaderTitle,
    StandingHeaderSwitch,
    StandingSwitchButtonActive,
    StandingSwitchButtonInactive,
    StandingBoxData,
};
