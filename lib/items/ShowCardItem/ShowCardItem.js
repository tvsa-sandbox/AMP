import React from "react";
import PropTypes from "prop-types";
import { Box } from "../../accessories";
import {
    ShowCardItemStyles,
    ShowCardImageStyles,
    ShowCardTitleStyles,
    ShowCardCaptionStyles,
    ShowCardIconStyles,
    ShowCardBoxIconStyles,
} from "./styles";

const ShowCardItem = props => {
    const { children, ratio, src } = props;
    return (
        <ShowCardItemStyles {...props} href="/" variant="Transparent">
            <Box variant="Transparent">
                <ShowCardImageStyles src={src} ratio={ratio} />
                <ShowCardCaptionStyles variant="Solid">
                    <ShowCardTitleStyles variant="h3">Los Pecados de Bárbara</ShowCardTitleStyles>
                    <ShowCardBoxIconStyles variant="Transparent">
                        <ShowCardIconStyles name="LasEstrellas" variant="Inactive" />
                    </ShowCardBoxIconStyles>
                </ShowCardCaptionStyles>
            </Box>
        </ShowCardItemStyles>
    );
};

ShowCardItem.propTypes = {
    children: PropTypes.node,
    ratio: PropTypes.string,
    src: PropTypes.shape({}),
};

ShowCardItem.defaultProps = {
    children: null,
    ratio: "aspect3x4",
    src: {},
};

export default ShowCardItem;
