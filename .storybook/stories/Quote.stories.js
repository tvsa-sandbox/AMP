import React from "react";
import { Title } from "accessories";
import Quote from "../../lib/widgets/Quote";

export default {
    title: "Desing System/enhancement/Quote",
    component: Quote,
};

export const QUOTE = () => {
    return (
        <div>
            <Title variant="h2">Enhancement Quote</Title>
            <Quote />
        </div>
    );
};
