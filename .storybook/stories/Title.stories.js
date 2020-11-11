import React, { Fragment } from "react";
import styled, { css } from "styled-components";
import { withKnobs, text } from "@storybook/addon-knobs";

import { Title, Text, Box } from "accessories";

export default {
    decorators: [withKnobs],
    title: "Desing System/Atoms/Title",
};

const BoxTitle = styled(Box)(
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

const TitleScale = styled(Title)(
    ({ theme }) => css`
        font-size: ${theme.fontSizes.fxl2};
        color: ${theme.colors.Dark};
        padding-left: ${theme.space.lg};
        padding-right: ${theme.space.lg};
    `,
);

const TitleDescription = styled(Box)(
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

const CaptionTitle = styled(Text)(
    ({ theme }) => css`
        margin-top: ${theme.space.lg};
        margin-bottom: ${theme.space.lg};
        padding-left: ${theme.space.lg};
        padding-right: ${theme.space.lg};
        font-size: ${theme.fontSizes.fsm};
        color: ${theme.colors.Dark};
    `,
);

const TitleContainer = styled(Box)(
    ({ theme }) => css`
        display: block;
        width: 100%;
        justify-content: center;
        align-items: center;
        margin-top: ${theme.space.xxl};
        padding-right: ${theme.space.lg};

        @media (min-width: ${theme.breakpoints.xl}) {
            max-width: 1024px;
            margin-top: ${theme.space.xxl};
            padding-right: ${theme.space.lg};
            padding-left: ${theme.space.lg};
        }
    `,
);

const BoxText = styled(Box)(
    ({ theme }) => css`
        display: block;
        width: 100%;
        max-width: 500px;
        padding-left: ${theme.space.lg};
    `,
);

export const TITLE = () => {
    const name = text("Titulo", "Title Component");
    return (
        <BoxTitle variant="Transparent">
            <TitleDescription variant="Transparent">
                <TitleScale variant="h2">Typography Scale</TitleScale>
                <CaptionTitle>
                    The fonts will make reading easier and will help with the general structure of
                    the interface.
                </CaptionTitle>
            </TitleDescription>

            <TitleContainer variant="Transparent">
                <BoxText variant="Transparent">
                    <Title variant="h6">{name} </Title>
                </BoxText>
                <BoxText variant="Transparent">
                    <Title variant="h5">{name} </Title>
                </BoxText>
                <BoxText variant="Transparent">
                    <Title variant="h4">{name} </Title>
                </BoxText>
                <BoxText variant="Transparent">
                    <Title variant="h3">{name} </Title>
                </BoxText>
                <BoxText variant="Transparent">
                    <Title variant="h2">{name} </Title>
                </BoxText>
                <BoxText variant="Transparent">
                    <Title variant="h1">{name} </Title>
                </BoxText>
            </TitleContainer>
        </BoxTitle>
    );
};
