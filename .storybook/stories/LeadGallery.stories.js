import React from "react";
import Utils from "@televisadigital/nxtv-utilities";
import { Title } from "accessories";

import LeadGallery from "../../lib/widgets/LeadGallery";

import Mock from "./imageMock.json";
import dataGallery from "../../lib/mocks/Mockup.json";

export default {
    title: "Desing System/Leads/LeadGallery",
};

export const LEADGALLERY = args => {
    const { aspect = "aspect4x3", bsp = "medium" } = args;
    const SOURCES = [
        {
            aspect,
            query: "(min-width: 0px)",
            size: bsp,
        },
    ];
    const IMG = Utils.getSources(Mock.renditions, SOURCES);
    const SRC = {
        desktop: {},
        mobile: IMG[0],
    };

    return (
        <div>
            <Title variant="h2">Lead Gallery</Title>
            <LeadGallery src={SRC} items={dataGallery.slides} isAmp={false} />
        </div>
    );
};
