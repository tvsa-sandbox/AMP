import styled, { css } from "styled-components";
import { Box, Text, Button, Icons, Title } from "../../accessories";

const LineUpStyles = styled.section(
    ({ theme }) => css`
        width: 100%;
        max-width:1024px;
        background:${theme.colors.Light};
        box-shadow: 0px 6px 10px #d6d6d6;
        margin: ${theme.space.zero} ${theme.space.auto};
        padding:${theme.space.base} ${theme.space.zero}; 
    `,
);

const LineUpTitleHome = styled(Title)(
    ({ theme }) => css`
        text-align: center;
        font-size: ${theme.fontSizes.fsm};
        display: none;

        @media (min-width: ${theme.breakpoints.lg}) {
            width: 100%;
            margin: ${theme.space.zero} ${theme.space.zero} ${theme.space.xxl} ;
            font-size: ${theme.fontSizes.fmd};
            display: flex;
            justify-content: center;
            color: #802620;
            font-weight: bold;
        }

    `,
);

const LineUpTitleAway = styled(LineUpTitleHome)(
    () => css`
    color: #066280;
    `,
);

const LineUpBoxHome = styled(Box)(
    ({ theme }) => css`
        min-height: auto;
        margin: ${theme.space.zero} ${theme.space.xl3} ${theme.space.zero} ${theme.space.zero};
        justify-content: center; 
        width: 100%;
        grid-area: home;

        @media (min-width: ${theme.breakpoints.lg}) {
            padding: ${theme.space.base} ${theme.space.md};
            min-height: 447px;
        }
    `,
);

const LineUpBoxAway = styled(LineUpBoxHome)(
    ({ theme }) => css`
       grid-area: away;

    `,
);

const LineUpBoxHomeTeam = styled(LineUpBoxHome)(
    ({ theme }) => css`
    grid-area: hometeam;
    display: grid;
    width: 90%;
    margin: ${theme.space.auto};
    padding: ${theme.space.base} ${theme.space.zero};
    grid-template-columns: 1fr ;
    grid-template-rows:23% 23% 23% 23%;
    grid-gap: 2px;
    grid-template-areas:
    "gk"
    "df "
    "md"
    "fw";

 @media (min-width: ${theme.breakpoints.lg}) {
    grid-template-rows: 25% 25% 25% 25%;
    width: 100%;
    margin:${theme.space.zero} ${theme.space.auto};
    padding: ${theme.space.auto};
        }
`,
);

const LineUpBoxAwayTeam = styled(LineUpBoxHomeTeam)(
    ({ theme }) => css`
    grid-area: awayteam;
    grid-template-areas:
    "fw"
    "md "
    "df"
    "gk";
`,
);

const LineUpBoxPlayer = styled(Box)(
    ({ theme }) => css`
        margin: ${theme.space.zero} ${theme.space.auto}  ${theme.space.lg};
        text-align: center; 
        width: 80px;
        min-height: 60px;
        height: auto;
        border-bottom: 2px solid ${theme.colors.gray2};
        display: none;

        &:last-child {
         border-bottom: none;
 }

        @media (min-width: ${theme.breakpoints.lg}) {
            width: auto;
            margin-bottom: ${theme.space.md};
            padding-bottom: ${theme.space.sm};
            min-height: 80px;
            display: grid;
        }
`,
);

const LineUpPlayerField = styled(LineUpBoxPlayer)(
    ({ theme }) => css`
        border-bottom: none;
        margin: ${theme.space.zero} ${theme.space.auto};
        display: block;
`,
);

const LineUpPlayerFieldGk = styled(LineUpPlayerField)(
    ({ theme }) => css`
        @media (min-width: ${theme.breakpoints.lg}) {
            width: 13%;
            margin: ${theme.space.zero} ${theme.space.auto};
        }
`,
);

const LineUpBoxField = styled(Box)(
    ({ theme }) => css`
        width:100%;
        background-image:url(field.jpg);
        height:auto;
        max-height: 870px;
        background-repeat: no-repeat;
        background-size: contain;
        background-position-y: none;
        margin: ${theme.space.base} ${theme.space.zero} ${theme.space.zero};

`,
);

const LineUpBoxName = styled(Box)(
    () => css`
       justify-content: center;
`,
);

const LineUpNumberHome = styled(Button)(
    ({ theme }) => css`
         display: flex;
        align-items: center;
        justify-content: center;
        color: ${theme.colors.Light};
        font-size: ${theme.fontSizes.fsm};
        margin: ${theme.space.zero} ${theme.space.auto};
        font-weight: bold;
        background:#802620;
        box-shadow: 1px 1px 9px rgba(0,0,0,0.3);
        width: 30px;
        height: 30px;
        border-radius: 50%;
        padding:${theme.space.zero} ;

        @media (min-width: ${theme.breakpoints.lg}) {
            font-size: ${theme.fontSizes.fmd};
            width: 35px;
             height: 35px;
        }
        
        &:hover {
            transform: scale(1.1); 
            transition: all 0.2s ease-in-out 0s;
            opacity: 1;
    }
`,
);

const LineUpNumberAway = styled(LineUpNumberHome)(
    () => css`
        background: #066280;
        box-shadow: 1px 1px 9px rgba(0,0,0,0.3);
`,
);

const LineUpName = styled(Text)(
    ({ theme }) => css`
        font-weight: bold;
        margin: ${theme.space.zero} ${theme.space.zero} ${theme.space.xs};
        font-size: ${theme.fontSizes.fxs};

        @media (min-width: ${theme.breakpoints.lg}) {
            margin: ${theme.space.base} ${theme.space.zero} ${theme.space.xs};
        }

`,
);

const LineUpNameField = styled(LineUpName)(
    ({ theme }) => css`
        color: ${theme.colors.Light};
        text-shadow: 2px 2px 5px #000000;
`,
);

const LineUpIcons = styled(Icons)(
    ({ theme }) => css`
        width: 40px;
        height: 25px;
        position: absolute;
        right: 0px;

        @media (min-width: ${theme.breakpoints.xl}) {
            right: 33px;
        }
`,
);

const LineUpIconsField = styled(LineUpIcons)(
    ({ theme }) => css`
        top: 0px;
        right: 22px;
        position: relative;

        @media (min-width: ${theme.breakpoints.xl}) {
            right: 18px;
        }
`,
);

const LineUpContainer = styled(Box)(
    ({ theme }) => css`
        align-items: flex-start;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr;
        gap: 0px 0px;
        grid-template-areas:
            "field field"
            "home away";

             @media (min-width: ${theme.breakpoints.sm}) {
                
             grid-template-columns: 0.5fr 1fr 0.5fr;
            grid-template-rows: 1fr;
            grid-template-areas:
                    "home field away";
                }
`,
);

const LineUpGridField = styled(Box)(
    ({ theme }) => css`
    width: auto;
    display: flex;
    justify-content: center;
    max-width: 414px;
    grid-area: field;

    @media (min-width: ${theme.breakpoints.lg}) {
        width: 595px;
        max-width: 900px;
        }
`,
);

const LineUpTabsActive = styled(Button)(
    ({ theme }) => css`
    font-size: ${theme.fontSizes.fsm};
    font-weight: bold;
    text-transform: uppercase;
    border-bottom: 2px solid  ${theme.colors.Interaction};

    @media (min-width: ${theme.breakpoints.lg}) {
        display: none;
        }
`,
);

const LineUpTabs = styled(LineUpTabsActive)(
    ({ theme }) => css`
border-bottom: none;
color: ${theme.colors.gray3};
`,
);

export { LineUpStyles, LineUpTitleHome, LineUpTitleAway, LineUpPlayerField, LineUpBoxField, LineUpNameField, LineUpBoxHome, LineUpBoxAway, LineUpBoxPlayer, LineUpContainer, LineUpNumberHome, LineUpNumberAway, LineUpName, LineUpIcons, LineUpBoxName, LineUpGridField, LineUpBoxHomeTeam, LineUpBoxAwayTeam, LineUpTabsActive, LineUpTabs, LineUpIconsField, LineUpPlayerFieldGk };
