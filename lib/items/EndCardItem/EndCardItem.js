import React from "react";
import PropTypes from "prop-types";
import { Image } from "../../accessories";

import { EndCardItemStyles, EndCardItemTitle } from "./styles";
import { EndCardImageBox } from "../../widgets/EndCard/styles";

const EndCardItem = props => {
    const { imgsrc, title } = props;
    return (
        <EndCardItemStyles {...props} href="/">
            <EndCardImageBox>
                <Image src={imgsrc} />
            </EndCardImageBox>
            <EndCardItemTitle color="gray">{title}</EndCardItemTitle>
        </EndCardItemStyles>
    );
};

EndCardItem.propTypes = {
    title: PropTypes.string,
    image: PropTypes.shape({
        desktop: PropTypes.shape({
            srcSet: PropTypes.string,
        }),
        mobile: PropTypes.shape({
            srcSet: PropTypes.string,
        }),
    }),
};

EndCardItem.defaultProps = {
    title: "Una Familia de Diez segunda temporada",
    image: {
        desktop: {
            srcSet: "",
        },
        mobie: {
            srcSet: "",
        },
    },
};

export default EndCardItem;
