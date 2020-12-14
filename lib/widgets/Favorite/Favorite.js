import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Box } from "../../accessories";
import {
    FavoriteStyles,
    FavoriteBoxStyles,
    FavoriteButtonStyles,
    FavoriteIconsStyles,
} from "./styles";

const Favorite = props => {
    const { names } = props;
    return (
        <FavoriteStyles {...props}>
            <Box variant="Transparent">
                <FavoriteBoxStyles variant="Transparent">
                    {names.map(name => {
                        return (
                            <Fragment key={name.id}>
                                <FavoriteButtonStyles
                                    variant="Transparent"
                                    href="/"
                                    aria-label="ui"
                                >
                                    <FavoriteIconsStyles name={name.icon} variant="Transparent" />
                                </FavoriteButtonStyles>
                            </Fragment>
                        );
                    })}
                </FavoriteBoxStyles>
            </Box>
        </FavoriteStyles>
    );
};
Favorite.propTypes = {
    names: PropTypes.arrayOf(PropTypes.shape({})),
};

Favorite.defaultProps = {
    names: [],
};
export default Favorite;
