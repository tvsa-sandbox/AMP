import React from "react";
import PropTypes from "prop-types";
import {
    ItemVideoStyles,
    ItemVideoBoxVideoPlayer,
    BoxTimeStyles,
    CaptionBoxStyles,
    ItemVideoText,
    ItemVideoTitleStyles,
    DescriptionTextStyles,
    BoxIconsStyles,
    BoxSocial,
    BoxDate,
    BoxC,
    BoxText,
    ItemIconStyles,
    ItemIconAnchor,
    IconTextStyles,
} from "./styles";
import { Image, Time, Box } from "../../accessories";
import SocialBox from "../SocialBox";
import EndCard from "../../widgets/EndCard";

const ItemVideo = props => {
    const {
        src,
        ratio,
        social,
        uri,
        videoepisode,
        videodate,
        title,
        videodescription,
        show,
    } = props;
    return (
        <ItemVideoStyles variant="Solid">
            <Box>
                <Image alt="ItemVideo" ratio={ratio} src={src} />
                <ItemVideoBoxVideoPlayer>Ver video</ItemVideoBoxVideoPlayer>
                <EndCard src={src} />
            </Box>
            <CaptionBoxStyles>
                <BoxTimeStyles variant="Transparent">
                    <BoxDate variant="Transparent">
                        <ItemVideoText>{videoepisode}</ItemVideoText>
                        <Time variant="Duration">{videodate}</Time>
                    </BoxDate>
                    <BoxSocial variant="Trasparent">
                        <SocialBox items={social} />
                    </BoxSocial>
                </BoxTimeStyles>
                <BoxC>
                    <BoxText variant="Transparent">
                        <ItemVideoTitleStyles variant="h3">{title}</ItemVideoTitleStyles>
                        <DescriptionTextStyles>{videodescription}</DescriptionTextStyles>
                    </BoxText>
                    <BoxIconsStyles variant="Transparent">
                        <ItemIconAnchor href={uri} aria-label="button">
                            <ItemIconStyles name="LasEstrellas" variant="Inactive" />
                        </ItemIconAnchor>
                        <IconTextStyles variant="Active">{show}</IconTextStyles>
                    </BoxIconsStyles>
                </BoxC>
            </CaptionBoxStyles>
        </ItemVideoStyles>
    );
};
ItemVideo.propTypes = {
    src: PropTypes.shape({}),
    ratio: PropTypes.string,
    videoepisode: PropTypes.string,
    title: PropTypes.string,
    uri: PropTypes.string,
    videodate: PropTypes.string,
    videodescription: PropTypes.string,
    show: PropTypes.string,
    social: PropTypes.arrayOf(PropTypes.shape({})),
};
ItemVideo.defaultProps = {
    src: {},
    ratio: "aspect16x9",
    videoepisode: "Episodio 8",
    uri: "./",
    title: "A semanas de convertirse en mamá Fernanda Castillo",
    videodate: "Jun. 19.2020",
    show: "El Dragón",
    social: [],
    videodescription:
        "La cuenta regresiva para que Fernanda Castillo y Erik Hayser debuten como papás está por arrancar mientras en la recta final de la dulce espera...",
};
export default ItemVideo;
