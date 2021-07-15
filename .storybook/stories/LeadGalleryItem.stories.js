import React from "react";
import Utils from "@televisadigital/nxtv-utilities";
import { Title } from "accessories";

import LeadGalleryItem from "../../lib/items/LeadGalleryItem";

import Mock from "./imageMock.json";

export default {
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

    return (
        <div>
            <Title variant="h2">Lead Image Item</Title>
            <LeadGalleryItem src={SRC} {...args} />
        </div>
    );
};
LEADGALLERYITEM.args = {
    title: "Titulo de test de imagen",
    counter: "1/1",
    credit: "Fuente: Televisa News",
};
LEADGALLERYITEM.argTypes = {
    title: { control: "text" },
    counter: { control: "text" },
    credit: { control: "text" },
};
