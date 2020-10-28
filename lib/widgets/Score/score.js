import React from "react";
import PropTypes from "prop-types";
import { ScoreStyles, TextStyles, BoxGrid, BoxTitle, BoxHomeGrid, BoxAwayGrid, BoxScore, BoxScoreTime, HomeTitle, HomeGoals, PlayerName, AwayTitle, AwayGoals, ScoreNumber, HomeNumber, AwayNumber, SeparatorStyles, TimeStyles } from "./styles";
import { Box, Image, Text } from "../../accessories";

const Score = props => {
    const { children, img, ratio, src } = props;
    return (
        <ScoreStyles>
            <BoxTitle variant="Transparent">
                <TextStyles>
                    Champions League
                </TextStyles>
            </BoxTitle >
            <BoxGrid variant="Transparent">
                <Box variant="Transparent">
                    <BoxHomeGrid variant="Transparent">
                        <HomeTitle variant="h3">
                            Bayer Leverkusen
                        </HomeTitle>
                        <Image ratio={ratio} src={src} />
                    </BoxHomeGrid>
                    <HomeGoals variant="Transparent">
                        <PlayerName>
                            Lewandowski 20'
                         </PlayerName>
                        <PlayerName>
                            Müller 80'
                        </PlayerName>
                    </HomeGoals>
                </Box>
                <BoxScoreTime variant="Transparent">
                    <ScoreNumber variant="Transparent">
                        <HomeNumber>
                            2
                    </HomeNumber>
                        <SeparatorStyles >
                            -
                    </SeparatorStyles >
                        <AwayNumber>
                            1
                    </AwayNumber>
                    </ScoreNumber >
                    <BoxScore variant="Transparent">
                        <TimeStyles>
                            2do tiempo
                            </TimeStyles>
                    </BoxScore>
                </BoxScoreTime>
                <Box variant="Transparent">
                    <BoxAwayGrid variant="Transparent">
                        <Image ratio={ratio} src={src} />
                        <AwayTitle variant="h3">
                            Tottenham
                    </AwayTitle>
                    </BoxAwayGrid>
                    <AwayGoals variant="Transparent">
                        <PlayerName>
                            Kane 60'
                         </PlayerName>
                    </AwayGoals>
                </Box>
            </BoxGrid>
        </ScoreStyles>
    );
};

Score.propTypes = {
    children: PropTypes.node,
    src: PropTypes.shape({}),
    ratio: PropTypes.string,
};

Score.defaultProps = {
    children: null,
    ratio: "aspect1x1",
    src: {},
};

export default Score;