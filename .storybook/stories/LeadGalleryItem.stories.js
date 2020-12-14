import React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";
import Utils from "@televisadigital/nxtv-utilities";
import { Title } from "accessories";

import LeadGalleryItem from "../../lib/items/LeadGalleryItem";

import Mock from "./imageMock.json";

export default {
    decorators: [withKnobs],
    title: "Desing System/Items/LeadGalleryItem",
};

export const LEADGALLERYITEM = args => {
    const { aspect = "aspect16x9", bsp = "medium" } = args;
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
    const title = text("Titulo", "Titulo de test de imagen");
    const counter = text("Counter", "1/1");
    const credit = text("Credit", "Fuente: Televisa News");
    return (
        <div>
            <Title variant="h2">Lead Image Item</Title>
            <LeadGalleryItem src={SRC} imgcounter={counter} imgtitle={title} imgcredit={credit} />
        </div>
    );
};
