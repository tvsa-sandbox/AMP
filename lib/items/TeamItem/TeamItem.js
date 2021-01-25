import React from "react";
import PropTypes from "prop-types";
import { Image, Box } from "../../accessories";
import {
    TeamItemStyles,
    TeamCaptionStyles,
    TeamThumbnailStyles,
    TeamTitleStyles,
    TeamInfoStyles,
    TeamTextStyles,
} from "./styles";

const TeamItem = props => {
    const { Team, Date, Stadium, Capacity, Coach, Position, src } = props;
    return (
        <TeamItemStyles>
            <TeamThumbnailStyles>
                <Image ratio="aspect1x1" src={src} icon={false} />
            </TeamThumbnailStyles>
            <TeamCaptionStyles>
                <TeamTitleStyles variant="h2">{Team}</TeamTitleStyles>
                <Box variant="Flex">
                    <TeamInfoStyles>Justificado:</TeamInfoStyles>
                    <TeamTextStyles>{Date}</TeamTextStyles>
                </Box>
                <Box variant="Flex">
                    <TeamInfoStyles>Estadio:</TeamInfoStyles>
                    <TeamTextStyles>{Stadium}</TeamTextStyles>
                </Box>
                <Box variant="Flex">
                    <TeamInfoStyles>Capacidad:</TeamInfoStyles>
                    <TeamTextStyles>{Capacity}</TeamTextStyles>
                </Box>
                <Box variant="Flex">
                    <TeamInfoStyles>DT:</TeamInfoStyles>
                    <TeamTextStyles>{Coach}</TeamTextStyles>
                </Box>
                <Box variant="Flex">
                    <TeamInfoStyles>Posición:</TeamInfoStyles>
                    <TeamTextStyles>{Position}</TeamTextStyles>
                </Box>
            </TeamCaptionStyles>
        </TeamItemStyles>
    );
};

TeamItem.propTypes = {
    Team: PropTypes.string,
    Date: PropTypes.string,
    Stadium: PropTypes.string,
    Capacity: PropTypes.string,
    Coach: PropTypes.string,
    Position: PropTypes.string,
    src: PropTypes.shape({}),
};

TeamItem.defaultProps = {
    Team: "Borussia Mönchengladbach",
    Date: "1907",
    Stadium: "Borussia Park",
    Capacity: "26.724",
    Coach: "Lucien Favree",
    Position: "3",
    src: {},
};

export default TeamItem;
