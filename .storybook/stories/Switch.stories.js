import React, { useState } from "react";
import { SwitchButton } from "../../lib/accessories";

export default {
    title: "Desing System/Atoms/SwitchButton",
    component: SwitchButton,
};

export const SWITCHBUTTON = args => {
    const [value, setCheckbox] = useState(true);
    return (
        <SwitchButton
            value={value}
            checked={value}
            onChange={({ target }) => setCheckbox(!value)}
            {...args}
        />
    );
};
SWITCHBUTTON.args = {
    disabled: false,
};
SWITCHBUTTON.argTypes = {
    disabled: { control: "boolean" },
};
