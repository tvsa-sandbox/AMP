import styled, { css } from "styled-components";
import Box from "../../accessories/Box";

const LeadGalleryStyles = styled(Box)(
    ({ theme }) => css`
        margin-bottom: ${theme.space.xl2};
        margin-top: ${theme.space.xl2};
    `,
);

const LeadGalleryThumbsStyles = styled(Box)(
    ({ theme }) => css`
        margin-bottom: ${theme.space.xl2};
        margin-top: ${theme.space.xl2};
        flex: 0 0 auto;
    `,
);

export { LeadGalleryStyles, LeadGalleryThumbsStyles };
