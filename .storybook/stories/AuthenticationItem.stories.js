import React from "react";
import { Title, Box } from "accessories";

import AuthenticationItem from "../../lib/items/AuthenticationItem";

export default {
    title: "Desing System/Login/AuthenticationItem",
};

export const AUTHENTICATIONITEM = () => {
    return (
        <div>
            <Title variant="h2">AuthenticationItem</Title>
            <Box variant="Transparent">
                <AuthenticationItem />
            </Box>
        </div>
    );
};
