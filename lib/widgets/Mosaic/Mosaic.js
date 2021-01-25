import React from "react";
import PropTypes from "prop-types";
import { MosaicStyles, ContainerItemsStyles, TitleMosaicStyles } from "./styles";

import { MosaicItem } from "../../items";

const Mosaic = props => {
    const { title, ratio, src, items } = props;
    return (
        <MosaicStyles {...props}>
            <TitleMosaicStyles variant="h4">{title}</TitleMosaicStyles>
            <ContainerItemsStyles>
                {items.map(item => {
                    return <MosaicItem ratio={ratio} src={src} key={item.id} />;
                })}
            </ContainerItemsStyles>
        </MosaicStyles>
    );
};

Mosaic.propTypes = {
    title: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({})),
    src: PropTypes.shape({}),
    ratio: PropTypes.string,
};
Mosaic.defaultProps = {
    ratio: "aspect16x9",
    title: "Ligas",
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
        {
            id: 9,
        },
    ],
};

export default Mosaic;
