import React, { Fragment } from "react";
import styled, { css } from "styled-components";
import { withKnobs } from "@storybook/addon-knobs";

import { Title, Text, Box } from "accessories";
import { Color } from "../../lib/accessories";

export default {
    decorators: [withKnobs],
    title: "Desing System/Atoms/Color",
};

const BoxColor = styled(Box)(
    ({ theme }) => css`
        width: 100%;
        display: block;
        position: relative;
        margin: auto;
        @media (min-width: ${theme.breakpoints.xl}) {
            max-width: 1024px;
        }
    `,
);

const ColorDescription = styled(Box)(
    ({ theme }) => css`
        width: 100%;
        display: block;
        position: relative;
        margin-top: ${theme.space.lg};
        @media (min-width: ${theme.breakpoints.xl}) {
            max-width: 1024px;
        }
    `,
);

const TitleColors = styled(Title)(
    ({ theme }) => css`
        font-size: ${theme.fontSizes.fxl2};
        color: ${theme.colors.Dark};
        padding-left: ${theme.space.lg};
        padding-right: ${theme.space.lg};
    `,
);

const CaptionColors = styled(Text)(
    ({ theme }) => css`
        margin-top: ${theme.space.lg};
        margin-bottom: ${theme.space.lg};
        padding-left: ${theme.space.lg};
        padding-right: ${theme.space.lg};
        font-size: ${theme.fontSizes.fsm};
        color: ${theme.colors.Dark};
        line-height: ${theme.lineHeights.lsm};
    `,
);

const ColorContainer = styled(Box)(
    ({ theme }) => css`
        display: block;
        width: 100%;
        padding-right: ${theme.space.lg};
        @media (min-width: ${theme.breakpoints.xl}) {
            display: flex;
            max-width: 1024px;
            padding-right: ${theme.space.lg};
            padding-left: ${theme.space.lg};
        }
    `,
);

const ColorStyle = styled(Box)(
    ({ theme }) => css`
        display: block;
        width: 100%;
        min-height: 350px;
        padding-right: ${theme.space.lg};
        padding-left: ${theme.space.lg};
        @media (min-width: ${theme.breakpoints.xl}) {
            padding-left: ${theme.space.lg};
        }
    `,
);

const ColorStyleForm = styled(Box)(
    ({ theme }) => css`
        display: block;
        width: 100%;
        min-height: 350px;
        padding-right: ${theme.space.lg};
        padding-left: ${theme.space.lg};
        @media (min-width: ${theme.breakpoints.xl}) {
            padding-left: ${theme.space.zero};
        }
    `,
);

const SubTitleColors = styled(Text)(
    ({ theme }) => css`
        font-size: ${theme.fontSizes.fsm};
        color: ${theme.colors.Dark};
    `,
);

const ColorsType = styled(Title)(
    ({ theme }) => css`
        font-size: ${theme.fontSizes.fsm};
        color: ${theme.colors.Dark};
        line-height: ${theme.lineHeights.lsm};
        text-align: left;
        padding-bottom: ${theme.space.lg};
        padding-top: ${theme.space.lg};
    `,
);

const ColorDrop = styled(Color)(
    ({ theme }) => css`
        margin-left: ${theme.space.zero};
        border: 1px #cccccc solid;
    `,
);

export const COLOR = () => {
    return (
        <BoxColor variant="Transparent">
            <ColorDescription variant="Transparent">
                <TitleColors variant="h2">Color</TitleColors>
                <CaptionColors>
                    The color system primarily defines the basic color palette, the neutral color
                    palette, and the data display color palette in the layout.
                </CaptionColors>
            </ColorDescription>

            <ColorContainer variant="Transparent">
                <ColorStyle variant="Transparent">
                    <ColorsType variant="h2">Theme Colors </ColorsType>
                    <SubTitleColors variant="h2">Interaction Color</SubTitleColors>
                    <ColorDrop />

                    <SubTitleColors variant="h3">Secondary Color</SubTitleColors>
                    <ColorDrop variant="Secondary" />

                    <SubTitleColors variant="h3">White</SubTitleColors>
                    <ColorDrop variant="White" />

                    <SubTitleColors variant="h3">Black</SubTitleColors>
                    <ColorDrop variant="Black" />
                </ColorStyle>

                <ColorStyleForm variant="Transparent">
                    <ColorsType variant="h2">Form Colors </ColorsType>
                    <SubTitleColors variant="h3">Done</SubTitleColors>
                    <ColorDrop variant="Done" />

                    <SubTitleColors variant="h3">Warning</SubTitleColors>
                    <ColorDrop variant="Warning" />

                    <SubTitleColors variant="h3">Error</SubTitleColors>
                    <ColorDrop variant="Error" />
                </ColorStyleForm>
            </ColorContainer>
        </BoxColor>
    );
};
