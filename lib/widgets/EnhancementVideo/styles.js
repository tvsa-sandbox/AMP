import styled, { css } from "styled-components";
import Text from "../../accessories/Text";
import Box from "../../accessories/Box";
import Icons from "../../accessories/Icons";

const EnhancementVideoStyles = styled.div(
    ({ theme }) => css`
        width: 100%;
        height: auto;
        margin: ${theme.space.xl3} auto;
        margin-bottom: ${theme.space.zero};
        cursor: pointer;
    `,
);

const BoxTextStyles = styled(Box)(
    ({ theme }) => css`
        max-width: 290px;
        justify-content: center;
        margin: ${theme.space.lg} auto;

        @media (min-width: ${theme.breakpoints.xl}) {
            max-width: 650px;
        }

        &::after {
            content: "";
            display: flex;
            background: ${theme.colors.Dark};
            width: 60px;
            height: 1px;
            margin: ${theme.space.xl2} auto;
            margin-bottom: ${theme.space.zero};
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

const VideoIconsStyles = styled(Icons)(
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

const EnhancementVideoText = styled(Text)(
    ({ theme }) => css`
        width: 100%;
        height: auto;
        color: ${theme.colors.Dark};
        font-size: ${theme.fontSizes.fmd};
        font-weight: 700;
        line-height: 20px;

        @media (min-width: ${theme.breakpoints.xl}) {
            font-size: ${theme.fontSizes.flg};
            line-height: 28px;
        }
    `,
);

export {
    EnhancementVideoStyles,
    BoxTextStyles,
    EnhancementVideoText,
    BoxVideoIcon,
    VideoIconsStyles,
    BoxVideoPlayer,
};
