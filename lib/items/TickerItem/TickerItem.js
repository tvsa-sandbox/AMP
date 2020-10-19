import React from "react";
import PropTypes from "prop-types";
import {
    TickerItemStyles,
    TickerItemTitleStyles,
    TickerItemIconStyles,
    TickerItemBoxStyles,
    TickerItemDateStyles,
    TickerItemMoreStyles,
    TickerItemTimeStyles,
    TickerItemTeamStyles,
    TimeBoxStyles,
} from "./styles";
import { Icons } from "../../accessories";

const TickerItem = props => {
    return (
        <TickerItemStyles {...props}>
            <TickerItemTeamStyles variant="Transparent">
                <TickerItemBoxStyles variant="Flex">
                    <TickerItemIconStyles>
                        <Icons name="Deportes" size="30" variant="Transparent" />
                    </TickerItemIconStyles>
                    <TickerItemTitleStyles variant="h5">Pumas UNAM</TickerItemTitleStyles>
                </TickerItemBoxStyles>
                <TickerItemBoxStyles variant="Flex">
                    <TickerItemIconStyles>
                        <Icons name="Deportes" size="30" variant="Transparent" />
                    </TickerItemIconStyles>
                    <TickerItemTitleStyles variant="h5">Santos</TickerItemTitleStyles>
                </TickerItemBoxStyles>
            </TickerItemTeamStyles>
            <TimeBoxStyles>
                <TickerItemTimeStyles>19:45</TickerItemTimeStyles>
                <TickerItemDateStyles>mar 20 oct</TickerItemDateStyles>
                <TickerItemMoreStyles variant="Transparent">Ver más</TickerItemMoreStyles>
            </TimeBoxStyles>
        </TickerItemStyles>
    );
};

export default TickerItem;
