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
} from "../Standing/styles";

import {
    RankingPlayerHeaderTitle,
    RankingPlayerHeaderSwitch,
    RankingPlayerPoints,
    RankingPlayerItemName,
    RankingPlayerItemNumber,
    RankingPlayerItemData,
    RankingPlayerBoxSpace,
    RankingPlayerBoxContent,
    RankingPlayerContainer,
} from "../RankingPlayer/styles";

import { RankingTeamBoxHeader } from "./styles";

const RankingTeam = props => {
    const { title, sections, teams } = props;
    const themeContext = useContext(ThemeContext);
    const ui = themeContext.ui.name;
    return (
        <StandingStyles>
            <RankingTeamBoxHeader>
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
            </RankingTeamBoxHeader>
            {teams.map(team => {
                return (
                    <Fragment key={team.id}>
                        <RankingPlayerBoxContent>
                            <RankingPlayerContainer variant="Transparent">
                                <RankingPlayerItemNumber>{team.position}</RankingPlayerItemNumber>
                                <Box variant="Transparent">
                                    <RankingPlayerItemName>{team.team}</RankingPlayerItemName>
                                </Box>
                            </RankingPlayerContainer>
                            <RankingPlayerPoints variant="Flex">
                                <RankingPlayerBoxSpace variant="Transparent">
                                    < RankingPlayerItemData>{team.number}</ RankingPlayerItemData>
                                </RankingPlayerBoxSpace>
                            </RankingPlayerPoints>
                        </RankingPlayerBoxContent>
                    </Fragment >
                );
            })}
        </StandingStyles>
    )
};

RankingTeam.propTypes = {
    title: PropTypes.string,
};

RankingTeam.defaultProps = {
    title: "Estadísticas por Equipo",
};

export default RankingTeam;
