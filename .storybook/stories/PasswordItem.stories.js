import React from "react";
import { Title, Box } from "accessories";

import PasswordItem from "../../lib/items/PasswordItem";

export default {
    title: "Desing System/Login/PasswordItem",
};

export const PASSWORDITEM = () => {
    return (
        <div>
            <Title variant="h2">PasswordItem</Title>
            <Box variant="Transparent">
                <PasswordItem />
            </Box>
        </div>
    );
};
