import styled, { css } from "styled-components";
import Box from "../../accessories/Box";
import Title from "../../accessories/Title";

const MosaicStyles = styled(Box)(
    ({ theme }) => css`
        max-width: 1280px;
        display: grid;
        margin-bottom: ${theme.space.xl};
    `,
);

const TitleMosaicStyles = styled(Title)(
    ({ theme }) => css`
        color: ${theme.colors.Interaction};
        margin: ${theme.space.lg} ${theme.space.auto};
        text-transform: uppercase;
    `,
);
const ContainerItemsStyles = styled(Box)(
    ({ theme }) => css`
        max-width: 1280px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: auto;
        grid-gap: 12px;

        margin: ${theme.space.auto};

        @media (min-width: ${theme.breakpoints.xl}) {
            grid-template-columns: repeat(4, 1fr);
        }
    `,
);

export { MosaicStyles, ContainerItemsStyles, TitleMosaicStyles };
