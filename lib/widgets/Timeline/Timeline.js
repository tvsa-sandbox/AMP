import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
    TimelineStyles,
    BoxLine,
    BoxTeam,
    BoxTime,
    TimelineNameStyles,
    TimelineLogoStyles,
    BoxChange,
    StartTime,
    HalfTime,
    EndTime,
    ExtraTime,
    IconBoxStyles,
} from "./styles";
import { Image, Box, Icons, Button, ProgressBar } from "../../accessories";
import { BoxEvents } from "../../items";

const Timeline = props => {
    const {
        namelocal,
        nameaway,
        src,
        size,
        progress,
        color,
        extratime,
        start,
        half,
        end,
        widthRegular,
        widthExtra,
        widthPenal,
    } = props;

    const penales = widthPenal > 0 ? <ProgressBar progress={progress} width={widthPenal} /> : null;
    const textras =
        widthExtra > 0 ? (
            <Box variant="Flex" w="30%">
                <ProgressBar progress={progress} width={widthExtra} />
                <ProgressBar progress={progress} width={widthExtra} />
            </Box>
        ) : null;
    const eventos = (evento, tiempo) => {
        let minuto = (evento / tiempo) * 100;
        return Math.round(minuto);
    };
    console.log("minuto", eventos(42, 45));
    const yellowCard = <Icons name="CardYellow" size={size} color="#f5bb5c" />;
    const redCard = <Icons name="CardRed" size={size} color="#cc0000" />;
    const goal = <Icons name="Gol" color={color} size={size} />;

    return (
        <TimelineStyles {...props}>
            <BoxTeam variant="Flex">
                <TimelineLogoStyles>
                    <Image ratio="aspect1x1" src={src} />
                </TimelineLogoStyles>
                <TimelineNameStyles>{namelocal}</TimelineNameStyles>
            </BoxTeam>
            <BoxLine>
                <Box variant="Flex">
                    <BoxEvents team={namelocal} width={widthRegular} h="60px">
                        <IconBoxStyles variant="Transparent" posX={eventos(42, 45)} h="60px">
                            {goal}
                            {goal}
                            {yellowCard}
                        </IconBoxStyles>
                        <IconBoxStyles variant="Transparent" posX={eventos(10, 45)} h="60px">
                            {goal}
                            {redCard}
                            {yellowCard}
                        </IconBoxStyles>
                        <IconBoxStyles variant="Transparent" posX={eventos(45, 45)} h="20px">
                            <ExtraTime>+3</ExtraTime>
                        </IconBoxStyles>
                    </BoxEvents>
                    <BoxEvents team={namelocal} width={widthRegular} h="60px">
                        <IconBoxStyles variant="Transparent" posX={eventos(30, 45)} h="60px">
                            {goal}
                            {redCard}
                            {yellowCard}
                        </IconBoxStyles>
                        <IconBoxStyles variant="Transparent" posX={eventos(45, 45)} h="20px">
                            <ExtraTime>+3</ExtraTime>
                        </IconBoxStyles>
                    </BoxEvents>

                    {widthExtra > 0 ? (
                        <Box variant="Flex" w="30%">
                            <BoxEvents team={namelocal} width={widthExtra} h="60px">
                                <IconBoxStyles variant="Transparent" posX={eventos(5, 15)} h="60px">
                                    {goal}
                                    {redCard}
                                    {yellowCard}
                                </IconBoxStyles>
                            </BoxEvents>
                            <BoxEvents team={namelocal} width={widthExtra} h="60px">
                                <IconBoxStyles
                                    variant="Transparent"
                                    posX={eventos(14, 15)}
                                    h="60px"
                                >
                                    {goal}
                                    {redCard}
                                    {yellowCard}
                                </IconBoxStyles>
                            </BoxEvents>
                        </Box>
                    ) : null}
                    {widthPenal > 0 ? (
                        <BoxEvents team={namelocal} width={widthPenal} h="20px">
                            <IconBoxStyles variant="Transparent" posX={eventos(1, 15)}>
                                {goal}
                            </IconBoxStyles>
                        </BoxEvents>
                    ) : null}
                </Box>
                <Box variant="Flex">
                    <ProgressBar progress={progress} width={widthRegular} />
                    <ProgressBar progress={progress} width={widthRegular} />
                    {textras}
                    {penales}
                </Box>
                <BoxTime>
                    <StartTime>{start}</StartTime>
                    <HalfTime>{half}</HalfTime>
                    <EndTime>{end}</EndTime>
                </BoxTime>
                <Box variant="Flex">
                    <BoxEvents team={namelocal} width={widthRegular} h="60px">
                        <IconBoxStyles variant="Transparent" posX={eventos(15, 45)} h="60px">
                            {goal}
                            {redCard}
                            {yellowCard}
                        </IconBoxStyles>
                    </BoxEvents>
                    <BoxEvents team={nameaway} width={widthRegular}>
                        <BoxEvents team={namelocal} width={widthRegular} h="60px">
                            <IconBoxStyles variant="Transparent" posX={eventos(2, 45)} h="60px">
                                {goal}
                                {redCard}
                                {yellowCard}
                            </IconBoxStyles>
                        </BoxEvents>
                    </BoxEvents>
                    {widthExtra > 0 ? (
                        <Box variant="Flex" w="30%">
                            <BoxEvents team={namelocal} width={widthRegular} h="60px">
                                <IconBoxStyles variant="Transparent" posX={eventos(2, 15)} h="60px">
                                    {goal}
                                    {redCard}
                                    {yellowCard}
                                </IconBoxStyles>
                            </BoxEvents>
                            <BoxEvents team={namelocal} width={widthRegular} h="60px">
                                <IconBoxStyles
                                    variant="Transparent"
                                    posX={eventos(10, 15)}
                                    h="60px"
                                >
                                    {goal}
                                    {redCard}
                                    {yellowCard}
                                </IconBoxStyles>
                            </BoxEvents>
                        </Box>
                    ) : null}
                    {widthPenal > 0 ? (
                        <BoxEvents team={namelocal} width={widthPenal} h="20px">
                            <IconBoxStyles variant="Transparent" posX={eventos(5, 15)}>
                                {goal}
                            </IconBoxStyles>
                        </BoxEvents>
                    ) : null}
                </Box>
            </BoxLine>
            <BoxTeam variant="Flex">
                <TimelineLogoStyles>
                    <Image ratio="aspect1x1" src={src} />
                </TimelineLogoStyles>
                <TimelineNameStyles>{nameaway}</TimelineNameStyles>
            </BoxTeam>
        </TimelineStyles>
    );
};

Timeline.propTypes = {
    src: PropTypes.shape({}),
    namelocal: PropTypes.string,
    color: PropTypes.string,
    progress: PropTypes.number,
    nameaway: PropTypes.string,
    action: PropTypes.string,
    start: PropTypes.string,
    half: PropTypes.string,
    end: PropTypes.string,
    extratime: PropTypes.string,
    size: PropTypes.number,
    widthRegular: PropTypes.number,
    widthExtra: PropTypes.number,
    widthPenal: PropTypes.number,
};

Timeline.defaultProps = {
    color: "#000000",
    src: {},
    namelocal: "Pumas",
    nameaway: "Cruz Azul",
    size: 20,
    action: "9'",
    start: "1'",
    half: "45'",
    end: "90 +2'",
    extratime: "+3",
    progress: 0,
    widthRegular: 50,
    widthExtra: 0,
    widthPenal: 0,
};

export default Timeline;
