import React, { Fragment } from "react";
import { withKnobs } from "@storybook/addon-knobs";

import { SocialModal } from "../../lib/items";

export default {
    decorators: [withKnobs],
    title: "Desing System/Items/SocialModal",
};

export const SOCIALMODAL = () => {
    return (
        <Fragment>
            <SocialModal active closebtn={false} />
        </Fragment>
    );
};
