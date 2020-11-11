import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import Utils from "@televisadigital/nxtv-utilities";
import { Carousel, Title } from "../../lib/accessories";
import Mock from "./imageMock.json";
import Ticker from "../../lib/widgets/Ticker";
import { TickerItem } from "items";
import { ContentCarouselThumbStyles } from "../../lib/widgets/ContentCarousel/styles";

export default {
    decorators: [withKnobs],
    title: "Desing System/widgets/Ticker",
};

export const TICKER = args => {
    const { aspect = "aspect4x3", bsp = "medium" } = args;
    const SOURCES = [
        {
            aspect: aspect,
            query: "(min-width: 415px)",
            size: bsp,
        },
        {
            aspect: "aspect3x4",
            query: "(min-width: 0px) and (max-width: 414px)",
            size: "mobile-large",
        },
    ];

    const IMG = Utils.getSources(Mock.renditions, SOURCES);
    const SRC = {
        desktop: {},
        mobile: IMG[0],
    };
    const props = () => ({
        title: text("Titulo", "Titulo de test"),
    });
    return (
        <div>
            <Title variant="h2">Ticker</Title>
            <Ticker>
                <Carousel arrow="Back">
                    <ContentCarouselThumbStyles>
                        <TickerItem ratio="aspect16x9" image={SRC} />
                    </ContentCarouselThumbStyles>
                    <ContentCarouselThumbStyles>
                        <TickerItem ratio="aspect16x9" image={SRC} />
                    </ContentCarouselThumbStyles>
                    <ContentCarouselThumbStyles>
                        <TickerItem ratio="aspect16x9" image={SRC} />
                    </ContentCarouselThumbStyles>
                    <ContentCarouselThumbStyles>
                        <TickerItem ratio="aspect16x9" image={SRC} />
                    </ContentCarouselThumbStyles>
                    <ContentCarouselThumbStyles>
                        <TickerItem ratio="aspect16x9" image={SRC} />
                    </ContentCarouselThumbStyles>
                </Carousel>
            </Ticker>
        </div>
    );
};
