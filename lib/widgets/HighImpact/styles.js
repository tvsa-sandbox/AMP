import styled, { css } from "styled-components";
import { Box} from "accessories";

const HighImpactContainer = styled(Box)(
    ({ theme }) => css`
        display: block;
        height: auto;
        background: ${theme.colors.Light};
        width: 100%;
        padding: ${theme.space.zero}; 
        margin:${theme.space.zero}; 
        align-items: flex-start;

        @media (min-width: ${theme.breakpoints.xl}) {
            display: grid; 
            margin:${theme.space.auto}; 
            grid-template-columns: 1.7fr 0.9fr; 
            grid-template-rows: 1fr; 
            gap: 12px; 
            grid-template-areas: 
                "hero news"; 
            max-width: 1280px;
            padding: ${theme.space.xl};
            }   
        `,
);


export  default HighImpactContainer;
