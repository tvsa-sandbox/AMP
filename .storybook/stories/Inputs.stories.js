import React, { Fragment } from "react";
import styled, { css } from "styled-components";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

import { Form, Title, Text, Label, Box, Inputs, Icons } from "accessories";

export default {
    decorators: [withKnobs],
    title: "Desing System/Atoms/Inputs",
};

const BoxInput = styled(Box)(
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

const InputDescription = styled(Box)(
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

const InputColors = styled(Title)(
    ({ theme }) => css`
        font-size: ${theme.fontSizes.fxl2};
        color: ${theme.colors.Dark};
        padding-left: ${theme.space.lg};
        padding-right: ${theme.space.lg};
    `,
);

const BoxInputsType = styled(Box)(
    ({ theme }) => css`
        display: block;
        align-items: center;
        min-height: 60px;
        padding-top: ${theme.space.xs};
        padding-bottom: ${theme.space.xs};
    `,
);

const CaptionInput = styled(Text)(
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

const InputContainer = styled(Box)(
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

const InputStyle = styled(Box)(
    ({ theme }) => css`
        display: block;
        width: 100%;
        padding-right: ${theme.space.lg};
        padding-left: ${theme.space.lg};
    `,
);

const InputStyleIcon = styled(Box)(
    ({ theme }) => css`
        display: block;
        width: 100%;
        padding-right: ${theme.space.lg};
        padding-left: ${theme.space.lg};
    `,
);

const SubTitleInput = styled(Text)(
    ({ theme }) => css`
        font-size: ${theme.fontSizes.fsm};
        color: ${theme.colors.Dark};
        padding-bottom: ${theme.space.base};
    `,
);

const InputsForm = styled(Form)`
    min-height: 40px;
`;

export const INPUTS = () => {
    return (
        <BoxInput variant="Transparent">
            <InputDescription variant="Transparent">
                <InputColors variant="h2">Input</InputColors>
                <CaptionInput>
                    Individual forms automatically receive some global styles.
                </CaptionInput>
            </InputDescription>

            <InputContainer variant="Transparent">
                <InputStyle variant="Transparent">
                    <BoxInputsType variant="Transparent">
                        <SubTitleInput variant="h2">My Text</SubTitleInput>
                        <InputsForm>
                            <Inputs variant="Interaction" />
                        </InputsForm>
                    </BoxInputsType>

                    <BoxInputsType variant="Transparent">
                        <SubTitleInput variant="h2"> Done </SubTitleInput>
                        <InputsForm>
                            <Inputs variant="Done" />
                        </InputsForm>
                    </BoxInputsType>

                    <BoxInputsType variant="Transparent">
                        <SubTitleInput variant="h2"> Warning</SubTitleInput>
                        <InputsForm>
                            <Inputs variant="Warning" />
                        </InputsForm>
                    </BoxInputsType>

                    <BoxInputsType variant="Transparent">
                        <SubTitleInput variant="h2"> Error </SubTitleInput>
                        <InputsForm>
                            <Inputs variant="Error" />
                        </InputsForm>
                    </BoxInputsType>
                </InputStyle>

                <InputStyleIcon variant="Transparent">
                    <BoxInputsType variant="Tranparent">
                        <SubTitleInput variant="h2"> Interaction </SubTitleInput>
                        <InputsForm>
                            <Inputs variant="Interaction" />
                            <Icons name="ArrowRight" variant="Outline" />
                        </InputsForm>
                    </BoxInputsType>

                    <BoxInputsType variant="Transparent">
                        <SubTitleInput variant="h2"> Done </SubTitleInput>
                        <InputsForm>
                            <Inputs variant="Done" />
                            <Icons name="ArrowRight" variant="Outline" />
                        </InputsForm>
                    </BoxInputsType>

                    <BoxInputsType variant="Transparent">
                        <SubTitleInput variant="h2"> Warning </SubTitleInput>
                        <InputsForm>
                            <Inputs variant="Warning" />
                            <Icons name="ArrowRight" variant="Outline" />
                        </InputsForm>
                    </BoxInputsType>

                    <BoxInputsType variant="Transparent">
                        <SubTitleInput variant="h2"> Error</SubTitleInput>
                        <InputsForm>
                            <Inputs variant="Error" />
                            <Icons name="ArrowRight" variant="Outline" />
                        </InputsForm>
                    </BoxInputsType>
                </InputStyleIcon>
            </InputContainer>
        </BoxInput>
    );
};
