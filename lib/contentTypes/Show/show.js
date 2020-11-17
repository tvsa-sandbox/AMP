import React from "react";
import PropTypes from "prop-types";
import { ChapterItem } from "../../items";
import { PosterCard, Tabs } from "../../widgets";
import Layout from "../../layoutcv";
import { ShowGrid } from "./styles";

const Show = props => {
    const { imgposter, imgitems } = props;
    return (
        <Layout breadcrumbs={[]}>
            <PosterCard src={imgposter} />
            <Tabs />
            <ShowGrid>
                <ChapterItem src={imgitems} />
                <ChapterItem src={imgitems} />
                <ChapterItem src={imgitems} />
                <ChapterItem src={imgitems} />
                <ChapterItem src={imgitems} />
                <ChapterItem src={imgitems} />
                <ChapterItem src={imgitems} />
                <ChapterItem src={imgitems} />
                <ChapterItem src={imgitems} />
            </ShowGrid>
        </Layout>
    );
};

Show.propTypes = {
    imgposter: PropTypes.shape({
        desktop: PropTypes.shape({
            srcSet: PropTypes.string,
        }),
        mobile: PropTypes.shape({
            srcSet: PropTypes.string,
        }),
    }),
};

Show.defaultProps = {
    imgshowcard: {
        desktop: {
            srcSet: "",
        },
        mobie: {
            srcSet: "",
        },
    },
};

export default Show;
