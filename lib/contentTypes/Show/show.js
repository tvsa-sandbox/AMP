import React, { useState } from "react";
import PropTypes from "prop-types";
import { ChapterItem } from "../../items";
import { Box, Button, Info, Image } from "../../accessories";
import { PosterCard, Tabs } from "../../widgets";
import TabPane from "../../widgets/Tabs/tabpane";
import Layout from "../../layoutcv";
import { ShowGrid, PosterCardImageStyles } from "./styles";
import { PageStyles } from "../HomeVideo/styles";
import tabslinks from "../../widgets/Tabs/tabs.json";

const Show = props => {
    const { imgposter, imgitems, showTitle, channel, tags } = props;
    const [state, setState] = useState({
        clipActive: false,
        episodeActive: true,
    });
    const { clipActive, episodeActive } = state;
    const changeActive = id => {
        if (id === "clips" && clipActive) return null;
        if (id === "episodios" && episodeActive) return null;
        if (id === "episodios" && clipActive) {
            return setState({
                clipActive: false,
                episodeActive: true,
            });
        }
        if (id === "clips" && episodeActive) {
            return setState({
                clipActive: true,
                episodeActive: false,
            });
        }
        return null;
    };
    return (
        <Layout breadcrumbs={[]}>
            <PageStyles>
                <PosterCardImageStyles>
                    <Image ratio="aspectpanoramic" src={imgposter} />
                </PosterCardImageStyles>
                <PosterCard tagitems={tags} />
                <Tabs tablinks={tabslinks} func={changeActive} />
                <TabPane idtab="episodios" active={episodeActive}>
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
                <TabPane idtab="clips" active={clipActive}>
                    <ShowGrid>
                        clups
                        {/* <ChapterItem src={imgitems} chaptericon={false} isShow />
                        <ChapterItem src={imgitems} chaptericon={false} isShow />
                        <ChapterItem src={imgitems} chaptericon={false} isShow />
                        <ChapterItem src={imgitems} chaptericon={false} isShow />
                        <ChapterItem src={imgitems} chaptericon={false} isShow />
                        <ChapterItem src={imgitems} chaptericon={false} isShow />
                        <ChapterItem src={imgitems} chaptericon={false} isShow />
                        <ChapterItem src={imgitems} chaptericon={false} isShow />
                        <ChapterItem src={imgitems} chaptericon={false} isShow /> */}
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
