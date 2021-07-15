import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Box, Carousel, Image } from "../../accessories";
import {
    StandingItemStyles,
    StandingItemTeam,
    StandingItemLogo,
    StandingItemName,
    StandingItemPosition,
    StandingItemBoxTop,
    StandingItemTopTeam,
} from "../../items/StandingItem/styles";

import {
    StandingStyles,
    StandingBoxHeader,
    StandingHeaderTitle,
    StandingHeaderSwitch,
    StandingSwitchButtonActive,
    StandingSwitchButtonInactive,
    StandingBoxData,
} from "./styles";

import {
    StatisticsItemStyles,
    StatisticsItemNumber,
    StatisticsBoxSpace,
    StatisticsItemTopTeam,
    StatisticsItemBoxTop,
} from "../../items/StatisticsItem/styles";


const Standing = props => {
    const { match, opt1, opt2, SRC, ratio, datas, teams, league } = props;

    return (
        <StandingStyles>
            <StandingBoxHeader>
                <StandingHeaderTitle variant="h3">{match}</StandingHeaderTitle>
                <StandingHeaderSwitch variant="Transparent">
                    <StandingSwitchButtonActive variant="Transparent">{opt1}</StandingSwitchButtonActive>
                    <StandingSwitchButtonInactive variant="Transparent">{opt2}</StandingSwitchButtonInactive>
                </StandingHeaderSwitch>
            </StandingBoxHeader>
            <StandingBoxData variant="Transparent">
                <StandingItemStyles>
                    <StandingItemBoxTop>
                        <StandingItemTopTeam>{league}</StandingItemTopTeam>
                    </StandingItemBoxTop>
                    {teams.map(team => {
                        return (
                            <Fragment key={team.id}>
                                <Box variant="Flex">
                                    <StandingItemTeam>
                                        <StandingItemPosition>{team.number}</StandingItemPosition>
                                        <StandingItemLogo><Image ratio={ratio} src={SRC} /></StandingItemLogo>
                                        <StandingItemName>{team.name}</StandingItemName>
                                    </StandingItemTeam>
                                </Box >
                            </Fragment >
                        );
                    })}
                </StandingItemStyles >
                <StatisticsItemStyles>
                    <Carousel>
                        <Box>
                            <Box variant="Flex">
                                {datas.map(data => {
                                    return (
                                        <Fragment key={data.id}>
                                            <StatisticsItemBoxTop>
                                                <StatisticsItemTopTeam>{data.title}</StatisticsItemTopTeam>
                                            </StatisticsItemBoxTop>
                                        </Fragment>
                                    );
                                })}
                            </Box>
                            <Box>
                                {teams.map(team => {
                                    return (
                                        <Fragment key={team.id}>
                                            <Box variant="Flex">
                                                <StatisticsBoxSpace>
                                                    <StatisticsItemNumber>{team.pos} </StatisticsItemNumber>
                                                </StatisticsBoxSpace>
                                                <StatisticsBoxSpace>
                                                    <StatisticsItemNumber> {team.pts}</StatisticsItemNumber>
                                                </StatisticsBoxSpace>
                                                <StatisticsBoxSpace>
                                                    <StatisticsItemNumber> {team.ply}</StatisticsItemNumber>
                                                </StatisticsBoxSpace>
                                                <StatisticsBoxSpace>
                                                    <StatisticsItemNumber>  {team.win}</StatisticsItemNumber>
                                                </StatisticsBoxSpace>
                                                <StatisticsBoxSpace>
                                                    <StatisticsItemNumber>  {team.drw}</StatisticsItemNumber>
                                                </StatisticsBoxSpace>
                                                <StatisticsBoxSpace>
                                                    <StatisticsItemNumber>  {team.lts} </StatisticsItemNumber>
                                                </StatisticsBoxSpace>
                                                <StatisticsBoxSpace>
                                                    <StatisticsItemNumber> {team.gsc} </StatisticsItemNumber>
                                                </StatisticsBoxSpace>
                                                <StatisticsBoxSpace>
                                                    <StatisticsItemNumber> {team.gcc} </StatisticsItemNumber>
                                                </StatisticsBoxSpace>
                                                <StatisticsBoxSpace>
                                                    <StatisticsItemNumber>   {team.dif}</StatisticsItemNumber>
                                                </StatisticsBoxSpace>
                                            </Box>
                                        </Fragment>
                                    );
                                })}
                            </ Box>
                        </Box>
                    </Carousel>
                </StatisticsItemStyles >
            </StandingBoxData >
        </StandingStyles >
    )
};

Standing.propTypes = {
    league: PropTypes.string,
    match: PropTypes.string,
    opt1: PropTypes.string,
    opt2: PropTypes.string,
    src: PropTypes.shape({}),
    ratio: PropTypes.string,
};

Standing.defaultProps = {
    league: "Bundesliga",
    match: "MATCHDAY",
    opt1: "POSITIONS",
    opt2: "RELEGATION",
    src: {},
    ratio: "aspect1x1",
};

export default Standing;
