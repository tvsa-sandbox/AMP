import styled, { css } from "styled-components";
import { Box, Button } from "../../accessories";

const EndCardBox = styled(Box)(
    ({ theme }) => css`
        width: 100%;
        max-width: 1024px;
        height: 100%;
        flex-direction: column;
        position: absolute;
        z-index: 2;
        top: 0;
        background: rgba(0, 0, 0, 0.7);
        margin: ${theme.space.zero} ${theme.space.auto};
        padding: 1em;
        justify-content: space-between;
    `,
);

const EndCardImageBox = styled(Box)(
    ({ theme }) => css`
        position: relative;
        border-radius: 5px;
        border: solid 1px ${theme.colors.gray};
        overflow: hidden;
        margin: ${theme.space.zero} ${theme.space.sm};
    `,
);
const EndCardButton = styled(Button)(
    ({ theme }) => css`
        border-radius: 5px;
        border: solid 1px ${theme.colors.gray};
        min-width: 150px;
        justify-content: center;
        background: ${theme.colors.darkfooter};
        font-size: ${theme.fontSizes.fxs};
    `,
);

const EndCardIcon = styled.div(
    () => css`
        border-radius: 50px;
        border: solid 5px rgba(255, 255, 255, 0.5);
        width: 50px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(0, 0, 0, 0.5);
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: 5;
        padding-left: 5px;
    `,
);
const EndCardTitleBox = styled(Box)(
    ({ theme }) => css`
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        height: 100%;
        padding: ${theme.space.zero} ${theme.space.lg};
    `,
);

export { EndCardBox, EndCardImageBox, EndCardButton, EndCardIcon, EndCardTitleBox };
