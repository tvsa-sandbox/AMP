import React, { useContext } from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "styled-components";
import Layout from "../../layout";
import socialmedia from "../../widgets/Header/social.json";

import { Footer } from "../../widgets";

const Video = props => {
    const themeContext = useContext(ThemeContext);
    const ui = themeContext.ui.name;
    return (
        <Layout
            foot={false}
            breadcrumbs={[]}
            social={socialmedia}
            uri="https://tvsa-sandbox.github.io/widgets-beta/"
            filter=""
        >
            Video
            <Footer />
        </Layout>
    );
};
Video.propTypes = {};

Video.defaultProps = {};
export default Video;
