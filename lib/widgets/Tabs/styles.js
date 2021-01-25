import styled, { css } from "styled-components";
import { Box, Button } from "../../accessories";

const TabsList = styled.ul(
    ({ theme }) => css`
        list-style: none;
        padding: ${theme.space.zero} ${theme.space.base} ${theme.space.zero};
        margin: ${theme.space.sm};
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;

        &::before {
            content: "";
            height: 1px;
            width: 90%;
            background: rgba(255, 255, 255, 0.3);
            display: block;
            position: absolute;
            bottom: 0px;
            margin: ${theme.space.auto};

            @media (min-width: ${theme.breakpoints.lg}) {
                width: 100%;
                bottom: 8px;
            }
        }
    `,
);

const Tab = styled.li(
    ({ theme }) => css`
        padding: ${theme.space.sm} ${theme.space.zero};
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
    `,
);

const TabPaneStyles = styled(Box)(
    ({ theme }) => css`
        margin: ${theme.space.sm} ${theme.space.zero};
        display: ${props => (props.active ? "flex" : "none")};
        justify-content: center;
        align-items: center;
        @media (min-width: ${theme.breakpoints.lg}) {
            margin: ${theme.space.zero} ${theme.space.zero};
        }
    `,
);

const TabButton = styled(Button)(
    ({ theme }) => css`
        margin: ${theme.space.zero};
        padding: ${theme.space.zero};
        color: ${props => (props.active ? theme.colors.Interaction : null)};
        font-size: ${theme.fontSizes.fsm};
        text-shadow: 2px 2px 5px #1f022c;

        @media (min-width: ${theme.breakpoints.lg}) {
            font-size: ${theme.fontSizes.fbase};
        }
    `,
);
export { TabsList, Tab, TabPaneStyles, TabButton };
