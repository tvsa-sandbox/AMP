import React, { useContext } from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "styled-components";
import { HeaderAMP, HeaderTUDNAMP } from "../widgets";
import { Nav, Main, GridLayout } from "./styles";
import FooterAMP from "../widgets/Footer/FooterAMP";

const LayoutPWA = props => {
    const { breadcrumbs, filter, children, nav, foot, social, uri } = props;
    const themeContext = useContext(ThemeContext);
    const ui = themeContext.ui.name;
    return (
        <GridLayout {...props}>
            {nav ? (
                <Nav>
                    {ui === "tudn" ? (
                        <HeaderTUDNAMP
                            breadcrumbs={breadcrumbs}
                            uri={uri}
                            social={social}
                            filter={filter}
                        />
                    ) : (
                        <HeaderAMP
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
            {foot ? <FooterAMP /> : null}
        </GridLayout>
    );
};

LayoutPWA.propTypes = {
    breadcrumbs: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    nav: PropTypes.bool,
    foot: PropTypes.bool,
    filter: PropTypes.string,
    children: PropTypes.node,
    social: PropTypes.arrayOf(PropTypes.shape({})),
};

LayoutPWA.defaultProps = {
    filter: "",
    nav: true,
    foot: true,
    children: null,
    social: [],
};

export default LayoutPWA;
