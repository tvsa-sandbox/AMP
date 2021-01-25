import React from "react";
import PropTypes from "prop-types";
import Image from "../../accessories/Image";
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
        icon,
    } = props;
    return (
        <ChapterCardStyles variant="Transparent">
            <ChapterItemStyles>
                <ChapterItemBox variant="Transparent">
                    <ChapterItemImageContent variant="Transparent">
                        <ChapterItemTimeStyles>{chaptertime}</ChapterItemTimeStyles>
                        <Image src={src} ratio={ratio} />
                    </ChapterItemImageContent>
                    <ChapterItemCaption variant="Transparent">
                        <ChapterItemBoxTop variant="Transparent">
                            {chaptericon ? (
                                <ChapterItemAnchor href="./" aria-label="Icon">
                                    <ChapterItemIconStyles name={icon} variant="Transparent" />
                                </ChapterItemAnchor>
                            ) : (
                                    <ChapterItemLabelStyles>{chapterepisode}</ChapterItemLabelStyles>
                                )}
                            {!isShow ? (
                                <ChapterItemTitleStyles variant="h2">
                                    {chaptertitle}
                                </ChapterItemTitleStyles>
                            ) : null}
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
    icon: PropTypes.string,
};

ChapterCard.defaultProps = {
    children: null,
    ratio: "aspect16x9",
    src: {},
    chaptertext: "Bárbara tiene que decidir entre irse con Félix o con Jero, ¿a quién escogerá? La",
    chaptertitle: "Cuéntamelo Ya!",
    chapterepisode: "Episodio 50",
    chapterdate: "Jun. 19.2020",
    chaptertime: "34:12",
    chaptericon: true,
    isShow: false,
    icon: "LasEstrellas",
};

export default ChapterCard;
