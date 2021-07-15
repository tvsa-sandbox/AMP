import React from "react";
import { Title, Box } from "accessories";

import EmailItem from "../../lib/items/EmailItem";

export default {
    title: "Desing System/Login/EmailItem",
};

export const EMAILITEM = () => {
    return (
        <div>
            <Title variant="h2">EmailItem</Title>
            <Box variant="Transparent">
                <EmailItem />
            </Box>
        </div>
    );
};
