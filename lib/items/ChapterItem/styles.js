import styled, { css } from "styled-components";
import { Box, Title, Icons, Text, Time, Anchor, Button } from "accessories";

const ChapterCardStyles = styled(Button)(
    ({ theme }) => css`
        width: 100%;
        margin: ${theme.space.zero} ${theme.space.zero} ${theme.space.lg};
        max-width: 100%;
        padding: ${theme.space.zero};

        @media (min-width: ${theme.breakpoints.xl}) {
            margin: ${theme.space.zero} ${theme.space.auto} ${theme.space.xl2};
            max-width: 289px;
        }
    `,
);

const ChapterItemStyles = styled.div(
    ({ theme }) => css`
        display: block;
        padding: ${theme.space.zero} ${theme.space.lg};
        height: auto;
        width: 100%;
        margin-bottom: ${theme.space.lg};

        &::after {
            content: "";
            height: 1px;
            width: 100%;
            background: ${theme.colors.gray2};
            display: block;
        }

        @media (min-width: ${theme.breakpoints.xl}) {
            margin-bottom: ${theme.space.lg};
            max-width: 289px;
            padding: ${theme.space.zero};
        }
    `,
);

const ChapterItemBox = styled(Box)(
    ({ theme }) => css`
        max-width: 100%;
        margin: ${theme.space.auto};
    `,
);

const ChapterItemImageContent = styled(Anchor)(
    () => css`
        margin: auto;
        display: block;
        height: auto;
        width: 100%;
    `,
);

const ChapterItemImageContentBox = styled(Box)(
    () => css`
        margin: auto;
        display: block;
        height: auto;
        width: 100%;
    `,
);

const ChapterItemCaption = styled(Box)(
    ({ theme }) => css`
        max-height: 125px;
        overflow: hidden;
        padding: ${theme.space.zero} ${theme.space.md};
        margin-top: ${theme.space.base};

        @media (min-width: ${theme.breakpoints.xl}) {
            max-height: 140px;
        }
    `,
);

const ChapterItemIconStyles = styled(Icons)(
    ({ theme }) => css`
        border-radius: 100%;
        width: 48px;
        height: 48px;
        grid-area: icono;
        fill: ${theme.colors.gray3};
        background: #191919;
        padding: ${theme.space.xs};
    `,
);

const ChapterItemTimeStyles = styled(Time)(
    ({ theme }) => css`
        margin: ${theme.space.zero} ${theme.space.auto};
        padding: ${theme.space.sm};
        position: absolute;
        top: 47%;
        width: auto;
        justify-content: center;
        height: 20px;
        align-items: flex-end;
        z-index: 2;
        right: 10px;
        font-size: ${theme.fontSizes.fsm};
        font-weight: bold;
        background: rgba(0, 0, 0, 0.5);
        min-height: 25px;

        @media (min-width: ${theme.breakpoints.xl}) {
            top: 42%;
        }
    `,
);

const ChapterItemDateStyles = styled(Time)(
    ({ theme }) => css`
        font-size: ${theme.fontSizes.fxs};
        grid-area: date;
        position: absolute;
        top: 0;
        color: ${theme.colors.gray3};
    `,
);

const ChapterItemLabelStyles = styled(Text)(
    ({ theme }) => css`
        align-items: center;
        font-size: ${theme.fontSizes.fxs};
        grid-area: icono;
        width: 80px;
        display: flex;
        position: absolute;
        bottom: 0%;
    `,
);

const ChapterItemTitleStyles = styled(Title)(
    ({ theme }) => css`
        color: ${theme.colors.gray3};
        font-size: ${theme.fontSizes.fsm};
        line-height: ${theme.lineHeights.lsm};
        display: block;
        font-weight: bold;
        grid-area: título;
        position: absolute;
        bottom: 0;
    `,
);

const ChapterItemTextStyles = styled(Text)(
    ({ theme }) => css`
        font-size: ${theme.fontSizes.fmd};
        line-height: 22px;
        display: block;
        margin: ${theme.space.zero} ${theme.space.zero} ${theme.space.xxl};
        height: 70px;
        display: flex;
        font-weight: normal;
        letter-spacing: 0.4px;
        overflow: hidden;
        white-space: break-spaces;
        @media (min-width: ${theme.breakpoints.xl}) {
            margin: ${theme.space.zero} ${theme.space.zero} ${theme.space.lg};
        }
    `,
);

const ChapterItemBoxTop = styled(Box)(
    ({ theme }) => css`
        min-height: 25px;
        margin-bottom: ${theme.space.base};
        display: grid;
        position: relative;
        grid-gap: 2px;
        grid-template-columns: 21% 85%;
        grid-template-rows: 1fr 1fr;
        grid-template-areas:
            "icono título título"
            "icono date date";
    `,
);

const ChapterItemAnchor = styled(Anchor)`
    grid-area: icono;
    display: flex;
`;

export {
    ChapterCardStyles,
    ChapterItemBox,
    ChapterItemStyles,
    ChapterItemIconStyles,
    ChapterItemTimeStyles,
    ChapterItemDateStyles,
    ChapterItemLabelStyles,
    ChapterItemTitleStyles,
    ChapterItemTextStyles,
    ChapterItemImageContent,
    ChapterItemCaption,
    ChapterItemBoxTop,
    ChapterItemAnchor,
    ChapterItemImageContentBox,
};
