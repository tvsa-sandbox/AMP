import React from "react";
import { Title, Box } from "accessories";

import DeleteAccountItem from "../../lib/items/DeleteAccountItem";

export default {
    title: "Desing System/Login/DeleteAccountItem",
};

export const DELETEACCOUNTITEM = () => {
    return (
        <div>
            <Title variant="h2">DeleteAccountItem</Title>
            <Box variant="Transparent">
                <DeleteAccountItem />
            </Box>
        </div>
    );
};
