import React from "react";
import PropTypes from "prop-types";
import { Favorite, TabsMatch, ShowCard } from "../../widgets";
import Layout from "../../layoutcv";

const HomeCategory = props => {
    const { imgshowcard } = props;
    return (
        <Layout breadcrumbs={[]}>
            <Favorite />
            <TabsMatch />
            <ShowCard src={imgshowcard} />
        </Layout>
    );
};

HomeCategory.propTypes = {
    imgshowcard: PropTypes.shape({
        desktop: PropTypes.shape({
            srcSet: PropTypes.string,
        }),
        mobile: PropTypes.shape({
            srcSet: PropTypes.string,
        }),
    }),
};

HomeCategory.defaultProps = {
    imgshowcard: {
        desktop: {
            srcSet: "",
        },
        mobie: {
            srcSet: "",
        },
    },
};

export default HomeCategory;
