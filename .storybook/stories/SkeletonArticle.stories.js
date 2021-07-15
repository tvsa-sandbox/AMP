import React from "react";
import { Title } from "accessories";

import SkeletonArticle from "../../lib/widgets/SkeletonArticle";

export default {
    title: "Desing System/Template/SkeletonArticle",
    component: SkeletonArticle,
};

export const SKELETONARTICLE = () => {
    const props = () => ({
        title: text("Titulo", "Titulo de test"),
    });
    return (
        <div>
            <Title variant="h2">Skeleton Article</Title>
            <SkeletonArticle {...props} />
        </div>
    );
};
