import React from "react";
import { Title, Box } from "accessories";

import LoginItem from "../../lib/items/LoginItem";

export default {
    title: "Desing System/Login/LoginItem",
};

export const LOGINITEM = () => {
    return (
        <div>
            <Title variant="h2">LoginItem</Title>
            <Box variant="Transparent">
                <LoginItem />
            </Box>
        </div>
    );
};
