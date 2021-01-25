import React from "react";
import PropTypes from "prop-types";
import {
    CalendarStyles,
    CalendarLeagueBox,
    TitleCalendar,
    BoxLeagueStyles,
    BoxLine,
    BoxButtonStyles,
    BeforeStyles,
    NextStyles,
    ContainerItemsStyles,
    RoundLeagueTextStyles,
} from "./styles";
import { CalendarItem } from "../../items";
import { Image } from "../../accessories";
import { ItemLeagueImageStyles } from "../../items/ItemLeague/styles";

const Calendar = props => {
    const { ratio, src, SRC, items, before, next, titleleague, roundleague } = props;
    return (
        <CalendarStyles {...props}>
            <BoxLeagueStyles>
                <CalendarLeagueBox>
                    <ItemLeagueImageStyles>
                        <Image ratio={ratio} src={SRC} icon={false} />
                    </ItemLeagueImageStyles>
                    <BoxLine />
                    <TitleCalendar variant="h2">{titleleague}</TitleCalendar>
                </CalendarLeagueBox>
            </BoxLeagueStyles>
            <BoxButtonStyles variant="Flex">
                <BeforeStyles variant="Transparent">{before}</BeforeStyles>
                <NextStyles variant="Transparent">{next}</NextStyles>
            </BoxButtonStyles>
            <ContainerItemsStyles>
                <RoundLeagueTextStyles>{roundleague}</RoundLeagueTextStyles>
                {items.map(item => {
                    return <CalendarItem ratio={ratio} src={src} key={item.id} />;
                })}
            </ContainerItemsStyles>
        </CalendarStyles>
    );
};

Calendar.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({})),
    src: PropTypes.shape({}),
    before: PropTypes.string,
    next: PropTypes.string,
    titleleague: PropTypes.string,
    roundleague: PropTypes.string,
    ratio: PropTypes.string,
};
Calendar.defaultProps = {
    ratio: "aspect16x9",
    titleleague: "Champions League",
    before: "Anterior",
    next: "Siguiente",
    roundleague: "Cuartos de Final",
    src: {},
    items: [
        {
            id: 0,
        },
        {
            id: 1,
        },
        {
            id: 2,
        },
        {
            id: 3,
        },
        {
            id: 4,
        },
        {
            id: 5,
        },
        {
            id: 6,
        },
        {
            id: 7,
        },
        {
            id: 8,
        },
    ],
};

export default Calendar;
