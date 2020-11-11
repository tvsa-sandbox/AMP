import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { Video } from "../../lib/contentTypes";

export default {
    decorators: [withKnobs],
    title: "Desing System/Template/Video",
};

export const VIDEO = () => {
    return <Video />;
};
