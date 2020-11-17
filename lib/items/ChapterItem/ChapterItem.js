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
    const { children, ratio, src } = props;
    return (
        <ChapterCardStyles>
            <ChapterItemStyles>
                <ChapterItemBox variant="Transparent">
                    <ChapterItemImageContent variant="Transparent">
                        <Image src={src} ratio={ratio} />
                    </ChapterItemImageContent>
                    <ChapterItemCaption variant="Transparent">
                        <ChapterItemBoxTop variant="Transparent">
                            <ChapterItemAnchor href="./" aria-label="Icon">
                                <ChapterItemIconStyles name="Deportes" variant="Transparent" />
                            </ChapterItemAnchor>
                            <ChapterItemTitleStyles variant="h2">
                                Cuéntamelo Ya!
                        </ChapterItemTitleStyles>
                            <ChapterItemLabelStyles>
                                EPISODIO 50
                        </ChapterItemLabelStyles>
                            <ChapterItemTimeStyles>39:11</ChapterItemTimeStyles>
                            <ChapterItemDateStyles>
                                Jun. 19.2020
                        </ChapterItemDateStyles>
                        </ChapterItemBoxTop>
                        <ChapterItemTextStyles>
                            Bárbara tiene que decidir entre irse con Félix o con Jero, ¿a quién
                            escogerá? Las historias siempre tienen un final que no es final.
                        </ChapterItemTextStyles>
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
};

ChapterCard.defaultProps = {
    children: null,
    ratio: "aspect16x9",
    src: {},
};

export default ChapterCard;
