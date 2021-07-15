import React from "react";
import { Title } from "accessories";

import Favorite from "../../lib/widgets/Favorite";
import favorite from "../../lib/widgets/Favorite/favorite.json";

export default {
    title: "Desing System/Widgets/Favorite",
};

export const FAVORITE = () => {
    return (
        <div>
            <Title variant="h2">Favorite</Title>
            <Favorite names={favorite} />
        </div>
    );
};
