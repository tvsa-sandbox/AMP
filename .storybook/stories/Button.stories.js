import React, { Fragment } from "react";
import styled, { css } from "styled-components";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import extractCSS from "../../lib/helpers/cssextractor";

import { Button, Title, Box, Icons, Text, Info } from "accessories";

export default {
    decorators: [withKnobs],
    title: "Desing System/Atoms/Buttons",
};

const BoxButton = styled(Box)(
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

const ButtonDescription = styled(Box)(
    ({ theme }) => css`
        width: 100%;
        display: block;
        position: relative;
        margin-top: ${theme.space.lg};
        margin-bottom: ${theme.space.xxl};
        @media (min-width: ${theme.breakpoints.xl}) {
            max-width: 1024px;
        }
    `,
);

const TitleButton = styled(Title)(
    ({ theme }) => css`
        font-size: ${theme.fontSizes.fxl2};
        color: ${theme.colors.Dark};
        padding-left: ${theme.space.lg};
        padding-right: ${theme.space.lg};
    `,
);

const CaptionButton = styled(Text)(
    ({ theme }) => css`
        padding-top: ${theme.space.lg};
        padding-left: ${theme.space.lg};
        padding-right: ${theme.space.lg};
        font-size: ${theme.fontSizes.fsm};
        color: ${theme.colors.Dark};
        line-height: ${theme.lineHeights.llg};
    `,
);

const ButtonsContainer = styled(Box)(
    ({ theme }) => css`
        display: grid;
        gap: 24px 10px;
        width: 100%;
        max-width: 300px;
        grid-template-columns: repeat(1, minmax(300px, 1fr));
        grid-template-rows: repeat(3, 1fr);
        justify-content: center;
        align-items: center;
        margin-right: ${theme.space.lg};
        margin-left: ${theme.space.lg};
        margin-bottom: ${theme.space.xl3};
        @media (min-width: ${theme.breakpoints.md}) {
            max-width: 768px;
            grid-template-columns: repeat(2, minmax(320px, 1fr));
            grid-template-rows: repeat(2, 1fr);
            gap: 24px 10px;
        }
        @media (min-width: ${theme.breakpoints.xl}) {
            max-width: 1024px;
            grid-template-columns: repeat(2, minmax(320px, 1fr));
            grid-template-rows: repeat(2, 1fr);
            gap: 24px 10px;
        }
    `,
);

const ButtonTypeBox = styled(Info)(
    ({ theme }) => css`
        display: inline-flex;
        color: #272733;
        align-items: center;
    `,
);

const ButtonInfo = styled(Info)(
    ({ theme }) => css`
        font-size: ${theme.fontSizes.fmd};
        margin-left: ${theme.space.xxl};
        color: ${theme.colors.graycataloge};
    `,
);
export const BUTTON = () => {
    const name = text("Name", "Click Me!");
    return (
        <Fragment>
            <BoxButton variant="Transparent">
                <ButtonDescription variant="Transparent">
                    <TitleButton variant="h1">Button</TitleButton>
                    <CaptionButton>
                        The buttons of an interface are vital elements, since in most cases they
                        have many of the navigation capabilities. These buttons are accompanied by
                        an icon that represents their action, in addition to the text. The inactive
                        version of the button can be activated on the knobs.
                    </CaptionButton>
                </ButtonDescription>
                <ButtonsContainer variant="Transparent">
                    <ButtonTypeBox variant="Transparent">
                        <Button disabled={boolean("Desactivado", false)} aria-label="boton">
                            {name}
                        </Button>
                        <ButtonInfo>Active State</ButtonInfo>
                    </ButtonTypeBox>

                    <ButtonTypeBox variant="Transparent">
                        <Button
                            variant="Outline"
                            disabled={boolean("Desactivado", false)}
                            aria-label="boton"
                        >
                            {name}
                        </Button>
                        <ButtonInfo>Button Outline</ButtonInfo>
                    </ButtonTypeBox>
                    <ButtonTypeBox variant="Transparent">
                        <Button
                            variant="Transparent"
                            disabled={boolean("Desactivado", false)}
                            aria-label="boton"
                        >
                            {name}
                        </Button>
                        <ButtonInfo>Button Transparent</ButtonInfo>
                    </ButtonTypeBox>
                </ButtonsContainer>
                <ButtonDescription variant="Transparent">
                    <TitleButton variant="h1">Button Icon</TitleButton>
                </ButtonDescription>
                <ButtonsContainer variant="Tranparent">
                    <ButtonTypeBox variant="Transparent">
                        <Button disabled={boolean("Desactivado", false)} aria-label="boton">
                            <Icons name="Search" color="#ffff" />
                        </Button>
                        <ButtonInfo>Active State</ButtonInfo>
                    </ButtonTypeBox>

                    <ButtonTypeBox variant="Transparent">
                        <Button
                            variant="Outline"
                            disabled={boolean("Desactivado", false)}
                            aria-label="boton"
                        >
                            <Icons name="Search" variant="Outline" />
                        </Button>
                        <ButtonInfo>Button Outline</ButtonInfo>
                    </ButtonTypeBox>
                    <ButtonTypeBox variant="Transparent">
                        <Button
                            variant="Transparent"
                            disabled={boolean("Desactivado", false)}
                            aria-label="boton"
                        >
                            <Icons name="Search" variant="Transparent" />
                        </Button>
                        <ButtonInfo>Button Transparent</ButtonInfo>
                    </ButtonTypeBox>
                </ButtonsContainer>
                <ButtonDescription variant="Transparent">
                    <TitleButton variant="h1">Button Double</TitleButton>
                </ButtonDescription>
                <ButtonsContainer variant="Tranparent">
                    <ButtonTypeBox variant="Transparent">
                        <Button disabled={boolean("Desactivado", false)}>
                            <Icons name="Search" color="#ffff" />
                            {name}
                        </Button>
                        <ButtonInfo>Active State</ButtonInfo>
                    </ButtonTypeBox>

                    <ButtonTypeBox variant="Transparent">
                        <Button variant="Outline" disabled={boolean("Desactivado", false)}>
                            <Icons name="Search" variant="Outline" />
                            {name}
                        </Button>
                        <ButtonInfo>Button Outline</ButtonInfo>
                    </ButtonTypeBox>

                    <ButtonTypeBox variant="Transparent">
                        <Button variant="Transparent" disabled={boolean("Desactivado", false)}>
                            <Icons name="Search" variant="Transparent" />
                            {name}
                        </Button>
                        <ButtonInfo>Button Transparent</ButtonInfo>
                    </ButtonTypeBox>
                </ButtonsContainer>
            </BoxButton>
        </Fragment>
    );
};
