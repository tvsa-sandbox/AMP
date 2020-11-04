import React, { Fragment } from "react";
import { withKnobs, text } from "@storybook/addon-knobs";
import Utils from "@televisadigital/nxtv-utilities";
import { EpisodeItem } from "items";
import { EpisodeCarousel } from "widgets";
import Title from "accessories/Title";
import { EpisodeCarouselThumb } from "../../lib/widgets/EpisodeCarousel/styles";
export default {
    decorators: [withKnobs],
    title: "Desing System/Widgets/EpisodeCarousel",
};
import Mock from "./imageMock.json";
import { Carousel } from "../../lib/accessories";

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
            <EpisodeCarousel>
                <Carousel arrow="Back">
                    <EpisodeCarouselThumb>
                        <EpisodeItem ratio="aspect16x9" image={SRC} />
                    </EpisodeCarouselThumb>
                    <EpisodeCarouselThumb>
                        <EpisodeItem ratio="aspect16x9" image={SRC} />
                    </EpisodeCarouselThumb>
                    <EpisodeCarouselThumb>
                        <EpisodeItem ratio="aspect16x9" image={SRC} />
                    </EpisodeCarouselThumb>
                    <EpisodeCarouselThumb>
                        <EpisodeItem ratio="aspect16x9" image={SRC} />
                    </EpisodeCarouselThumb>
                    <EpisodeCarouselThumb>
                        <EpisodeItem ratio="aspect16x9" image={SRC} />
                    </EpisodeCarouselThumb>
                    <EpisodeCarouselThumb>
                        <EpisodeItem ratio="aspect16x9" image={SRC} />
                    </EpisodeCarouselThumb>
                    <EpisodeCarouselThumb>
                        <EpisodeItem ratio="aspect16x9" image={SRC} />
                    </EpisodeCarouselThumb>
                    <EpisodeCarouselThumb>
                        <EpisodeItem ratio="aspect16x9" image={SRC} />
                    </EpisodeCarouselThumb>
                </Carousel>
            </EpisodeCarousel>
        </div>
    );
};
