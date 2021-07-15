import React from "react";
import { Title } from "accessories";

import SocialBox from "../../lib/items/SocialBox";
import social from "../../lib/items/SocialBox/social.json";

export default {
    title: "Desing System/Items/SocialBox",
};

export const SOCIALBOX = args => {
    return (
        <div>
            <Title variant="h2">SocialBox</Title>
            <SocialBox items={social} />
        </div>
    );
};
