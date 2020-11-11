import React, { Fragment } from "react";
import styled, { css } from "styled-components";
import { withKnobs, text } from "@storybook/addon-knobs";
import { Title, Box, Text, Info, Time, Counter } from "accessories";
import { IconDuration } from "../../lib/accessories";

export default {
    decorators: [withKnobs],
    title: "Desing System/Atoms/Text",
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
    `,
);

const ColorContainer = styled(Box)(
    ({ theme }) => css`
        display: block;
        width: 100%;
        justify-content: center;
        align-items: center;
        margin: 17px auto;

        @media (min-width: ${theme.breakpoints.xl}) {
            max-width: 1024px;
            margin: 17px auto;
            padding-left: ${theme.space.lg};
        }
    `,
);

const SubTitleColors = styled(Text)(
    ({ theme }) => css`
        font-size: ${theme.fontSizes.fsm};
        color: ${theme.colors.gray4};
        padding-left: ${theme.space.lg};
        margin-bottom: ${theme.space.xxl};
        margin-top: ${theme.space.xxl};
    `,
);

const BoxStyle = styled(Box)(
    ({ theme }) => css`
        display: block;
        width: 100%;
        justify-content: center;
        align-items: center;
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

export const TEXT = () => {
    return (
        <BoxColor variant="Transparent">
            <ColorDescription variant="Transparent">
                <TitleColors variant="h2">Text</TitleColors>
                <CaptionColors>Different types of text.</CaptionColors>
            </ColorDescription>

            <ColorContainer variant="Transparent">
                <BoxStyle variant="Transparent">
                    <SubTitleColors variant="h2">Text Paragraph:</SubTitleColors>
                    <BoxText variant="Transparent">
                        <Text>
                            Esta es una muestra de los 120 <br></br>caracteres reales que acepta una
                            descripción <br></br>en nuestra interfaz de usuario.
                        </Text>
                    </BoxText>
                </BoxStyle>

                <BoxStyle variant="Transparent">
                    <SubTitleColors variant="h2">Info</SubTitleColors>
                    <BoxText variant="Transparent">
                        <Info>Autor:José de Jesus</Info>
                    </BoxText>
                </BoxStyle>

                <BoxStyle variant="Transparent">
                    <SubTitleColors variant="h2">Airtime</SubTitleColors>
                    <BoxText variant="Transparent">
                        <Time variant="Airtime">Julio 28 ,2020</Time>
                    </BoxText>
                </BoxStyle>

                <BoxStyle variant="Transparent">
                    <SubTitleColors variant="h2">Duration</SubTitleColors>
                    <BoxText variant="Transparent">
                        <Time variant="Duration">24:00</Time>
                    </BoxText>
                    <BoxText variant="Transparent">
                        <Time variant="DurationLight">24:00</Time>
                    </BoxText>
                </BoxStyle>

                <BoxStyle variant="Transparent">
                    <SubTitleColors variant="h2">Counter</SubTitleColors>
                    <BoxText variant="Transparent">
                        <Time>10/10</Time>
                    </BoxText>
                </BoxStyle>
            </ColorContainer>
        </BoxColor>
    );
};

export const LABEL = () => {
    const name = text("Etiqueta", "Label");
    return (
        <div>
            <Title variant="h2">Label</Title>

            <Box variant="Space">
                <Text variant="Label">{name}</Text>
            </Box>
        </div>
    );
};

export const INFO = () => {
    const name = text("Texto", "Autor: José de Jesus");
    return (
        <div>
            <Title variant="h2">Info</Title>

            <Box variant="Space">
                <Info>{name}</Info>
            </Box>
        </div>
    );
};

export const AIRTIME = () => {
    const name = text("Fecha", "julio 21, 2020");
    return (
        <div>
            <Title variant="h2">Airtime</Title>

            <Box variant="Space">
                <Time variant="Airtime">{name}</Time>
            </Box>
        </div>
    );
};

export const DURATION = () => {
    const name = text("Duracion", "24:00");
    return (
        <div>
            <Title variant="h2">Duration</Title>

            <Box variant="Space">
                <Time variant="Duration">{name}</Time>
            </Box>
            <Box variant="Space">
                <Time variant="DurationLight">{name}</Time>
            </Box>
        </div>
    );
};

export const ICONDURATION = () => {
    const name = text("Duracion", "24:00");
    return (
        <div>
            <Title variant="h2">Duration</Title>
            <Box variant="Transparent" style={{ height: "50px" }}>
                <Box variant="Space">
                    <IconDuration variant="Solid">{name}</IconDuration>
                </Box>
            </Box>
        </div>
    );
};

export const COUNTER = () => {
    const name = text("Number", "10/10");
    return (
        <>
            <Title variant="h2">Counter</Title>

            <Box variant="Space">
                <Time>{name}</Time>
            </Box>
        </>
    );
};
