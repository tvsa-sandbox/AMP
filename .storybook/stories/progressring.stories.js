import React from "react";
import styled, { css } from "styled-components";
import { withKnobs, text, number, color } from "@storybook/addon-knobs";

import { ProgressRing, Text, Title, Box } from "accessories";

export default {
    decorators: [withKnobs],
    title: "Desing System/Atoms/Progressring",
};

const BoxProgress = styled(Box)(
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

const ProgressContainer = styled(Box)(
    ({ theme }) => css`
        margin-bottom: ${theme.space.xl3};
    `,
);

const ProgressDescription = styled(Box)(
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


const ProgressTitle = styled(Title)(
    ({ theme }) => css`
        font-size: ${theme.fontSizes.fxl2};
        color: ${theme.colors.Dark};
        padding-left: ${theme.space.lg};
        padding-right: ${theme.space.lg};
    `,
);

const CaptionProgress = styled(Text)(
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

const ProgressCircleContainer = styled(Box)(
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

export const PROGRESSRING = () => {
    const progress = number("Progress", 10);
    const radius = number("Radious", 100);
    const stroke = number("Stroke", 15);
    const strokecolor = color("Color", "#ffffff");
    return (
        <BoxProgress variant="Transparent">
            <ProgressContainer variant="Transparent">
                <ProgressDescription variant="Transparent">
                    <ProgressTitle variant="h2">Progress Ring</ProgressTitle>
                    <CaptionProgress>
                        A progress circle is used to visually represent the 
                        completion of a task or operation. Shows how much of 
                        the task has been completed and how much is left.
                    </CaptionProgress>
                </ProgressDescription>
                <ProgressCircleContainer variant="Transparent">
                        <Box
                            variant="Flex"
                            style={{
                                justifyContent: "center",
                                margin: "1em 0",
                                position: "relative",
                                minHeight: "300px",
                            }}
                        >
                            <ProgressRing
                                progress={progress}
                                radius={radius}
                                stroke={stroke}
                                strokecolor={strokecolor}
                            />
                        </Box>
                </ProgressCircleContainer>
            </ProgressContainer>
        </BoxProgress>
        
    );
};
