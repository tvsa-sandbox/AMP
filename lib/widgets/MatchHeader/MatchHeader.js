import React, { Fragment } from "react";
import PropTypes from "prop-types";
import {
    MatchHeaderStyles,
    TextStyles,
    BoxGrid,
    BoxTitle,
    BoxHomeGrid,
    BoxAwayGrid,
    BoxMatchHeader,
    BoxMatchHeaderTime,
    HomeTitle,
    HomeGoals,
    PlayerName,
    AwayTitle,
    AwayGoals,
    MatchHeaderNumber,
    HomeNumber,
    AwayNumber,
    SeparatorStyles,
    TimeStyles,
    MatchHeaderBoxStyles,
} from "./styles";
import { Box, Image } from "../../accessories";

const MatchHeader = props => {
    const { ratio, src, divider, matchs } = props;
    return (
        <MatchHeaderStyles>
            {matchs.map(match => {
                return (
                    <Fragment key={match.id}>
                        <MatchHeaderBoxStyles>
                            <BoxTitle variant="Transparent">
                                <TextStyles>{match.league}</TextStyles>
                            </BoxTitle>
                            <BoxGrid variant="Transparent">
                                <Box variant="Transparent">
                                    <BoxHomeGrid variant="Transparent">
                                        <HomeTitle variant="h3">{match.home}</HomeTitle>
                                        <Image ratio={ratio} src={src} />
                                    </BoxHomeGrid>
                                    <HomeGoals variant="Transparent">
                                        {match.localplayers.map((goal, index) => {
                                            const KEY = `${goal.player}-${index}`;
                                            return (
                                                <PlayerName key={KEY}>
                                                    {goal.player} {goal.time}
                                                </PlayerName>
                                            );
                                        })}
                                    </HomeGoals>
                                </Box>
                                <BoxMatchHeaderTime variant="Transparent">
                                    <MatchHeaderNumber variant="Transparent">
                                        <HomeNumber>{match.goalshome}</HomeNumber>
                                        <SeparatorStyles>{divider}</SeparatorStyles>
                                        <AwayNumber>{match.goalsaway}</AwayNumber>
                                    </MatchHeaderNumber>
                                    <BoxMatchHeader variant="Transparent">
                                        <TimeStyles>{match.part}</TimeStyles>
                                    </BoxMatchHeader>
                                </BoxMatchHeaderTime>
                                <Box variant="Transparent">
                                    <BoxAwayGrid variant="Transparent">
                                        <Image ratio={ratio} src={src} />
                                        <AwayTitle variant="h3"> {match.away}</AwayTitle>
                                    </BoxAwayGrid>
                                    <AwayGoals variant="Transparent">
                                        {match.awayplayers.map((goal, index) => {
                                            const KEY = `${goal.player}-${index}`;
                                            return (
                                                <PlayerName key={KEY}>
                                                    {goal.player} {goal.time}
                                                </PlayerName>
                                            );
                                        })}
                                    </AwayGoals>
                                </Box>
                            </BoxGrid>
                        </MatchHeaderBoxStyles>
                    </Fragment>
                );
            })}
        </MatchHeaderStyles>
    );
};

MatchHeader.propTypes = {
    src: PropTypes.shape({}),
    matchs: PropTypes.arrayOf(PropTypes.shape({})),
    ratio: PropTypes.string,
    divider: PropTypes.string,
};

MatchHeader.defaultProps = {
    divider: ":",
    ratio: "aspect1x1",
    src: {},
    matchs: [],
};

export default MatchHeader;
