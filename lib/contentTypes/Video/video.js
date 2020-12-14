import React, { useState } from "react";
import PropTypes from "prop-types";
import Layout from "../../layoutcv";
import socialmedia from "../../widgets/Header/social.json";
import { ItemVideo, ChapterItem } from "../../items";
import { Tabs } from "../../widgets";
import TabPane from "../../widgets/Tabs/tabpane";
import { ShowGrid } from "../Show/styles";
import { PageStyles } from "./styles";

const Video = props => {
    const { vidimg, tabs, social, items } = props;
    const [state, setState] = useState({
        episodeActive: true,
        clipActive: false,
        commentActive: false,
    });
    const { clipActive, episodeActive, commentActive } = state;
    const changeActive = id => {
        if (id === "clips" && clipActive) return null;
        if (id === "episodios" && episodeActive) return null;
        if (id === "comentarios" && episodeActive) return null;
        if (id === "episodios" && (clipActive || commentActive)) {
            return setState({
                episodeActive: true,
                clipActive: false,
                commentActive: false,
            });
        }
        if (id === "clips" && (episodeActive || commentActive)) {
            return setState({
                clipActive: true,
                episodeActive: false,
                commentActive: false,
            });
        }
        if (id === "comentarios" && (episodeActive || clipActive)) {
            return setState({
                commentActive: true,
                clipActive: false,
                episodeActive: false,
            });
        }
        return null;
    };
    return (
        <Layout breadcrumbs={[]} social={socialmedia}>
            <PageStyles>
                <ItemVideo src={vidimg} social={social} />
                <Tabs tablinks={tabs} func={changeActive} />
                <TabPane idtab="episodios" active={episodeActive}>
                    <ShowGrid>
                        {items.map(item => {
                            return (
                                <ChapterItem
                                    src={vidimg}
                                    chaptericon={false}
                                    isShow
                                    key={item.id}
                                />
                            );
                        })}
                    </ShowGrid>
                </TabPane>
                <TabPane idtab="clips" active={clipActive}>
                    <ShowGrid>
                        {items.map(item => {
                            return (
                                <ChapterItem
                                    src={vidimg}
                                    chaptericon={false}
                                    isShow
                                    key={item.id}
                                />
                            );
                        })}
                    </ShowGrid>
                </TabPane>
                <TabPane idtab="comentariosrios" active={commentActive}>
                    comentariosrios
                </TabPane>
            </PageStyles>
        </Layout>
    );
};
Video.propTypes = {
    vidimg: PropTypes.shape({}),
    tabs: PropTypes.arrayOf(PropTypes.shape({})),
    social: PropTypes.arrayOf(PropTypes.shape({})),
    items: PropTypes.arrayOf(PropTypes.shape({})),
};

Video.defaultProps = {
    vidimg: {},
    tabs: [],
    social: [],
    items: [
        {
            id: 0,
        },
        {
            id: 1,
        },
        {
            id: 2,
        },
        {
            id: 3,
        },
        {
            id: 4,
        },
    ],
};
export default Video;
