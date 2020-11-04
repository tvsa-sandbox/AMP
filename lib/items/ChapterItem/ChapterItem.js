import React from "react";
import PropTypes from "prop-types";
import {
    ChapterCardStyles,
    ChapterItemStyles,
    ChapterItemBox,
    ChapterItemIconStyles,
    ChapterItemTimeStyles,
    ChapterItemDateStyles,
    ChapterItemLabelStyles,
    ChapterItemTitleStyles,
    ChapterItemTextStyles,
    ChapterItemButtonStyles,
    ChapterItemImageContent,
    ChapterItemCaption,
    ChapterItemBoxIcon,
    ChapterItemBoxTime,
} from "./styles";
import { Image } from "accessories";

const ChapterCard = props => {
    const { children, ratio, src } = props;
    return (
        <ChapterCardStyles>
            <ChapterItemStyles>
                <ChapterItemBox variant="Transparent">
                    <ChapterItemBoxIcon variant="Transparent">
                        <ChapterItemIconStyles name="Close" variant="Transparent" />
                    </ChapterItemBoxIcon>
                    <ChapterItemImageContent variant="Transparent">
                        <Image src={src} ratio={ratio} />
                    </ChapterItemImageContent>
                    <ChapterItemCaption variant="Transparent">
                        <ChapterItemBoxTime variant="Transparent">
                            <ChapterItemTimeStyles>Duración: 39:11</ChapterItemTimeStyles>
                            <ChapterItemDateStyles>
                                Publicación: MARZO 31, 2020 - 7:59
                        </ChapterItemDateStyles>
                        </ChapterItemBoxTime>
                        <ChapterItemLabelStyles>
                            TEMPORADA 1 - EPISODIO 50
                        </ChapterItemLabelStyles>
                        <ChapterItemTitleStyles variant="h2">
                            Capítulo Final: Soy Bárbara, siempre Bárbara
                        </ChapterItemTitleStyles>
                        <ChapterItemTextStyles>
                            Bárbara tiene que decidir entre irse con Félix o con Jero, ¿a quién
                            escogerá? Las historias siempre tienen un final que no es final.
                        </ChapterItemTextStyles>
                        <ChapterItemButtonStyles variant="Outline">VER MAS</ChapterItemButtonStyles>
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
