import React, { useContext } from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "styled-components";
import { Header, HeaderTUDN, Footer } from "../widgets";
import { Nav, Main, GridLayout } from "./styles";

const Layout = props => {
    const { breadcrumbs, filter, children, nav, foot, social, uri } = props;
    const themeContext = useContext(ThemeContext);
    return (
        <GridLayout {...props}>
            {nav ? (
                <Nav>
                    {themeContext.ui.name === "tudn" ? (
                        <HeaderTUDN
                            breadcrumbs={breadcrumbs}
                            uri={uri}
                            social={social}
                            filter={filter}
                        />
                    ) : (
                        <Header
                            breadcrumbs={breadcrumbs}
                            uri={uri}
                            social={social}
                            filter={filter}
                        />
                    )}
                    {/* <Header breadcrumbs={breadcrumbs} social={social} filter={filter} /> */}
                </Nav>
            ) : null}
            <Main>{children}</Main>
            {foot ? <Footer /> : null}
        </GridLayout>
    );
};

Layout.propTypes = {
    breadcrumbs: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    nav: PropTypes.bool,
    foot: PropTypes.bool,
    filter: PropTypes.string,
    children: PropTypes.node,
    social: PropTypes.arrayOf(PropTypes.shape({})),
    uri: PropTypes.string,
};

Layout.defaultProps = {
    filter: "",
    nav: true,
    foot: true,
    children: null,
    social: [],
    uri: "",
};

export default Layout;
