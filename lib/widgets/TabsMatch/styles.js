import styled, { css } from "styled-components";
import { Box, Button } from "../../accessories";

const TabsMatchStyles = styled.section(
    ({ theme }) => css`

   justify-content: flex-start;
                overflow-x: scroll;
                margin: ${theme.space.zero}; 
                overflow-y: hidden;
                max-width: 1440px;
    margin: auto;
    min-height: 98px;
    display: flex;

    @media (min-width: ${theme.breakpoints.xl}) {
        overflow-x:  hidden;
                margin: ${theme.space.xl2} ;
                justify-content: center;
        }

    `,
);

const TabsMatchBoxStyles = styled(Box)(
    ({ theme }) => css`
        display: flex;
        min-height: 27px;
        width: 100%;
                justify-content: flex-start;

                @media (min-width: ${theme.breakpoints.xl}) {
                justify-content: center;

        }
    `,
);

const TabsMatchButtonStyles = styled(Button)(
    ({ theme }) => css`
        cursor:pointer;
        text-transform:uppercase;
        border-radius:20px;
        justify-content:center;
        color:${theme.colors.gray};
        width:100%;
        font-weight: bold;
    min-height: 27pxbold;
    align-items: centerbold;
    margin: ${theme.space.md} ${theme.space.zero};
    padding: ${theme.space.md} ${theme.space.lg};
                `,
);

const TabsMatchButtonContainerStyles = styled.div(
    ({ theme }) => css`
        width: auto;
        min-width: 0;
        display: inline-flex;
        max-width: 215px;
        flex: 0 0 100%;
        text-align: center;
        max-height: 60px;
        margin: ${theme.space.zero} ${theme.space.md};
        `,
);


export {
    TabsMatchStyles,
    TabsMatchBoxStyles,
    TabsMatchButtonStyles,
    TabsMatchButtonContainerStyles,
};
