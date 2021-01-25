import React from "react";
import PropTypes from "prop-types";
import {
    BoxIconsStyles,
    ItemVideoStyles,
    ItemVideoBoxVideoPlayer,
    BoxTimeStyles,
    CaptionBoxStyles,
    ItemVideoText,
    ItemVideoTitleStyles,
    DescriptionTextStyles,
    BoxSocial,
    BoxDate,
    BoxC,
    BoxText,
    ItemIconStyles,
    IconTextStyles,
    BoxVideoPlayer,
    ItemVideoImageBox,
} from "./styles";
import { Image, Time } from "../../accessories";
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
        <ItemVideoStyles variant="Transparent">
            <ItemVideoImageBox variant="Transparent">
                <Image alt="ItemVideo" ratio={ratio} src={src} />
                <ItemVideoBoxVideoPlayer>Ver video</ItemVideoBoxVideoPlayer>
                <EndCard src={src} />
            </ItemVideoImageBox>
            <ItemVideoBoxVideoPlayer icon={false}>
                <BoxVideoPlayer variant="Transparent">VideoPlayer</BoxVideoPlayer>
            </ItemVideoBoxVideoPlayer>
            <CaptionBoxStyles variant="Transparent">
                <BoxTimeStyles variant="Transparent">
                    <BoxDate variant="Transparent">
                        <ItemVideoText>{videoepisode}</ItemVideoText>
                        <Time variant="Duration">{videodate}</Time>
                    </BoxDate>
                    <BoxSocial variant="Trasparent">
                        <SocialBox items={social} />
                    </BoxSocial>
                </BoxTimeStyles>
                <BoxC variant="Transparent">
                    <BoxText variant="Transparent">
                        <ItemVideoTitleStyles variant="h3">{title}</ItemVideoTitleStyles>
                        <DescriptionTextStyles>{videodescription}</DescriptionTextStyles>
                    </BoxText>
                    <BoxIconsStyles variant="Transparent" href="./" aria-label="show">
                        <ItemIconStyles name="LasEstrellas" variant="Inactive" />
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
