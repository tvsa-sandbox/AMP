import styled, { css } from "styled-components";
import { Box, Icons } from "../../accessories";

const ConnectionBoxStyles = styled(Box)(
    ({ theme }) => css`
        padding: ${theme.space.base} ${theme.space.base} ${theme.space.zero} ${theme.space.base};
        margin: ${theme.space.auto};
        max-width: 600px;
        align-items: center;
        justify-content: center;
    `,
);

const ConnectionIconStyle = styled(Icons)(
    ({ theme }) => css`
        fill: ${theme.colors.graycataloge};
    `,
);

export { ConnectionBoxStyles, ConnectionIconStyle };
