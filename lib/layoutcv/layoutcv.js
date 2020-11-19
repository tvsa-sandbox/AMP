import React from "react";
import PropTypes from "prop-types";
import { HeaderAMP, FooterAMP } from "../widgets";
import { Main, GridLayout } from "../layout/styles";

const LayoutCv = props => {
    const { breadcrumbs, children, nav, foot, social, uri } = props;
    return (
        <GridLayout {...props}>
            {nav ? (
                <HeaderAMP breadcrumbs={breadcrumbs} uri={uri} social={social} size={200} />
            ) : null}
            <Main>{children}</Main>
            {foot ? (
                <FooterAMP footertext="Derechos Reservados @ Televisa S.A. de C.V. y el logo de Televisa son marcas registradas" />
            ) : null}
        </GridLayout>
    );
};

LayoutCv.propTypes = {
    breadcrumbs: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    nav: PropTypes.bool,
    foot: PropTypes.bool,
    children: PropTypes.node,
    social: PropTypes.arrayOf(PropTypes.shape({})),
    uri: PropTypes.string,
};

LayoutCv.defaultProps = {
    nav: true,
    foot: true,
    children: null,
    social: [],
    uri: "",
};

export default LayoutCv;
