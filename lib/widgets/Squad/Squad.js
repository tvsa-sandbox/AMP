import React, { Fragment } from "react";
import PropTypes from "prop-types";
import {
    SquadStyles,
    SquadBoxSection,
    SquadTitle,
    SquadBoxButtonActive,
    SquadBoxButtons,
    ButtonActive,
} from "./styles";
import { Box, Button } from "../../accessories";
import {
    SquadItemStyles,
    SquadNumberBox,
    SquadNumberStyles,
    SquadTitleStyles,
    SquadTitleBox,
    SquadNationStyles,
    SquadNationBox,
} from "../../items/SquadItem/styles";

const Squad = props => {
    const { team, home, away } = props;
    const posiciones = Object.keys(team[0].squad);
    const players = Object.values(team[0].squad);
    return (
        <SquadStyles>
            <SquadBoxButtons variant="Flex">
                <SquadBoxButtonActive>
                    <ButtonActive>{home}</ButtonActive>
                </SquadBoxButtonActive>
                <Box>
                    <Button variant="Transparent">{away}</Button>
                </Box>
            </SquadBoxButtons>
            {posiciones.map(position => (
                <Fragment key={position.id}>
                    <SquadBoxSection variant="Transparent">
                        <SquadTitle>{position}</SquadTitle>
                    </SquadBoxSection>
                    <Box variant="Transparent">
                        {Object.values(
                            players.map(player => {
                                return (
                                    <>
                                        {player.map(key => {
                                            const goal = position === key.position;
                                            return goal ? (
                                                <SquadItemStyles variant="Transparent">
                                                    <SquadNumberBox>
                                                        <SquadNumberStyles>
                                                            {key.number}
                                                        </SquadNumberStyles>
                                                    </SquadNumberBox>
                                                    <SquadTitleBox>
                                                        <SquadTitleStyles variant="h3">
                                                            {key.name}
                                                        </SquadTitleStyles>
                                                    </SquadTitleBox>
                                                    <SquadNationBox>
                                                        <SquadNationStyles>
                                                            {key.nation}
                                                        </SquadNationStyles>
                                                    </SquadNationBox>
                                                </SquadItemStyles>
                                            ) : null;
                                        })}
                                    </>
                                );
                            }),
                        )}
                    </Box>
                </Fragment>
            ))}
        </SquadStyles>
    );
};

Squad.propTypes = {
    team: PropTypes.arrayOf(PropTypes.shape({})),
    positions: PropTypes.arrayOf(PropTypes.shape({})),
    home: PropTypes.string,
    away: PropTypes.string,
};

Squad.defaultProps = {
    team: [],
    positions: [],
    home: "Manchester United",
    away: "Arsenal",
};

export default Squad;
