import styled, { css } from "styled-components";
import Box from "../../accessories/Box";
import Icons from "../../accessories/Icons";

const LeadVideoStyles = styled(Box)(
    ({ theme }) => css`
        margin-bottom: ${theme.space.xl2};
        margin-top: ${theme.space.xl2};
    `,
);

const LeadVideoIcon = styled(Icons)(
    ({ theme }) => css`
        fill: #f5f5f5;
        padding: ${theme.space.sm};
        width: 50px;
        height: 50px;

        @media (min-width: ${theme.breakpoints.xl}) {
            width: 60px;
            height: 60px;
        }
    `,
);

const BoxVideoIcon = styled(Box)(
    ({ theme }) => css`
        position: absolute;
        z-index: 2;
        bottom: 0;
        justify-content: center;
        display: flex;
        padding: ${theme.space.md};
        background: rgba(0, 0, 0, 0.7);
        border-radius: 50%;
        width: 60px;
        height: 60px;
        right: 15px;
        margin-bottom: 15px;

        @media (min-width: ${theme.breakpoints.xl}) {
            width: 90px;
            height: 90px;
            right: 30px;
            margin-bottom: 30px;
        }
    `,
);

const BoxVideoPlayer = styled(Box)`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    display: none; /*quitar al montar en ui*/
`;

export { LeadVideoStyles, LeadVideoIcon, BoxVideoIcon, BoxVideoPlayer };
