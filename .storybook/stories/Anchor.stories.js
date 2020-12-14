import React, { Fragment } from "react";
import styled, { css } from "styled-components";
import { withKnobs, text } from "@storybook/addon-knobs";

import { Title, Text, Box, Info, Time, Anchor } from "accessories";

export default {
    decorators: [withKnobs],
    title: "Desing System/Atoms/Anchor",
};

const BoxAnchor = styled(Box)(
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

const AnchorContainer = styled(Box)(
    ({ theme }) => css`
        margin-bottom: ${theme.space.xl3};
    `,
);

const AnchorDescription = styled(Box)(
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

const AnchorTitle = styled(Title)(
    ({ theme }) => css`
        font-size: ${theme.fontSizes.fxl2};
        color: ${theme.colors.Dark};
        padding-left: ${theme.space.lg};
        padding-right: ${theme.space.lg};
    `,
);

const CaptionAnchor = styled(Text)(
    ({ theme }) => css`
        padding-top: ${theme.space.lg};
        padding-left: ${theme.space.lg};
        padding-right: ${theme.space.lg};
        font-size: ${theme.fontSizes.fsm};
        color: ${theme.colors.Dark};
        @media (min-width: ${theme.breakpoints.xl}) {
            max-width: 1024px;
        }
    `,
);

const AnchorsContainer = styled(Box)(
    ({ theme }) => css`
        display: block;
        width: 100%;
        justify-content: center;
        align-items: center;
        margin-top: ${theme.space.xxl};
        margin-right: ${theme.space.lg};
        @media (min-width: ${theme.breakpoints.xl}) {
            max-width: 1024px;
        }
    `,
);

const BoxText = styled(Box)(
    ({ theme }) => css`
        display: block;
        width: 100%;
        max-width: 310px;
        margin-left: ${theme.space.lg};
        @media (min-width: ${theme.breakpoints.xl}) {
            max-width: 500px;
        }
    `,
);

const TextCopy = styled(Text)(
    ({ theme }) => css`
        line-height: ${theme.lineHeights.llg};
        font-size: ${theme.fontSizes.fsm};
    `,
);

const BoxStyle = styled(Box)(
    ({ theme }) => css`
        display: block;
        width: 100%;
        justify-content: center;
        align-items: center;
        margin-bottom: ${theme.space.xxl};
        margin-top: ${theme.space.xxl};
    `,
);

const SubTitleColors = styled(Text)(
    ({ theme }) => css`
        font-size: ${theme.fontSizes.fmd};
        color: ${theme.colors.graycataloge};
        padding-bottom: ${theme.space.base};
    `,
);


export const ANCHOR = () => {
    const name = text("Link", "Anchor");
    return (
        <BoxAnchor variant="Transparent">
            <AnchorContainer variant="Transparent">
                <AnchorDescription variant="Transparent">
                    <AnchorTitle variant="h2">{name}</AnchorTitle>
                    <CaptionAnchor>
                    The anchor is a link that appears within paragraphs 
                    or sentences and these are used to direct users to 
                    content that is not directly related to what the user is seeing.
                    The links should have the interaction color to help 
                    users easily identify them and can be underlined or just colored.
                    </CaptionAnchor>
                </AnchorDescription>

                <AnchorsContainer variant="Transparent">
                    <BoxStyle variant="Transparent">
                        <BoxText variant="Transparent">
                            <TextCopy>
                                <SubTitleColors variant="h2">Active-Underlined</SubTitleColors>
                                Este es un ejemplo de como se va a visualizar un <Anchor variant="Active">{name}</Anchor> dentro de texto.
                                
                            </TextCopy>
                        </BoxText>
                    </BoxStyle>

                    <BoxStyle variant="Transparent">
                        <BoxText variant="Transparent">
                            <TextCopy>
                                <SubTitleColors variant="h2">Focus-Hover with opacity</SubTitleColors>
                                Este es un ejemplo de como se va a visualizar un <Anchor variant="Focus">{name}</Anchor> dentro de texto.
                                
                            </TextCopy>
                        </BoxText>
                    </BoxStyle>
                </AnchorsContainer>
            </AnchorContainer>
        </BoxAnchor>
    );
};
