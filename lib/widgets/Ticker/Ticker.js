import React, { useContext } from "react";
import PropTypes from "prop-types";
import { TickerStyles, TickerThumb } from "./styles";
import { Box, Carousel } from "../../accessories";
import { TickerItem } from "../../items";
import { LeagueCarousel } from "..";

const Ticker = props => {
    const { src, ratio, items } = props;
    return (
        <TickerStyles {...props}>
            <Box variant="Transparent">
                <LeagueCarousel />
            </Box>
            <Box variant="Transparent">
                <Carousel arrow="Back" arrowcolor="black" arrowsize="40">
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
        </TickerStyles>
    );
};

Ticker.propTypes = {
    src: PropTypes.shape({}),
    ratio: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({})),
};

Ticker.defaultProps = {
    src: {},
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
