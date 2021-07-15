import React from "react";
import { Title, Box } from "accessories";

import SignupItem from "../../lib/items/SignupItem";

export default {
    title: "Desing System/Login/SignupItem",
};

export const SIGNUPITEM = () => {
    return (
        <div>
            <Title variant="h2">SignupItem</Title>
            <Box variant="Transparent">
                <SignupItem />
            </Box>
        </div>
    );
};
