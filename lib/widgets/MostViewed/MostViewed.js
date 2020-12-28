import React from "react";
import PropTypes from "prop-types";
import {
    MostViewedStyles,
    MostViewedTitleStyles,
    AdsMostStyles,
    BoxContainerItemsStyles,
} from "./styles";

import { ItemMost } from "../../items";

const MostViewed = props => {
    const { items, title } = props;
    return (
        <MostViewedStyles {...props}>
            <AdsMostStyles />
            <MostViewedTitleStyles variant="h4">{title}</MostViewedTitleStyles>
            <BoxContainerItemsStyles>
                {items.map(item => {
                    return <ItemMost key={item.id} />;
                })}
            </BoxContainerItemsStyles>
        </MostViewedStyles>
    );
};

MostViewed.propTypes = {
    title: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({})),
};
MostViewed.defaultProps = {
    title: "Lo más visto",
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
    ],
};

export default MostViewed;
