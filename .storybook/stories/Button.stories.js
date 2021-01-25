import React from "react";
import { Button } from "accessories";

export default {
    title: "Desing System/Atoms/Buttons",
    decorators: [
        Story => (
            <div style={{ margin: "3em" }}>
                <h2>Button</h2>
                <Story />
            </div>
        ),
    ],
};

const Template = args => <Button {...args} />;

export const SOLID = args => <Button {...args} />;

SOLID.args = {
    children: "Click Me!",
    variant: "Solid",
    disabled: false,
    icon: "",
    iconcolor: "",
};

export const OUTLINE = args => <Button {...args} />;

OUTLINE.args = {
    children: "Click Me!",
    variant: "Outline",
    disabled: false,
    icon: "",
    iconcolor: "",
};

export const ICONBUTTON = args => <Button {...args} />;

ICONBUTTON.args = {
    children: "",
    variant: "Solid",
    disabled: false,
    icon: "Search",
    iconcolor: "",
};

export const DOUBLEBUTTON = args => <Button {...args} />;

DOUBLEBUTTON.args = {
    children: "Click Me!",
    variant: "Solid",
    disabled: false,
    icon: "Search",
    iconcolor: "",
};

Template.argTypes = {
    children: { control: "text" },
    variant: {
        description: "Variantes",
        control: {
            type: "select",
            options: ["Solid", "Outline", "Active", "Inactive", "Transparent"],
        },
    },
    disabled: { control: "boolean" },
    icon: { control: "text" },
    iconcolor: { control: "text" },
};
