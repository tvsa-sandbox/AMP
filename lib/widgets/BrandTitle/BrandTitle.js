import React from "react";
import BrandTitleStyles from "./styles";
import { BrandTitleItem } from "../../items";

const BrandTitle = props => {
    return (
        <BrandTitleStyles {...props} href="./">
            <BrandTitleItem />
        </BrandTitleStyles>
    );
};

export default BrandTitle;
