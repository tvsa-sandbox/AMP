import React from "react";
import { Box } from "../../accessories";
import {
    FavoriteStyles,
    FavoriteBoxStyles,
    FavoriteButtonStyles,
    FavoriteIconsStyles,
} from "./styles";

const Favorite = props => {
    return (
        <FavoriteStyles {...props}>
            <Box variant="Transparent">
                <FavoriteBoxStyles variant="Transparent">
                    <FavoriteButtonStyles variant="Inactive" href="/" aria-label="ui">
                        <FavoriteIconsStyles name="WhiteLabel" variant="Inactive" />
                    </FavoriteButtonStyles>
                    <FavoriteButtonStyles variant="Inactive" href="/" aria-label="ui">
                        <FavoriteIconsStyles name="LasEstrellas" variant="Inactive" />
                    </FavoriteButtonStyles>
                    <FavoriteButtonStyles variant="Inactive" href="/" aria-label="ui">
                        <FavoriteIconsStyles name="ForoTv" variant="Inactive" />
                    </FavoriteButtonStyles>
                    <FavoriteButtonStyles variant="Inactive" href="/" aria-label="ui">
                        <FavoriteIconsStyles name="CanalCinco" variant="Inactive" />
                    </FavoriteButtonStyles>
                    <FavoriteButtonStyles variant="Inactive" href="/" aria-label="ui">
                        <FavoriteIconsStyles name="Nueve" variant="Inactive" />
                    </FavoriteButtonStyles>
                    <FavoriteButtonStyles variant="Inactive" href="/" aria-label="ui">
                        <FavoriteIconsStyles name="Deportes" variant="Inactive" />
                    </FavoriteButtonStyles>
                    <FavoriteButtonStyles variant="Inactive" href="/" aria-label="ui">
                        <FavoriteIconsStyles name="News" variant="Inactive" />
                    </FavoriteButtonStyles>
                    <FavoriteButtonStyles variant="Inactive" href="/" aria-label="ui">
                        <FavoriteIconsStyles name="Bandamax" variant="Inactive" />
                    </FavoriteButtonStyles>
                    <FavoriteButtonStyles variant="Inactive" href="/" aria-label="ui">
                        <FavoriteIconsStyles name="Telehit" variant="Inactive" />
                    </FavoriteButtonStyles>
                    <FavoriteButtonStyles variant="Inactive" href="/" aria-label="ui">
                        <FavoriteIconsStyles name="CanalU" variant="Inactive" />
                    </FavoriteButtonStyles>
                </FavoriteBoxStyles>
            </Box>
        </FavoriteStyles>
    );
};

export default Favorite;
