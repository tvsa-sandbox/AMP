import React from "react";
import PropTypes from "prop-types";
import {
    MosaicItemStyles,
    MosaicItemImageStyles,
    CaptionBoxStyles,
    MosaicItemLogoStyles,
} from "./styles";
import { Image, Box } from "../../accessories";

const MosaicItem = props => {
    const { src, ratio, ratio2 } = props;
    return (
        <MosaicItemStyles {...props}>
            <MosaicItemImageStyles>
                <Image ratio={ratio} src={src} />
            </MosaicItemImageStyles>
            <CaptionBoxStyles>
                <MosaicItemLogoStyles>
                    <Image ratio={ratio2} src={src} />
                </MosaicItemLogoStyles>
            </CaptionBoxStyles>
        </MosaicItemStyles>
    );
};

MosaicItem.propTypes = {
    src: PropTypes.shape({}),
    ratio: PropTypes.string,
    ratio2: PropTypes.string,
};

MosaicItem.defaultProps = {
    src: {},
    ratio: "aspect16x9",
    ratio2: "aspect1x1",
};

export default MosaicItem;
