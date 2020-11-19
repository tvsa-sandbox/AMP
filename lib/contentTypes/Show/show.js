import React from "react";
import PropTypes from "prop-types";
import { ChapterItem } from "../../items";
import { Box, Button, Info, Image } from "../../accessories";
import { PosterCard, Tabs } from "../../widgets";
import TabPane from "../../widgets/Tabs/tabpane";
import Layout from "../../layoutcv";
import { ShowGrid, PosterCardImageStyles } from "./styles";
import { PageStyles } from "../HomeVideo/styles";

const Show = props => {
    const { imgposter, imgitems, showTitle, channel } = props;
    return (
        <Layout breadcrumbs={[]}>
            <PageStyles>
                <PosterCardImageStyles>
                    <Image ratio="aspectpanoramic" src={imgposter} />
                </PosterCardImageStyles>
                <PosterCard />
                <Tabs />
                <TabPane idtab="episodios" active>
                    <ShowGrid>
                        <ChapterItem src={imgitems} chaptericon={false} isShow />
                        <ChapterItem src={imgitems} chaptericon={false} isShow />
                        <ChapterItem src={imgitems} chaptericon={false} isShow />
                        <ChapterItem src={imgitems} chaptericon={false} isShow />
                        <ChapterItem src={imgitems} chaptericon={false} isShow />
                        <ChapterItem src={imgitems} chaptericon={false} isShow />
                        <ChapterItem src={imgitems} chaptericon={false} isShow />
                        <ChapterItem src={imgitems} chaptericon={false} isShow />
                        <ChapterItem src={imgitems} chaptericon={false} isShow />
                    </ShowGrid>
                </TabPane>
                <TabPane idtab="telenovelas">
                    <ShowGrid>
                        <ChapterItem src={imgitems} chaptericon={false} isShow />
                        <ChapterItem src={imgitems} chaptericon={false} isShow />
                        <ChapterItem src={imgitems} chaptericon={false} isShow />
                        <ChapterItem src={imgitems} chaptericon={false} isShow />
                        <ChapterItem src={imgitems} chaptericon={false} isShow />
                        <ChapterItem src={imgitems} chaptericon={false} isShow />
                        <ChapterItem src={imgitems} chaptericon={false} isShow />
                        <ChapterItem src={imgitems} chaptericon={false} isShow />
                        <ChapterItem src={imgitems} chaptericon={false} isShow />
                    </ShowGrid>
                </TabPane>
                <Box variant="Flex" align="center">
                    <Button variant="Outline" aria-label="mas contenido">
                        <Info>
                            Más Contenido de {showTitle} en {channel}
                        </Info>
                    </Button>
                </Box>
            </PageStyles>
        </Layout>
    );
};

Show.propTypes = {
    showTitle: PropTypes.string,
    channel: PropTypes.string,
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
    showTitle: "El Dragón",
    channel: "Las Estrellas",
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
