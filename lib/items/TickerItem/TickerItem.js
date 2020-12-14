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
} from "./styles";
import { Image } from "../../accessories";

const TickerItem = props => {
    const { date, time, team1, team2, src, text } = props;
    return (
        <TickerItemStyles {...props}>
            <TickerItemTeamStyles variant="Transparent">
                <TickerItemBoxStyles variant="Flex">
                    <TickerItemImageStyles>
                        <Image ratio="aspect1x1" src={src} />
                    </TickerItemImageStyles>
                    <TickerItemTitleStyles variant="h3">{team1}</TickerItemTitleStyles>
                </TickerItemBoxStyles>
                <TickerItemBoxStyles variant="Flex">
                    <TickerItemImageStyles>
                        <Image ratio="aspect1x1" src={src} />
                    </TickerItemImageStyles>
                    <TickerItemTitleStyles variant="h3">{team2}</TickerItemTitleStyles>
                </TickerItemBoxStyles>
            </TickerItemTeamStyles>
            <TimeBoxStyles>
                <TickerItemTimeStyles>{time}</TickerItemTimeStyles>
                <TickerItemDateStyles>{date}</TickerItemDateStyles>
                <TickerItemMoreStyles variant="Transparent">{text}</TickerItemMoreStyles>
            </TimeBoxStyles>
        </TickerItemStyles>
    );
};

TickerItem.propTypes = {
    src: PropTypes.shape({}),
    team1: PropTypes.string,
    team2: PropTypes.string,
    time: PropTypes.string,
    date: PropTypes.string,
    text: PropTypes.string,
};

TickerItem.defaultProps = {
    src: {},
    date: "mar 20 oct",
    team1: "Pumas",
    team2: "Santos",
    time: "19:45",
    text: "Ver Más",
};

export default TickerItem;
