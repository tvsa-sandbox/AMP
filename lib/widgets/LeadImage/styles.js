import styled, { css } from "styled-components";
import Box from "../../accessories/Box";

const LeadImageStyles = styled(Box)(
    ({ theme }) => css`
        margin-bottom: ${theme.space.xl2};
        margin-top: ${theme.space.xl2};
    `,
);

export default LeadImageStyles;
