import React from "react";
import PropTypes from "prop-types";
import { Image } from "../../accessories";

import {
    GridHomePWAStyles,
    GridHomePWAAnchorStyles,
    GridHomePWACaptionStyles,
    GridHomePWABoxStyles,
    GridHomePWABoxThumb,
    GridHomePWALabel,
} from "./styles";

const GridHomePWA = props => {
    const { src, ratio, items } = props;
    return (
        <GridHomePWABoxStyles variant="Transparent">
            <GridHomePWAStyles>
                {items.map((item, index) => {
                    const KEY = `${item.title}-${index}`;
                    return (
                        <GridHomePWAAnchorStyles href="./" aria-label="gallery" key={KEY}>
                            <GridHomePWABoxThumb variant="Transparent">
                                <Image ratio={ratio} src={src} />
                                <GridHomePWALabel variant="Transparent">
                                    {item._type}
                                </GridHomePWALabel>
                            </GridHomePWABoxThumb>
                            <GridHomePWACaptionStyles>{item.description}</GridHomePWACaptionStyles>
                        </GridHomePWAAnchorStyles>
                    );
                })}
            </GridHomePWAStyles>
        </GridHomePWABoxStyles>
    );
};

GridHomePWA.propTypes = {
    ratio: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({})),
};

GridHomePWA.defaultProps = {
    ratio: "aspect16x9",
    items: [],
};

export default GridHomePWA;
