import React from "react";
import PropTypes from "prop-types";
import {
    CalendarItemStyles,
    CalendarItemTitleStyles,
    CalendarItemImageStyles,
    CalendarItemBoxStyles,
    CalendarItemDateStyles,
    CalendarItemTimeStyles,
    CalendarItemTeamStyles,
    CalendarItemScoreStyles,
    CalendarItemTimeBoxStyles,
} from "./styles";
import { Image, Box } from "../../accessories";

const CalendarItem = props => {
    const { date, time, team1, team2, score1, score2, src } = props;
    return (
        <CalendarItemStyles>
            <CalendarItemTeamStyles variant="Transparent">
                <CalendarItemBoxStyles variant="Flex">
                    <Box variant="Flex">
                        <CalendarItemImageStyles>
                            <Image ratio="aspect1x1" src={src} />
                        </CalendarItemImageStyles>
                        <CalendarItemTitleStyles variant="h3">{team1}</CalendarItemTitleStyles>
                    </Box>
                    <CalendarItemScoreStyles variant="h3">{score1}</CalendarItemScoreStyles>
                </CalendarItemBoxStyles>
                <CalendarItemBoxStyles variant="Flex">
                    <Box variant="Flex">
                        <CalendarItemImageStyles>
                            <Image ratio="aspect1x1" src={src} />
                        </CalendarItemImageStyles>
                        <CalendarItemTitleStyles variant="h3">{team2}</CalendarItemTitleStyles>
                    </Box>
                    <CalendarItemScoreStyles variant="h3">{score2}</CalendarItemScoreStyles>
                </CalendarItemBoxStyles>
            </CalendarItemTeamStyles>
            <CalendarItemTimeBoxStyles variant="Transparent">
                <CalendarItemTimeStyles>{time}</CalendarItemTimeStyles>
                <CalendarItemDateStyles>{date}</CalendarItemDateStyles>
            </CalendarItemTimeBoxStyles>
        </CalendarItemStyles>
    );
};

CalendarItem.propTypes = {
    src: PropTypes.shape({}),
    img: PropTypes.shape({}),
    team1: PropTypes.string,
    team2: PropTypes.string,
    time: PropTypes.string,
    date: PropTypes.string,
    score1: PropTypes.string,
    score2: PropTypes.string,
};

CalendarItem.defaultProps = {
    src: {},
    img: {},
    date: "mar 20 oct",
    team1: "Paris Saint-Germain",
    team2: "Burussia Monchengladbach",
    time: "2:00pm",
    score1: "3",
    score2: "2",
};

export default CalendarItem;
