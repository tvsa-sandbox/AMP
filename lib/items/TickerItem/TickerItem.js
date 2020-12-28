import React from "react";
import PropTypes from "prop-types";
import {
    TickerItemStyles,
    TickerItemTitleStyles,
    TickerItemImageStyles,
    TickerItemBoxStyles,
    TickerItemDateStyles,
    TickerItemMoreStyles,
    TickerItemTimeStyles,
    TickerItemTeamStyles,
    TimeBoxStyles,
    ItemCalienteBoxStyles,
    ItemCalienteImageStyles,
    TickerItemContainer,
    TickerItemScoreStyles,
} from "./styles";
import { Image, Box } from "../../accessories";

const TickerItem = props => {
    const { date, time, team1, team2, score1, score2, src, img, more } = props;
    return (
        <TickerItemStyles {...props}>
            <ItemCalienteBoxStyles variant="Flex">
                <Image ratio="16x9" img={img} />
            </ItemCalienteBoxStyles>
            <TickerItemContainer>
                <TickerItemTeamStyles variant="Transparent">
                    <TickerItemBoxStyles variant="Flex">
                        <Box variant="Flex">
                            <TickerItemImageStyles>
                                <Image ratio="aspect1x1" src={src} />
                            </TickerItemImageStyles>
                            <TickerItemTitleStyles variant="h3">{team1}</TickerItemTitleStyles>
                        </Box>
                        <TickerItemScoreStyles variant="h3">{score1}</TickerItemScoreStyles>
                    </TickerItemBoxStyles>
                    <TickerItemBoxStyles variant="Flex">
                        <Box variant="Flex">
                            <TickerItemImageStyles>
                                <Image ratio="aspect1x1" src={src} />
                            </TickerItemImageStyles>
                            <TickerItemTitleStyles variant="h3">{team2}</TickerItemTitleStyles>
                        </Box>
                        <TickerItemScoreStyles variant="h3">{score2}</TickerItemScoreStyles>
                    </TickerItemBoxStyles>
                </TickerItemTeamStyles>
                <TimeBoxStyles>
                    <TickerItemTimeStyles>{time}</TickerItemTimeStyles>
                    <TickerItemDateStyles>{date}</TickerItemDateStyles>
                    <TickerItemMoreStyles variant="Transparent">{more}</TickerItemMoreStyles>
                </TimeBoxStyles>
            </TickerItemContainer>
        </TickerItemStyles>
    );
};

TickerItem.propTypes = {
    src: PropTypes.shape({}),
    img: PropTypes.shape({}),
    team1: PropTypes.string,
    team2: PropTypes.string,
    time: PropTypes.string,
    date: PropTypes.string,
    more: PropTypes.string,
    score1: PropTypes.string,
    score2: PropTypes.string,
};

TickerItem.defaultProps = {
    src: {},
    img: {},
    date: "mar 20 oct",
    team1: "Paris Saint-Germain",
    team2: "Burussia Monchengladbach",
    time: "19:45",
    more: "Ver Más",
    score1: "3",
    score2: "2",
};

export default TickerItem;
