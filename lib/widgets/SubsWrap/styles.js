import styled, { css } from "styled-components";
import { Box, Title, Text, Button, Icons } from "../../accessories";

const SubsWrapStyles = styled.section(
    ({ theme }) => css`
        width: 100%;
        max-width:1024px;
        background:${theme.colors.Light};
        box-shadow: 0px 6px 10px #d6d6d6;
        margin: ${theme.space.zero} ${theme.space.auto};
    `,
);

const SubsWrapTitle = styled(Title)(
    ({ theme }) => css`
       justify-content: center;
        width: 100%;
        display: flex;
        padding: ${theme.space.lg};
        margin-bottom: ${theme.space.xxl};
    `,
);

const SubsWrapBox = styled(Box)(
    ({ theme }) => css`
        min-height: 414px;
        margin: ${theme.space.zero};
        display: grid;
        grid-template-columns: repeat(2, 0.3fr);
        grid-template-rows: repeat(4, 1fr);
        grid-column-gap: 5px;
        grid-row-gap: 20px;
        justify-content: center;
        width: 50%;

        @media (min-width: ${theme.breakpoints.lg}) {
            margin: ${theme.space.md} ${theme.space.xl2};
            grid-template-columns: repeat(3, 0.3fr);
            grid-column-gap: 20px;
            min-height: 540px;
            width: 100%;
        }
    `,
);

const SubsWrapBoxPlayer = styled(Box)(
    ({ theme }) => css`
        margin: ${theme.space.zero} ${theme.space.auto};
        text-align: center; 
        width: 80px;
        min-height: 150px;
        @media (min-width: ${theme.breakpoints.lg}) {
            width: auto;
            
        }
`,
);

const SubsWrapBoxName = styled(Box)(
    () => css`
       justify-content: center;
`,
);

const SubsWrapNumberHome = styled(Button)(
    ({ theme }) => css`
         display: flex;
        align-items: center;
        justify-content: center;
        color: ${theme.colors.Light};
        font-size: ${theme.fontSizes.fmd};
        margin: ${theme.space.zero} ${theme.space.auto};
        font-weight: bold;
        background: ${theme.colors.Interaction};
        width: 35px;
        height: 35px;
        border-radius: 50%;

        @media (min-width: ${theme.breakpoints.lg}) {
            font-size: ${theme.fontSizes.flg};
            width: 45px;
            height: 45px;
        }
        
        &:hover {
            transform: scale(1.1); 
            transition: all 0.2s ease-in-out 0s;
            opacity: 1;
    }
`,
);

const SubsWrapNumberAway = styled(SubsWrapNumberHome)(
    ({ theme }) => css`
        background: ${theme.colors.green};
`,
);

const SubsWrapName = styled(Text)(
    ({ theme }) => css`
        font-weight: bold;
        margin: ${theme.space.base} ${theme.space.zero};
        font-size: ${theme.fontSizes.fxs};

        @media (min-width: ${theme.breakpoints.lg}) {
            font-size: ${theme.fontSizes.fsm}
        }
`,
);

const SubsWrapIcons = styled(Icons)(
    () => css`
        width: 40px;
        height: 25px;
`,
);

const SubsWrapContainer = styled(Box)(
    () => css`
        align-items: flex-start;
`,
);

export { SubsWrapStyles, SubsWrapTitle, SubsWrapBox, SubsWrapBoxPlayer, SubsWrapContainer, SubsWrapNumberHome, SubsWrapNumberAway, SubsWrapName, SubsWrapIcons, SubsWrapBoxName };
