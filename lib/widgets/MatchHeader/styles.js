import styled, { css } from "styled-components";
import Title from "../../accessories/Title"
import Box from "../../accessories/Box"
import Info from "../../accessories/Info"
import Text from "../../accessories/Text"

const MatchHeaderStyles = styled.section(
    ({ }) => css`
        width: 100%;
        `,
);

const MatchHeaderBoxStyles = styled(Box)(
    ({ theme }) => css`
        width: 100%;
        background: ${theme.colors.Light};
        padding: ${theme.space.xs};
        box-shadow: #D6D6D6 2px 2px 6px;
        margin: ${theme.space.base} ${theme.space.auto};
        
        @media (min-width: ${theme.breakpoints.md}) {
            padding: ${theme.space.base};
        }
        `,
);

const BoxTitle = styled(Box)(
    ({ theme }) => css`
       display: flex;
       width:100%;
       margin: ${theme.space.auto};
    `,
);

const BoxGrid = styled(Box)(
    ({ theme }) => css`
       display: grid;
       grid-template-columns: 40% 20% 40%;
       width:100%;
       margin: ${theme.space.auto};
       padding: ${theme.space.xs};
       overflow: hidden;
       align-items: unset;

       @media (min-width: ${theme.breakpoints.md}) {
        padding: ${theme.space.zero} ${theme.space.lg};
        align-items: center;
        }
    `,
);

const BoxHomeGrid = styled(Box)(
    ({ theme }) => css`
       display: grid;
        grid-template-columns: 75% 25%;
       width:100%;
       margin: ${theme.space.auto};
       overflow: hidden;

       @media (min-width: ${theme.breakpoints.md}) {
        grid-template-columns: 90% 10%;
        }
    `,
);

const BoxAwayGrid = styled(Box)(
    ({ theme }) => css`
       display: grid;
        grid-template-columns: 25% 75%;
       width:100%;
       margin: ${theme.space.auto};
       overflow: hidden;

       @media (min-width: ${theme.breakpoints.md}) {
        grid-template-columns: 10% 90%;
        }
    `,
);

const BoxMatchHeaderTime = styled(Box)`
        display: inline;
        align-items: center;
        justify-content: center;
        text-align: center;
    `;

const BoxMatchHeader = styled(Box)(
    ({ }) => css`
       display: flex;
        justify-content: center;
       width:100%;
    `,
);

const HomeGoals = styled(Box)(
    ({ theme }) => css`
            justify-content: flex-end;
             padding-right: ${theme.space.zero};
             margin-top:  ${theme.space.md};
             width: auto;
             min-height: 42px;
             overflow: hidden;
             display: block;

             @media (min-width: ${theme.breakpoints.md}) {
                position: relative;
                right: 13%;
                display: flex;
        }
    `,
);

const AwayGoals = styled(Box)(
    ({ theme }) => css`
             justify-content: flex-start;
             padding-right: ${theme.space.zero};
             margin-top:  ${theme.space.md};
             width: auto;
             min-height: 42px;
             overflow: hidden;
             display: block;
             text-align: right;

@media (min-width: ${theme.breakpoints.md}) {
        justify-content: flex-start;
       display: flex;
        position: relative;
        left: 14%;
    }
    `,
);

const MatchHeaderNumber = styled(Box)(
    ({ theme }) => css`
    height: 50px;
    display: flex;
    justify-content: center;
    margin: ${theme.space.auto};
    width: 55px;
    background: ${theme.colors.gray2};
    border-radius: 5px;
    align-items: center;

    @media (min-width: ${theme.breakpoints.md}) {
        width: 115px;
        height: 60px;
        }
    `,
);

const TextStyles = styled(Text)(
    ({ theme }) => css`
        display:flex;
        width: auto;
        margin: ${theme.space.zero} ${theme.space.auto} ${theme.space.lg};
        font-size: ${theme.fontSizes.fbase};
        font-weight: bold;
        color:${theme.colors.gray3};
    `,
);

const HomeTitle = styled(Title)(
    ({ theme }) => css`
        width: auto;
        text-align: left;
        padding-right: ${theme.space.xxl};
        font-size: ${theme.fontSizes.fmd};
        line-height:${theme.lineHeights.lmd};

        @media (min-width: ${theme.breakpoints.md}) {
            text-align: right;
            font-size: ${theme.fontSizes.fxl2};
            line-height:${theme.lineHeights.lxxl};
        }
    `,
);

const PlayerName = styled(Info)(
    ({ theme }) => css`
            display: block;
            width: auto;
            margin: ${theme.space.sm} ${theme.space.zero};
            font-size: ${theme.fontSizes.fxs};
            text-transform: uppercase;

             @media (min-width: ${theme.breakpoints.md}) {
                 margin: ${theme.space.zero} ${theme.space.md};
                display: flex;
        }
    `,
);

const AwayTitle = styled(Title)(
    ({ theme }) => css`
        width: auto;
        padding-left: ${theme.space.xxl};
        text-align: right;
        font-size: ${theme.fontSizes.fmd};
        line-height:${theme.lineHeights.lmd};

        @media (min-width: ${theme.breakpoints.md}) {
            text-align: left;
            font-size: ${theme.fontSizes.fxl2};
            line-height:${theme.lineHeights.lxxl};
        }
    `,
);

const HomeNumber = styled(Info)(
    ({ theme }) => css`
             font-size: ${theme.fontSizes.fxl};
             color:${theme.colors.Dark};
             margin: ${theme.space.zero} ${theme.space.xs};
             font-family: ${theme.fonts[2]};
             font-weight: bold;

             @media (min-width: ${theme.breakpoints.md}) {
                font-size: ${theme.fontSizes.fxxl};
                margin: ${theme.space.zero} ${theme.space.md};
        }
    `,
);

const AwayNumber = styled(Info)(
    ({ theme }) => css`
             font-size: ${theme.fontSizes.fxl};
             color:${theme.colors.Dark};
             margin: ${theme.space.zero} ${theme.space.xs};
             font-family: ${theme.fonts[2]};
             font-weight: bold;

             @media (min-width: ${theme.breakpoints.md}) {
                font-size: ${theme.fontSizes.fxxl};
                margin: ${theme.space.zero} ${theme.space.md};
        }
    `,
);

const SeparatorStyles = styled(Info)(
    ({ theme }) => css`
             font-size: ${theme.fontSizes.flg};
             color:${theme.colors.Dark};
             margin: ${theme.space.zero} ${theme.space.xs};
             font-family: ${theme.fonts[2]};
             font-weight: bold;

             @media (min-width: ${theme.breakpoints.md}) {
                font-size: ${theme.fontSizes.fxxl};
                margin: ${theme.space.zero} ${theme.space.md};
        }
    `,
);

const TimeStyles = styled(Info)(
    ({ theme }) => css`
    margin-top: ${theme.space.md};
    color:${theme.colors.gray3};
    `,
);

export { MatchHeaderStyles, MatchHeaderBoxStyles, TextStyles, BoxGrid, BoxTitle, BoxHomeGrid, BoxAwayGrid, BoxMatchHeader, BoxMatchHeaderTime, HomeTitle, HomeGoals, PlayerName, AwayTitle, AwayGoals, MatchHeaderNumber, HomeNumber, AwayNumber, SeparatorStyles, TimeStyles };