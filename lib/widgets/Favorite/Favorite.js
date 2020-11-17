import React from "react";
import { Box } from "../../accessories";
import {
    FavoriteStyles,
    FavoriteBoxStyles,
    FavoriteButtonStyles,
    FavoriteIconsStyles,
    FavoriteButtonActiveStyles,
} from "./styles";

const Favorite = props => {
    return (
        <FavoriteStyles {...props}>
            <Box variant="Transparent">
                <FavoriteBoxStyles variant="Transparent">
                    <FavoriteButtonStyles variant="Transparent" href="/" aria-label="ui">
                        <FavoriteIconsStyles name="Home" variant="Transparent" />
                    </FavoriteButtonStyles>
                    <FavoriteButtonActiveStyles variant="Active" href="/" aria-label="ui">
                        <FavoriteIconsStyles name="LasEstrellas" variant="Active" />
                    </FavoriteButtonActiveStyles>
                    <FavoriteButtonStyles variant="Transparent" href="/" aria-label="ui">
                        <FavoriteIconsStyles name="ForoTV" variant="Transparent" />
                    </FavoriteButtonStyles>
                    <FavoriteButtonStyles variant="Transparent" href="/" aria-label="ui">
                        <FavoriteIconsStyles name="CanalCinco" variant="Transparent" />
                    </FavoriteButtonStyles>
                    <FavoriteButtonStyles variant="Transparent" href="/" aria-label="ui">
                        <FavoriteIconsStyles name="Nueve" variant="Transparent" />
                    </FavoriteButtonStyles>
                    <FavoriteButtonStyles variant="Transparent" href="/" aria-label="ui">
                        <FavoriteIconsStyles name="Deportes" variant="Transparent" />
                    </FavoriteButtonStyles>
                    <FavoriteButtonStyles variant="Transparent" href="/" aria-label="ui">
                        <FavoriteIconsStyles name="News" variant="Transparent" />
                    </FavoriteButtonStyles>
                    <FavoriteButtonStyles variant="Transparent" href="/" aria-label="ui">
                        <FavoriteIconsStyles name="Bandamax" variant="Transparent" />
                    </FavoriteButtonStyles>
                    <FavoriteButtonStyles variant="Transparent" href="/" aria-label="ui">
                        <FavoriteIconsStyles name="Telehit" variant="Transparent" />
                    </FavoriteButtonStyles>
                    <FavoriteButtonStyles variant="Transparent" href="/" aria-label="ui">
                        <FavoriteIconsStyles name="CanalU" variant="Transparent" />
                    </FavoriteButtonStyles>
                </FavoriteBoxStyles>
            </Box>
        </FavoriteStyles>
    );
};

export default Favorite;
