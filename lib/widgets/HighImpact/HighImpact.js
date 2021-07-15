import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Image from "../../accessories/Image";
import {
    HighImpactItemStyles,
    HighImpactItemBox,
    HighImpactItemTimeStyles,
    HighImpactItemTimeBox,
    HighImpactItemLabelStyles,
    HighImpactItemTitleStyles,
    HighImpactItemTextStyles,
    HighImpactItemImageContent,
    HighImpactItemCaption,
    HighImpactItemLiveBox,
} from "../../items/HighImpactItem/styles";
import HighImpactContainer from "./styles";
import {
    NewsItemStyles,
    NewsItemBoxStyles,
    NewsItemImageStyles,
    NewsItemTitleStyles,
    NewsItemLabelStyles,
    NewsItemSectionStyles,
    NewsItemBoxLabelActive,
    NewsItemBoxLabel,
    NewsItemCaption,
} from "../../items/NewsItem/styles";
import {NewsStyles} from "../News/styles";

const HighImpact= props => {
    const {
        ratio,
        src,
        datas,
        news,
    } = props;
    return (
<HighImpactContainer variant="Transparent">
<HighImpactItemStyles>
{datas.map(data=> {
            return (
                <Fragment key={data.id}>
                <HighImpactItemBox variant="Transparent">
                    <HighImpactItemImageContent variant="Transparent">
                        <HighImpactItemLiveBox>
                        <HighImpactItemTimeStyles>{data.time}</HighImpactItemTimeStyles>
                        </HighImpactItemLiveBox>
                        <Image src={src} ratio={ratio} />
                    </HighImpactItemImageContent>
                    <HighImpactItemCaption variant="Transparent">
                                <HighImpactItemLabelStyles>
                                    {data.label}
                                </HighImpactItemLabelStyles>
                        <HighImpactItemTitleStyles variant="h2">{data.title}</HighImpactItemTitleStyles>
                        <HighImpactItemTextStyles>{data.text}</HighImpactItemTextStyles>
                    </HighImpactItemCaption>
                </HighImpactItemBox>
                </Fragment >
            );
        })}
            </HighImpactItemStyles>
            <NewsStyles>
            <NewsItemStyles href="./">
            <NewsItemBoxStyles variant="Transparent">
                <NewsItemBoxLabelActive variant="Transparent">
            <NewsItemLabelStyles>En Vivo</NewsItemLabelStyles>
            </ NewsItemBoxLabelActive>
                <NewsItemImageStyles ratio={ratio} src={src} />
            </NewsItemBoxStyles>
            <NewsItemCaption variant="Transparent">
                <NewsItemSectionStyles>Liga Mx</NewsItemSectionStyles>
                <NewsItemTitleStyles variant="h3">Así ha sido la cumbre deLaporta y Koeman para</NewsItemTitleStyles>
            </NewsItemCaption>
        </NewsItemStyles>
            {news.map(items=> {
                return (
                    <Fragment key={items.id}>
            <NewsItemStyles href="./">
            <NewsItemBoxStyles variant="Transparent">
                <NewsItemBoxLabel variant="Transparent">
            <NewsItemLabelStyles>{items.format}</NewsItemLabelStyles>
            </ NewsItemBoxLabel>
                <NewsItemImageStyles ratio={ratio} src={src} />
            </NewsItemBoxStyles>
            <NewsItemCaption variant="Transparent">
                <NewsItemSectionStyles>{items.label}</NewsItemSectionStyles>
                <NewsItemTitleStyles variant="h3">{items.title}</NewsItemTitleStyles>
            </NewsItemCaption>
        </NewsItemStyles>
            </Fragment >
            );
        })}
        </NewsStyles>
            </HighImpactContainer>
    );
};

HighImpact.propTypes = {
    children: PropTypes.node,
    src: PropTypes.shape({}),
    ratio: PropTypes.string,
    text: PropTypes.string,
    title: PropTypes.string,
    label: PropTypes.string,
    date: PropTypes.string,
    time: PropTypes.string,
};

HighImpact.defaultProps = {
    children: null,
    ratio: "aspect16x9",
    src: {},
    title: "Pumas y América se juegan su pase a la liguilla, en la última Jornada",
    label: "Eurocopa",
    text: "En un duelo que pone en juego más que solo 3 puntos, se juega el honor ",
    time: "34:12",
};

export default HighImpact;
