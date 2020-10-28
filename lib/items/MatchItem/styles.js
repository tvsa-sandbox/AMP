import styled, { css } from "styled-components";
import Box from "../../accessories/Box";
import Title from "../../accessories/Title";
import Time from "../../accessories/Time";

const MatchItemStyles = styled(Box)(
    ({ theme }) => css`
         position: relative;
        display: flex;
        width: 360px;
        margin: ${theme.space.sm};
    `,
);

const MatchItemTeamStyles = styled(Box)`
        width: 100%;
    max-width: 245px;
    `;

const MatchItemImageStyles = styled(Box)`
     height: auto;
        max-width: 35px;
        width: 100%;
    `;

const MatchItemTimeStyles = styled(Time)(
    ({ theme }) => css`
             display: flex;
        align-items: center;
        color: ${theme.colors.Dark};
        margin-left: ${theme.space.md};
        &:before  {
            background: #212121;
            right: 117px;
            opacity: 0.5;
            content: "";
            display: flex;
            position: absolute;
            justify-content: center;
            align-items: center;
            height: 70%;
            width: 1px;
        }
    `,
);

const MatchItemTitleStyles = styled(Title)(
    ({ theme }) => css`
    align-items: center;
    color: ${theme.colors.Dark};
    display: flex;
    margin-left: ${theme.space.md};
    text-transform: uppercase;
    font-size: ${theme.fontSizes.fmd};

    `,
);

export {
    MatchItemStyles,
    MatchItemTeamStyles,
    MatchItemImageStyles,
    MatchItemTimeStyles,
    MatchItemTitleStyles,
};
