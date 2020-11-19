import React from "react";
import PropTypes from "prop-types";
import {
    ChapterCardStyles,
    ChapterItemStyles,
    ChapterItemBox,
    ChapterItemTimeStyles,
    ChapterItemDateStyles,
    ChapterItemLabelStyles,
    ChapterItemTitleStyles,
    ChapterItemTextStyles,
    ChapterItemIconStyles,
    ChapterItemImageContent,
    ChapterItemCaption,
    ChapterItemBoxTop,
    ChapterItemAnchor,
} from "./styles";
import { Image } from "accessories";

const ChapterCard = props => {
    const {
        chaptertext,
        ratio,
        src,
        chaptertitle,
        chapterepisode,
        chaptertime,
        chapterdate,
        chaptericon,
        isShow,
    } = props;
    return (
        <ChapterCardStyles>
            <ChapterItemStyles>
                <ChapterItemBox variant="Transparent">
                    <ChapterItemImageContent variant="Transparent">
                        <Image src={src} ratio={ratio} />
                    </ChapterItemImageContent>
                    <ChapterItemCaption variant="Transparent">
                        <ChapterItemBoxTop variant="Transparent">
                            {chaptericon ? (
                                <ChapterItemAnchor href="./" aria-label="Icon">
                                    <ChapterItemIconStyles name="Deportes" variant="Transparent" />
                                </ChapterItemAnchor>
                            ) : (
                                <ChapterItemLabelStyles>{chapterepisode}</ChapterItemLabelStyles>
                            )}
                            {!isShow ? (
                                <ChapterItemTitleStyles variant="h2">
                                    {chaptertitle}
                                </ChapterItemTitleStyles>
                            ) : null}
                            <ChapterItemTimeStyles>{chaptertime}</ChapterItemTimeStyles>
                            {!isShow ? (
                                <ChapterItemDateStyles>{chapterdate}</ChapterItemDateStyles>
                            ) : null}
                        </ChapterItemBoxTop>
                        <ChapterItemTextStyles>{chaptertext}</ChapterItemTextStyles>
                    </ChapterItemCaption>
                </ChapterItemBox>
            </ChapterItemStyles>
        </ChapterCardStyles>
    );
};

ChapterCard.propTypes = {
    children: PropTypes.node,
    src: PropTypes.shape({}),
    ratio: PropTypes.string,
    chaptertext: PropTypes.string,
    chaptertitle: PropTypes.string,
    chapterepisode: PropTypes.string,
    chapterdate: PropTypes.string,
    chaptertime: PropTypes.string,
    chaptericon: PropTypes.bool,
    isShow: PropTypes.bool,
};

ChapterCard.defaultProps = {
    children: null,
    ratio: "aspect16x9",
    src: {},
    chaptertext:
        "Bárbara tiene que decidir entre irse con Félix o con Jero, ¿a quién escogerá? Las historias siempre tienen un final que no es final.",
    chaptertitle: "Cuéntamelo Ya!",
    chapterepisode: "Episodio 50",
    chapterdate: "Jun. 19.2020",
    chaptertime: "34:12",
    chaptericon: true,
    isShow: false,
};

export default ChapterCard;
