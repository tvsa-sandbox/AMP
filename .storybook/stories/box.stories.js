import React from "react";
import styled, { css } from "styled-components";
import { withKnobs } from "@storybook/addon-knobs";

import { Title, Box, Text } from "accessories";

export default {
    decorators: [withKnobs],
    title: "Desing System/Atoms/Box",
};

const BoxContainer = styled(Box)(
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

const BoxDescription = styled(Box)(
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

const BoxTitle = styled(Title)(
    ({ theme }) => css`
        font-size: ${theme.fontSizes.fxl2};
        color: ${theme.colors.Dark};
        padding-left: ${theme.space.lg};
        padding-right: ${theme.space.lg};
        padding-bottom: ${theme.space.lg};
    `,
);

const BoxCaption = styled(Text)(
    ({ theme }) => css`
        padding-left: ${theme.space.lg};
        padding-right: ${theme.space.lg};
        font-size: ${theme.fontSizes.fsm};
        color: ${theme.colors.Dark};
        line-height: ${theme.lineHeights.llg};
    `,
);

const BoxContent = styled(Box)(
    ({ theme }) => css`
        display: block;
        width: 100%;
        padding-left: ${theme.space.lg};
        @media (min-width: ${theme.breakpoints.xl}) {
            max-width: 1024px;
        }
    `,
);

const BoxType = styled(Box)(
    ({ theme }) => css`
        display: block;
        width: 100%;
        max-width: 200px;
        height: 100px;
        background-color: ${theme.colors.Dark};
        margin-left: 0px;
        margin-bottom: ${theme.space.xxl};
        @media (min-width: ${theme.breakpoints.xl}) {
            max-width: 600px;
        }
    `,
);

const BoxTransparent = styled(Box)(
    ({ theme }) => css`
        display: block;
        width: 100%;
        max-width: 200px;
        height: 100px;
        border: 1px #cccccc solid;
    `,
);

const SubTitleBox = styled(Text)(
    ({ theme }) => css`
        font-size: ${theme.fontSizes.fmd};
        color: ${theme.colors.Light};
        padding: ${theme.space.lg};
    `,
);

const SubTitleTransparent = styled(Text)(
    ({ theme }) => css`
        font-size: ${theme.fontSizes.fmd};
        color: ${theme.colors.Dark};
        padding: ${theme.space.lg};
    `,
);
export const BOX = () => {
    return (
        <BoxContainer variant="Transparent">
            <BoxDescription variant="Transparent">
                <BoxTitle variant="h2">Box</BoxTitle>
                <BoxCaption>
                    The Box is an element, which can be modified by yourself as you need.
                </BoxCaption>
            </BoxDescription>
            <BoxContent variant="Transparent">
                <BoxType variant="Solid">
                    <SubTitleBox>Solid</SubTitleBox>
                </BoxType>

                <BoxType variant="Space">
                    <SubTitleBox>Space</SubTitleBox>
                </BoxType>

                <BoxTransparent variant="Transparent">
                    <SubTitleTransparent>Transparent</SubTitleTransparent>
                </BoxTransparent>

                <Box variant="Flex">
                    <BoxType variant="Space">
                        <SubTitleBox>Flex</SubTitleBox>
                    </BoxType>
                    <BoxType variant="Space">
                        <SubTitleBox>Flex</SubTitleBox>
                    </BoxType>
                </Box>
            </BoxContent>
        </BoxContainer>
    );
};
