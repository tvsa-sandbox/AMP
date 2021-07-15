import React from "react";
import { Title, Box } from "accessories";

import ItemMost from "../../lib/items/ItemMost";

export default {
    title: "Desing System/Items/ItemMost",
};

export const ITEMMOST = () => {
    return (
        <div>
            <Title variant="h2">ItemMost</Title>
            <Box variant="Space">
                <ItemMost />
            </Box>
        </div>
    );
};
