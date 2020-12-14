import React from "react";
import PropTypes from "prop-types";
import {
    MatchItemStyles,
    MatchItemTitleStyles,
    MatchItemImageStyles,
    MatchItemTimeStyles,
    MatchItemTeamStyles,
} from "./styles";
import { Box, Image } from "../../accessories";

const MatchItem = props => {
    const { team1, team2, time, src } = props;
    return (
        <MatchItemStyles {...props}>
            <MatchItemTeamStyles variant="Transparent">
                <Box variant="Flex">
                    <MatchItemImageStyles>
                        <Image ratio="aspect1x1" src={src} />
                    </MatchItemImageStyles>
                    <MatchItemTitleStyles variant="h3">{team1}</MatchItemTitleStyles>
                </Box>
                <Box variant="Flex">
                    <MatchItemImageStyles>
                        <Image ratio="aspect1x1" src={src} />
                    </MatchItemImageStyles>
                    <MatchItemTitleStyles variant="h3">{team2}</MatchItemTitleStyles>
                </Box>
            </MatchItemTeamStyles>
            <MatchItemTimeStyles>{time}</MatchItemTimeStyles>
        </MatchItemStyles>
    );
};

MatchItem.propTypes = {
    src: PropTypes.shape({}),
    team1: PropTypes.string,
    team2: PropTypes.string,
    time: PropTypes.string,
};

MatchItem.defaultProps = {
    src: {},
    team1: "Equipo A",
    team2: "Equipo B",
    time: "19:35",
};

export default MatchItem;
