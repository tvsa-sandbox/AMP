import React, { Fragment } from "react";
import { withKnobs } from "@storybook/addon-knobs";

import { SocialModal } from "../../lib/items";

import social from "../../lib/items/SocialBox/social.json";

export default {
    decorators: [withKnobs],
    title: "Desing System/Items/SocialModal",
};

export const SOCIALMODAL = () => {
    return (
        <Fragment>
            <SocialModal active closebtn={false} social={social} />
        </Fragment>
    );
};
