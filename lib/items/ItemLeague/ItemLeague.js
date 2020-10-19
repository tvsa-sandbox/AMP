import React, { useContext } from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "styled-components";
import { ItemLeagueStyles, ItemLeagueIcon, ItemLeagueTitleStyles } from "./styles";
import { Box } from "../../accessories";

const ItemLeague = ({ isAmp, video, image, publishDate, uri, title, gallery, section, ratio }) => {
    const themeContext = useContext(ThemeContext);
    const ui = themeContext.ui.name;
    return (
        <ItemLeagueStyles href="/" variant="Transparent">
            <Box variant="Transparent">
                <ItemLeagueIcon name="Deportes" />
            </Box>
            <ItemLeagueTitleStyles variant="h2">Amistosos Internacionales</ItemLeagueTitleStyles>
        </ItemLeagueStyles>
    );
};

ItemLeague.propTypes = {
    gallery: PropTypes.string,
    image: PropTypes.shape({}),
    publishDate: PropTypes.string,
    uri: PropTypes.string,
    section: PropTypes.string,
    title: PropTypes.string,
    isAmp: PropTypes.bool,
    video: PropTypes.string,
    ratio: PropTypes.string,
};

export default ItemLeague;
