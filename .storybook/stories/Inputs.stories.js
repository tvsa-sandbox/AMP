import React, { Fragment } from "react";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import { Form, Title, Label, Box, Inputs, Icons } from "accessories";

export default {
    decorators: [withKnobs],
    title: "Desing System/Atoms/Inputs",
};

export const INPUTS = () => {
    return (
        <div>
            <Title variant="h2">Inputs</Title>
            <Box variant="Space">
                <Label>MyText</Label>
                <Form>
                    <Inputs />
                </Form>
            </Box>

            <Box variant="Space">
                <Label>Done</Label>
                <Form>
                    <Inputs variant="Done" />
                </Form>
            </Box>

            <Box variant="Space">
                <Label>Warning</Label>
                <Form>
                    <Inputs variant="Warning" />
                </Form>
            </Box>

            <Box variant="Space">
                <Label>Error</Label>
                <Form>
                    <Inputs variant="Error" />
                </Form>
            </Box>
        </div>
    );
};

export const INPUTICON = () => (
    <div>
        <Title variant="h2">Inputs Icons</Title>

        <Box variant="Space">
            <Label>Error</Label>
            <Form>
                <Inputs variant="Error" />
                <Icons name="ArrowRight" variant="Outline" />
            </Form>
        </Box>

        <Box variant="Space">
            <Label>MyText</Label>
            <Form>
                <Inputs variant="Done" />
                <Icons name="ArrowRight" variant="Outline" />
            </Form>
        </Box>

        <Box variant="Space">
            <Label>MyText</Label>
            <Form>
                <Inputs variant="Warning" />
                <Icons name="ArrowRight" variant="Outline" />
            </Form>
        </Box>

        <Box variant="Space">
            <Label>MyText</Label>
            <Form>
                <Inputs variant="Error" />
                <Icons name="ArrowRight" variant="Outline" />
            </Form>
        </Box>
    </div>
);
