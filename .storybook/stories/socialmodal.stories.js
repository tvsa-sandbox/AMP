import React, { Fragment } from "react";

import { SocialModal } from "../../lib/items";

import social from "../../lib/items/SocialBox/social.json";

export default {
    title: "Desing System/Items/SocialModal",
};

export const SOCIALMODAL = () => {
    return (
        <Fragment>
            <SocialModal active closebtn={false} social={social} />
        </Fragment>
    );
};
