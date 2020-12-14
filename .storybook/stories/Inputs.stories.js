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

const InputTitle = styled(Title)(
    ({ theme }) => css`
        font-size: ${theme.fontSizes.fxl2};
        color: ${theme.colors.Dark};
        padding-left: ${theme.space.lg};
        padding-right: ${theme.space.lg};
    `,
);

const CaptionInput = styled(Text)(
    ({ theme }) => css`
        padding-top: ${theme.space.lg};
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
        margin-top: ${theme.space.xxl};
        margin-bottom: ${theme.space.xxl};
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

const BoxInputsType = styled(Box)(
    ({ theme }) => css`
        display: block;
        align-items: center;
        margin-bottom: ${theme.space.xxl};
    `,
);

const InputIcon = styled(Box)(
    ({ theme }) => css`
        margin-top: ${theme.space.xl3};
    `,
);

const SubTitleInput = styled(Text)(
    ({ theme }) => css`
        font-size: ${theme.fontSizes.fsm};
        color: ${theme.colors.Dark};
        padding-bottom: ${theme.space.md};
    `,
);

const InputsForm = styled(Form)(
    ({ theme }) => css`
        min-width: 300px;
        min-height: 10px;
        width: 100%;
        align-items: center;
        display: flex;
    `,
);

const Inputwhite = styled(Inputs)(
    ({ theme }) => css`
        background:white;
        width: 300px;
        height: 35px;
        border-radius: 6px;
    `,
);



export const INPUTS = () => {
    return (
        <BoxInput variant="Transparent">
            <InputDescription variant="Transparent">
                <InputTitle variant="h2">Input</InputTitle>
                <CaptionInput>
                A basic accessory for obtaining user input is a text field. 
                Inputs should be clearly labeled so it’s obvious to the user what 
                they should enter into the field.
                Inputs can have a placeholder, a default value, a required state, 
                an error state, and a disabled state. 
                </CaptionInput>
            </InputDescription>

            <InputContainer variant="Transparent">
                <InputStyle variant="Transparent">
                    <BoxInputsType variant="Transparent">
                        <SubTitleInput variant="h2">My Text</SubTitleInput>
                        <InputsForm>
                            <Inputwhite/>
                        </InputsForm>
                    </BoxInputsType>

                    <BoxInputsType variant="Transparent">
                        <SubTitleInput variant="h2">Interaction</SubTitleInput>
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
            </InputContainer>

            <InputIcon variant="Transparent">
                <InputDescription variant="Transparent">
                    <InputTitle variant="h2">Input Icon</InputTitle>
                    <CaptionInput>
                    An icon can be provided to specify to the user what action to take.
                    They can be used to help with formatting or show contextual indicators 
                    of the content we're asking for.
                    </CaptionInput>
                </InputDescription>

                <InputContainer variant="Transparent">
                    <InputStyleIcon variant="Transparent">
                        <BoxInputsType variant="Tranparent">
                            <SubTitleInput variant="h2"> My Text </SubTitleInput>
                            <InputsForm>
                                <Inputwhite/>
                                <Icons name="Search" variant="Outline" />
                            </InputsForm>
                        </BoxInputsType>

                        <BoxInputsType variant="Tranparent">
                            <SubTitleInput variant="h2"> Interaction </SubTitleInput>
                            <InputsForm>
                                <Inputs variant="Interaction" />
                                <Icons name="Search" variant="Outline" />
                            </InputsForm>
                        </BoxInputsType>

                        <BoxInputsType variant="Transparent">
                            <SubTitleInput variant="h2"> Done </SubTitleInput>
                            <InputsForm>
                                <Inputs variant="Done" />
                                <Icons name="Search" variant="Active" />
                            </InputsForm>
                        </BoxInputsType>

                        <BoxInputsType variant="Transparent">
                            <SubTitleInput variant="h2"> Warning </SubTitleInput>
                            <InputsForm>
                                <Inputs variant="Warning" />
                                <Icons name="Search" variant="Outline" />
                            </InputsForm>
                        </BoxInputsType>

                        <BoxInputsType variant="Transparent">
                            <SubTitleInput variant="h2"> Error</SubTitleInput>
                            <InputsForm>
                                <Inputs variant="Error" />
                                <Icons name="Search" variant="Outline" />
                            </InputsForm>
                        </BoxInputsType>
                    </InputStyleIcon>
                </InputContainer>
            </InputIcon>
        </BoxInput>
    );
};
