import React from "react";
import PropTypes from "prop-types";
import {
    TickerItemStyles,
    TickerItemTitleStyles,
    TickerItemImageStyles,
    TickerItemBoxStyles,
    TickerItemDateStyles,
    MomioStyles,
    MomiosBoxStyles,
    TickerItemTimeStyles,
    TickerItemTeamStyles,
    TickerMomiosBoxStyles,
    ItemCalienteBoxStyles,
    ItemCalienteImageStyles,
    TickerItemContainer,
    TickerItemScoreStyles,
    TickerItemTimeBoxStyles,
} from "./styles";
import { Image, Box } from "../../accessories";

const TickerItem = props => {
    const {
        date,
        time,
        team1,
        team2,
        score1,
        score2,
        src,
        img,
        localmomio,
        empatemomio,
        visitmomio,
    } = props;
    return (
        <TickerItemStyles {...props}>
            <TickerItemTimeBoxStyles variant="Flex">
                <TickerItemDateStyles>{date}</TickerItemDateStyles>
                <TickerItemTimeStyles>{time}</TickerItemTimeStyles>
            </TickerItemTimeBoxStyles>
            <TickerItemContainer>
                <TickerItemTeamStyles variant="Transparent">
                    <TickerItemBoxStyles variant="Flex">
                        <Box variant="Flex">
                            <TickerItemImageStyles>
                                <Image ratio="aspect1x1" src={src} />
                            </TickerItemImageStyles>
                            <TickerItemTitleStyles variant="h3">{team1}</TickerItemTitleStyles>
                        </Box>
                        <TickerItemScoreStyles variant="h3">{score1}</TickerItemScoreStyles>
                    </TickerItemBoxStyles>
                    <TickerItemBoxStyles variant="Flex">
                        <Box variant="Flex">
                            <TickerItemImageStyles>
                                <Image ratio="aspect1x1" src={src} />
                            </TickerItemImageStyles>
                            <TickerItemTitleStyles variant="h3">{team2}</TickerItemTitleStyles>
                        </Box>
                        <TickerItemScoreStyles variant="h3">{score2}</TickerItemScoreStyles>
                    </TickerItemBoxStyles>
                </TickerItemTeamStyles>
                <TickerMomiosBoxStyles>
                    <MomiosBoxStyles>
                        <MomioStyles variant="Transparent">{localmomio}</MomioStyles>
                    </MomiosBoxStyles>
                    <MomiosBoxStyles>
                        <MomioStyles variant="Transparent">{empatemomio}</MomioStyles>
                    </MomiosBoxStyles>
                    <MomiosBoxStyles>
                        <MomioStyles variant="Transparent">{visitmomio}</MomioStyles>
                    </MomiosBoxStyles>
                </TickerMomiosBoxStyles>
            </TickerItemContainer>
            <ItemCalienteBoxStyles variant="Flex">
                <Image ratio="16x9" img={img} />
            </ItemCalienteBoxStyles>
        </TickerItemStyles>
    );
};

TickerItem.propTypes = {
    src: PropTypes.shape({}),
    img: PropTypes.shape({}),
    team1: PropTypes.string,
    team2: PropTypes.string,
    time: PropTypes.string,
    date: PropTypes.string,
    localmomio: PropTypes.string,
    empatemomio: PropTypes.string,
    visitmomio: PropTypes.string,
    score1: PropTypes.string,
    score2: PropTypes.string,
};

TickerItem.defaultProps = {
    src: {},
    img: {},
    date: "mar 20 oct",
    team1: "Paris Saint-Germain",
    team2: "Burussia Monchengladbach",
    time: "19:45",
    localmomio: "+250",
    empatemomio: "+100",
    visitmomio: "+390",
    score1: "3",
    score2: "2",
};

export default TickerItem;
