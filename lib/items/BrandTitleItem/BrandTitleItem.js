import React from "react";
import {
    BrandTitleItemStyles,
    BrandTitleBoxStyles,
    BrandTitleAnchorStyles,
    BrandTitleIconStyles,
} from "./styles";

const BrandTitleItem = props => {
    return (
        <BrandTitleItemStyles {...props}>
            <BrandTitleBoxStyles variant="Transparent">
                <BrandTitleAnchorStyles variant="Focus">
                    Ver episodios completos en BLIM
                </BrandTitleAnchorStyles>
                <BrandTitleIconStyles name="ArrowRight" variant="Transparent" />
            </BrandTitleBoxStyles>
        </BrandTitleItemStyles>
    );
};

export default BrandTitleItem;
