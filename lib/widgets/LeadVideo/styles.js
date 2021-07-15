import styled, { css } from "styled-components";
import Box from "../../accessories/Box";
import Icons from "../../accessories/Icons";

const LeadVideoStyles = styled.section(
    ({ theme }) => css`
        margin: ${theme.space.xl} ${theme.space.zero};
        width: 100%;
        height: auto;
        display: block;
    `,
);


export default LeadVideoStyles;
