import React from "react";
import Utils from "@televisadigital/nxtv-utilities";
import { EpisodeItem } from "items";
import { ContentCarousel } from "widgets";
import Title from "accessories/Title";
import { ContentCarouselThumbStyles } from "../../lib/widgets/ContentCarousel/styles";
export default {
    title: "Desing System/Widgets/EpisodeCarousel",
};
import Mock from "./imageMock.json";
import { Carousel } from "../../lib/accessories";
import { ContentCarouselTitleStyles } from "../../lib/widgets/ContentCarousel/styles";

export const EPISODECAROUSEL = args => {
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
            <ContentCarousel title="Una familia de diez">
                <Carousel arrow="Back">
                    <ContentCarouselThumbStyles>
                        <EpisodeItem ratio="aspect16x9" image={SRC} />
                    </ContentCarouselThumbStyles>
                    <ContentCarouselThumbStyles>
                        <EpisodeItem ratio="aspect16x9" image={SRC} />
                    </ContentCarouselThumbStyles>
                    <ContentCarouselThumbStyles>
                        <EpisodeItem ratio="aspect16x9" image={SRC} />
                    </ContentCarouselThumbStyles>
                    <ContentCarouselThumbStyles>
                        <EpisodeItem ratio="aspect16x9" image={SRC} />
                    </ContentCarouselThumbStyles>
                    <ContentCarouselThumbStyles>
                        <EpisodeItem ratio="aspect16x9" image={SRC} />
                    </ContentCarouselThumbStyles>
                    <ContentCarouselThumbStyles>
                        <EpisodeItem ratio="aspect16x9" image={SRC} />
                    </ContentCarouselThumbStyles>
                    <ContentCarouselThumbStyles>
                        <EpisodeItem ratio="aspect16x9" image={SRC} />
                    </ContentCarouselThumbStyles>
                    <ContentCarouselThumbStyles>
                        <EpisodeItem ratio="aspect16x9" image={SRC} />
                    </ContentCarouselThumbStyles>
                </Carousel>
            </ContentCarousel>
        </div>
    );
};
