import styled, { css } from "styled-components";
import Title from "../../accessories/Title";
import Ads from "../../accessories/Ads";
import Box from "../../accessories/Box";

const MostViewedStyles = styled(Box)(
    ({ theme }) => css`
        background: ${theme.colors.Dark};
        margin: ${theme.space.auto};
        width: 350px;
        padding: ${theme.space.lg} ${theme.space.zero};
    `,
);

const MostViewedTitleStyles = styled(Title)(
    ({ theme }) => css`
        color: ${theme.colors.Light};

        text-align: center;
        text-transform: uppercase;
        margin-bottom: ${theme.space.lg};
        padding: ${theme.space.base};
    `,
);
const BoxContainerItemsStyles = styled(Box)(
    ({ theme }) => css`
        background: ${theme.colors.Dark};
        border-radius: 6px;
        padding: ${theme.space.zero} ${theme.space.base};
    `,
);

const AdsMostStyles = styled(Ads)(
    ({ theme }) => css`
        width: 300px;
        height: 250px;
        background: ${theme.colors.gray2};
        margin: ${theme.space.auto};
        @media (min-width: ${theme.breakpoints.xl}) {
            box-shadow: none;
        }
    `,
);

export { MostViewedStyles, AdsMostStyles, BoxContainerItemsStyles, MostViewedTitleStyles };
