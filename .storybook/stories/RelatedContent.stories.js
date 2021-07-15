import React from "react";
import Utils from "@televisadigital/nxtv-utilities";
import { Title } from "accessories";
import RelatedContent from "../../lib/widgets/RelatedContent";
import Mock from "./imageMock.json";

export default {
    title: "Desing System/enhancement/RelatedContent",
    component: RelatedContent,
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

    return (
        <div>
            <Title variant="h2">RelatedContent</Title>
            <RelatedContent ratio={aspect} src={src} />
        </div>
    );
};
