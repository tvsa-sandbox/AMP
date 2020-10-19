import React, { useContext } from "react";
import PropTypes from "prop-types";
import TickerStyles from "./styles";
import { Box, Multicontent } from "../../accessories";
import LeagueCarousel from "../LeagueCarousel";
const Ticker = ({ children, isAmp }) => {
    return (
        <TickerStyles>
            <Box variant="Transparent">
                <LeagueCarousel />
            </Box>
            <Box variant="Transparent">
                <Multicontent>{children}</Multicontent>
            </Box>
        </TickerStyles>
    );
};

export default Ticker;
