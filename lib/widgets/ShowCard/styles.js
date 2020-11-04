import styled, { css } from "styled-components";
import { Box } from "../../accessories";

const ShowCardStyles = styled.section(
    ({ theme }) => css`
     width: 100%;

            `,
)

const ShowCardGridStyles = styled(Box)(
    ({ theme }) => css`
        border-radius: 6px;
        transform: translate(-50%,0%);
        position: relative;
    height: 290px;
    width:165px;
    display: grid;
                grid-template-columns: repeat(2,1fr);
                grid-gap: 0.5rem;
                left: 26%;
                margin-top: ${theme.space.sm} ;

                @media (min-width: ${theme.breakpoints.xl}) {
                    height: 418px;
    width:246px;
    grid-template-columns: repeat(4,1fr);
    grid-gap: 2em;
    left: 20%;
    margin: ${theme.space.zero} ;
        }

                `,
);

export { ShowCardStyles, ShowCardGridStyles };
