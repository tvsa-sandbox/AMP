import React, { useContext, Fragment } from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "styled-components";
import Box from "../../accessories/Box";
import {
    TabsMatchStyles,
    TabsMatchContainerStyles,
    TabsMatchButtonStyles,
    TabsMatchButtonContainerStyles,
    TabsMatchButtonActiveStyles,
} from "../TabsMatch/styles";

import {
    StandingStyles,
    StandingBoxHeader,
} from "../Standing/styles";

import {
    RankingPlayerHeaderTitle,
    RankingPlayerHeaderSwitch,
    RankingPlayerBoxData,
    RankingPlayerBox,
    RankingPlayerPoints,
    RankingPlayerItemName,
    RankingPlayerItemNumber,
    RankingPlayerItemTeam,
    RankingPlayerItemData,
    RankingPlayerBoxSpace,
    RankingPlayerBoxContent,
    RankingPlayerContainer,
} from "./styles";

import {
    StatisticsItemTopTeam,
} from "../../items/StatisticsItem/styles";

const RankingPlayer = props => {
    const { title, sections, players } = props;
    const themeContext = useContext(ThemeContext);
    const ui = themeContext.ui.name;
    return (
        <StandingStyles>
            <StandingBoxHeader>
                <RankingPlayerHeaderTitle variant="h3">{title}</RankingPlayerHeaderTitle>
                <RankingPlayerHeaderSwitch variant="Transparent">
                    <TabsMatchStyles>
                        <TabsMatchContainerStyles variant="Transparent">
                            <TabsMatchButtonContainerStyles>
                                <TabsMatchButtonActiveStyles href="/" variant="Solid" color={ui === "tudn" ? "Light" : null}>
                                    Goles
                                </TabsMatchButtonActiveStyles>
                            </TabsMatchButtonContainerStyles>
                            {sections.map(section => {
                                return (
                                    <Fragment key={section.id}>
                                        <TabsMatchButtonContainerStyles>
                                            <TabsMatchButtonStyles href="/" variant="Outline">
                                                {section.title}
                                            </TabsMatchButtonStyles>
                                        </TabsMatchButtonContainerStyles>
                                    </Fragment >
                                );
                            })}
                        </TabsMatchContainerStyles>
                    </TabsMatchStyles>
                </RankingPlayerHeaderSwitch>
            </StandingBoxHeader>
            <RankingPlayerBoxData variant="Transparent">
                <RankingPlayerBox>
                    <StatisticsItemTopTeam>
                        App
                    </StatisticsItemTopTeam>
                </RankingPlayerBox>
                <RankingPlayerBox>
                    <StatisticsItemTopTeam>
                        Goles
                    </StatisticsItemTopTeam>
                </RankingPlayerBox>
            </RankingPlayerBoxData >
            {players.map(player => {
                return (
                    <Fragment key={player.id}>
                        <RankingPlayerBoxContent>
                            <RankingPlayerContainer variant="Transparent">
                                <RankingPlayerItemNumber>{player.position}</RankingPlayerItemNumber>
                                <Box variant="Transparent">
                                    <RankingPlayerItemName>{player.player}</RankingPlayerItemName>
                                    <RankingPlayerItemTeam>{player.team}</RankingPlayerItemTeam>
                                </Box>
                            </RankingPlayerContainer>
                            <RankingPlayerPoints variant="Flex">
                                <RankingPlayerBoxSpace variant="Transparent">
                                    < RankingPlayerItemData>{player.app}</ RankingPlayerItemData>
                                </RankingPlayerBoxSpace>
                                <RankingPlayerBoxSpace variant="Transparent">
                                    < RankingPlayerItemData>{player.goles}</ RankingPlayerItemData>
                                </RankingPlayerBoxSpace>
                            </RankingPlayerPoints>
                        </RankingPlayerBoxContent>
                    </Fragment >
                );
            })}
        </StandingStyles>
    )
};

RankingPlayer.propTypes = {
    title: PropTypes.string,
};

RankingPlayer.defaultProps = {
    title: "Estadísticas por Jugador",
};

export default RankingPlayer;
