import React from "react";
import PropTypes from "prop-types";
import Layout from "../../layoutcv";
import socialmedia from "../../widgets/Header/social.json";

const Video = props => {
    return (
        <Layout breadcrumbs={[]} social={socialmedia}>
            Item Video
            <div>--tabs a continuacion | clips | comentarios</div>
            <div>chaperitem 4| chaperitem 4 | espacio de comments</div>
        </Layout>
    );
};
Video.propTypes = {};

Video.defaultProps = {};
export default Video;
