import React from "react";
import { Title } from "accessories";

import MostViewed from "../../lib/widgets/MostViewed";

export default {
    title: "Desing System/Widgets/MostViewed",
};

export const MOSTVIEWED = () => {
    return (
        <div>
            <Title variant="h2">MostViewed</Title>
            <MostViewed />
        </div>
    );
};
