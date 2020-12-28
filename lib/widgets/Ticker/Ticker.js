import React from "react";
import PropTypes from "prop-types";
import { TickerStyles, TickerThumb, SponsorCalienteImageStyles, SponsorCaliente } from "./styles";
import { Box, Carousel, Text, Image } from "../../accessories";
import { TickerItem } from "../../items";
import { LeagueCarousel } from "..";

const Ticker = props => {
    const { src, ratio, items, sponsor } = props;
    return (
        <TickerStyles {...props}>
            <Box variant="Transparent">
                <LeagueCarousel />
            </Box>
            <Box variant="Transparent">
                <Carousel arrow="Back" arrowcolor="green" arrowsize="40">
                    {items.map(item => {
                        return (
                            <TickerThumb
                                variant="Transparent "
                                ratio={ratio}
                                src={src}
                                key={item.id}
                            >
                                <TickerItem ratio={ratio} src={src} />
                            </TickerThumb>
                        );
                    })}
                </Carousel>
            </Box>
            <SponsorCaliente variant="Transparent">
                <Text>{sponsor}</Text>
                <SponsorCalienteImageStyles>
                    <Image ratio="aspect16x9" />
                </SponsorCalienteImageStyles>
            </SponsorCaliente>
        </TickerStyles>
    );
};

Ticker.propTypes = {
    src: PropTypes.shape({}),
    ratio: PropTypes.string,
    sponsor: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({})),
};

Ticker.defaultProps = {
    src: {},
    sponsor: "Patrocinado por",
    ratio: "aspect1x1",
    items: [
        {
            id: 0,
        },
        {
            id: 1,
        },
        {
            id: 2,
        },
        {
            id: 3,
        },
        {
            id: 4,
        },
        {
            id: 5,
        },
        {
            id: 6,
        },
        {
            id: 7,
        },
        {
            id: 8,
        },
        {
            id: 9,
        },
        {
            id: 10,
        },
    ],
};

export default Ticker;
