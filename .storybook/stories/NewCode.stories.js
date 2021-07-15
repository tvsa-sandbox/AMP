import React from "react";
import { Title, Box } from "accessories";

import NewCodeItem from "../../lib/items/NewCodeItem";

export default {
    title: "Desing System/Login/NewCodeItem",
};

export const NEWCODEITEM = () => {
    return (
        <div>
            <Title variant="h2">NewCodeItem</Title>
            <Box variant="Transparent">
                <NewCodeItem />
            </Box>
        </div>
    );
};
