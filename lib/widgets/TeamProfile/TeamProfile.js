import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Box, Image } from "../../accessories";
import {
    TeamItemStyles,
    TeamCaptionStyles,
    TeamThumbnailStyles,
    TeamTitleStyles,
    TeamInfoStyles,
    TeamTextStyles,
} from "../../items/TeamItem/styles";

const TeamProfile = props => {
    const { src, ratio, teams } = props;
    return (
        <Box variant="Transparent">
            {teams.map(team => {
                return (
                    <Fragment key={team.id}>
                        <TeamItemStyles>
                            <TeamThumbnailStyles>
                                <Image ratio="aspect1x1" src={src} />
                            </TeamThumbnailStyles>
                            <TeamCaptionStyles>
                                <TeamTitleStyles variant="h2">{team.team}</TeamTitleStyles>
                                <Box variant="Flex">
                                    <TeamInfoStyles>Justificado:</TeamInfoStyles>
                                    <TeamTextStyles>{team.date}</TeamTextStyles>
                                </Box>
                                <Box variant="Flex">
                                    <TeamInfoStyles>Estadio:</TeamInfoStyles>
                                    <TeamTextStyles>{team.stadium}</TeamTextStyles>
                                </Box>
                                <Box variant="Flex">
                                    <TeamInfoStyles>Capacidad:</TeamInfoStyles>
                                    <TeamTextStyles>{team.persons}</TeamTextStyles>
                                </Box>
                                <Box variant="Flex">
                                    <TeamInfoStyles>DT:</TeamInfoStyles>
                                    <TeamTextStyles>{team.coach}</TeamTextStyles>
                                </Box>
                                <Box variant="Flex">
                                    <TeamInfoStyles>Posición:</TeamInfoStyles>
                                    <TeamTextStyles>{team.table}</TeamTextStyles>
                                </Box>
                            </TeamCaptionStyles>
                        </TeamItemStyles>
                    </Fragment>
                );
            })}
        </Box>
    );
};

TeamProfile.propTypes = {
    src: PropTypes.shape({}),
    ratio: PropTypes.string,
    teams: PropTypes.arrayOf(PropTypes.shape({})),
};

TeamProfile.defaultProps = {
    src: {},
    ratio: "aspect1x1",
    teams: [],
};

export default TeamProfile;
