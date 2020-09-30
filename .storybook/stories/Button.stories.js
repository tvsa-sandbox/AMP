import React, { Fragment } from "react";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

import { Button, Title, Box, Icons } from "accessories";

export default {
    decorators: [
        withKnobs,
        Story => (
            <div style={{ margin: "5rem 2rem" }}>
                <Story />
            </div>
        ),
    ],
    title: "Desing System/Atoms/Buttons",
};

export const BUTTON = () => {
    const name = text("Name", "Click Me!");
    return (
        <div>
            <Box variant="Space">
                <Box variant="Space" />
                <Button disabled={boolean("Desactivado", false)} aria-label="boton">
                    {name}
                </Button>
            </Box>

            <Box variant="Space">
                <Button
                    variant="Active"
                    disabled={boolean("Desactivado", false)}
                    aria-label="boton"
                >
                    {name}
                </Button>
            </Box>

            <Box variant="Space">
                <Button
                    variant="Outline"
                    disabled={boolean("Desactivado", false)}
                    aria-label="boton"
                >
                    {name}
                </Button>
            </Box>
            <Box variant="Space">
                <Button
                    variant="Transparent"
                    disabled={boolean("Desactivado", false)}
                    aria-label="boton"
                >
                    {name}
                </Button>
            </Box>
        </div>
    );
};

export const BUTTONICON = () => (
    <div>
        <Box variant="Space">
            <Button disabled={boolean("Desactivado", false)} aria-label="boton">
                <Icons name="Instagram" color="#ffff" />
            </Button>
        </Box>

        <Box variant="Space">
            <Button variant="Active" disabled={boolean("Desactivado", false)} aria-label="boton">
                <Icons name="Instagram" variant="Active" />
            </Button>
        </Box>

        <Box variant="Space">
            <Button variant="Outline" disabled={boolean("Desactivado", false)} aria-label="boton">
                <Icons name="Instagram" variant="Outline" />
            </Button>
        </Box>
        <Box variant="Space">
            <Button
                variant="Transparent"
                disabled={boolean("Desactivado", false)}
                aria-label="boton"
            >
                <Icons name="Instagram" variant="Transparent" />
            </Button>
        </Box>
    </div>
);

export const BUTTONDOUBLE = () => {
    const name = text("Name", "Click Me!");
    return (
        <div>
            <Box variant="Space">
                <Button disabled={boolean("Desactivado", false)}>
                    <Icons name="Instagram" color="#ffff" />
                    {name}
                </Button>
            </Box>

            <Box variant="Space">
                <Button variant="Active" disabled={boolean("Desactivado", false)}>
                    <Icons name="Instagram" variant="Active" />
                    {name}
                </Button>
            </Box>

            <Box variant="Space">
                <Button variant="Outline" disabled={boolean("Desactivado", false)}>
                    <Icons name="Instagram" variant="Outline" />
                    {name}
                </Button>
            </Box>

            <Box variant="Space">
                <Button variant="Transparent" disabled={boolean("Desactivado", false)}>
                    <Icons name="Instagram" variant="Transparent" />
                    {name}
                </Button>
            </Box>
        </div>
    );
};
