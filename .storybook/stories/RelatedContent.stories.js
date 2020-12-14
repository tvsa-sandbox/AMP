import React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";
import Utils from "@televisadigital/nxtv-utilities";
import { Title } from "accessories";
import RelatedContent from "../../lib/widgets/RelatedContent";
import Mock from "./imageMock.json";

export default {
    decorators: [withKnobs],
    title: "Desing System/enhancement/RelatedContent",
};

export const RELATEDCONTENT = args => {
    const { aspect = "aspect16x9", bsp = "medium" } = args;
    const SOURCES = [
        {
            aspect,
            query: "(min-width: 0px)",
            size: bsp,
        },
    ];
    const IMG = Utils.getSources(Mock.renditions, SOURCES);
    const src = {
        desktop: {},
        mobile: IMG[0],
    };
    const props = () => ({
        title: text("Titulo", "Titulo de test"),
    });
    return (
        <div>
            <Title variant="h2">RelatedContent</Title>
            <RelatedContent ratio={aspect} src={src} {...props} />
        </div>
    );
};
