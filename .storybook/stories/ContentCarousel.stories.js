import React, { Fragment } from "react";
import { withKnobs, text } from "@storybook/addon-knobs";
import Utils from "@televisadigital/nxtv-utilities";
import { ItemCarousel } from "items";
import { ContentCarousel } from "widgets";
import { Title, Box } from "accessories";
import { ContentCarouselThumbStyles } from "../../lib/widgets/ContentCarousel/styles";
export default {
    decorators: [withKnobs],
    title: "Desing System/Widgets/ContentCarousel",
};
import Mock from "./imageMock.json";

export const CONTENTCAROUSEL = args => {
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
            <Title variant="h2">ContentCarousel </Title>
            <ContentCarousel>
                <ContentCarouselThumbStyles>
                    <ItemCarousel ratio="aspect16x9" image={SRC} />
                </ContentCarouselThumbStyles>
                <ContentCarouselThumbStyles>
                    <ItemCarousel ratio="aspect16x9" image={SRC} />
                </ContentCarouselThumbStyles>
                <ContentCarouselThumbStyles>
                    <ItemCarousel ratio="aspect16x9" image={SRC} />
                </ContentCarouselThumbStyles>
                <ContentCarouselThumbStyles>
                    <ItemCarousel ratio="aspect16x9" image={SRC} />
                </ContentCarouselThumbStyles>
                <ContentCarouselThumbStyles>
                    <ItemCarousel ratio="aspect16x9" image={SRC} />
                </ContentCarouselThumbStyles>
            </ContentCarousel>
        </div>
    );
};