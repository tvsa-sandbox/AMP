import React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";

import RelatedContent from "../../lib/widgets/RelatedContent";

export default {
    decorators: [withKnobs],
    title: "Desing System/enhancement/RelatedContent",
};

export const RELATEDCONTENT = () => {
    const props = () => ({
        title: text("Titulo", "Titulo de test"),
    });
    return <RelatedContent {...props} />;
};
